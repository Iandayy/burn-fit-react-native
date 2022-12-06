import { StyleSheet, Text, View } from "react-native";

const Library = () => {
  return (
    <View style={styles.main}>
      <Text>Library</Text>
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

export default Library;
