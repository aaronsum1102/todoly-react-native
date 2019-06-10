import React from "react"
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native"
import Color from "./assests/ColorEnum"
import TodoCard from "./components/TodoCard"
import AppStatusBar from "./components/AppStatusBar"
import AppBar from "./components/AppBar"
import FloatingActionButton from "./common/FloatingActionButton"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
library.add(faPlus)

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppStatusBar />
                <View style={styles.container}>
                    <AppBar />
                    <TodoCard todo="task to do" isDone={false}></TodoCard>
                    <View style={styles.actionButton}>
                        <FloatingActionButton />
                    </View>
                </View>
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