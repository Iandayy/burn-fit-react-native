import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import shortid from "shortid";

const DateItem = ({ day, today, dates, currentDate, setCurrentDate }) => {
  return (
    <View style={styles.numDay}>
      {dates.map((date) => (
        <TouchableOpacity
          style={{
            ...styles.numBtn,
            borderWidth:
              `${day.year}-${day.month}-${date}` === currentDate && 1,
            borderRadius: 20,
            borderColor:
              `${day.year}-${day.month}-${date}` === currentDate && "#0077b6",
          }}
          key={shortid.generate()}
          onPress={() => setCurrentDate(`${day.year}-${day.month}-${date}`)}
        >
          <Text
            style={{
              ...styles.numText,
              fontWeight:
                `${day.year}-${day.month}-${date}` === currentDate
                  ? "800"
                  : date === today.getDate() && "800",
              color: date === "X" && "gray",
            }}
            key={shortid.generate()}
          >
            {date}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  numDay: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  numBtn: {},
  numText: {
    color: "black",
    padding: 10,
  },
});

export default DateItem;
