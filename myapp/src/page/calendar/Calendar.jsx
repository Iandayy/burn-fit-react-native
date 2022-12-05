import { StyleSheet, View } from "react-native";
import { useState } from "react";

import Month from "./Month";
import Week from "./Week";
import Dates from "./Dates";

const Calendar = () => {
  const today = new Date();

  const [day, setDay] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  });

  return (
    <View style={styles.main}>
      <Month day={day} setDay={setDay} />
      <Week />
      <Dates day={day} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 5,
  },
});

export default Calendar;
