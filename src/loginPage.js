import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements'
import firebase from 'react-native-firebase';



export default class LoginPage extends Component {

    state = { email: '', password: '', errorMessage: null }

    handleLogin = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('HomePage'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        return (


            <View style={styles.container}>
                <Text style={styles.welcome}>BookShare</Text>

                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}

                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                    keyboardType='email-address'
                    placeholder='Enter email address'
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}

                />

                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}

                    placeholder='Enter password'
                    secureTextEntry={true}
                    caretHidden={true}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}

                />



                <Button buttonStyle={styles.buttonContainer}
                    onPress={this.handleLogin}
                    title="Continue"
                    color="#007FEB"
                    accessibilityLabel="Buy Some Books!"
                />

                <Button buttonStyle={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('SignUp1')}
                    type="outline"
                    title="Sign Up"
                    color="#2699FB"
                    accessibilityLabel="Buy Some Books!"
                />





            </View>





        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',

    },
    buttonContainer: {
        margin: 20,
        alignContent: 'flex-end'
    },
    welcome: {
        fontSize: 40,
        textAlignVertical: 'center',
        textAlign: 'center',
        margin: 20
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
