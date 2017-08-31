import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors} from '../../Themes/'

export default StyleSheet.create({
  applicationView: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  toolbarContainer: {
    flex: 1
  },
  messageContainer: {
    flex: 11,
    justifyContent: 'center',
  },
  inputContainer: {
    height: 54,
    borderTopWidth: 1,
    borderColor: Colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
  messageContainer: {
    flex: 5
  },
  messageInputBox: {

  },
  buttonContainer:{
    flex: 1,
    
  },
  button:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 30,
  },
  text: {
    color: Colors.snow,
  }
})
