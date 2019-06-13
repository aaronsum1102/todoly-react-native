import React from "react"
import { StyleSheet, View, Text } from "react-native"
import CardAtom from "../common/CardAtom"
import Color from "../assests/ColorEnum"

export interface Props {
    todo: string
    isDone: boolean
    id: string
}

interface State {

}

export default class ToDoCard extends React.Component<Props, State> {
    getState() {
        let todoTextState = {
            color: Color.BLACK
        }
        if (!this.props.isDone) {
            todoTextState = {
                color: Color.RED
            }
        }
        return todoTextState
    }

    render() {
        const todoTextState = this.getState()
        const content = (
            <Text style={[styles.todoText, todoTextState]}> {this.props.todo}</Text >
        )
        return (
            <View style={styles.todoCard} >
                <CardAtom>
                    {content}
                </CardAtom>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todoCard: {
        width: "100%",
        padding: 16,
        paddingTop: 8,
    },
    todoText: {
        fontSize: 14,
    }
});