import React from "react"
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native"
import Color from "./assests/ColorEnum"
import TodoCard from "./components/TodoCard"
import AppStatusBar from "./components/AppStatusBar"
import AppBar from "./components/AppBar"
export interface Props {

}

interface State {

}

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppStatusBar />
                <View style={styles.container}>
                    <AppBar />
                    <TodoCard todo="task to do" isDone={false}></TodoCard>
                </View>
            </View >


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Color.LIGHT_GRAY,
    },
});