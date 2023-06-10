import { Grid, GridItem, Todo } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodo } from 'redux/selector';
import { deleteTodo } from 'redux/todoSlice';

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <Todo
            id={todo.id}
            text={todo.text}
            counter={index + 1}
            onClick={() => dispatch(deleteTodo(todo.id))}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
