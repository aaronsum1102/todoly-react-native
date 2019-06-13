import React from "react"
import { StyleSheet, View, Text, Platform } from "react-native"
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
                isDone: false
            },
            {
                id: "todo_2",
                description: "todo 2",
                isDone: false
            }
        ]
    }



    render() {
        return (
            <View style={styles.container}>
                <AppStatusBar />
                <View style={{ flex: 1 }}>
                    <AppBar />
                    <TodoList todos={this.state.todos}></TodoList>
                    <View style={styles.actionButton}>
                        <FloatingActionButton />
                    </View>
                </View>
                <TodoForm />
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