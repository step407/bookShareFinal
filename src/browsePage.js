import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { Button, Card, Icon, Image, ListItem, Avatar, Divider } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import SearchConditions from './homePage'

/*
 *            <Card

                    containerStyle={{ flexDirection: 'row' }}
                    title="Go Sound the Trumpet"
                >


                    <Text style={{ marginBottom: 10, alignContent: 'center' }}>
                        David H Jackson
                    </Text>
                    <Text style={{ marginBottom: 10,  }}>
                        Edition: 1
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                */



export default class BrowsePage extends Component {

    

 
    render() {
        return (


            <View style={styles.container}>
                <Card
                    
                    containerStyle={styles.cardContain}
                    
                    
                >

                    <View style={styles.container2} >
                    <Image
                            resizeMode='cover'
                            source={require('./dummy_gstt.jpg')}
                            imageStyle={styles.img}
                            
                        />

                    
                        <View>
                            <View>
                                <Text style={styles.txt}> step407 [4.7]</Text>

                            </View>
                            <Text style={{
                                textAlign: 'right',
                                flexDirection: 'row-reverse',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                                textAlignVertical: 'bottom',
                                alignContent: 'flex-end',
                                fontSize: 24,
                                fontWeight: 'bold'
                                
                            }}>Go Sound The Trumpet</Text>
                            <Text style={{
                                textAlign: 'right',
                                flexDirection: 'row-reverse',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                                textAlignVertical: 'bottom',
                                alignContent: 'flex-end',
                                fontSize: 18,
                                fontWeight: 'bold'

                            }} >
                        David H Jackson
                        </Text>
                    <Text style={styles.tStyle} >
                        Edition: 1
                        </Text>
                            <View style={styles.buttonContainer} >
                            
                            <Button 
                                icon={<Icon name='code' color='#ffffff' />}
                                    backgroundColor='#03A9F4'
                                    buttonStyle={styles.button}
                                    containerStyle={styles.buttoncContainer}
                                    
                                
                                title='Add to Cart' />
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                    backgroundColor='#03A9F4'
                                    buttonStyle={styles.button}
                                    containerStyle={styles.buttoncContainer}
                                    title='Contact Seller' />
                            </View>
                   
                    </View>



                    </View>                   
                </Card>

                <Button buttonStyle={styles.buttonContainer}
                    onPress={() =>

                        this.props.navigation.toggleDrawer()

                    }
                    title="Search"
                    color="#007FEB"
                    accessibilityLabel="Buy Some Books!"
                />


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
            flexBasis: 'auto',
            marginBottom: 0,
            alignContent: 'flex-end'
        },
    buttonContainer: {
        
        flexDirection: 'row-reverse',
        flex: 1,
        flexBasis: 'auto',
        margin: 0
  
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
        
        
    },

    img: {
        resizeMode: 'contain',


    },

    tStyle: {
        textAlign: 'right',
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

    }
});
