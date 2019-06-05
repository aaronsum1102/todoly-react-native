import React from "react"
import { StyleSheet, View } from "react-native"
import ButtonAtom, { ButtonType } from "./common/ButtonAtom"

export interface Props {

}

interface State {

}

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <ButtonAtom name="Press me" isActive={true} type={ButtonType.CONTAINED}></ButtonAtom>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});