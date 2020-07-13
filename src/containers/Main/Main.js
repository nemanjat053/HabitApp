import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

import "./Main.css";

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <h2>Make a habit</h2>
                <FormControl>
                    <InputLabel htmlFor="my-input">Input your habit</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor="my-input">How much hours</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor="my-input">Description</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br />
                <Button variant="contained" color="primary">
                    Save
                </Button>
            </div>
        )
    }
}