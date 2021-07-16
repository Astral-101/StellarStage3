import React, { Component } from 'react';
import { TextBase, View, StyleSheet, Text, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMap extends React.Component {
    constructor(){
        super();
        this.state = {
            latitude: "",
            longitude: ""
        }
    }

    render(){
        const {latitude, longitude} = this.state
        //77.102493 28.704060
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
        alert(path)
        return(
            <View style = {styles.container}>
                <View style = {styles.topView}>
                <TextInput
                style = {{height: 40, borderColor: "gray", borderWidth: 1}}
                placeholderTextColor = "white"
                placeholder = "Enter Your Latitude"
                onChangeText={(text)=>{
                    this.setState({
                        latitude: text
                    })

                }}

                />

                <TextInput
                style = {{height: 40, borderColor: "gray", borderWidth: 1}}
                placeholderTextColor = "white"
                placeholder = "Enter Your Longitude"
                onChangeText={(text)=>{
                    this.setState({
                        longitude: text
                    })

                }}

                

                />
                </View>

                <WebView
                scalesPageToFit = {true} 
                source = {{uri: 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}}
                style = {{marginTop: 20, marginBottom: 20}}
                
                />

                

            </View>
        );
    }
}

    const styles = StyleSheet.create({
        container : {
            flex: 1,
            backgroundColor: "purple"
        },

        topView : {
            flex: 0.4,
            alignItems: 'center',
            justifyContent: 'center'
            
            
        },

        bottomView : {
            flex: 0.6
        }
    })

