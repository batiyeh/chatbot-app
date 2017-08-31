import { Metrics, Colors, Fonts } from '../../Themes'

export default {
  toolbarAndroid:{
    height: 54,
    backgroundColor: Colors.primary,
    elevation: 5
  },
  toolbarItemContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toolbarTextContainer:{
    justifyContent: 'center',
    marginLeft: 15
  },
  toolbarText:{
    color: Colors.snow,
    fontSize: 20,
    fontWeight: 'bold'
  },
  toolbarMoreContainer:{
    justifyContent: 'center',
    marginRight: 5
  },
  moreIcon:{
    width: 33,
    height: 33
  }
}
