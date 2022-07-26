import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';
import { Platform } from 'react-native';

const PostNavigator = createStackNavigator(
    {
        Main: MainScreen,
        Post: {
            screen: PostScreen
        }
    },
    {
        initialRouteName: 'Main',
        /* headerMode: 'none' */
        /* mode: 'modal', */ 
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#FFF',
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,

        }
    },
);

export const AppNavigation = createAppContainer(PostNavigator);
