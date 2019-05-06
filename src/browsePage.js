import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { Button, Card, Icon, Image, ListItem, Avatar, Divider } from 'react-native-elements';
import SearchConditions from './homePage'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import firebase from 'react-native-firebase';


const user = [
    {
        bookTitle: "Go Sound the Trumpet",
        author: "David H Jackson",
        edition: 1,
        sellerID: 'step407',
        rating: 4.7,
        image: require('./dummy_gstt.jpg')
        
    },

    {
        bookTitle: "Go Sound the Trumpet - Slightly Used",
        author: "David H Jackson",
        edition: 1,
        sellerID: 'skeebo23',
        rating: 3.9,
        image: require('./dummy_gstt2.jpg')
    },

    {
        bookTitle: "Brand New!! Go Sound the Trumpet",
        author: "David H Jackson",
        edition: 1,
        sellerID: 'finesseKid85',
        rating: 4.9,
        image: require('./dummy_gstt3.jpg')
    }
]



export default class BrowsePage extends Component {

    state = {
        listings: [],
        user: ''

    }


    componentDidMount() {
        const userID = firebase.auth().currentUser.uid

        this.setState({ user: userID })
        const ref = firebase.database().ref(`/bookListings/`)

        ref.on('value', (childSnapshot) => {
            var books = [];
            childSnapshot.forEach((item) => {
                books.push({
                    key: item.key,
                    data: item.val()

                });
                this.setState({ listings: books })
            });

        });
    }


 
    render() {
        
            return (

                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    backgroundColor: '#F5FCFF'
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignContent: 'center'

                    }}>
                        <Icon name="dots-vertical" type="material-community" onPress={() => this.props.navigation.toggleDrawer()} />
                    </View>


                    <View style={styles.container}>
                        <FlatList
                            data={this.state.listings}

                            renderItem={({ item, index }) => {
                                return (
                                    <Card
                                        key={item.data.sellerLName}
                                        containerStyle={styles.cardContain}


                                    >

                                        <View style={styles.container2} >
                                            <Image
                                                resizeMode='cover'
                                                source={{ uri: this.state.photo }}
                                                imageStyle={styles.img}

                                            />


                                            <View style={{
                                                flex: 1
                                            }}>
                                                <View style={{}}>
                                                    <Text style={styles.usr}>{item.data.sellerLName}< Text style={styles.rating}>      [5.0 / 5.0]</ Text></Text>

                                                </View>

                                                <Text style={

                                                    styles.bookTitle
                                                }>{item.data.bookTitle}</Text>
                                                <Text style={{
                                                    textAlign: 'center',
                                                    flexDirection: 'row-reverse',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    textAlignVertical: 'bottom',
                                                    alignContent: 'center',
                                                    fontSize: 18,
                                                    fontWeight: 'bold'

                                                }} >
                                                    {item.data.author}
                                                </Text>
                                                <Text style={styles.tStyle} >
                                                    Edition: {item.data.edition}
                                                </Text>
                                                <View style={styles.buttonContainer} >

                                                    <Button type='outline'
                                                        icon={<Icon name='shopping-cart' />}
                                                        //backgroundColor='#03A9F4'
                                                        buttonStyle={styles.button}
                                                        containerStyle={styles.buttoncContainer}


                                                    />

                                                </View>

                                            </View>




                                        </View>

                                    </Card>
                                )
                            }}
                        ></FlatList>
                            
                       
                    </View>

                </View>



            );
        
    }
}



const styles = StyleSheet.create({

    container: {

        backgroundColor: '#F5FCFF',
        flex: 1,


    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexBasis: 'auto'
    },
    cardContain: {
        marginLeft: 0,
        marginRight: 10
    },
    buttoncContainer:
        {
            
            marginBottom: 0,
            alignContent: 'center'
        },
    buttonContainer: {
        
        flexDirection: 'row-reverse',
        flex: 1,
        alignSelf: 'center',
        margin: 5,
        
    },
    welcome: {
        fontSize: 40,
        textAlignVertical: 'center',
        textAlign: 'center',
        margin: 20
    },

    box: {
        height: 40,
        margin: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',

    },

    button: {

        alignSelf: 'center'
    },

    img: {
        resizeMode: 'contain',


    },

    tStyle: {
        textAlign: 'center',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textAlignVertical: 'bottom',
        alignContent: 'flex-end'
    },

    txt: {
        
        borderColor: 'gray',
        backgroundColor: '#eeeeee',
        minWidth: '32.5%',
        textAlign: 'left',
        flexDirection: 'row'
    },
        txt2: {

        borderColor: 'gray',
        backgroundColor: '#eeeeee',
        minWidth: '32.5%',
            textAlign: 'right',
        flexDirection: 'row'

    },

    usr: {
        marginLeft: 10,
        borderColor: 'gray',
        backgroundColor: '#eeeeee',
        minWidth: '32.5%',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14
    },

    rating: {
        marginLeft: 10,
        borderColor: 'gray',
        backgroundColor: '#eeeeee',
        minWidth: '32.5%',
        textAlign: 'right',
    },

    bookTitle: {
        textAlign: 'center',
        flexDirection: 'row-reverse',
        textAlignVertical: 'bottom',
        
        fontSize: 24,
        fontWeight: 'bold',

        
    },
});
