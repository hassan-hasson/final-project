import React, {Component} from 'react';
import {Dimensions, ImageBackground, View, Text, Image} from 'react-native';




export default class Splash extends Component{
    
    static navigationOptions = {
        header: null,
    };

    height = Dimensions.get('window').height;
    width = Dimensions.get('window').width;
    


    componentDidMount(){
        setTimeout(()=>{
            // console.log("Spalsh");
            this.props.navigation.navigate('OnBoarding1');
        },5000)
    }

    render(){
        return(
            <ImageBackground source={require('./../img/Backgrounds/splash-bg.png')} style={{width:this.width, height:this.height}}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('./../img/Logo/khrogaty-logo.png')} style={{width: 128, height:128}}/>
                </View>
            </ImageBackground>
        );
    }
}