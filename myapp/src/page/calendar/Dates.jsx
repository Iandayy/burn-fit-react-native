import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { useState, useEffect } from "react";
import shortid from "shortid";

const Dates = ({ day, today }) => {
  const [allDate, setAllDate] = useState({});
  const [currentDate, setCurrentDate] = useState(today.getDate());

  useEffect(() => {
    const firstDay = parseInt(new Date(day.year, day.month - 1, 2).getDay());
    const lastDate = parseInt(new Date(day.year, day.month, 0).getDate());

    const num_dates = {
      week1: [],
      week2: [],
      week3: [],
      week4: [],
      week5: [],
      week6: [],
    };

    for (let i = 1; i < firstDay + lastDate; i++) {
      if (i < firstDay) num_dates.week1.push("X");
      if (i >= firstDay && i <= 7) num_dates.week1.push(i - firstDay + 1);
      if (i > 7 && i <= 14) num_dates.week2.push(i - firstDay + 1);
      if (i > 14 && i <= 21) num_dates.week3.push(i - firstDay + 1);
      if (i > 21 && i <= 28) num_dates.week4.push(i - firstDay + 1);
      if (i > 28 && i <= 35) num_dates.week5.push(i - firstDay + 1);
      if (i > 35 && i <= firstDay + lastDate)
        num_dates.week6.push(i - firstDay + 1);
    }

    let j = 7 - num_dates.week5.length;
    while (j > 0) {
      num_dates.week5.push("X");
      j--;
    }

    let k = 7 - num_dates.week6.length;
    while (k > 0) {
      num_dates.week6.push("X");
      k--;
    }

    setAllDate(num_dates);
  }, [day]);

  return (
    <View style={styles.main}>
      {Object.keys(allDate).length === 0 && <ActivityIndicator />}
      {Object.keys(allDate).length > 0 && (
        <View style={styles.numdays}>
          <View style={styles.numday}>
            {allDate.week1.map((date) => (
              <TouchableOpacity
                key={shortid.generate()}
                onPress={() =>
                  setCurrentDate(`${day.year}-${day.month}-week1-${date}`)
                }
              >
                <Text
                  style={{
                    ...styles.numText,
                    fontWeight:
                      `${day.year}-${day.month}-week1-${date}` ===
                        currentDate && "800",
                    color: date === "X" && "gray",
                  }}
                  key={shortid.generate()}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numday}>
            {allDate.week2.map((date) => (
              <TouchableOpacity
                key={shortid.generate()}
                onPress={() =>
                  setCurrentDate(`${day.year}-${day.month}-week2-${date}`)
                }
              >
                <Text
                  style={{
                    ...styles.numText,
                    fontWeight:
                      `${day.year}-${day.month}-week2-${date}` ===
                        currentDate && "800",
                    color: date === "X" && "gray",
                  }}
                  key={shortid.generate()}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numday}>
            {allDate.week3.map((date) => (
              <TouchableOpacity
                key={shortid.generate()}
                onPress={() =>
                  setCurrentDate(`${day.year}-${day.month}-week3-${date}`)
                }
              >
                <Text
                  style={{
                    ...styles.numText,
                    fontWeight:
                      `${day.year}-${day.month}-week3-${date}` ===
                        currentDate && "800",
                    color: date === "X" && "gray",
                  }}
                  key={shortid.generate()}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numday}>
            {allDate.week4.map((date) => (
              <TouchableOpacity
                key={shortid.generate()}
                onPress={() =>
                  setCurrentDate(`${day.year}-${day.month}-week4-${date}`)
                }
              >
                <Text
                  style={{
                    ...styles.numText,
                    fontWeight:
                      `${day.year}-${day.month}-week4-${date}` ===
                        currentDate && "800",
                    color: date === "X" && "gray",
                  }}
                  key={shortid.generate()}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numday}>
            {allDate.week5.map((date) => (
              <TouchableOpacity
                key={shortid.generate()}
                onPress={() =>
                  setCurrentDate(`${day.year}-${day.month}-week5-${date}`)
                }
              >
                <Text
                  style={{
                    ...styles.numText,
                    fontWeight:
                      `${day.year}-${day.month}-week5-${date}` ===
                        currentDate && "800",
                    color: date === "X" && "gray",
                  }}
                  key={shortid.generate()}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numday}>
            {allDate.week6.map((date) => (
              <TouchableOpacity
                key={shortid.generate()}
                onPress={() =>
                  setCurrentDate(`${day.year}-${day.month}-week6-${date}`)
                }
              >
                <Text
                  style={{
                    ...styles.numText,
                    fontWeight:
                      `${day.year}-${day.month}-week6-${date}` ===
                        currentDate && "800",
                    color: date === "X" && "gray",
                  }}
                  key={shortid.generate()}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1 },
  numdays: {
    flex: 1,
  },
  numday: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  numBtn: { borderWidth: 1, borderRadius: 20, padding: 5 },
  numText: {
    color: "black",
    textAlign: "center",
    padding: 5,
  },
});

export default Dates;
