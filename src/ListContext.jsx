import {createContext} from 'react';
import {elementType, node, oneOfType} from 'prop-types';
import {v4 as uuidv4} from 'uuid';
import {useListState} from '@mantine/hooks';
import findIndex from 'lodash/findIndex';
import TODO_DATA from './todo.json';

const TodoListContext = createContext();

function TodoListContextProvider({children}) {
  const [list, handlers] = useListState([...TODO_DATA]);

  const addTodo = (todo) =>
    handlers.append({
      id: uuidv4(),
      ...todo,
      dateTime: new Date().getTime()
    })

  const removeTodo = (id) => {
    const index = findIndex(list, ['id', id])
    handlers.remove(index);
  }
  return <TodoListContext.Provider value={{
    addTodo,
    removeTodo,
    list
  }}>{children}</TodoListContext.Provider>;
}

TodoListContextProvider.propTypes = {
  children: oneOfType([
    node,
    elementType,
  ]),
};

export {TodoListContext, TodoListContextProvider};