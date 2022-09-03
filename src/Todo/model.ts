import { ITag, ITodo } from './interface';

/**
 * @description Todo model
 */
class Todo implements ITodo {
  id: number;
  content: string;
  isDone: boolean;
  category: string;
  tags?: ITag[];

  constructor({ id, content, isDone, category, tags }: ITodo) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
    this.category = category;
    this.tags = tags;
  }
}

const todo = new Todo({
  id: 1,
  content: 'read book',
  isDone: false,
  category: 'study',
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
