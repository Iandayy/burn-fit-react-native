import { StyleSheet, Text, View } from "react-native";

const Week = () => {
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <View style={styles.week}>
      {weeks.map((week) => (
        <Text
          style={{
            ...styles.weekText,
            color: week === "Sun" ? "red" : week === "Sat" ? "#0077b6" : "gray",
          }}
          key={week}
        >
          {week}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  week: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weekText: {},
});

export default Week;
