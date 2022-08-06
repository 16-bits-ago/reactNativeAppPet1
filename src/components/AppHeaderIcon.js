import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { THEME } from '../theme';

export const AppHeaderIcon = props => {
    return (
        <HeaderButton 
            {...props} // если мы захотим передавать еще какие-то параметры в компонент AppHeaderIcons, то с помощию ...пропс мы сможем развернуть тут эти свойства
            IconComponent={Ionicons}
            iconSize={24} 
            color={Platform.OS ===  'android' ? '#fff' : THEME.MAIN_COLOR}/>
    );
};