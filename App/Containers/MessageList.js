import React, { Component } from 'react'
import { View, FlatList, Text, TextInput, TouchableNativeFeedback, TouchableHighlight, Platform } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MessageActions, { reducer, INITIAL_STATE } from '../Redux/MessageRedux'

//Components
import BotBubble from '../Components/BotBubble'
import UserBubble from '../Components/UserBubble'

// Styles
import styles from './Styles/MessageListStyles'

class MessageList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: '',
    }
  }

  send = () => {
    const state = reducer(this.props.actions.sendMessage(this.state.text))
    this.clearTextInput()
  }

  clearTextInput = () => {
    this.setState({
      text: '',
    })
  }

  render () {
      return (
        <View style={styles.mainContainer}>
          <View key={"parentViewMessageFlatList"} style={styles.messageContainer}>
            <FlatList
              keyExtractor={(item, index) => index}
              data={this.props.messages}
              renderItem={({item}) => this.renderFlatListItem(item)}
              ref={ref => this.scrollView = ref}
              onContentSizeChange={(contentWidth, contentHeight)=>{
                  this.scrollView.scrollToEnd({animated: true});
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputRow}>
              <View style={styles.messageContainer}>
                <TextInput
                  style={styles.messageInputBox}
                  onChangeText={(text) => this.setState({text})}
                  placeholder="Enter Message..."
                  value={this.state.text}
                  underlineColorAndroid='rgba(0,0,0,0)'
                />
              </View>
              <View style={styles.buttonContainer}>
                <TouchableNativeFeedback
                    onPress={this.send}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                  <View style={styles.button}>
                    <Text style={styles.text}>Send</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
        </View>
      )
  }

  renderFlatListItem(item){
    if (!item.user){
      return(
        <View key={"parentView"+item.message}>
          <BotBubble key={"messages"+item.message} message={item.message}></BotBubble>
        </View>
      )
    }

    else{
      return(
        <View key={"parentView"+item.message}>
          <UserBubble key={"messages"+item.message} message={item.message}></UserBubble>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
