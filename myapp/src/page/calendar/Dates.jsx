import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";

import shortid from "shortid";

import DateItem from "./common/DateItem";

const Dates = ({ day, today }) => {
  const [allDate, setAllDate] = useState({});
  const [currentDate, setCurrentDate] = useState(
    `${day.year}-${day.month}-${today.getDate()}`
  );

  useEffect(() => {
    const firstDay = parseInt(new Date(day.year, day.month - 1, 2).getDay());
    const lastDate = parseInt(new Date(day.year, day.month, 0).getDate());

    const num_dates = [];

    for (let i = 1; i < firstDay + lastDate; i++) {
      if (i < firstDay) num_dates.push("X");
      if (i >= firstDay && i <= firstDay + lastDate)
        num_dates.push(i - firstDay + 1);
    }

    let j = 42 - num_dates.length;
    while (j > 0) {
      num_dates.push("X");
      j--;
    }

    const slice_dates = [];

    for (let k = 0; k < num_dates.length; k++) {
      if ((k + 7) % 7 === 0) slice_dates.push(num_dates.slice(k, k + 7));
    }

    setAllDate(slice_dates);
  }, [day]);

  return (
    <View style={styles.main}>
      {allDate.length === 0 && <ActivityIndicator />}
      {allDate.length > 0 && (
        <View style={styles.numDays}>
          {allDate.map((dates) => (
            <DateItem
              key={shortid.generate()}
              day={day}
              today={today}
              dates={dates}
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
  },
  numDays: { flex: 1 },
});

export default Dates;
