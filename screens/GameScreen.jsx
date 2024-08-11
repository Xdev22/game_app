import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import Colors from "../utils/colors";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";
import GuessLogItem from "../components/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;
const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

export const gameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess == userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("dont lie", "You Know that is wrong...", [
        {
          text: "sorry",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Oppenent's Guess</Title>
      <View
        style={{
          backgroundColor: Colors.primary500,
          marginTop: 38,
          borderRadius: 6,
          padding: 34,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={styles.currentGuess}>{currentGuess}</Text>
        </View>
        <View
          style={{
            alignContent: "center",

            justifyContent: "center",
          }}
        >
          <InstructionText>Higher or Lower ?</InstructionText>

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                <Ionicons name="remove-outline" size={18} />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => nextGuessHandler("greater")}>
                <Ionicons name="add" size={18} />
              </PrimaryButton>
            </View>
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => {
              return (
                <GuessLogItem
                  roundNumber={guessRoundsListLength - itemData.index}
                  guess={itemData.item}
                />
              );
            }}
            keyExtractor={(item) => item}
            inverted
          ></FlatList>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  currentGuessContainer: {
    backgroundColor: Colors.secondary500,
    padding: 12,
    marginVertical: 20,
    borderRadius: 6,
  },
  currentGuess: {
    textAlign: "center",
    fontSize: 52,
    fontFamily: "open-sans-bold",
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    // flex: 1,
    padding: 16,
  },
});

export default gameScreen;
