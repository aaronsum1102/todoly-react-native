import { observable, computed, action } from "mobx"
import Database from "../models/TodolyDatabase"

interface Todo {
    id: string
    description: string
    isDone: boolean
}

class TodoStore {
    private db = new Database()
    @observable allTodos: Todo[] = []

    @computed get todos(): Todo[] {
        return this.allTodos.filter(todo => todo.isDone === false)
    }

    @computed get completedTodos(): Todo[] {
        return this.allTodos.filter(todo => todo.isDone === true)
    }

    @action
    async fetchTodos() {
        this.allTodos = await this.db.getAllTodos()
    }

    @action
    async addTodo(value: string) {
        let newTodo = await this.db.putTodo(value)
        this.allTodos.unshift(newTodo)
    }

    @action
    async updateTodoStatus(id: string) {
        let result = await this.db.updateTodo(id)
        let todo = this.allTodos.find(todo => todo.id === id)
        if (todo) {
            todo.isDone = !todo.isDone
        }
    }

    @action
    async clearCompletedTodo() {
        await this.db.deletedAllCompleteTodo()
        this.allTodos = this.allTodos.filter(todo => todo.isDone === false)
    }
}

const todoStore = new TodoStore()
export default todoStore