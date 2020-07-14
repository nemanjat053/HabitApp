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

import { habitDelete, habitGet } from "../../redux/actions";

import "./HabitList.css";

class HabitList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.habitDelete(id);
    window.location.reload(false);
  }

  componentDidMount() {
    this.props.habitGet();
  }

  render() {
    const { habits } = this.props;

    const habitsTrue = (
      <React.Fragment>
        <h4>List of your habits</h4>
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
              {habits.map((habit, index) => (
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
      </React.Fragment>
    );

    return (
      <div className="HabitList">
        {habits.length === 0 ? <h2>There is no habit</h2> : habitsTrue}
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
    habitGet: () => {
      dispatch(habitGet());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitList);
