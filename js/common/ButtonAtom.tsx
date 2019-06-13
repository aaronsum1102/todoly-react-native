import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import Color from "../assests/ColorEnum"

export interface Props {
    name: string
    isActive?: boolean,
    type?: ButtonType
    onPress?(): void,
}

export interface OptionalProps {

}


export enum ButtonType {
    CONTAINED = "contained",
    OUTLINED = "outlined",
    TEXT = "text"
}

export default class ButtonAtom extends React.Component<Props> {
    static defaultProps = {
        isActive: false,
        type: ButtonType.CONTAINED
    }

    getType() {
        let buttonType = {}
        let textType = {}
        if (this.props.type === ButtonType.OUTLINED) {
            buttonType = {
                borderRadius: 4,
                borderColor: Color.PRIMARY,
                borderStyle: "solid",
                borderWidth: 2,
                backgroundColor: "transparent",
            }
            textType = {
                color: Color.PRIMARY
            }
        } else if (this.props.type === ButtonType.TEXT) {
            textType = {
                color: Color.PRIMARY
            }
        } else {
            buttonType = {
                borderRadius: 4,
                borderColor: Color.PRIMARY,
                borderStyle: "solid",
                borderWidth: 2,
                backgroundColor: Color.PRIMARY,
            }
            textType = {
                color: Color.BLACK
            }
        }
        return { buttonType, textType }
    }

    getState() {
        let buttonState = {}
        let textState = {}
        if (!this.props.isActive) {
            if (this.props.type === ButtonType.OUTLINED) {
                buttonState = {
                    borderRadius: 4,
                    borderColor: Color.DARK_GRAY,
                    borderStyle: "solid",
                    borderWidth: 2,
                    backgroundColor: "transparent",
                }
                textState = {
                    color: Color.DARK_GRAY
                }
            } else if (this.props.type === ButtonType.TEXT) {
                textState = {
                    color: Color.DARK_GRAY
                }
            } else {
                buttonState = {
                    borderRadius: 4,
                    borderColor: Color.LIGHT_GRAY,
                    borderStyle: "solid",
                    borderWidth: 2,
                    backgroundColor: Color.LIGHT_GRAY,
                }
                textState = {
                    color: Color.DARK_GRAY
                }
            }
        }
        return { buttonState, textState }
    }

    render() {
        const { buttonType, textType } = this.getType()
        const { buttonState, textState } = this.getState()
        const content = (
            <View style={StyleSheet.flatten([styles.button, buttonType, buttonState])}>
                <Text style={StyleSheet.flatten([styles.buttonText, textType, textState])}>{this.props.name}</Text>
            </View >
        )
        if (this.props.isActive !== false) {
            return (
                <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                    {content}
                </TouchableOpacity>
            )
        } else {
            return (
                <View style={styles.container}>
                    {content}
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: 36,
    },
    button: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 64,
    },
    buttonText: {
        paddingLeft: 16,
        paddingEnd: 16,
        fontSize: 14
    },
});