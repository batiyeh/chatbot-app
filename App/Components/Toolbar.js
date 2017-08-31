import React, { Component } from 'react'
import { View, Text, Image, Platform, ToolbarAndroid, TouchableOpacity, TouchableNativeFeedback, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MessageActions, { reducer, INITIAL_STATE } from '../Redux/MessageRedux'
import styles from './Styles/ToolbarStyles'
import { Images, Colors } from '../Themes'
import PopupMenu from '../Components/PopupMenu'

class Toolbar extends Component {
    constructor (props) {
        super(props)
    }

    onPopupEvent = (eventName, index) => {
        if (eventName !== 'itemSelected') return
            if (index === 0) this.onClear()
    }

    onClear = () => {
        const state = reducer(this.props.actions.deleteAll())
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
                                <View style={{borderRadius: 30, padding: 3}}>
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
  
    if (!messages)
      messages = []
  
    return {
      messages: messages
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(MessageActions, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
