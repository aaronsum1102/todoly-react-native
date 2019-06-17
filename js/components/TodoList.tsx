import React from "react"
import { StyleSheet, FlatList } from "react-native"
import TodoCard from "./TodoCard"

interface Todo {
    id: string
    description: string
    isDone: boolean

}
export interface Props {
    todos: Todo[],
    onCardPress(): void
    onUpdateTodoStatus(id: string): void
}

export default class TodoList extends React.PureComponent<Props> {
    static defaultProps = {
        shouldShowEditCheckbox: false
    }
    _keyExtractor = (item: Todo, index: number) => item.id
    _renderItem = ({ item }: { item: Todo }) => (
        <TodoCard
            todo={item.description}
            id={item.id}
            isDone={item.isDone}
            onCardPress={this.props.onCardPress}
            updateTodoItemStatus={this.props.onUpdateTodoStatus}
        />
    )

    render() {
        return (
            <FlatList
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                data={this.props.todos}
            />
        )
    }
}

const styles = StyleSheet.create({

});