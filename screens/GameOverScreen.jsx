import { useState } from "react";
import { Alert, Image, StyleSheet, TextInput, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utils/colors";
import Title from "../components/Title";

export const StartGameScreen = ({
  userNumber,
  roundsNumber,
  onStartNewGame,
}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER ! </Title>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightLight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.hightLight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 300,
    borderWidth: 3,
    borderColor: Colors.setEnteredNumber,
    overflow: "hidden",
    marginHorizontal: "auto",
    marginVertical: 36,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  hightLight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

export default StartGameScreen;
