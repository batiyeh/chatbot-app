import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/MessageInputStyles'

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render () {
    return (
      <View style={styles.inputRow}>
        <View style={styles.messageContainer}>
          <TextInput
            style={styles.messageInputBox}
            onChangeText={(text) => this.setState({text})}
            placeholder="Enter Message..."
            value={this.state.text}
          />
        </View>
        <View style={styles.sendContainer}>

        </View>
      </View>
    )
  }
}

export default MessageInput
