"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IndecisionApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).call(this, props));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.state = {
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer',
      options: ['Get a dog', 'Feed the dog', 'Make tacos']
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // In the event that there's ivalid JSON in local storage,
      // we want to catch the error that will be thrown when we
      // try to parse it so the program doesn't crash.
      try {
        var options = JSON.parse(localStorage.getItem('options'));

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {// Don't crash my app, please.
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        console.log('Component did update!');
        localStorage.setItem('options', JSON.stringify(this.state.options));
      }
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      // We're going to handle all the validation in here since
      // one of the things we want to check for is that the option
      // value isn't already on the list.
      if (!option) {
        // returns true if option is an empty string
        return 'Enter valid value to add item';
      } else if (this.state.options.includes(option)) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        var options = _toConsumableArray(prevState.options);

        options.push(option);
        return {
          options: options
        };
      });
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomIndex = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomIndex]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          title = _this$state.title,
          subtitle = _this$state.subtitle,
          options = _this$state.options;
      return React.createElement("div", null, React.createElement(Header, {
        title: title,
        subtitle: subtitle
      }), React.createElement(Action, {
        hasOptions: options.length > 0,
        handlePick: this.handlePick
      }), React.createElement(Options, {
        options: options,
        handleDeleteOptions: this.handleDeleteOptions
      }), React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement("div", null, React.createElement("h1", null, props.title), React.createElement("h2", null, props.subtitle));
};

var Action = function Action(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.handlePick,
    disabled: !props.hasOptions
  }, "What should I do?"));
};

var Options = function Options(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.handleDeleteOptions
  }, "Remove All"), React.createElement("ul", null, props.options.map(function (option, i) {
    return React.createElement(Option, {
      key: i,
      option: option
    });
  })));
};

var Option = function Option(props) {
  return React.createElement("li", null, props.option);
};

var AddOption =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim(); // We don't need this conditional anymore since we're handling
      // the input validation in the handleAddOption method in the
      // parent component.
      // option ? this.props.handleAddOption(option) : undefined;
      // This function returns undefined if validation passed, and
      // returns an error if validation failed.

      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.state.error && React.createElement("p", null, this.state.error), React.createElement("form", {
        onSubmit: this.handleAddOption
      }, React.createElement("input", {
        type: "text",
        name: "option"
      }), React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
