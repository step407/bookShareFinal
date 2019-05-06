import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import firebase from 'react-native-firebase';
import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-picker'


/*
function uploadImage(imgUri, mime = 'image/jpeg') {



    const { currentUser } = firebase.auth();
    const imageRef = firebase.storage().ref(`/profilePics/${currentUser.uid}`)

    imageRef.putFile(imgUri, { contentType: mime })
        .then(snapshot => {
            photoUrlSnap = snapshot.downloadURL
        })


}*/

export default class SignUp1 extends Component {
    state = {
        email: '', password: '', fname: '', lname: '',
        phone: '', stateLoc: '', city: '', school: '',
        photo: null, photoUri: '', mime: 'images/jpeg',
        errorMessage: null
    }









    handleChoosePhoto = () => {
        const options = {
            noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ photoUri: response.uri })
            }
        })
    }

    handleSignUp = () => {



        const { email, password, fname, lname, phone, state, city, school } = this.state
        const photoUri = this.state.photoUri
        
        if (password.length < 6) {
            this.setState({errorMessage: 'Password must be atleast 6 characters'})
            return;
        }


        
        firebase.auth().createUserWithEmailAndPassword(email, password)
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {

            const { currentUser } = firebase.auth();
            const imageRef = firebase.storage().ref(`/profilePics/${currentUser.uid}`)

            imageRef.putFile(photoUri, { contentType: 'image/jpeg' })
                .then(snapshot => {
                    firebase.database().ref('users/').child(firebase.auth().currentUser.uid).set(
                        {
                            'email': email, 'password': password, 'firstName': fname,
                            'lastName': lname, 'phoneNumber': phone, 'state': state,
                            'city': city, 'school': school, 'photo': snapshot.downloadURL
                        }) 
                })
                

            
        })

        
            
    
            
        
                    this.props.navigation.navigate('BrowsePage')


        
         
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container} >
                <KeyboardAvoidingView>
                <Text style={styles.header} >Create an Account</Text>

                <Text style={styles.label} > First Name</Text>
                    <TextInput style={styles.box}
                        onChangeText={fname => this.setState({ fname })}
                        value={this.state.fname}/>

                <Text style={styles.label}>Last Name</Text>
                    <TextInput style={styles.box}
                        onChangeText={lname => this.setState({ lname })}
                        value={this.state.lname}/>
                
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.box}
                        keyboardType='email-address'
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                />

                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.box}
                        secureTextEntry={true}
                        caretHidden={true}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        />
                    
                        <Text style={{ color: 'red' }}>
                            {this.state.errorMessage}
                        </Text>

                <Text style={styles.label}>Retype Password</Text>
                <TextInput style={styles.box}
                    secureTextEntry={true}
                        caretHidden={true}
                        name= 'check'
                        
                        />
                        <Button
                            title="Upload Photo"
                            color="#007FEB"
                            onPress={this.handleChoosePhoto} />


                        <Text style={styles.header2}>Personal Information</Text>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput style={styles.box}
                            keyboardType='phone-pad'
                            onChangeText={phone => this.setState({ phone })}
                            value={this.state.phone}
                        />

                        <Text style={styles.label}>State</Text>
                        <TextInput style={styles.box}
                            onChangeText={stateLoc => this.setState({ stateLoc })}
                            value={this.state.stateLoc}
                        />

                        <Text style={styles.label}>City</Text>
                        <TextInput style={styles.box}
                            onChangeText={city => this.setState({ city })}
                            value={this.state.city}
                        />

                        <Text style={styles.label}>School (optional)</Text>
                        <TextInput style={styles.box}
                            onChangeText={school => this.setState({ school })}
                            value={this.state.school}
                        />

                        <Icon
                            name='check'
                            type='evilicon'
                            color='#007FEB'
                            size={56}
                            onPress={this.handleSignUp}
                        />
                </KeyboardAvoidingView>

                </View>
                </ScrollView>
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

    header2: {
        fontSize: 30,
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
