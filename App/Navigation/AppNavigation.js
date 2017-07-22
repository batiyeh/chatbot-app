import { StackNavigator } from 'react-navigation'
import MessageList from '../Containers/MessageList'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MessageList: { screen: MessageList }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MessageList',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
