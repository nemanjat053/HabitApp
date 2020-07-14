import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  Button,
} from "@material-ui/core";
import { connect } from "react-redux";

import { habitDelete } from "../../redux/actions";

import "./HabitList.css";

class HabitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.habitDelete(id);
  }

  componentDidMount() {
    this.setState({
      habits: this.props.habits,
    });
  }

  render() {
    const habitsTrue = (
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Habit</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.habits.map((habit, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {habit.id}
                </TableCell>
                <TableCell align="center"> {habit.name}</TableCell>
                <TableCell align="center">{habit.description}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => this.handleDelete(habit.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
    return (
      <div className="HabitList">
        <h4>List of your habits</h4>
        {this.state.habits.length === null ? (
          habitsTrue
        ) : (
          <h2>There is no habit</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  habits: state.habits,
});

const mapDispatchToProps = (dispatch) => {
  return {
    habitDelete: (id) => dispatch(habitDelete(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitList);
