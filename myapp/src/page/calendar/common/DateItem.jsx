import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import shortid from "shortid";

const DateItem = ({ day, allDate, currentDate, setCurrentDate }) => {
  return (
    <View style={styles.numDay}>
      {allDate.map((date) => (
        <TouchableOpacity
          style={styles.numBtn}
          key={shortid.generate()}
          onPress={() => setCurrentDate(`${day.year}-${day.month}-${date}`)}
        >
          <Text
            style={{
              ...styles.numText,
              fontWeight:
                `${day.year}-${day.month}-${date}` === currentDate && "800",
              color: date === "X" && "gray",
              borderWidth:
                `${day.year}-${day.month}-${date}` === currentDate && 1,
              borderRadius: 10,
              borderColor:
                `${day.year}-${day.month}-${date}` === currentDate && "#0077b6",
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
