import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Button } from "@material-ui/core";

import 'date-fns';
import Grid from '@material-ui/core/Grid';

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';


const setValue = (i, attrib, value) => {
};

const Ingredient = (props) => {
    const [ingredient, setIngredient] = useState({});

    return (
        <Modal show={props.show} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Ingredient</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Ingredient Type"
                        aria-label="Ingredient Type"
                        aria-describedby="basic-addon1"
                        onChange={event=>setIngredient({ ...ingredient, type: event.target.value})}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        type="number"
                        placeholder="Quantity"
                        aria-label="Quantity"
                        aria-describedby="basic-addon1"
                        onChange={event=>setIngredient({...ingredient, quantity: event.target.value})}
                    />
                </InputGroup>
                
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Unit"
                        aria-label="Unit"
                        aria-describedby="basic-addon1"
                        onChange={event=>setIngredient({...ingredient, unit: event.target.value})}
                    />
                </InputGroup>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container>
                        <KeyboardDatePicker
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="purchase-date-picker"
                        label="Purchase Date"
                        value={ingredient.purchase_date}
                        onChange={date=>setIngredient({...ingredient, purchase_date: date})}
                        />
                    </Grid>
                    <Grid container>
                        <KeyboardDatePicker
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="expiration-date-picker"
                        label="Expiration Date"
                        value={ingredient.expiration_date}
                        onChange={date=>setIngredient({...ingredient, expiration_date: date})}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Location"
                        aria-label="Location"
                        aria-describedby="basic-addon1"
                        onChange={event=>setIngredient({...ingredient, location: event.target.value})}
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="contained" onClick={props.onClose}>
                    Close
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.onAdd(ingredient)}
                >
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Ingredient;
