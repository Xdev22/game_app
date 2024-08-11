import { useState } from "react";
import { Alert, StyleSheet, TextInput, View, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utils/colors";
import Title from "../components/Title";

export const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    let chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number !",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "cancel", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(enteredNumber);
  };

  return (
    <>
      <Title>Guess my number</Title>
      <View style={styles.inputContainer}>
        <Text
          style={{
            color: Colors.secondary500,
            fontSize: 28,
            fontFamily: "open-sans",
          }}
        >
          Enter a number
        </Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    backgroundColor: Colors.primary500,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
