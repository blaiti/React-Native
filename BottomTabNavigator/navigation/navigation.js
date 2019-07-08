import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import * as theme from '../constants/themes';
import React from 'react';
import { Icon } from 'react-native-elements';


// import screens
import ReactHome from '../screens/React';
import ReactNav from '../screens/ReactNavi';

// create bottom rab
const ScreenBottom = createBottomTabNavigator({
    ReactHome: {
        screen: ReactHome,
        navigationOptions: {
            tabBarIcon:({ tintColor }) =>(
                <Icon type='material' name='brightness-7' color={tintColor} size={30}/>
            )
        }
    },
    ReactNav: {
        screen: ReactNav,
        navigationOptions: {
            tabBarIcon:({ tintColor }) =>(
                <Icon type='material' name='ac-unit' color={tintColor} size={30}/>
            )
        }
    },
},
{
    tabBarOptions: {
        activeBackground: theme.colors.white,
        inactiveBackground: theme.colors.white,
        activeTintColor: theme.colors.blue,
        inactiveTintColor: theme.colors.gray,
        showLabel: false,
        showIcon: true
    }
});

export default createAppContainer(ScreenBottom);

