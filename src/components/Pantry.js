import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Paper, Tabs, Tab } from "@material-ui/core/";

import { DataGrid } from "tubular-react";
import { createColumn } from "tubular-common";

import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import pantryActions from "../actions";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Pantry = () => {
  const { user } = useAuth0();

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

  const pantry_data = useSelector((state) => state.pantry);

  const columns = [
    createColumn("Ingredient"),
    createColumn("Quantity"),
    createColumn("Unit"),
    createColumn("Purchase Date"),
    createColumn("Expiration Date"),
    createColumn("Location"),
  ];

  const dispatch = useDispatch();
  const addSampleData = (ingred) =>
    dispatch(pantryActions.pantryActions.addIngredient(ingred));

  const TestData = () => (
    addSampleData({
      Ingredient: "Tomatoes",
      Quantity: 4,
      Unit: "Count",
      "Purchase Date": "08-10-2020",
      "Expiration Date": "08-22-2020",
      Location: "Fridge",
    }),
    addSampleData({
      Ingredient: "Ice Cream",
      Quantity: 4,
      Unit: "Bars",
      "Purchase Date": "08-10-2020",
      "Expiration Date": "03-15-2021",
      Location: "Freezer",
    }),
    addSampleData({
      Ingredient: "Fruity Pebbles",
      Quantity: 1,
      Unit: "Boxes",
      "Purchase Date": "08-10-2020",
      "Expiration Date": "12-31-2020",
      Location: "Fridge",
    })
  );

  const PantryDisplay = () => (
    <DataGrid columns={columns} dataSource={pantry_data} gridName="Grid" />
  );

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="text-center hero my-5">
      <Button variant="contained" color="primary" onClick={() => TestData()}>
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
          <Button variant="contained" color="primary" onClick={handleClose}>
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
