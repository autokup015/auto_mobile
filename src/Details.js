import React from 'react';
import { View, Text, Button, BackHandler } from 'react-native';

export default class Details extends React.Component {
    static navigationOptions = {
        title: 'Details',
        headerLeft: null,
        tabBarVisible: false,
    };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            return true
        })
    }

    render() {
        return (
            <View>
                <Text>Details screen</Text>
            </View>
        )
    }
}