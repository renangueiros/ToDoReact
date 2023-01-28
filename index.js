function TodoApp() {
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (text.length === 0) {
      return;
    }

    const newItem = {
      text: text,
      id: Date.now(),
    };

    setItems((items) => items.concat(newItem));
    setText("");
  }

  return (
    <div>
      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <h1>Tarefas</h1>
      </header>
      <form className="mb-5" onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="form-floating">
            <input
              id="new-todo"
              className="form-control"
              placeholder="O que precisa ser feito?"
              value={text}
              onChange={handleChange}
            />
            <label htmlFor="new-todo">O que precisa ser feito?</label>
          </div>
          <button className="btn btn-primary">Adicionar</button>
        </div>
      </form>
      <TodoList items={items} />
    </div>
  );
}

function TodoList(props) {
  return (
    <ul className="list-group">
      {props.items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

root.render(<TodoApp />);
