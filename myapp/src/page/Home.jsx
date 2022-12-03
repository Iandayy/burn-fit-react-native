import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.main}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
