import React from "react"
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native"
import Color from "../assests/ColorEnum"

export interface Props {
    onEditPress?(): void
}

interface State {

}

export default class AppBar extends React.Component<Props, State> {
    static defaultProps = {
        isEditModeActive: false
    }

    render() {
        return (
            <View style={styles.statusBar}>
                <View style={styles.textContainer}>
                    <Text style={styles.appTitle}>Todoly</Text>
                    {/* <TouchableWithoutFeedback onPress={this.props.onEditPress}> */}
                    {/* <Text style={styles.editTodoText}>{this.props.isEditModeActive ? "Done" : "Edit"}</Text> */}
                    {/* </TouchableWithoutFeedback> */}
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    appTitle: {
        padding: 16,
        fontSize: 20,
        fontStyle: "italic",
        color: Color.WHITE,
        fontWeight: "bold",
    },
    editTodoText: {
        fontSize: 16,
        fontWeight: "bold",
        color: Color.WHITE,
        padding: 16
    }
});