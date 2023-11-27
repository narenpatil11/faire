import {Badge, Checkbox, Flex, Group, Paper, Text} from "@mantine/core";
import {shape, arrayOf, any, string, number, bool} from "prop-types";

const TodoList = ({todoList}) => {
  return (
    <Flex direction="column" justify="center" align="center" gap="md" w="70%">
      {
        todoList.map((todo) => (
          <Paper key={todo.id} display={'flex'} radius="lg" p="md" className="todoList--item" w="100%">
            <Group>
              <Badge color="pale_violet.3" size={"xs"}/>
              <Text span size="md" fw={600} c="gray.7">{todo.value}</Text>
            </Group>
            <Group>
              <Text span size="xs" fw={600} c="gray.6">
                {new Date(todo.dateTime).toDateString()} {new Date(todo.dateTime).toLocaleTimeString()}
              </Text>
              <Checkbox radius="lg" color="pale_violet.4" defaultChecked={todo.completed}/>
            </Group>
          </Paper>
        ))
      }
    </Flex>
  );
};
TodoList.propTypes = {
  todoList: arrayOf(shape({
    id: any,
    value: string,
    dateTime: number,
    completed: bool
  }))
}
export default TodoList;