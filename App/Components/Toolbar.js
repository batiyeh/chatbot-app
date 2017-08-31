import React, { Component } from 'react'
import { View, Text, Platform, ToolbarAndroid, StatusBar } from 'react-native'
import styles from './Styles/ToolbarStyles'
import { Images, Colors } from '../Themes'

class Toolbar extends Component {
    showMore = () => {
        
    }

    render () {
        if (Platform.OS === "android"){
            return (
                <View>
                    <StatusBar
                        translucent
                        backgroundColor="rgba(0, 0, 0, 0.20)"
                        animated
                    />
                    <View
                        style={{
                            height: 24,
                            backgroundColor: Colors.primary,
                        }}
                    />
                    <ToolbarAndroid
                    title="Chatbot"
                    actions={[{title: 'Settings', icon: Images.more_android_xhdpi, show: 'always'}]}
                    onActionSelected={this.showMore}
                    style={styles.toolbarContainer} 
                    titleColor={Colors.snow} />
                </View>
            )
        }

        else{
            return (
                <ToolbarAndroid
                  title="Chatbot"
                  actions={[{title: 'Settings', icon: Images.more_android_xhdpi, show: 'always'}]}
                  onActionSelected={this.showMore}
                  style={styles.toolbarContainer}
                  titleColor={Colors.snow} />
            )
        }
    }
}

export default Toolbar
