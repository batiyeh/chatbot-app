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
  messageContainer: {
    flex: 12,
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: Colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  text: {
    color: "#000"
  }
})
