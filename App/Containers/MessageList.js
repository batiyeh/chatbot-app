import React, { Component } from 'react'
import { FlatList, Text, Image, View } from 'react-native'
import Actions, { reducer, INITIAL_STATE } from '../Redux/MessageRedux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MessageTypes } from '../Redux/MessageRedux'

//Components
import BotBubble from '../Components/BotBubble'
import UserBubble from '../Components/UserBubble'
import MessageInput from '../Components/MessageInput'

// Styles
import styles from './Styles/MessageListStyles'

class MessageList extends Component {
  constructor (props) {
    super(props)
    const { messages, actions } = this.props;

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    // const rowHasChanged = (r1, r2) => r1 !== r2
    // const ds = new ListView.DataSource({rowHasChanged})

    this.state = {
      dataSource: messages,
      actions: actions
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View key={"parentViewMessageFlatList"} style={styles.messageContainer}>
          <FlatList
            keyExtractor={(item, index) => index}
            data={this.state.dataSource}
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

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messageList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(MessageTypes, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
