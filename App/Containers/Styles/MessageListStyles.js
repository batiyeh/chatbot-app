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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 5,
    height: 45,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bleuInputContainer: {
    marginBottom: 5,
    height: 87,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputRow: {
    flex: 3,
    flexDirection: 'row',
    width: '97%',
  },
  messageContainer: {
    flex: 5,
    justifyContent: 'flex-end',
  },
  messageInputBox: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 20,
    marginRight: 5,
    paddingLeft: 10
  },
  expectedMessageInputBox: {
    height: 40,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 20,
    marginRight: 5,
    paddingLeft: 10
  },
  buttonContainer:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  button:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 40,
    borderRadius: 40
  },
  text: {
    color: Colors.snow,
  }
})
