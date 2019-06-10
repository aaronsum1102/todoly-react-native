import React from "react"
import { StyleSheet, View } from "react-native"
import Color from "../assests/ColorEnum"

export interface Props {
    content: JSX.Element[] | JSX.Element
}

export default class CardAtom extends React.Component<Props> {
    render() {
        return (
            <View style={styles.cardAtom}>
                <View style={styles.cardAtomWrapper}>
                    {this.props.content ? this.props.content : null}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardAtom: {
        borderRadius: 16,
        borderColor: Color.WHITE,
        borderStyle: "solid",
        borderWidth: 2,
        backgroundColor: Color.WHITE,
    },
    cardAtomWrapper: {
        padding: 16,
    }
});