import React from "react"
import { StyleSheet, View } from "react-native"
import Color from "./assests/ColorEnum"
import TodoList from "./components/TodoList"
import AppStatusBar from "./components/AppStatusBar"
import AppBar from "./components/AppBar"
import FloatingActionButton from "./common/FloatingActionButton"
import TodoForm from "./components/TodoForm"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
library.add(faPlus)

export default class App extends React.Component {
    state = {
        todos: [
            {
                id: "todo_1",
                description: "todo 1",
                isDone: false
            },
            {
                id: "todo_3",
                description: "todo 3",
                isDone: true
            },
            {
                id: "todo_2",
                description: "todo 2",
                isDone: false
            }
        ],
        isTodoFormActive: false,
        isShowDone: false
    }

    private postTodo = (value: string) => {
        let todos = this.state.todos.splice(0)
        todos.unshift({
            id: `${value}${todos.length}`,
            description: value,
            isDone: false
        })
        this.setState({
            todos: todos
        })
    }

    private activateTodoForm = () => {
        this.setState({ isTodoFormActive: true })
    }

    private deactivateTodoForm = () => {
        this.setState({ isTodoFormActive: false })
    }

    private updateTodoStatus = (id: string) => {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: true
                }
            } else {
                return todo
            }
        })
        this.setState({
            todos: todos
        })
    }

    private toggleListStatus = () => {
        this.setState({
            isShowDone: !this.state.isShowDone
        })
    }

    private getListFromType() {
        if (this.state.isShowDone) {
            return this.state.todos.filter(todo => todo.isDone === true)
        } else {
            return this.state.todos.filter(todo => todo.isDone === false)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <AppStatusBar />
                <View style={{ flex: 1 }}>
                    <AppBar
                        isShowDone={this.state.isShowDone}
                        onOptionPress={this.toggleListStatus}
                    />
                    <TodoList
                        todos={this.getListFromType()}
                        onCardPress={this.deactivateTodoForm}
                        onUpdateTodoStatus={this.updateTodoStatus}
                    />
                    <View style={styles.actionButton}>
                        <FloatingActionButton onPress={this.activateTodoForm} />
                    </View>
                </View>
                <TodoForm
                    postTodo={this.postTodo}
                    isFormActive={this.state.isTodoFormActive}
                    closeTodoForm={this.deactivateTodoForm}
                />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.LIGHT_GRAY,
    },
    actionButton: {
        position: "absolute",
        bottom: 16,
        right: 16
    }
});