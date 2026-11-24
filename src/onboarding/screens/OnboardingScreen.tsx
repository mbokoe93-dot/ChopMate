import React from "react";
import { styles } from "../styles/onboardingStyles.styles";
import { View, Text, StyleSheet } from "react-native";

export default function OnboardingScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ChopMate</Text>
      <Text style={styles.subtitle}>
        Your food journey starts here.
      </Text>
    </View>
  );
}