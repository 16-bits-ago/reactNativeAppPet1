import React, { useState } from 'react';
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
}
