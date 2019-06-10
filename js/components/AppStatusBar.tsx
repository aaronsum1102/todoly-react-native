import React from "react"
import { StyleSheet, View, StatusBar, Platform } from "react-native"
import Color from "../assests/ColorEnum"


export default class AppStatusBar extends React.Component {
    render() {
        if (Platform.OS === "ios") {
            return (
                <View style={{ backgroundColor: Color.PRIMARY_DARK, height: 40 }}>
                    <StatusBar translucent barStyle="light-content" />
                </View>
            )
        } else {
            return (
                <StatusBar backgroundColor={Color.PRIMARY_DARK} barStyle="light-content" />
            )
        }

    }
}

const styles = StyleSheet.create({

});