import { Metrics, Colors, Fonts } from '../../Themes'

export default {
  messageRow:{
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: Colors.snow,
    marginVertical: Metrics.baseMargin,
    marginLeft: 10,
    padding: 5,
    backgroundColor: Colors.wsu,
    width: 200,
    borderRadius: 10,
    fontSize: 14
  },
  botName: {
    marginBottom: 0,
    marginLeft: 10,
    color: Colors.lightGrey,
    fontSize: 9,
  }
}
