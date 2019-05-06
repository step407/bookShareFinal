import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { Button, ButtonGroup, Icon } from 'react-native-elements';
import  MultiSlider  from '@ptomasroos/react-native-multi-slider';




export default class HomePage extends Component {

   
    state = { bookType: '', selectedIndex: 0 }
    updateBookType = (bookType) => {
        this.setState({ bookType: bookType })
    }


    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }





    render() {
        const buttons = ['Book Title', 'Author', 'Course #', 'Professor', 'ISBN']
        const { selectedIndex } = this.state

        return (

            <View style={{
                flexDirection: 'row',
                flex: 1,
                backgroundColor: '#FEFEFE'
            }}>
                <View style={{
                    justifyContent: 'center',
                    
                }}>
                    <Icon name="menu" onPress={() => this.props.navigation.toggleDrawer()} />
            </View>
            <View style={styles.container}>


                <TextInput style={styles.box}
                    placeholder='Book Title, Course Number, Professor' />
                <Text style={styles.prompt}> Search by </Text>

                <ButtonGroup  titleStyle={{ fontSize: 12 }} containerStyle={{ height: 25}}
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}

                  
                    />

                <Text style={{ marginTop: 20 }}> Book Type </Text>
                <Picker selectedValue={this.state.bookType}
                    onValueChange={this.updateBookType}
                    style={styles.pick} >

                    <Picker.Item label="Hard Back" value="hBack" />
                    <Picker.Item label="Paper Back" value="pBack" />
                    <Picker.Item label="PDF/Ebook" value="pdf" />
                    <Picker.Item label="Other" value="oth" />

                </Picker>

                <Text style={{ marginTop: 20 }}> Meeting Location </Text>


                <Button buttonStyle={styles.buttonContainer}
                    onPress={() =>                
                
                        this.props.navigation.navigate('BrowsePage')

                        }
                    title="Search"
                    color="#007FEB"
                    accessibilityLabel="Buy Some Books!"
                />



                      
            </View>

            </View>



        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignContent: 'center',
        
        

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
    box: {
        height: 40,
        margin:20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',

    },

    slide: {
        height:10,
        margin: 20
    },

    pick: {
        height: 40,
        margin: 20,
        marginTop:5,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',

    }
});
