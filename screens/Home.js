import React, { Component } from 'react';
import { TextBase, View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
    render(){
        return(
<View style = {styles.container}>
                <ImageBackground 
                source = {require('../assets/stars.gif')}
                style = {styles.bgContainer}
                >
                    <View style = {styles.titleFlex}>

                    <Text style = {styles.titleStyle}>
                        Stellar Stage 
                        
                        
                    </Text>

                    </View>
                    

                    <TouchableOpacity onPress = {()=>{
                        this.props.navigation.navigate("DailyPic")
                    }}
                    
                    style = {styles.card}
                    
                    >
                        <Text style = {styles.cardText}>

                            Daily Pic
                            
                        </Text>

                        <Image 
                        source = {require('../assets/daily_pictures.png')}
                        style = {styles.imageStyle}
                        />

                        
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {()=>{
                        this.props.navigation.navigate("SpaceCraft")
                    }}
                    
                    style = {styles.card}

                    >
                        <Text style = {styles.cardText}>

                            Space Craft
                            
                        </Text>



                        <Image 
                        source = {require('../assets/space_crafts.png')}
                        style = {styles.imageStyle}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {()=>{
                        this.props.navigation.navigate("StarMap")
                    }}
                    
                    style = {styles.card}

                    >
                        <Text style = {styles.cardText}>

                            Star Map
                            
                        </Text>



                        <Image 
                        source = {require('../assets/star_map.png')}
                        style = {styles.imageStyle}
                        />
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,

    },

    bgContainer : {
        flex: 1,
        resizeMode : "cover"
    },

    card: {
        flex: 0.25,
        backgroundColor: "#F5F5F5",
        borderRadius: 20,
        marginBottom: 60,
        padding: 20,
        marginLeft: 50,
        marginRight: 50,
        zIndex: 1
    },

    cardText: {
        fontSize: 45,
        fontWeight: "bold",
        marginTop: 50,
        paddingLeft: 30
        
        

    },

    titleStyle : {
        fontSize: 45,
        fontWeight: 'bold',
        color: "white"

    },

    titleFlex : {
        flex : 0.25,
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    imageStyle : {
        position: 'absolute',
        height : 220,
        width: 220,
        resizeMode : 'contain',
        right: 25,
        top: -90,
        zIndex: 3
    },

    knowMore : {
        color : "red",
        fontSize : 20,
        fontWeight: "normal",
        paddingLeft: 30
    } 




})