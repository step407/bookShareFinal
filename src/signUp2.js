import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements'



export default class SignUp2 extends Component {

    render() {
        return (
            <View style={styles.container} >

                <Text style={styles.header}>Personal Information</Text>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput style={styles.box}
                    keyboardType='phone-pad'
                />

                <Text style={styles.label}>State</Text>
                <TextInput style={styles.box}
                    
                />

                <Text style={styles.label}>City</Text>
                <TextInput style={styles.box}
                    
                />

                <Text style={styles.label}>School (optional)</Text>
                <TextInput style={styles.box}
                    
                />

            </View>
        );
    }




}

const styles = StyleSheet.create({

    container:
        {
            flex: 1,
            backgroundColor: "#F5FCFF"
        },

    header: {
        fontSize: 40,
        textAlign: 'center',
        margin: 20
    },

    label: {

    },

    box: {
        height: 40,
        marginBottom: 20,
        marginHorizontal: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',

    }



});
