import React from "react"
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native"
import Color from "./assests/ColorEnum"
import TodoList from "./components/TodoList"
import AppStatusBar from "./components/AppStatusBar"
import AppBar from "./components/AppBar"
import FloatingActionButton from "./common/FloatingActionButton"
import TodoForm from "./components/TodoForm"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
library.add(faPlus, faTrash)

import TodoStore from "./mobx/TodoStore"
import { observer } from "mobx-react";

@observer
export default class App extends React.Component {
    state = {
        isTodoFormActive: false,
        isShowDone: false,
    }

    private postTodo = (value: string) => {
        TodoStore.addTodo(value)
    }

    private onFABPress = () => {
        if (!this.state.isShowDone) {
            this.setState({
                isTodoFormActive: true,
            })
        } else {
            TodoStore.clearCompletedTodo()
        }
    }

    private deactivateTodoForm = () => {
        this.setState({
            isTodoFormActive: false
        })
    }

    private updateTodoStatus = (id: string) => {
        TodoStore.updateTodoStatus(id)
    }

    private toggleListStatus = () => {
        this.setState({
            isShowDone: !this.state.isShowDone
        })
        this.deactivateTodoForm()
    }

    private getListFromType() {
        if (this.state.isShowDone) {
            return TodoStore.completedTodos
        } else {
            return TodoStore.todos
        }
    }

    componentDidMount() {
        TodoStore.fetchTodos()
    }

    render() {
        return (
            <View style={styles.container}>
                <AppStatusBar />
                <TouchableWithoutFeedback onPress={this.deactivateTodoForm}>
                    <View style={{ flex: 1 }}>
                        <AppBar
                            isShowDone={this.state.isShowDone}
                            onOptionPress={this.toggleListStatus}
                        />
                        <TodoList
                            todos={this.getListFromType()}
                            onUpdateTodoStatus={this.updateTodoStatus}
                        />
                        <View style={styles.actionButton}>
                            <FloatingActionButton
                                iconName={this.state.isShowDone ? "trash" : "plus"}
                                onPress={this.onFABPress}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
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