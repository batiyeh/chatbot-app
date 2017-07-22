import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/UserBubbleStyles'

class UserBubble extends Component {
  render () {
    return (
      <View style={styles.messageRow}>
        <Text style={styles.text}>{this.props.message}</Text>
      </View>
    )
  }
}

export default UserBubble
