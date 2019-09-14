import React, {Component} from 'react';
import {Dimensions, ImageBackground, View, Text, Image} from 'react-native';




export default class OnBoarding3 extends Component{
    
    static navigationOptions = {
        header: null,
    };

    height = Dimensions.get('window').height;
    width = Dimensions.get('window').width;

    componentDidMount(){
        setTimeout(()=>{
            // console.log("OnBoarding3");
            this.props.navigation.navigate('Home');
        },5000)
    }
    
    render(){
        return(
            <ImageBackground source={require('./../img/Backgrounds/onboarding-bg-left.png')} style={{width:this.width, height:this.height}}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('./../img/Logo/khrogaty-logo.png')} style={{width: 128, height:128}}/>
                </View>

            </ImageBackground>
        );
    }
}