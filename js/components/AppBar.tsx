import React from "react"
import { StyleSheet, View, Text, Platform } from "react-native"
import Color from "../assests/ColorEnum"

export interface Props {

}

interface State {

}

export default class AppBar extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.statusBar}>
                <View style={styles.textContainer}>
                    <Text style={styles.appTitle}>Todoly</Text>
                </View>
            </View>



        )
    }
}

const styles = StyleSheet.create({
    statusBar: {
        width: "100%",
        borderTopWidth: 0,
        elevation: 8,
    },
    textContainer: {
        backgroundColor: Color.PRIMARY,
        height: 56,
        marginBottom: 8,
    },
    appTitle: {
        padding: 16,
        fontSize: 20,
        fontStyle: "italic",
        color: Color.WHITE,
        fontWeight: "bold",
    },
});