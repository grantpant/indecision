const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.options.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const numbers = [98, 99, 100];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      {
        numbers.map((num) => {
          return <p key={num}>Number: {num}</p>
        })
      }
      <ol>
        <li>Item One</li>
        <li>Item One</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  return template;
};

const appRoot = document.getElementById('app');

ReactDOM.render(render(), appRoot);
