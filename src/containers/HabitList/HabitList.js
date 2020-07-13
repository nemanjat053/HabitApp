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

import "./HabitList.css";

class HabitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [],
    };
  }

  componentDidMount() {
    this.setState({
      habits: this.props.habits,
    });
  }

  render() {
    console.log(this.state.habits);
    return (
      <div className="HabitList">
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
              {this.state.habits.map((habit) => (
                <TableRow key={habit.id}>
                  <TableCell component="th" scope="row">
                    {habit.id}
                  </TableCell>
                  <TableCell align="center"> {habit.name}</TableCell>
                  <TableCell align="center">{habit.description}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  habits: state.habits,
});

export default connect(mapStateToProps)(HabitList);
