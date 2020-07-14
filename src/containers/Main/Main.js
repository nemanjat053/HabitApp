import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { connect } from "react-redux";

// Dispatch actions
import { habitAdd, habitGet } from "../../redux/actions";

import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: Need to create id and get last id from habits
      // TODO: To create id and set it on add
      name: "",
      description: "",
      habits: [],
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

  handleSubmit(event) {
    event.preventDefault();
    this.props.habitAdd(this.state.name, this.state.description);
    alert(this.state.id);
    // window.location.reload(false);
  }

  render() {
    // TODO: Getting habits from state, from fetching data from json server
    // const { habits } = this.props;
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
    habitGet: () => {
      dispatch(habitGet());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
