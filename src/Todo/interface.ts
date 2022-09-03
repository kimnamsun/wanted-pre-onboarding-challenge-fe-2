/**
 * @constructor
 * @param {number} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {ITag[]} tags
 */
export interface ITodo {
  id: number;
  content: string;
  isDone: boolean;
  category: string;
  tags?: ITag[];
}

export interface ITag {
  id: number;
  tag: string;
}
