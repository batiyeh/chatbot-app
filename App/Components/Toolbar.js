import React, { Component } from 'react'
import { View, Text, Image, Switch, Platform, ToolbarAndroid, TouchableOpacity, TouchableNativeFeedback, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MessageActions, { reducer, INITIAL_STATE } from '../Redux/MessageRedux'
import styles from './Styles/ToolbarStyles'
import { Images, Colors } from '../Themes'
import PopupMenu from '../Components/PopupMenu'

class Toolbar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            bleuToggle: this.props.bleuToggle,
        }
    }

    onPopupEvent = (eventName, index) => {
        if (eventName !== 'itemSelected') return
            if (index === 0) this.onClear()
    }

    onClear = () => {
        const state = reducer(this.props.actions.deleteAll())
    }

    onBleuToggle = (value) => {
        this.setState({ bleuToggle: value })
        const state = reducer(this.props.actions.toggleBleuMode(this.state.bleuToggle))
    }

    render () {
        if (Platform.OS === "android"){
            return (
                <View>
                    <StatusBar
                        translucent
                        backgroundColor="rgba(0, 0, 0, 0.20)"
                        animated
                    />
                    <View
                        style={{
                            height: 24,
                            backgroundColor: Colors.primary,
                        }}
                    />
                    <View style={styles.toolbarAndroid}>
                        <View style={styles.toolbarItemContainer}>
                            <View style={styles.toolbarTextContainer}>
                                <Text style={styles.toolbarText}>Chatbot</Text>
                            </View>
                            <View style={styles.toolbarMoreContainer}>                              
                                <View style={styles.toolbarButtonsContainer}>
                                    <Switch 
                                        value={this.state.bleuToggle} 
                                        onValueChange={this.onBleuToggle}
                                        style={styles.bleuSwitch}
                                    /> 
                                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(Colors.primaryHighlight, true)}>
                                        <View>
                                            <PopupMenu actions={['Clear']} onPress={this.onPopupEvent} />
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>      
                            </View>
                        </View>
                    </View>
                </View>
            )
        }

        else{
            return (
                <View></View>
            )
        }
    }
}

const mapStateToProps = (state) => {
    var messages = state.messages.messageList
    var bleuToggle = state.messages.bleuToggle

    if (!messages)
        messages = []

    return {
        messages: messages,
        bleuToggle: bleuToggle
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(MessageActions, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
