/**
 * @constructor
 * @param {number} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {Tag[]} tags
 */
export interface TodoItem {
  id: number;
  content?: string;
  isDone?: boolean;
  category?: string;
  tags?: Tag[];
}

export interface Tag {
  id: TodoItem['id'];
  tag: string;
}

export interface UpdateTag extends Pick<Tag, 'id'> {
  tagId: Tag['id'];
  tagName: Tag['tag'];
}

export interface DeleteTag extends Pick<Tag, 'id'> {
  tagId: Tag['id'];
}
