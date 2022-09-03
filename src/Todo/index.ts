import { ITag } from './interface';

/**
 * @function
 * @name createTodo
 * @description Todo 생성
 * @param {number} [id]
 * @param {string} [content]
 * @param {boolean} [isDone]
 * @param {string} [category]
 * @param {ITag[]} [tags=[]]
 */
export const createTodo = (id, content, isDone, category, tags) => {};

/**
 * @function
 * @name readTodo
 * @description 특정 id의 Todo 조회
 * @param {number} [id]
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
 * @param {number} [id]
 * @param {string} [content]
 * @param {boolean} [isDone]
 * @param {string} [category]
 * @param {ITag[]} [tags]
 */
export const updateTodo = (id, content, isDone, category, tags) => {};

/**
 * @function
 * @name deleteTodo
 * @description 특정 id Todo 삭제
 * @param {number} [id]
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
 * @param {number} [id]
 * @param {number} [tagId]
 */
export const deleteTag = (id, tagId) => {};

/**
 * @function
 * @name deleteAllTag
 * @description 특정 Todo의 모든 tag 삭제
 * @param {number} [id]
 */
export const deleteAllTag = (id) => {};