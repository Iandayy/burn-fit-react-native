import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import { useState, useEffect } from "react";

const Dates = ({ day }) => {
  const [allDate, setAllDate] = useState({
    week1: [],
    week2: [],
    week3: [],
    week4: [],
    week5: [],
    week6: [],
  });

  useEffect(() => {
    const firstDay = parseInt(new Date(day.year, day.month - 1, 2).getDay());
    const lastDate = parseInt(new Date(day.year, day.month, 0).getDate());

    for (let i = 1; i < firstDay + lastDate; i++) {
      if (i < firstDay)
        setAllDate({ ...allDate, week1: [...allDate.week1].push("") });
      if (i >= firstDay && i <= 7)
        setAllDate({
          ...allDate,
          week1: [...allDate.week1].push(i - firstDay + 1),
        });
      if (i > 7 && i <= 14)
        setAllDate({
          ...allDate,
          week2: [...allDate.week2].push(i - firstDay + 1),
        });
      if (i > 14 && i <= 21)
        setAllDate({
          ...allDate,
          week3: [...allDate.week3].push(i - firstDay + 1),
        });
      if (i > 21 && i <= 28)
        setAllDate({
          ...allDate,
          week4: [...allDate.week4].push(i - firstDay + 1),
        });
      if (i > 28 && i <= 35)
        setAllDate({
          ...allDate,
          week5: [...allDate.week5].push(i - firstDay + 1),
        });
      if (i > 35 && i <= firstDay + lastDate)
        setAllDate({
          ...allDate,
          week6: [...allDate.week6].push(i - firstDay + 1),
        });
    }

    let j = 7 - allDate.week5.length;
    while (j > 0) {
      setAllDate({
        ...allDate,
        week5: [...allDate.week5].push(""),
      });
      j--;
    }

    let k = 7 - allDate.week6.length;
    while (k > 0) {
      setAllDate({
        ...allDate,
        week6: [...allDate.week6].push(""),
      });
      k--;
    }
  }, [day]);

  console.log(allDate);

  return <View style={styles.numdays}></View>;
};

const styles = StyleSheet.create({
  numdays: {
    flex: 1,
  },
  numday: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  numText: {
    color: "black",
    textAlign: "center",
  },
});

export default Dates;
