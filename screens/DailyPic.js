import React, { Component } from 'react';
import { TextBase, View, StyleSheet, Text } from 'react-native';

export default class DailyPic extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                    Daily Pic Screen
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

