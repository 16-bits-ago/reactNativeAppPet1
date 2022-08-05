import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { THEME } from '../theme';

// eslint-disable-next-line no-empty-pattern
export const PostScreen = ({ navigation }) => {

    const postId = navigation.getParam('postId');

    return (
        <View style={styles.center}>
            <Text>Post Screen № {postId}</Text>
            <StatusBar style="auto" />
        </View>
    );
};

PostScreen.navigationOptions = ({ navigation }) => {
    const postId = navigation.getParam('postId');
    const date = navigation.getParam('date');
    return { 
        headerTitle: `Пост номер ${postId} был создан ${new Date(date).toLocaleDateString()}`,
    };

    
    /* headerStyle: {
        backgroundColor: THEME.DANGER_COLOR
    },
    headerTintColor: '#fff' */
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  