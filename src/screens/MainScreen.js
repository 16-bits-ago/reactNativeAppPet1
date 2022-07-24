import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/* MainScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}; */

export const MainScreen = ({ navigation }) => {

    const goToPost = () => {
        navigation.navigate('Post');
    };

    return (
        <View style={styles.center}>
            <StatusBar style="auto" />
            <Text>Main Screen</Text>
            <Button title='Go To Post' onPress={goToPost}/>
        </View>
    );
};

MainScreen.navigationOptions ={
    headerTitle: 'Мой блог',
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  