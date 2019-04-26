import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
    selectedOption: undefined
  };
  handleAddOption = (option) => {
    // We're going to handle all the validation in here since
    // one of the things we want to check for is that the option
    // value isn't already on the list.
    if (!option) { // Returns true if option is an empty string.
      return 'Enter valid value to add item';
      // Returns true is option entered already exists.
    } else if (this.state.options.includes(option)) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      let options = [...prevState.options];
      options.push(option);

      return { options };
    });
  };
  handleDeleteOption = (optionIndex) => {
    const options = this.state.options.filter((option, index) => index !== optionIndex);

    this.setState(() => ({ options }));
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handlePick = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomIndex]
    this.setState(() => ({ selectedOption }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
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
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }
  render() {
    const { title, subtitle, options } = this.state;
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <div className="container">
          <Action
            hasOptions={options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={options}
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;