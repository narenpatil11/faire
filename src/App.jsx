import {useDisclosure} from '@mantine/hooks';
import {AppShell, Burger, Drawer, Group, Space, Text, TextInput} from '@mantine/core';
import './App.css'
import InputPrefixIcon from "./InputPrefixIcon.jsx";
import TodoList from "./TodoList.jsx";
import {IconCalendarEvent} from '@tabler/icons-react';
import {useContext} from 'react';
import {TodoListContext} from './ListContext';
import {useForm} from '@mantine/form';

function App() {
  const [opened, {toggle}] = useDisclosure();
  const {list, addTodo} = useContext(TodoListContext)
  const form = useForm({
    initialValues: {todoText: '',},
    validate: {
      todoText: (value) => value ? null : 'Invalid email',
    },
  });

  const enterTodo = (ev) => {
    ev.preventDefault();
    const {todoText: value} = form.values;
    addTodo({
      value,
      filter: 22123,
      "completed": false
    })
    form.reset();
  }
  return (
    <AppShell
      layout="alt"
      header={{height: 60}}
      padding="md"
    >
      <AppShell.Header bg="pale_violet.1" style={{
        borderBottomWidth: 0
      }}>
        <Group h="100%" px="lg">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
        </Group>
      </AppShell.Header>
      <Drawer opened={opened} onClose={toggle} title="Authentication">
        <Group>
          <Text>Navbar</Text>
          <InputPrefixIcon/>
        </Group>
      </Drawer>
      <AppShell.Main className="mainContainer" bg="pale_violet.1">
        <form onSubmit={enterTodo}>
          <TextInput
            size={'xl'}
            radius="lg"
            placeholder="What is your next task?"
            className="taskInput"
            leftSection={<InputPrefixIcon/>}
            leftSectionWidth={80}
            rightSection={<IconCalendarEvent color="var(--mantine-color-pale_violet-1)"/>}
            {...form.getInputProps('todoText')}
          />
        </form>
        <Space h="xl"/>
        < Space h="xl"/>
        <TodoList todoList={list}/>
      </AppShell.Main>

    </AppShell>
  )
}

export default App
