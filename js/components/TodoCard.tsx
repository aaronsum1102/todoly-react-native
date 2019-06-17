import React from "react"
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native"
import CardAtom from "../common/CardAtom"
import CheckBoxAtom from "../common/CheckBoxAtom"
import Color from "../assests/ColorEnum"

export interface Props {
    todo: string
    isDone: boolean
    id: string
    onCardPress(): void
    updateTodoItemStatus(id: string): void
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

    private onCheckBoxPress = () => {
        this.props.updateTodoItemStatus(this.props.id)
    }

    render() {
        const todoTextState = this.getState()
        const content = (
            <View style={styles.todoContainer}>
                <CheckBoxAtom
                    isSelected={this.props.isDone}
                    customStyle={{ marginRight: 8 }}
                    onCheckBoxPress={this.onCheckBoxPress}
                />
                <Text style={[styles.todoText, todoTextState]}>
                    {this.props.todo}
                </Text >
            </View>
        )
        return (
            <TouchableWithoutFeedback onPress={() => this.props.onCardPress()}>
                <View style={styles.todoCard} >
                    <CardAtom customStyle={{ borderColor: Color.PRIMARY }}>
                        {content}
                    </CardAtom>
                </View>
            </TouchableWithoutFeedback>
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
        lineHeight: 24,
        fontSize: 14,
    },
    todoContainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center"
    }
});