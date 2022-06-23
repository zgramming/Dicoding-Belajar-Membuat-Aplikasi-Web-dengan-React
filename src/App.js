import React from "react";
import ContainerFilter from "./components/ContainerFilter";
import FormTodo from "./components/FormTodos";
import ListTodos from "./components/ListTodos";

const todos = [];

class App extends React.Component {
  constructor(props) {
    super(props);

    /// Initialize Handler
    this.onAddTodos = this.onAddTodos.bind(this);
    this.onDeleteTodos = this.onDeleteTodos.bind(this);
    this.onArchiveTodos = this.onArchiveTodos.bind(this);
    this.onFilterTodos = this.onFilterTodos.bind(this);
    this.onChangeQuery = this.onChangeQuery.bind(this);

    /// Initialize State
    this.state = {
      todos: todos,
      filteredTodos: [],
      query: "",
    };
  }

  onAddTodos({ title, body }) {
    const obj = {
      id: +new Date(),
      title: title,
      body: body,
      archived: false,
      createdAt: +new Date(),
    };

    this.setState((prevState) => {
      const result = [...prevState.todos, obj];
      return {
        todos: result,
      };
    });
  }

  onDeleteTodos(id) {
    this.setState((prevState) => {
      const result = prevState.todos.filter((todo, index) => todo.id != id);
      return {
        todos: [...result],
      };
    });
  }

  onArchiveTodos(id, isArchived = true) {
    this.setState((prevState) => {
      const result = prevState.todos.map((val, index) => {
        if (val.id == id) {
          val.archived = isArchived;
          return val;
        }

        return val;
      });

      return {
        todos: [...result],
      };
    });
  }

  onFilterTodos() {
    const result = this.state.todos.filter((todo) =>
      todo.title.toLowerCase().includes(this.state.query.toLowerCase())
    );

    this.setState((prevState) => {
      return {
        filteredTodos: result,
      };
    });
  }

  onChangeQuery(event) {
    const query = event.target.value;
    this.setState({ query: query });
  }

  render() {
    const todos = this.state.todos;
    const filteredTodos = this.state.filteredTodos;
    const archivedTodos =
      this.state.query.length !== 0
        ? filteredTodos.filter((val) => val.archived == true)
        : todos.filter((val) => val.archived == true);

    const activeTodos =
      this.state.query.length !== 0
        ? filteredTodos.filter((val) => val.archived == false)
        : todos.filter((val) => val.archived == false);

    return (
      <div className="container-app">
        <FormTodo onAddTodos={this.onAddTodos} />
        <ContainerFilter
          onFilterTodos={this.onFilterTodos}
          onChangeQuery={this.onChangeQuery}
          query={this.state.query}
        />
        <ListTodos
          todos={activeTodos}
          deleteTodos={this.onDeleteTodos}
          archiveTodos={this.onArchiveTodos}
          isArchived={false}
        />
        <ListTodos
          todos={archivedTodos}
          deleteTodos={this.onDeleteTodos}
          archiveTodos={this.onArchiveTodos}
          isArchived={true}
        />
      </div>
    );
  }
}

export default App;
