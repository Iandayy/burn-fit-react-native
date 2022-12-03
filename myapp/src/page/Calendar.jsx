import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

import { AntDesign } from "@expo/vector-icons";

const Calendar = () => {
  const today = new Date();

  const [day, setDay] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [allDay, setAllDay] = useState([]);

  useEffect(() => {
    const firstDay = parseInt(new Date(day.year, day.month, 1).getDay());
    const lastDay = parseInt(new Date(day.year, day.month + 1, 0).getDate());

    const days = [];

    for (let i = firstDay; i <= lastDay; i++) {
      days.push(i);
    }

    setAllDay(days);
  }, [day]);

  console.log(allDay);

  const decrementHandler = () => {
    if (day.month > 1) setDay({ ...day, month: day.month - 1 });
    if (day.month === 1) setDay({ year: day.year - 1, month: 12 });
  };

  const incrementHandler = () => {
    if (day.month < 12) setDay({ ...day, month: day.month + 1 });
    if (day.month === 12) setDay({ year: day.year + 1, month: 1 });
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity onPress={decrementHandler}>
          <AntDesign name="left" size={24} color="skyblue" />
        </TouchableOpacity>
        <View style={styles.currentDay}>
          <Text style={{ ...styles.dayText, marginRight: 5 }}>{day.month}</Text>
          <Text style={styles.dayText}>{day.year}</Text>
        </View>
        <TouchableOpacity onPress={incrementHandler}>
          <AntDesign name="right" size={24} color="skyblue" />
        </TouchableOpacity>
      </View>
      <View style={styles.week}>
        <Text>Sun</Text>
        <Text>Mon</Text>
        <Text>Tue</Text>
        <Text>Wed</Text>
        <Text>Thu</Text>
        <Text>Fri</Text>
        <Text>Sat</Text>
      </View>
      <View>
        {allDay.map((day) => (
          <Text key={Math.random() * 1000 + 1}>{day}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 25,
  },
  currentDay: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dayText: {
    fontSize: 15,
    fontWeight: "500",
  },
  week: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Calendar;
