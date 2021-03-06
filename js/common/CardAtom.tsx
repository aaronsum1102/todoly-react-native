import React from "react"
import { StyleSheet, View } from "react-native"
import Color from "../assests/ColorEnum"

export interface Props {
    customStyle?: Object
}

export default class CardAtom extends React.Component<Props> {
    static defaultProps = {
        customStyle: {}
    }
    render() {
        return (
            <View style={[styles.cardAtom, this.props.customStyle]}>
                <View style={styles.cardAtomWrapper}>{this.props.children}</View>
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
        backgroundColor: Color.LIGHT_GRAY,
    },
    cardAtomWrapper: {
        padding: 16,
    }
});