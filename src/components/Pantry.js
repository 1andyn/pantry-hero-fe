import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Button, Paper, Tabs, Tab } from '@material-ui/core/';

import { DataGrid } from '@material-ui/data-grid';
import columns from '../utils/columns';

//import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import pantry, { addIngredient, setIngredients } from '../actions/pantry.js';
import Ingredient from './Ingredient';

let temp_id_counter = -1;

const Pantry = (props) => {
    const { user } = props;

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
                ingredient_id: 1,
                user_id: 'joesavold',
                type: 'Tomatoes',
                quantity: 4,
                unit: 'Count',
                purchase_date: '2020-08-10T00:00:00',
                expiration_date: '2020-08-22T00:00:00',
                location: 'Fridge',
            })
        );
        dispatch(
            addIngredient({
                ingredient_id: 2,
                user_id: 'joesavold',
                type: 'Ice Cream',
                quantity: 4,
                unit: 'Bars',
                purchase_date: '2020-08-10T00:00:00',
                expiration_date: '2020-08-15T00:00:00',
                location: 'Freezer',
            })
        );
        dispatch(
            addIngredient({
                ingredient_id: 3,
                user_id: 'joesavold',
                type: 'Fruity Pebbles',
                quantity: 1,
                unit: 'Boxes',
                purchase_date: '2020-08-11T00:00:00',
                expiration_date: '2020-12-31T00:00:00',
                location: 'Fridge',
            })
        );
    };

    const PantryDisplay = () => (
        <div style={{ height: 250 }}>
            <DataGrid columns={columns} rows={pantry_data} getRowId={(row) => row.ingredient_id} gridName="Grid" />
        </div>
    );

    const classes = useStyles();

    useEffect(() => {
        fetch(`https://api.pantryhero.net/users/${user.attributes.sub}/ingredients`, {
            //mode: 'no-cors',
            headers: {
                Authorization: `Bearer ${user.signInUserSession.idToken.jwtToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                let ingredients = data.ingredients;
                console.log(ingredients);
                ingredients.forEach((i) => {
                    if ('purchase_date' in i) i.purchase_date = new Date(i.purchase_date);
                    if ('expiration_date' in i) i.expiration_date = new Date(i.expiration_date);
                });
                dispatch(setIngredients(ingredients));
            })
            .catch(console.log);
    }, [dispatch, user.nickname]);

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleAdd = (ingredient) => {
        console.log(ingredient);
        const temp_id = temp_id_counter--;
        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(ingredient)
        // }
        ingredient.ingredient_id = temp_id;
        dispatch(addIngredient(ingredient));
        setShow(false);
        // fetch("https://pdrdxhogtd.execute-api.us-west-2.amazonaws.com/prod/ingredients", requestOptions)
        //     .then(data => console.log(data));
    };
    const handleShow = () => setShow(true);

    return (
        <div className="text-center hero my-5">
            <Button variant="contained" color="primary" onClick={() => addTestData()}>
                Add Test Data
            </Button>

            <Button variant="contained" color="secondary" onClick={handleShow}>
                Add Ingredient
            </Button>

            <Ingredient onClose={handleClose} show={show} onAdd={handleAdd} />

            <br></br>
            <PantryDisplay />
        </div>
    );
};

export default Pantry;
