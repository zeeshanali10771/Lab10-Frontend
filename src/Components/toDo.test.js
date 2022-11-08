import { render, screen , cleanup} from '@testing-library/react';
import ToDo from './toDo';

test('should renders todo component', () => {
  render(<ToDo />);
  const todoElement = screen.getByTestId('todo1');
   expect(todoElement).toBeInTheDocument();
   //expect(todoElement).toHaveTextContent('Hi..');
   expect(todoElement).toHaveTextContent('Hello World!');
});