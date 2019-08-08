// import React and react native
import React, {Component} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';

// import theme
import * as theme from '../constants/theme';

// import react navigation
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

// import login screens
import Login from '../screens/Login/login';
import Register from '../screens/Login/register';

// create login navigator
const LoginScreens = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
});

// import home screens
import Discussions from '../screens/Home/discussions';
import Friends from '../screens/Home/friends';
import Profile from '../screens/Home/profile';

// create home navigator
const HomeScreens = createBottomTabNavigator({
    Discussions: {
        screen: Discussions,
        navigationOptions: {
            tabBarIcon:({ tintColor }) => (
                <Icon type='material' name='forum' color={tintColor} size={24} />
            )
        }
    },
    Friends: {
        screen: Friends,
        navigationOptions: {
            tabBarIcon:({ tintColor }) => (
                <Icon type='material' name='people' color={tintColor} size={24} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon:({ tintColor }) => (
                <Icon type='material' name='person' color={tintColor} size={24} />
            )
        }
    }
},
{
    tabBarOptions: {
      activeBackgroundColor: theme.colors.white, 
      inactiveBackgroundColor: theme.colors.white,
      activeTintColor: theme.colors.lightBlack,
      inactiveTintColor: theme.colors.silver,
      showLabel: false,
      showIcon: true
    }
});

// import other home screens
import Conversation from '../screens/conversation';

const AppScreens = createStackNavigator({
    HomeScreens: {
        screen: HomeScreens,
        navigationOptions: {
            header: null
        }
    },
    Conversation: {
        screen: Conversation,
        navigationOptions: {
            header: null
        }
    },
});

// import Asyncstorage
import AsyncStorage from '@react-native-community/async-storage';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.getEmail();
    }

    getEmail = async () => {
        const Email = await AsyncStorage.getItem('Email');
        this.props.navigation.navigate(Email ? 'App' : 'Auth');
    }
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color='#ffffff' />
            </View>
        )
    }
}


// create general navigator
const NavigationScreens = createSwitchNavigator(
    {
        AuthLoading: Loading,
        App: AppScreens,
        Auth: LoginScreens
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(NavigationScreens);