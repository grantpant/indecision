class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);

    this.state = {
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer',
      options: ['Get a dog', 'Feed the dog', 'Make tacos']
    };
  }
  componentDidMount() {
    // In the event that there's ivalid JSON in local storage,
    // we want to catch the error that will be thrown when we
    // try to parse it so the program doesn't crash.
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Don't crash my app, please.
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log('Component did update!');
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }
  handleAddOption(option) {
    // We're going to handle all the validation in here since
    // one of the things we want to check for is that the option
    // value isn't already on the list.
    if (!option) { // returns true if option is an empty string
      return 'Enter valid value to add item';
    } else if (this.state.options.includes(option)) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      let options = [...prevState.options];
      options.push(option);

      return { options };
    });
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handlePick() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomIndex]);
  }
  render() {
    const { title, subtitle, options } = this.state;
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <ul>
        {
          props.options.map((option, i) => {
            return <Option key={i} option={option}/>;
          })
        }
      </ul>
    </div>
  );
}

const Option = (props) => {
  return (
    <li>
      {props.option}
    </li>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    // We don't need this conditional anymore since we're handling
    // the input validation in the handleAddOption method in the
    // parent component.
    // option ? this.props.handleAddOption(option) : undefined;

    // This function returns undefined if validation passed, and
    // returns an error if validation failed.
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));