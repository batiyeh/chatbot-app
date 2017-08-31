import React, { Component, PropTypes } from 'react'
import { View, UIManager, findNodeHandle, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '../Themes'

const ICON_SIZE = 33

export default class PopupMenu extends Component {
  static propTypes = {
    // array of strings, will be list items of Menu
    actions:  PropTypes.arrayOf(PropTypes.string).isRequired,
    onPress: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      icon: null
    }
  }

  onError () {
    console.log('Popup Error')
  }

  onPress = () => {
    if (this.state.icon) {
      UIManager.showPopupMenu(
        findNodeHandle(this.state.icon),
        this.props.actions,
        this.onError,
        this.props.onPress
      )
    }
  }

  render () {
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <Icon
            name='more-vert'
            size={ICON_SIZE}
            color={Colors.snow}
            ref={this.onRef} />
        </TouchableOpacity>
      </View>
    )
  }

  onRef = icon => {
    if (!this.state.icon) {
      this.setState({icon})
    }
  }
}