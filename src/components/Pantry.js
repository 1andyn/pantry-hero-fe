import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import {
    Button,
    Paper,
    Tabs,
    Tab
} from '@material-ui/core/';


import { DataGrid } from 'tubular-react';
import { createColumn } from "tubular-common";

import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import pantryActions from '../actions'

const Pantry = () => {
    const {
        user,
    } = useAuth0();

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
        },
    });

    const pantry_data = useSelector(state => state.pantry);

    const columns = [
        createColumn('Ingredient'),
        createColumn('Quantity'),
        createColumn('Unit'),
        createColumn('Purchase Date'),
        createColumn('Expiration Date'),
        createColumn('Location')
    ];


    const dispatch = useDispatch();
    const addSampleData = (ingred) => dispatch(pantryActions.pantryActions.addIngredient(ingred))

    const TestData = () => (
        addSampleData({
            Ingredient: 'Tomatoes',
            Quantity: 4,
            Unit: 'Count',
            'Purchase Date': '08-10-2020',
            'Expiration Date': '08-22-2020',
            Location: 'Fridge'
        }),
        addSampleData({
            Ingredient: 'Ice Cream',
            Quantity: 4,
            Unit: 'Bars',
            'Purchase Date': '08-10-2020',
            'Expiration Date': '03-15-2021',
            Location: 'Freezer'
        }),
        addSampleData({
            Ingredient: 'Fruity Pebbles',
            Quantity: 1,
            Unit: 'Boxes',
            'Purchase Date': '08-10-2020',
            'Expiration Date': '12-31-2020',
            Location: 'Fridge'
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

    return (
        <div className="text-center hero my-5">
            <Button variant="contained"
                color="primary"
                onClick={() => TestData()}>
                Add Test Data
            </Button>
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
