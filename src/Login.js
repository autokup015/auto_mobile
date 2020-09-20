import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ImageBackground } from 'react-native';

export default class Login extends React.Component {
    static navigationOptions = {
        tabBarVisible: false,
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            URL:'https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png',
        }
    }

    render() {
        return (
            <View style={Styled.container}>
                <View style={Styled.textContain}>
                    <Image //style={Styled.imgContain} 
                   // source={require('./Gallery/ironman.png')} 
                    />
                    <Text style={Styled.textHeader}>Come to enjoy us!</Text>
                    <TextInput
                        style={Styled.textInContain}
                        placeholder="Email"
                        placeholderTextColor='#fff'
                    />
                    <TextInput
                        style={Styled.textInContain}
                        placeholder="Password"
                        placeholderTextColor='#fff'
                    />
                    < TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('HomeScreen')
                        }
                    >
                        <View style={Styled.buttonContain}>
                            <Text style={Styled.textButton}> Login </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const Styled = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC644'
    },
    imgContain:{
        width:300
    },
    textContain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInContain: {
        width: 300,
        height: 40,
        borderColor: '#fff',
        backgroundColor: '#FFE078',
        borderWidth: 2,
        borderRadius: 5,
        color: '#fff',
        fontSize: 20,
        paddingLeft: 10,
        marginVertical: 10

    },
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonContain: {
        width: 250,
        height: 40,
        borderColor: '#fff',
        backgroundColor: '#00C5D4',
        borderWidth: 2,
        borderRadius: 100,
        paddingLeft: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }

})