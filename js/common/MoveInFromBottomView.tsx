import React from "react"
import { StyleSheet, Animated, Easing } from "react-native"

export interface Props {
    style?: Object
    isFromBottomToTop: boolean
    startValue: number
    endValue: number
}

interface State {
    moveAnimation: Animated.Value,
    shouldRender: boolean
}

export default class MoveInFromBottomView extends React.Component<Props, State> {
    state = {
        moveAnimation: new Animated.Value(1000),
        shouldRender: true
    }

    private moveInFromBottomAnimation() {
        let targetValue: number
        if (this.props.isFromBottomToTop) {
            targetValue = this.props.endValue
        } else {
            targetValue = this.props.startValue
        }
        Animated.timing(
            this.state.moveAnimation,
            {
                toValue: targetValue,
                duration: 800,
                easing: Easing.elastic(0.8),
            }
        ).start(
        )
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.isFromBottomToTop && !this.props.isFromBottomToTop) {
            setTimeout(
                () => this.setState({ shouldRender: false }),
                500
            )
        } else if (!prevProps.isFromBottomToTop && this.props.isFromBottomToTop) {
            this.setState({ shouldRender: true })
        }

    }

    render() {
        this.moveInFromBottomAnimation()
        let { moveAnimation } = this.state
        return (
            <Animated.View style={{ ...this.props.style, top: moveAnimation }}>
                {(this.state.shouldRender ? this.props.children : null)}
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({

});