/**
 * @constructor
 * @param {number} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {string[]} tags
 */
export interface ITodo {
  id: number;
  content: string;
  isDone: boolean;
  category: string;
  tags?: string[];
}
