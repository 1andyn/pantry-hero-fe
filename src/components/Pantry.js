import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Paper, Tabs, Tab } from "@material-ui/core/";

import { DataGrid } from "tubular-react";
import columns from "../utils/columns";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { addIngredient, setIngredients } from "../actions/pantry.js";

const Pantry = () => {
    const { user } = useAuth0();

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
        },
    });

    const pantry_data = useSelector((state) => state.pantry);

    const dispatch = useDispatch();

    const addTestData = () => {
        dispatch(
            addIngredient({
                user_id: "joesavold",
                type: "Tomatoes",
                quantity: 4,
                unit: "Count",
                purchase_date: "2020-08-10T00:00:00",
                expiration_date: "2020-08-22T00:00:00",
                location: "Fridge",
            })
        );
        dispatch(
            addIngredient({
                user_id: "joesavold",
                type: "Ice Cream",
                quantity: 4,
                unit: "Bars",
                purchase_date: "2020-08-10T00:00:00",
                expiration_date: "2020-08-15T00:00:00",
                location: "Freezer",
            })
        );
        dispatch(
            addIngredient({
                user_id: "joesavold",
                type: "Fruity Pebbles",
                quantity: 1,
                unit: "Boxes",
                purchase_date: "2020-08-11T00:00:00",
                expiration_date: "2020-12-31T00:00:00",
                location: "Fridge",
            })
        );
    };

    const PantryDisplay = () => (
        <DataGrid columns={columns} dataSource={pantry_data} gridName="Grid" />
    );

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetch("http://34.94.216.208:5000/ingredients/get/" + user.nickname)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch(setIngredients(data));
            })
            .catch(console.log);
    }, [value]);

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="text-center hero my-5">
            <Button
                variant="contained"
                color="primary"
                onClick={() => addTestData()}
            >
                Add Test Data
            </Button>

            <Button variant="contained" color="secondary" onClick={handleShow}>
                Add Ingredient
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Ingredient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Ingredient Type"
                            aria-label="Ingredient Type"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Quantity"
                            aria-label="Quantity"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Unit"
                            aria-label="Unit"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Date Purchased"
                            aria-label="Date Purchased"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Expiration Date"
                            aria-label="Expiration Date"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Location"
                            aria-label="Location"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                    >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            <br></br>
            <Paper className={classes.root + " mt-3"}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="General" />
                    <Tab label="Pantry" />
                    <Tab label="Fridge" />
                    <Tab label="Freezer" />
                </Tabs>
            </Paper>
            <PantryDisplay />
        </div>
    );
};

export default Pantry;
