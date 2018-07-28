import React, {Component} from 'react';
import {View, Image } from 'react-native';
import {Divider} from 'react-native-elements';
import icon from '../assets/icons/icon.png';

import KeyButtons from '../components/KeyButtons';
import CapoButtons from '../components/CapoButtons';
import CapoKey from '../components/CapoKey';
import ViewChordsButton from '../components/ViewChordsButton';
import ChordsModal from '../components/ChordsModal';

import { SCREEN_WIDTH } from '../constants/styles';

class MainScreen extends Component{

    static navigationOptions = () =>({
        title: 'Capo Keys',
        headerStyle: {
            height: 54,
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerLeft: <Image
                        source={icon}
                        style={styles.imageStyle}
                    />
    })

    render(){
        const {containerStyle, dividerStyle, buttonContainerStyle} = styles;

        return(
            <View style={{ flex: 1, backgroundColor: '#ddd'}}>
                <ChordsModal/>

                <View style={containerStyle}>
                    <KeyButtons/>
                    <Divider style={dividerStyle} />
                    <CapoButtons/>
                    <Divider style={dividerStyle} />
                    <CapoKey/>
                </View>

                <ViewChordsButton style={buttonContainerStyle} />
            </View>
        )
    }
}

const styles = {
    imageStyle: {
        marginTop: 5,
        marginLeft: 10,
        width: 40,
        height: 40
    },
    containerStyle:{
        flex: 1,
        justifyContent:'space-around',
        alignItems: 'center'
    },
    dividerStyle:{
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: '#2196F3'
    },
    buttonContainerStyle:{
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    }
}



export default MainScreen;


