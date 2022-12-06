import { StyleSheet, Text, View } from "react-native";

const MyPage = () => {
  return (
    <View style={styles.main}>
      <Text>MyPage</Text>
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

export default MyPage;
