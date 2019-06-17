import { observable, computed, action } from "mobx"

interface Todo {
    id: string
    description: string
    isDone: boolean

}

class TodoStore {
    @observable allTodos: Todo[] = []

    @computed get todos(): Todo[] {
        return this.allTodos.filter(todo => todo.isDone === false)
    }

    @computed get completedTodos(): Todo[] {
        return this.allTodos.filter(todo => todo.isDone === true)
    }

    @action
    addTodo(value: string) {
        let newTodo: Todo = {
            id: `${value}${this.allTodos.length}`,
            description: value,
            isDone: false
        }
        this.allTodos.unshift(newTodo)
    }

    @action
    updateTodoStatus(id: string) {
        this.allTodos.forEach(todo => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone
            }
        });
    }

    @action
    clearCompletedTodo() {
        this.allTodos = this.allTodos.filter(todo => todo.isDone === false)
        console.warn(this.allTodos)
    }
}

const todoStore = new TodoStore()
export default todoStore