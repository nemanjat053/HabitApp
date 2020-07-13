import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

import "./Main.css";

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <h2>Make a habit</h2>
                <FormControl>
                    <InputLabel htmlFor="my-input">Habit name </InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>

                <br />
                <FormControl>
                    <InputLabel htmlFor="my-input">Habit description</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br />
                <Button variant="contained" color="primary">
                    Add
                </Button>
            </div>
        )
    }
}