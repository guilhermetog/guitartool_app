import React, {Component} from 'react';
import {View, Modal} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../constants/styles';
import {closeChordsModal} from '../store/actions/modal_actions';

class ChordsModal extends Component{
    renderChordRows(){
        const {contentRowStyle, itemContainerStyle, itemStyle} = styles;
        const {selectedValues:{ selectedKeyIndex, selectedCapo}, keys} = this.props;

        let count= 5;

        return keys.map((key)=>{
            const keyChordsIndex = (count + selectedKeyIndex) > 11 ?
                (count + selectedKeyIndex) - 12 : (count + selectedKeyIndex);
            const capoChordsIndex = (keyChordsIndex + selectedCapo) > 11 ?
                (keyChordsIndex + selectedCapo) - 12 : (keyChordsIndex + selectedCapo);
                
            count ++;

            return(
                <View key={key} style={contentRowStyle}>
                    <View style={itemContainerStyle}>
                        <Text style={itemStyle}>{keys[keyChordsIndex].key}</Text>
                    </View>
                    <View style={itemContainerStyle}>
                        <Text style={itemStyle}>=></Text>
                    </View>
                    <View style={itemContainerStyle}>
                        <Text style={itemStyle}>{keys[capoChordsIndex].key}</Text>
                    </View>
                </View>
            )
        });
    }

    render(){
        const {
            modalStyle, 
            containerStyle, 
            buttonContainerStyle,
            headerStyle,
            contentStyle,
            contentRowStyle,
            itemContainerStyle,
            itemHeadStyle,
            itemStyle
        } = styles;

        const {selectedValues:{selectedKeyIndex, selectedCapo}, keys} = this.props;

        return(
            <Modal
                transparent
                animationType={'slide'}
                visible={this.props.modal.chordsModalIsOpen}
                onRequestClose={()=> this.props.closeChordsModal()}
            >
                <View style={modalStyle}>
                    <View style={containerStyle}>
                        <View style={headerStyle}>
                            <Text h4 style={{color: 'white'}}>
                                Chords Transitions
                            </Text>
                        </View>
                        <View style={contentStyle}>
                            <View style={contentRowStyle}>
                                <View style={itemContainerStyle}>
                                    <Text style={[itemStyle,itemHeadStyle]}>Key {keys[selectedKeyIndex].key}</Text>
                                </View>
                                <View style={itemContainerStyle}>
                                    <Text style={[itemStyle,itemHeadStyle]}>=></Text>
                                </View>
                                <View style={itemContainerStyle}>
                                    <Text style={[itemStyle,itemHeadStyle]}>Capo {selectedCapo} Chords</Text>
                                </View>
                            </View>
                            {
                                this.renderChordRows()
                            }
                        </View>
                        
                        <View style={buttonContainerStyle}>
                            <Button
                                raised
                                icon={{name:'close'}}
                                title="Close"
                                backgroundColor="#2196F3"
                                onPress={()=> this.props.closeChordsModal()}    
                            >
                            </Button>
                        </View>
                    </View>
                </View>

            </Modal>

        )
    }
}

const percMargin = 0.05;

const styles = {
    modalStyle:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    containerStyle:{
        flex: 1,
        marginLeft: SCREEN_WIDTH * percMargin,
        marginRight: SCREEN_WIDTH * percMargin,
        marginTop: SCREEN_HEIGHT * percMargin,
        marginBottom: SCREEN_HEIGHT * percMargin,
        backgroundColor: 'white'
    },
    buttonContainerStyle:{
        paddingBottom: 10
    },
    headerStyle:{
        height:40,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#2196F3'
    },
    contentStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    contentRowStyle:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContainerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemHeadStyle:{
        fontWeight: '900',
        fontSize: 14
    },
    itemStyle:{
        alignItems: 'center',
        fontSize: 16,
        textAlign: 'center'
    }
}

const mapStateToProps = ({modal, selectedValues, keys}) => ({modal, selectedValues, keys})

export default connect(mapStateToProps, {closeChordsModal})(ChordsModal)