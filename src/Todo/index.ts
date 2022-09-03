/**
 * @function
 * @name createTodo
 * @description Todo 생성
 * @param {number} [id]
 * @param {string} [content]
 * @param {boolean} [isDone]
 * @param {string} [category]
 * @param {string[]} [tags=[]]
 */
export const createTodo = (id, content, isDone, category, tags) => {};

/**
 * @function
 * @name readTodo
 * @description 특정 id의 Todo 조회, 없을 경우 전체 Todo 조회
 * @param {number} [id]
 * @returns {object}
 */
export const readTodo = (id) => {};

/**
 * @function
 * @name updateTodo
 * @description 특정 Id Todo update
 * @param {number} [id]
 * @param {string} [content]
 * @param {boolean} [isDone]
 * @param {string} [category]
 * @param {string[]} [tags]
 */
export const updateTodo = (id, content, isDone, category, tags) => {};

/**
 * @function
 * @name deleteTodo
 * @description 특정 id Todo 삭제
 * @param {number} [id]
 */
export const deleteTodo = (id) => {};
