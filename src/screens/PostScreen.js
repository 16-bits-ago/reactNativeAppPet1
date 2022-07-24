import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const PostScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>Post Screen</Text>
            <StatusBar style="auto" />
        </View>
    );
};

PostScreen.navigationOptions ={
    headerTitle: 'Пост номер 42',
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  