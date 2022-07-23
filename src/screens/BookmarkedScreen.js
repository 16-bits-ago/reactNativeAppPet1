import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

export const BookmarkedScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>Bookmarked Screen</Text>
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
  