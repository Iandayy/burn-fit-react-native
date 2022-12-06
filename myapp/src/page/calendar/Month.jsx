import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const Month = ({ day, setDay }) => {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  // 월 감소 핸들러
  const decrementHandler = () => {
    if (day.month > 1) setDay({ ...day, month: day.month - 1 });
    else setDay({ year: day.year - 1, month: 12 });
  };
  // 월 증가 핸들러
  const incrementHandler = () => {
    if (day.month < 12) setDay({ ...day, month: day.month + 1 });
    else setDay({ year: day.year + 1, month: 1 });
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={decrementHandler}>
        <AntDesign name="left" size={20} color="#00b4d8" />
      </TouchableOpacity>
      <View style={styles.currentDay}>
        <Text style={{ ...styles.dayText, marginRight: 5 }}>
          {months[day.month]}
        </Text>
        <Text style={styles.dayText}>{day.year}</Text>
      </View>
      <TouchableOpacity onPress={incrementHandler}>
        <AntDesign name="right" size={20} color="#00b4d8" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    marginHorizontal: 15,
  },
  currentDay: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Month;
