import { appSchema, tableSchema, tableName, columnName } from "@nozbe/watermelondb"
import Todo from "./TodoModel"

export const Tables = {
    todos: (tableName<Todo>("todos"))
}

export const Columns = {
    todos: {
        id: columnName("todo_id"),
        description: columnName("description"),
        isDone: columnName("is_done")
    }
}

export const dbSchema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: Tables.todos,
            columns: [
                { name: Columns.todos.id, type: "string", isIndexed: true },
                { name: Columns.todos.description, type: "string" },
                { name: Columns.todos.isDone, type: "boolean" }
            ]
        })
    ]
})