import React, {Component} from 'react';
import {Dimensions, ImageBackground, View, Text, Image} from 'react-native';
import { Button } from 'native-base';
import { whiteBright } from 'colorette';




export default class OnBoarding1 extends Component{
    static navigationOptions = {
        header: null,
    };

    height = Dimensions.get('window').height;
    width = Dimensions.get('window').width;

    componentDidMount(){
        // setTimeout(()=>{
        //     console.log("OnBoarding1");
        //     this.props.navigation.navigate('OnBoarding2');
        // },5000)
    }

    render(){
        return(
            <ImageBackground source={require('./../img/Backgrounds/onboarding-bg-left.png')} style={{width:this.width, height:this.height}}>
                <View style={{  }}>
                    <Image source={require('./../img/Logo/khrogaty-logo.png')} style={{width: 128, height:128}}/>
                </View>
                <View style={{justifyContent:'center',alignItems:"center"}}>
                    <Image source={require('./../img/Vector_Icons/home-first-icon.png')} style={{width:96*0.5 , height:87*0.5}}/>
                    <Text>Places for going Out</Text>
                    <Text style={{
                        fontSize: 12,
                        
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <Button transparent onPress={()=>{
                        console.log("pressed")
                    }} >
                        <Text style={{color:'white', fontWeight:'bold'}}>
                            Next >
                        </Text>
                    </Button>
                </View>
            </ImageBackground>
        );
    }
}