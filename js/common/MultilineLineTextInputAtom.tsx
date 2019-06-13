import React from "react"
import { StyleSheet, Animated, View, TextInput, ViewStyle, Text, TextStyle } from "react-native"
import Color from "../assests/ColorEnum"

export interface Props {
    customStyle?: ViewStyle,
    placeholder: string
}

interface State {
    movePlaceHolderAnimation: Animated.Value,
    isInputFieldActive: boolean
    inputValue: string,
}

export default class MultilineLineTextInputAtom extends React.Component<Props, State> {
    state = {
        isInputFieldActive: false,
        movePlaceHolderAnimation: new Animated.Value(18),
        inputValue: "",
    }

    private triggerInputFieldChange(state: boolean): void {
        this.setState({
            isInputFieldActive: state
        })
        if (state) {
            this.placehaolderAnimation(-8)
        } else {
            if (this.state.inputValue.length === 0) {
                this.placehaolderAnimation(16)
            }
        }
    }

    private getInputAtomStatusStyle(): ViewStyle {
        if (this.state.isInputFieldActive) {
            return {
                borderColor: Color.SECONDARY,
            }
        }
        return {
            borderColor: Color.GRAY,
        }
    }

    private getTextInputStatusStyle(): TextStyle {
        if (this.state.isInputFieldActive) {
            return {
                color: Color.SECONDARY,
            }
        }
        return { color: Color.GRAY }
    }

    private getPlaceholderTextStatusStyle(): TextStyle {
        if (this.state.isInputFieldActive) {
            return {
                color: Color.SECONDARY,
            }
        }
        return { color: Color.GRAY }
    }

    private placehaolderAnimation(value: number) {
        Animated.timing(
            this.state.movePlaceHolderAnimation,
            {
                toValue: value,
                duration: 200,
            }
        )
            .start()
    }

    render() {
        let { movePlaceHolderAnimation } = this.state
        return (
            <View style={StyleSheet.flatten([styles.inputAtom, this.props.customStyle, this.getInputAtomStatusStyle()])}>
                <TextInput
                    style={StyleSheet.flatten([styles.inputField, this.getTextInputStatusStyle()])}
                    multiline={true}
                    onFocus={() => this.triggerInputFieldChange(true)}
                    onBlur={() => this.triggerInputFieldChange(false)}
                    onChangeText={(text => this.setState({ inputValue: text }))}
                />
                <Animated.View style={{
                    ...styles.inputAtomTitle, top: movePlaceHolderAnimation
                }}>
                    <Text style={StyleSheet.flatten([styles.inputAtomTitleText, this.getPlaceholderTextStatusStyle()])}>{this.props.placeholder}</Text>
                </Animated.View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    inputAtom: {
        backgroundColor: Color.PRIMARY_LIGHT,
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 4,
    },
    inputField: {
        textAlignVertical: "top",
        fontSize: 16,
        lineHeight: 20,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 12,
        paddingRight: 12,
    },
    inputAtomTitle: {
        backgroundColor: Color.PRIMARY_LIGHT,
        position: "absolute",
        left: 8,
        zIndex: -999,
    },
    inputAtomTitleText: {
        paddingLeft: 4,
        paddingRight: 4,
        lineHeight: 16,
    }
});