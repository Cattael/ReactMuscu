import React from 'react';
import { AsyncStorage, TouchableOpacity, StyleSheet, View, ScrollView, Image, Text, Dimensions } from 'react-native';
import SetSuccess from './SetSuccess';
const HEADER_HEIGHT = 40;

//name = name display on top of the preview
//delete = called function when cross is pressed
//muscle = Text display next to 'Muscle :'
//restTime = nbrOfRep * 1 + timerToRest
//nbrRep = the number of little check box 
//image = background of the view 
//success = check list of the set
//... TBC

export class PreviewSession extends React.Component {

    renderTime = (timer) => {
        let leftOver = timer; 
        let hours = 0; let minutes = 0; let seconds = 0; 
        hours = Math.trunc(leftOver/3600); 
        leftOver = leftOver%3600; 
        minutes = Math.trunc(leftOver/60); 
        leftOver = leftOver%60; 
        seconds = leftOver;

        let output = ""; 
        if(hours > 0)
            output += hours +"h "; 
        if(minutes > 0)
            output += minutes +"m "; 
        if(seconds > 0)
            output += seconds +"s "; 

        return output; 
    }

    render() {
        return (
            <View style={styles.button} >
                <View style={{ flexDirection: 'row', height: HEADER_HEIGHT, backgroundColor: 'white', justifyContent: 'space-between' }}>
                    <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 20, textAlignVertical: 'center' }}> {this.props.name}</Text>
                    <TouchableOpacity style={{ width: 40 }} onPress={ this.props.delete }>
                        <Image style={{ height: HEADER_HEIGHT - 20, width: HEADER_HEIGHT - 20, marginTop: 10, marginLeft: 10 }} source={require('../ico/cross_ico.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'green' }}>
                    <Text style={{ marginTop: 10, marginLeft: 5 }}>{"- Muscle : " + this.props.muscle } </Text>
                    <Text style={{ marginTop: 10, marginLeft: 5 }}>{"- Time : " + this.renderTime((this.props.restTime + 60) * this.props.nbrRep)}</Text>
                    <ScrollView horizontal={true} style={{marginTop: 13, flexDirection: 'row'}}>
                    {this.props.success.map( success => 
                        <SetSuccess isChecked={ success }/>
                        )}
                    </ScrollView>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 150,
        borderWidth: 1,
        margin: 10,
    }
})

export default PreviewSession; 