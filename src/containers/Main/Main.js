import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { connect } from "react-redux";

// Dispatch actions
import { habitAdd } from "../../redux/actions";

import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.habits[props.habits.length - 1].id,
      name: "",
      description: "",
      habits: props.habits,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(evt) {
    this.setState({ name: evt.target.value });
  }

  handleDescriptionChange(evt) {
    this.setState({ description: evt.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.habitAdd(
      Number(this.state.id) + 1,
      this.state.name,
      this.state.description
    );
    window.location.reload(false);
  }

  render() {
    return (
      <div className="Main">
        <h2>Make a habit</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="my-input">Habit name </InputLabel>
            <Input
              id="name"
              aria-describedby="my-helper-text"
              name="name"
              onChange={this.handleNameChange}
            />
          </FormControl>

          <br />
          <FormControl>
            <InputLabel htmlFor="my-input">Habit description</InputLabel>
            <Input
              id="description"
              aria-describedby="my-helper-text"
              name="description"
              onChange={this.handleDescriptionChange}
            />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
