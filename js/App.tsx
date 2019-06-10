import React from "react"
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native"
import Color from "./assests/ColorEnum"
import TodoCard from "./components/TodoCard"
import AppStatusBar from "./components/AppStatusBar"

export interface Props {

}

interface State {

}

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppStatusBar />
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <TodoCard todo="task to do" isDone={false}></TodoCard>
                    </View>
                </SafeAreaView>

            </View >


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 16
    },
});