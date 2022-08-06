import React from 'react';
import { View, StyleSheet, Image, Text, Button, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { THEME } from '../theme';
import { DATA } from '../data';

// eslint-disable-next-line no-empty-pattern
export const PostScreen = ({ navigation }) => {

    const postId = navigation.getParam('postId');

    const post = DATA.find(p => p.id === postId); // на каждой итерации мы получаем объект p - post и у него проверяем поле id, если оно совпадает с константой postId, то это наш исходный пост.

    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы точно хотите удалить пост?',
            [
                {
                    text: 'Отменить',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { 
                    text: 'Удалить', 
                    onPress: () => console.log('OK Pressed'),
                    style: 'destructive'
                }
            ]
        );
    };

    return (
        <View style={{ padding: 10 }}>
            <Image source={{ uri: post.img }} style={styles.image}/>
            <ScrollView style={styles.textWrap}>
                <Text style={styles.title}>
                    {post.text}
                </Text>
            </ScrollView>
            <Button title='Delete' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
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
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10,
        maxHeight: 200,

    },
    title: {
        fontFamily: 'open-regular'
    }
});
  