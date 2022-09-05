
/**
 * @description Todo model
 */
class Todo {

  constructor({ id, content, isDone, category, tags }) {
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


import { ITag } from './interface';

/**
 * @function
 * @name createTodo
 * @description Todo 생성
 * @param {number} id
 * @param {string} content
 * @param {boolean} [isDone=false]
 * @param {string} [category=null]
 * @param {ITag[]} [tags=[]]
 */

// 파라미터가 많으니까 객체로 받기
export const createTodo = (id, content, isDone, category, tags) => { };

/**
 * @function
 * @name readTodo
 * @description 특정 id의 Todo 조회
 * @param {number} id
 * @returns {object}
 */
export const readTodo = (id) => { };

/**
 * @function
 * @name readAllTodo
 * @description 모든 Todo 조회
 * @returns {object}
 */
export const readAllTodo = () => { };

/**
 * @function
 * @name updateTodo
 * @description 특정 Id Todo update
 * @param {number} id
 * @param {string} [content]
 * @param {boolean} [isDone]
 * @param {string} [category]
 * @param {ITag[]} [tags]
 */

// 파라미터가 많으니까 객체로 받기
export const updateTodo = (id, content, isDone, category, tags) => { };


/**
 * @function
 * @name updateTodo
 * @description 특정 Todo의 특정 tag 수정
 * @param {number} id
 * @param {number} tagId
 * @param {string} tag
 */
export const updateTags = (id, tagId, tag) => { };

/**
 * @function
 * @name deleteTodo
 * @description 특정 id Todo 삭제
 * @param {number} id
 */
export const deleteTodo = (id) => { };

/**
 * @function
 * @name deleteTodo
 * @description 모든 Todo 삭제
 */
export const deleteAllTodo = () => { };

/**
 * @function
 * @name deleteTag
 * @description 특정 Todo의 특정 tag 삭제
 * @param {number} id
 * @param {number} tagId
 */
export const deleteTag = (id, tagId) => { };

/**
 * @function
 * @name deleteAllTag
 * @description 특정 Todo의 모든 tag 삭제
 * @param {number} id
 */
export const deleteAllTag = (id) => { };
