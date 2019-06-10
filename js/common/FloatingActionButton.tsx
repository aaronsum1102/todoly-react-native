import React from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Color from "../assests/ColorEnum"

export interface Props {

}

interface State {

}

export default class FloatingActionButton extends React.Component<Props, State> {
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.floatingActionButton}>
                    <FontAwesomeIcon size={24} icon="plus" />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    floatingActionButton: {
        height: 56,
        width: 56,
        borderRadius: 28,
        backgroundColor: Color.PRIMARY,
        justifyContent: "center",
        alignItems: "center"
    }
});