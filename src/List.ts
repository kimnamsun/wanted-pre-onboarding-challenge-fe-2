interface ListProps {
  id: number;
}

export class List<T extends ListProps> {
  lists: T[];

  constructor() {
    this.lists = [];
  }

  createItem(item: T) {
    this.lists.push(item);
  }

  readTodo(id: ListProps['id']) {
    return this.lists.find((list) => list.id === id);
  }

  readAllTodo() {
    return this.lists;
  }

  deleteTodo(id: ListProps['id']) {
    this.lists = this.lists.filter((todoList) => todoList.id !== id);
  }

  deleteAllTodo() {
    this.lists = [];
  }
}
