import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, ButtonGroup}  from 'react-native-elements';
import {connect} from 'react-redux';
import {selectKeyIndex} from '../store/actions/key_actions';
import {BUTTON_GROUP_STYLE} from '../constants/styles';

class KeyButtons extends Component{
    render(){
        const { selectedValues:{selectedKeyIndex}, keys} = this.props;
        const KeyButtons = keys.map(key => key.shortKey ? '/' : key.key) 
        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle
        } = BUTTON_GROUP_STYLE;

        return(
            <View style={{justifyContent:'center', alignItems: 'center'}}>
                <Text h3>Key</Text>
                <Text h1 style={{marginBottom: 2}}>{keys[selectedKeyIndex].key}</Text>
                <ButtonGroup
                    onPress={index => this.props.selectKeyIndex(index)}
                    selectedIndex={selectedKeyIndex}
                    buttons={KeyButtons}
                    containerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    selectedTextStyle={selectedTextStyle}
                />
            </View>
        )
    }
}

const mapStateToProps = ({keys, selectedValues}) => ({keys, selectedValues}) 


export default connect(mapStateToProps,{selectKeyIndex})(KeyButtons);