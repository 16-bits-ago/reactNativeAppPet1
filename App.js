import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';
import { NativeBaseProvider } from 'native-base';

export default function App() {

    const [isReady, setIsReady] = useState(false);
  
    if (!isReady) {
        return (
            <AppLoading 
                startAsync={bootstrap}
                onFinish={() => setIsReady(true)}
                onError={err => console.log(err)}
            />
        );
    }

    return (
        <NativeBaseProvider>
            <AppNavigation />
        </NativeBaseProvider>
    );

    /* return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on y111111our app!</Text>
      <StatusBar style="auto" />
    </View>
  ); */
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
