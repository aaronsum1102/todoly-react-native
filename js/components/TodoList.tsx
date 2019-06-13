import React from "react"
import { StyleSheet, FlatList } from "react-native"
import TodoCard from "./TodoCard"

interface Todo {
    id: string
    description: string
    isDone: boolean
}

export interface Props {
    todos: Todo[]
}

export default class TodoList extends React.PureComponent<Props> {
    _keyExtractor = (item: Todo, index: number) => item.id
    _renderItem = ({ item }: { item: Todo }) => (
        <TodoCard todo={item.description} id={item.id} isDone={item.isDone} />
    )

    render() {
        return (
            <FlatList<Todo>
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                data={this.props.todos}
            />
        )
    }
}

const styles = StyleSheet.create({

});