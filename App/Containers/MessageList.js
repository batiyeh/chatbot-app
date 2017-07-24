import React, { Component } from 'react'
import { FlatList, Text, Image, View } from 'react-native'

//Components
import BotBubble from '../Components/BotBubble'
import UserBubble from '../Components/UserBubble'
import MessageInput from '../Components/MessageInput'

// Styles
import styles from './Styles/MessageListStyles'

export default class MessageList extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <View key={"parentViewMessageFlatList"} style={styles.messageContainer}>
          <FlatList
            keyExtractor={(item, index) => index}
            data={require('../Fixtures/messages.json')}
            renderItem={({item}) => this.renderFlatListItem(item)}
            ref={ref => this.scrollView = ref}
            onContentSizeChange={(contentWidth, contentHeight)=>{
                this.scrollView.scrollToEnd({animated: true});
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <MessageInput></MessageInput>
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
