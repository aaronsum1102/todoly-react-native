import React from "react"
import { StyleSheet, Platform, View, Alert } from "react-native"
import Color from "../assests/ColorEnum"
import CardAtom from "../common/CardAtom"
import MoveInFromBottomView from "../common/MoveInFromBottomView"
import MultilineLineTextInputAtom from "../common/MultilineLineTextInputAtom"
import ButtonAtom from "../common/ButtonAtom"

export interface Props {
    postTodo(value: string): void
    isFormActive: boolean,
    closeTodoForm(): void
}

interface State {
    todo: string
}

export default class TodoForm extends React.Component<Props, State> {
    state = {
        todo: ""
    }

    private getAnimationEndValue(): number {
        if (this.props.isFormActive) {
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

    private updateTodo = (value: string) => {
        this.setState({
            todo: value
        })
    }

    private isButtonActive(): boolean {
        if (this.state.todo.length > 0) {
            return true
        } else {
            return false
        }
    }

    private clearTodo = () => {
        this.setState({
            todo: ""
        })
    }

    private saveTodo = () => {
        this.props.postTodo(this.state.todo)
        this.clearTodo()
        this.props.closeTodoForm()
    }

    render() {
        return (
            <MoveInFromBottomView
                style={styles.todoForm}
                toValue={this.getAnimationEndValue()}
            >
                <CardAtom customStyle={this.customStyle}>
                    <MultilineLineTextInputAtom
                        customStyle={styles.todoInputField}
                        placeholder="Todo description"
                        todo={this.state.todo}
                        onTextChange={this.updateTodo}
                    />
                    <View style={styles.todoFormActionsContainer} >
                        <ButtonAtom
                            name="CLEAR"
                            customStyle={{ width: 100 }}
                            isActive={this.isButtonActive()}
                            onPress={this.clearTodo}
                        />
                        <ButtonAtom
                            name="SAVE"
                            customStyle={{ width: 100, marginLeft: 16 }}
                            isActive={this.isButtonActive()}
                            onPress={this.saveTodo}
                        />
                    </View>
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
    },
    todoFormActionsContainer: {
        margin: 8,
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "flex-end",
    }
});