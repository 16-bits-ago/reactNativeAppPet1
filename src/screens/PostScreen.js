import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { THEME } from '../theme';

// eslint-disable-next-line no-empty-pattern
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
    headerStyle: {
        backgroundColor: THEME.DANGER_COLOR
    },
    headerTintColor: '#fff'
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  