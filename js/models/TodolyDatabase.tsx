import { Database, Collection, Q, } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import TodoModel from "./TodoModel"
import { dbSchema, Tables } from "./dbSchema"

interface TodoInDB {
    description: string
    isDone: boolean
}

interface Todo {
    id: string
    description: string
    isDone: boolean
}

export default class TodolyDatabase {
    private database: Database
    private collection: Collection<TodoModel>

    constructor() {
        const adapter = new SQLiteAdapter({
            dbName: 'TodolyDB',
            schema: dbSchema,
        })
        this.database = new Database({
            adapter,
            modelClasses: [TodoModel],
            actionsEnabled: true
        })
        this.collection = this.database.collections.get<TodoModel>(Tables.todos)
    }

    async getAllTodos(): Promise<Todo[]> {
        let result = await this.collection.query().fetch()
        let todos: Todo[] = []
        result.forEach(todoRecord => {
            todos.push(todoRecord.get())
        })
        return todos.reverse()
    }

    async putTodo(value: string): Promise<Todo> {
        let newTodo: TodoInDB = {
            description: value,
            isDone: false
        }
        return await this.database.action(async () => {
            let record = await this.collection.create(todo => {
                todo.description = newTodo.description
                todo.isDone = newTodo.isDone
            })
            return record.get()
        })
    }

    async updateTodo(id: string): Promise<Todo> {
        const todo = await this.collection.find(id)
        todo.updateTodoStatus(todo)
        return todo
    }

    async deletedAllCompleteTodo(): Promise<void> {
        await this.database.action(async () => {
            let completedTodos = await this.collection.query(
                Q.where("is_done", true)
            ).fetch()
            completedTodos.forEach(todoModel => {
                todoModel.destroyPermanently()
            })
        })
    }
}