import { StyleSheet, Text, View } from "react-native";
import Colors from "../utils/colors";

export const Title = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: Colors.primary500,
    padding: 12,
    // borderRadius: 6,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: Colors.secondary500,
    fontFamily: "open-sans-bold",
  },
});

export default Title;
