import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>Home</Text>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.btn}>
          <Entypo name="home" size={15} color="black" />
          <Text style={styles.btnText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <SimpleLineIcons name="calendar" size={15} color="black" />
          <Text style={styles.btnText}>CALENDAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome5 name="dumbbell" size={15} color="black" />
          <Text style={styles.btnText}>LIBRARY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <SimpleLineIcons name="user" size={15} color="black" />
          <Text style={styles.btnText}>MY PAGE</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: { flex: 10, justifyContent: "center", alignItems: "center" },
  nav: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderTopWidth: 1,
    borderTopColor: "#e9ecef",
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 10,
    marginTop: 5,
  },
});
