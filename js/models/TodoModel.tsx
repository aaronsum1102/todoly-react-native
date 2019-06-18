import { Model } from "@nozbe/watermelondb"
import { field, action } from '@nozbe/watermelondb/decorators'
import { Tables, Columns } from "./dbSchema"

interface Todo {
    id: string
    description: string
    isDone: boolean
}

const Column = Columns.todos

export default class TodoModel extends Model {
    static table = Tables.todos

    @field(Column.description)
    description!: string
    @field(Column.isDone)
    isDone!: boolean

    get(): Todo {
        return {
            id: this.id,
            description: this.description,
            isDone: this.isDone
        }
    }

    @action async updateTodoStatus(todo: this): Promise<void> {
        await this.update(() => {
            todo.isDone = !todo.isDone
        })
    }
}