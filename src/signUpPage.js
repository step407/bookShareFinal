import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements'




export default class SignUp1 extends Component {

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.header} >Create an Account</Text>

                <Text style={styles.label} > First Name</Text>
                <TextInput style={styles.box} />

                <Text style={styles.label}>Last Name</Text>
                <TextInput style={styles.box} />

                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.box}
                    keyboardType='email-address'
                />

                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.box}
                    secureTextEntry={true}
                    caretHidden={true}
                />

                <Text style={styles.label}>Retype Password</Text>
                <TextInput style={styles.box}
                    secureTextEntry={true}
                    caretHidden={true}
                />

                <Icon
                    name='arrow-right'
                    type='evilicon'
                    color='#007FEB'
                    onPress={() => this.props.navigation.navigate('SignUp2')}
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
