import { Container, Header, SearchForm, Section, Text } from 'components';
import { Filter } from 'components/Filter/Filter';
import { TodoList } from 'components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { selectTodo } from 'redux/selector';

export const App = () => {
  const todos = useSelector(selectTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ) : (
            <>
              <Filter />
              <TodoList />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};
