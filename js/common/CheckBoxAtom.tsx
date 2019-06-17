import React from "react"
import { StyleSheet, TouchableWithoutFeedback, View, ViewStyle } from "react-native"
import Color from "../assests/ColorEnum"

export interface Props {
    isActive: boolean
    isSelected: boolean
    customStyle?: ViewStyle
    onCheckBoxPress?(): void
}

interface State {

}

export default class CheckBoxAtom extends React.Component<Props, State> {
    static defaultProps = {
        isActive: false,
        isSelected: false
    }

    private getCheckBoxStatusStyle() {
        if (this.props.isActive) {
            return {
                borderColor: Color.LIGHT_GRAY
            }
        } else {
            return {
                borderColor: Color.PRIMARY
            }
        }
    }

    private getCheckBoxTick() {
        if (this.props.isSelected) {
            return (
                <View style={StyleSheet.flatten([styles.checkBoxTick, this.getCheckBoxStatusStyle()])} />
            )
        }
        return null
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onCheckBoxPress}>
                <View style={StyleSheet.flatten([styles.checkBox, this.getCheckBoxStatusStyle(), this.props.customStyle])}>
                    {this.getCheckBoxTick()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    checkBox: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderStyle: "solid"
    },
    checkBoxTick: {
        position: "absolute",
        height: 8,
        width: 16,
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderStyle: "solid",
        transform: [{ rotate: "-45deg" }],
        top: 4,
        left: 2,
    }
});