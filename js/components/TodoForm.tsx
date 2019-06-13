import React from "react"
import { StyleSheet, Platform, View, Text } from "react-native"
import Color from "../assests/ColorEnum"
import CardAtom from "../common/CardAtom"
import MoveInFromBottomView from "../common/MoveInFromBottomView"
import MultilineLineTextInputAtom from "../common/MultilineLineTextInputAtom"

export interface Props {

}

interface State {

}

export default class TodoForm extends React.Component<Props, State> {
    state = {
        isFormActive: false
    }

    private getAnimationEndValue(): number {
        if (this.state.isFormActive) {
            return Platform.OS === "ios" ? 189 : 152
        } else {
            return 1000
        }
    }

    private customStyle = {
        backgroundColor: Color.PRIMARY_LIGHT,
        borderColor: Color.PRIMARY_LIGHT,
        flex: 1,
        width: "100%"
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isFormActive: true
            })
        }, 2000)
    }

    render() {
        return (
            <MoveInFromBottomView style={styles.todoForm} toValue={this.getAnimationEndValue()} >
                <CardAtom customStyle={this.customStyle}>
                    <MultilineLineTextInputAtom customStyle={styles.todoInputField} placeholder="Todo description" />
                </CardAtom>
            </MoveInFromBottomView >
        )
    }
}

const styles = StyleSheet.create({
    todoForm: {
        position: "absolute",
        bottom: -10,
        width: "100%"
    },
    todoInputField: {
        marginLeft: 8,
        marginRight: 8,
    }
});