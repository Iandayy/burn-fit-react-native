import { StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  FontAwesome5,
  SimpleLineIcons,
  Entypo,
} from "@expo/vector-icons";

import Home from "../page/Home";
import Calendar from "../page/Calendar";
import Library from "../page/Library";
import MyPage from "../page/MyPage";

const BottomTab = createBottomTabNavigator();
function TapBar() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "HOME",
          tabBarActiveTintColor: "black",
          headerShown: false,
          tabBarIcon: () => <Entypo name="home" size={15} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: "CALENDAR",
          tabBarActiveTintColor: "black",
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="calendar" size={15} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: "LIBRARY",
          tabBarActiveTintColor: "black",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="dumbbell" size={15} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          tabBarLabel: "MY PAGE",
          tabBarActiveTintColor: "black",
          headerShown: false,
          tabBarIcon: () => (
            <SimpleLineIcons name="user" size={15} color="black" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default TapBar;
