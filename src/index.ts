import { TodoItem, Tag, UpdateTag, DeleteTag, ListProps } from './interface';

export class List<T extends ListProps> {
  lists: T[];

  constructor() {
    this.lists = [];
  }

  createItem(item: T) {
    this.lists.push(item);
  }

  readItem(id: ListProps['id']) {
    return this.lists.find((list) => list.id === id);
  }

  readAllItem() {
    return this.lists;
  }

  deleteItem(id: ListProps['id']) {
    this.lists = this.lists.filter((list) => list.id !== id);
  }

  deleteAllItem() {
    this.lists = [];
  }
}

class Todo {
  readonly id: ListProps['id'];
  content?: string;
  isDone?: boolean;
  category?: string;
  tags?: Tag[];

  constructor({ id, content, isDone, category, tags }: TodoItem) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
    this.category = category;
    this.tags = tags;
  }
}

class TodoList extends List<Todo> {
  todoLists: Todo[];

  constructor() {
    super();
    this.todoLists = [];
  }

  createTodo({ id, content, isDone, category, tags }: TodoItem) {
    const todo = new Todo({ id, content, isDone, category, tags });
    this.todoLists.push(todo);
  }

  updateTodo({ id, content, isDone, category, tags }: TodoItem) {
    const todoList = this.todoLists.find((todoList) => todoList.id === id);
    const index = this.todoLists.findIndex((todoList) => todoList.id === id);

    if (!todoList) {
      throw new Error('todoList가 존재하지 않습니다.');
    }

    this.todoLists[index] = {
      ...todoList,
      content: content ?? todoList.content,
      isDone: isDone ?? todoList.isDone,
      category: category ?? todoList.category,
      tags: tags ?? todoList.tags,
    };
  }

  updateTags({ id, tagId, tagName }: UpdateTag) {
    const todoList = this.todoLists.find((todoList) => todoList.id === id);
    const todoIndex = this.todoLists.findIndex(
      (todoList) => todoList.id === id
    );

    if (!todoList) {
      throw new Error('todoList가 존재하지 않습니다.');
    }

    const tags = this.todoLists[todoIndex].tags;

    const newTags = tags?.map((tag) =>
      tag.id === tagId ? { ...tag, tag: tagName } : tag
    );

    this.todoLists[todoIndex] = {
      ...todoList,
      tags: newTags,
    };
  }

  deleteTag({ id, tagId }: DeleteTag) {
    const todoList = this.todoLists.find((todoList) => todoList.id === id);
    const todoIndex = this.todoLists.findIndex(
      (todoList) => todoList.id === id
    );

    if (!todoList) {
      throw new Error('todoList가 존재하지 않습니다.');
    }

    const tags = this.todoLists[todoIndex].tags;

    this.todoLists[todoIndex] = {
      ...todoList,
      tags: tags?.filter((tag) => tag.id !== tagId),
    };
  }

  deleteAllTag(id: ListProps['id']) {
    const todoList = this.todoLists.find((todoList) => todoList.id === id);
    const todoIndex = this.todoLists.findIndex(
      (todoList) => todoList.id === id
    );

    if (!todoList) {
      throw new Error('todoList가 존재하지 않습니다.');
    }

    this.todoLists[todoIndex] = {
      ...todoList,
      tags: [],
    };
  }
}

const todoList = new TodoList();
const todo = new Todo({
  id: 1,
  content: '동영상 강의 보기',
  isDone: true,
  category: '공부',
  tags: [
    {
      id: 1,
      tag: '0904',
    },
    {
      id: 2,
      tag: '2022',
    },
  ],
});

const todo2 = new Todo({
  id: 2,
  content: '책 읽기',
  isDone: false,
  category: '일상',
  tags: [
    {
      id: 1,
      tag: '0908',
    },
    {
      id: 2,
      tag: '2022',
    },
  ],
});

todoList.createTodo(todo);
todoList.createTodo(todo2);

todoList.readAllItem();
todoList.readItem(2);

todoList.updateTodo({
  id: 1,
  isDone: true,
});

todoList.updateTags({ id: 1, tagId: 1, tagName: 'hihihi' });

todoList.deleteItem(2);
todoList.deleteAllItem();

todoList.deleteTag({
  id: 1,
  tagId: 1,
});

todoList.deleteAllTag(1);

/**
 * @function
 * @name createTodo
 * @description Todo 생성
 * @param {number} id
 * @param {string} content
 * @param {boolean} [isDone=false]
 * @param {string} [category=null]
 * @param {Tag[]} [tags=[]]
 */

export const createTodo = ({ id, content, isDone, category, tags }) => {};

/**
 * @function
 * @name readTodo
 * @description 특정 id의 Todo 조회
 * @param {number} id
 * @returns {object}
 */
export const readTodo = (id) => {};

/**
 * @function
 * @name readAllTodo
 * @description 모든 Todo 조회
 * @returns {object}
 */
export const readAllTodo = () => {};

/**
 * @function
 * @name updateTodo
 * @description 특정 Id Todo update
 * @param {number} id
 * @param {string} [content]
 * @param {boolean} [isDone]
 * @param {string} [category]
 * @param {Tag[]} [tags]
 */

export const updateTodo = ({ id, content, isDone, category, tags }) => {};

/**
 * @function
 * @name updateTodo
 * @description 특정 Todo의 특정 tag 수정
 * @param {number} id
 * @param {number} tagId
 * @param {string} tag
 */
export const updateTags = ({ id, tagId, tag }) => {};

/**
 * @function
 * @name deleteTodo
 * @description 특정 id Todo 삭제
 * @param {number} id
 */
export const deleteTodo = (id) => {};

/**
 * @function
 * @name deleteTodo
 * @description 모든 Todo 삭제
 */
export const deleteAllTodo = () => {};

/**
 * @function
 * @name deleteTag
 * @description 특정 Todo의 특정 tag 삭제
 * @param {number} id
 * @param {number} tagId
 */
export const deleteTag = ({ id, tagId }) => {};

/**
 * @function
 * @name deleteAllTag
 * @description 특정 Todo의 모든 tag 삭제
 * @param {number} id
 */
export const deleteAllTag = (id) => {};
