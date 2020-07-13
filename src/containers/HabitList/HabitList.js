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

import "./HabitList.css";

export default class HabbitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [
        {
          id: 1,
          name: "Habit one",
          description: "Description habit one",
        },
        {
          id: 2,
          name: "Habit two",
          description: "Description habit two",
        },
        {
          id: 3,
          name: "Habit three",
          description: "Description habit three",
        },
      ],
    };
  }

  render() {
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
