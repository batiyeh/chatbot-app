import React, { Component } from 'react'
import { View, FlatList, Text, TextInput, TouchableNativeFeedback, TouchableHighlight, Platform } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import API from '../Services/Api'
import MessageActions, { reducer, INITIAL_STATE } from '../Redux/MessageRedux'

//Components
import BotBubble from '../Components/BotBubble'
import UserBubble from '../Components/UserBubble'
import Toolbar from '../Components/Toolbar'

// Styles
import styles from './Styles/MessageListStyles'

class MessageList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      expectedText: '',
      text: '',
    }
  }

  send = () => {
    message = this.state.text

    const state = reducer(this.props.actions.sendMessage(message))
    this.clearTextInput()
    this.botResponse(message)
  }

  botResponse = (message) => {
    const api = API.create()
    var bot = ""
    var bleuScores = []
    
    const response = api.getBotResponse(message, this.state.expectedText, this.props.bleuToggle)
      .then((response) => response.data)
      .then((responseJson) => {
        if (responseJson.response == "" || responseJson.response == null){
          bot = "Either the message is too long or I didn't recognize what you said";
          bleuScores = [];
        } else{
          bot = responseJson.response;
          if (responseJson.bleuScores) bleuScores = responseJson.bleuScores;
          else bleuScores = [];
        }

        var actionJson = {bot: bot, bleuScores: bleuScores};

        reducer(this.props.actions.sendBotResponse(actionJson))
      })
  }

  clearTextInput = () => {
    this.setState({
      text: '',
      expectedText: ''
    });
  }

  render () {
      return (
        <View style={styles.mainContainer}>
          <Toolbar></Toolbar>
          <View key={"parentViewMessageFlatList"} style={styles.messageContainer}>
            <FlatList
              keyExtractor={(item, index) => index}
              data={this.props.messages}
              renderItem={({item}) => this.renderFlatListItem(item)}
              ref={ref => this.scrollView = ref}
              onContentSizeChange={(contentWidth, contentHeight)=>{
                if (contentHeight > 0)
                  this.scrollView.scrollToEnd({animated: true});
              }}
            />
          </View>
          {this.renderInputView()}
        </View>
      )
  }

  renderFlatListItem(item){
    if (!item.user){
      if (item.message.bleuScores.length > 0){
        return (
          <View key={"parentView" + item.message.bot}>
            <BotBubble key={"messages" + item.message.bot} message={item.message.bot}></BotBubble>
            <BotBubble message={
              "Individual 1-gram: " + item.message.bleuScores[0].toFixed(6) + "\n" +
              "Individual 2-gram: " + item.message.bleuScores[1].toFixed(6) + "\n" +
              "Individual 3-gram: " + item.message.bleuScores[2].toFixed(6) + "\n" +
              "Individual 4-gram: " + item.message.bleuScores[3].toFixed(6) + "\n"}></BotBubble>
          </View>
        )
      }

      else{
        return (
          <View key={"parentView" + item.message.bot}>
            <BotBubble key={"messages" + item.message.bot} message={item.message.bot}></BotBubble>
          </View>
        )
      }
    }

    else{
      return(
        <View key={"parentView"+item.message}>
          <UserBubble key={"messages"+item.message} message={item.message}></UserBubble>
        </View>
      )
    }
  }

  renderInputView(){
    var inputView;

    if (this.props.bleuToggle){
      inputView = 
        <View style={styles.bleuInputContainer}>
          <View style={styles.inputRow}>
            <View style={styles.messageContainer}>
              <TextInput
                style={styles.expectedMessageInputBox}
                onChangeText={(text) => this.setState({ expectedText: text })}
                placeholder="Expected Response"
                placeholderTextColor="#afafaf"
                value={this.state.expectedText}
                underlineColorAndroid='rgba(0,0,0,0)'
              />
              <TextInput
                style={styles.messageInputBox}
                onChangeText={(text) => this.setState({ text: text })}
                placeholder="Message"
                placeholderTextColor="#afafaf"
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
        </View>;
    }

    else{
      inputView = 
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <View style={styles.messageContainer}>
              <TextInput
                style={styles.messageInputBox}
                onChangeText={(text) => this.setState({ text: text })}
                placeholder="Message"
                placeholderTextColor="#afafaf"
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
        </View>;
    }

    return (inputView)
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

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
