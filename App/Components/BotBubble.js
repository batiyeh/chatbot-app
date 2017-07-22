import React, { Component } from 'react'
import { Text } from 'react-native'
import styles from './Styles/BotBubbleStyles'

class BotBubble extends Component {
  render () {
    return (
      <Text style={styles.text}>{this.props.message}</Text>
    )
  }
}

export default BotBubble
