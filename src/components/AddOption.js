import React from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
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

    // If no error, clear input box.
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form
          className="add-option"
          onSubmit={this.handleAddOption}
        >
          <input
            className="add-option__input"
            type="text"
            name="option"
          />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;