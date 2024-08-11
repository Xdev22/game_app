import { Text } from "react-native";
import Colors from "../utils/colors";

const InstructionText = ({ children }) => {
  return (
    <Text
      style={{
        textAlign: "center",
        color: Colors.secondary500,
        fontSize: 24,
        fontFamily: "open-sans",
      }}
    >
      {children}
    </Text>
  );
};

export default InstructionText;
