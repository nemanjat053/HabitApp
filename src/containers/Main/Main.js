import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { connect } from "react-redux";

import { habitAdd, habitGet } from "../../redux/actions";

import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.habitGet();
  }

  handleNameChange(evt) {
    this.setState({ name: evt.target.value });
  }

  handleDescriptionChange(evt) {
    this.setState({ description: evt.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name && this.state.description) {
      this.props.habitAdd(null, this.state.name, this.state.description);
      window.location.reload(false);
    } else {
      alert("All inputs must be filled.");
    }
  }

  render() {
    return (
      <div className="Main">
        <h2>Make a habit</h2>
        <form className="form" onSubmit={this.handleSubmit} className="form">
          <FormControl>
            <InputLabel htmlFor="my-input">Habit name </InputLabel>
            <Input
              className="inputFields"
              id="name"
              aria-describedby="my-helper-text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            {this.state.name ? (
              ""
            ) : (
              <span className="error">Not valid name input</span>
            )}
          </FormControl>

          <br />
          <FormControl>
            <InputLabel htmlFor="my-input">Habit description</InputLabel>
            <Input
              className="inputFields"
              id="description"
              aria-describedby="my-helper-text"
              name="description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
            {this.state.description ? (
              ""
            ) : (
              <span className="error">Not valid description input</span>
            )}
          </FormControl>
          <br />
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  habits: state.habits,
});

const mapDispatchToProps = (dispatch) => {
  return {
    habitAdd: (id, habitName, description) =>
      dispatch(habitAdd(id, habitName, description)),
    habitGet: () => {
      dispatch(habitGet());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
