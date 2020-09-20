import React from 'react';
import { View, Text, StyleSheet, BackHandler, Image, ImageBackground, TextInput, ScrollView } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#FFC644',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
        },
        headerLeft: null,
        tabBarVisible: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            cafeBanner: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/0e/61/91/cafe-amore.jpg',
            cafeList: {
                first: 'https://static1.squarespace.com/static/5ba17396b98a786c7d2546e1/t/5bc8c329419202d82ffdf5de/1539883830990/Natura-FredWatford04-edit.jpg',
                sec: 'https://www.visitcruachan.co.uk/userfiles/image/photo_cafe_1.jpg'
            }
        }
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            return true
        })
    }

    render() {
        return (
            <View style={Styled.container}>
                {/* Search bar */}
                <View style={Styled.searchBar}>
                    <TextInput
                        style={Styled.inputContainer}
                        placeholder="Search"
                        textAlign={'center'}
                        placeholderTextColor='#707070'
                    /></View>
                {/* Image Slide */}
                <View style={Styled.imgSlideContainer}>
                    <Image
                        source={{ uri: this.state.cafeBanner }}
                        style={Styled.imgSlider} />
                </View>
                <ScrollView>
                    {/* Image 1 */}
                    <View style={Styled.listContainer}>
                        <ImageBackground
                            source={{ uri: this.state.cafeList.first }}
                            style={Styled.imgBackgroundContainer} >
                            <View style={{ flex: 2 }} />
                            <View style={Styled.cafeBannerStyle}>
                                <Text style={Styled.textName}>Shop 1</Text>
                                <Text style={Styled.textNum}>8/10</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    {/* Image 2 */}
                    <View style={Styled.listContainer}>
                        <ImageBackground
                            source={{ uri: this.state.cafeList.sec }}
                            style={Styled.imgBackgroundContainer} >
                            <View style={{ flex: 2 }} />
                            <View style={Styled.cafeBannerStyle}>
                                <Text style={Styled.textName}>Shop 2</Text>
                                <Text style={Styled.textNum}>5/7</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </ScrollView>
                {/* footer */}
                <View style={Styled.footer}>
                </View>
            </View>
        )
    }
}

const Styled = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    searchBar: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#707070'
    },
    inputContainer: {
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        color: '#707070',
        fontSize: 20,
        paddingLeft: 10,
    },
    imgSlideContainer: {
        borderBottomColor: '#858585',
        borderBottomWidth: 1
    },
    imgSlider: {
        width: null,
        height: 150
    },
    listContainer: {
        marginTop: 5,
        marginHorizontal: 5
    },
    imgBackgroundContainer: {
        width: null,
        height: 250
    },
    cafeBannerStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 10
    },
    textName: {
        flex: 1,
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textNum: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'right',
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold'
    },
    footer: {
        height: 60,
        backgroundColor: '#FFC644'
    }
})