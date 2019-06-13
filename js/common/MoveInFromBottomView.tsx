import React from "react"
import { StyleSheet, Animated, Easing } from "react-native"

export interface Props {
    style?: Object
    toValue: number
}

interface State {
    moveAnimation: Animated.Value
}

export default class MoveInFromBottomView extends React.Component<Props, State> {
    state = {
        moveAnimation: new Animated.Value(1000)
    }

    private moveInFromBottomAnimation() {
        Animated.timing(
            this.state.moveAnimation,
            {
                toValue: this.props.toValue,
                duration: 800,
                easing: Easing.elastic(0.8),
            }
        ).start()
    }

    render() {
        this.moveInFromBottomAnimation()
        let { moveAnimation } = this.state
        return (
            <Animated.View style={{ ...this.props.style, top: moveAnimation }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({

});