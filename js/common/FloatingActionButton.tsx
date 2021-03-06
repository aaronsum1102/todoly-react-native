import React from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Color from "../assests/ColorEnum"

export interface Props {
    iconName: string
    onPress(): void
}

interface State {

}

export default class FloatingActionButton extends React.Component<Props, State> {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onPress()}>
                <View style={styles.floatingActionButton}>
                    <FontAwesomeIcon size={24} icon={this.props.iconName} />
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