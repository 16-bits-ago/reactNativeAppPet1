import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>About Screen</Text>
        <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  