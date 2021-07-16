import React, { Component } from 'react';
import { TextBase, View, StyleSheet, Text } from 'react-native';


export default class SpaceCraft extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                    Space Crafts Screen
                </Text>
            </View>
        );
    }
}

    const styles = StyleSheet.create({
        container : {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#EEE"
        }
    })

