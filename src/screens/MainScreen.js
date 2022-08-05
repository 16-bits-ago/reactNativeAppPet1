import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DATA } from '../data';
import { Post } from '../components/Post';

/* MainScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}; */

export const MainScreen = ({ navigation }) => {

    const openPostHandler = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date });
    };

    return (
        <View style={styles.wrapper}>
            {/* {
                DATA.map((el, i) => (
                    <View key={i}>
                        {
                            el.date &&
                            <>
                                <Text>
                                    {el.text}
                                </Text>
                            </>
                            
                        } 
                    </View>
                ))
            } */}
            <FlatList 
                data={DATA} 
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={openPostHandler}/>}
            />
            <StatusBar style="auto" />
        </View>
    );
};

MainScreen.navigationOptions ={
    headerTitle: 'Мой блог',
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
});
  