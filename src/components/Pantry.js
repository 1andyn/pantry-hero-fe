import React, { Component } from "react";

import { Button, Paper, Tabs, Tab } from "@material-ui/core/";

import { DataGrid } from "tubular-react";
import columns from "../utils/columns";

import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { addIngredient, setIngredients } from "../actions/pantry.js";

class Pantry extends Component {
    constructor(props) {
        super(props);
        this.classes = {
            root: {
                flexGrow: 1,
            },
        };
    }

    handleAddIngredient(ingredient) {
        this.props.addIngredient(ingredient);
    }

    addTestData() {
        this.props.addIngredient({
            user_id: "joesavold",
            type: "Tomatoes",
            quantity: 4,
            unit: "Count",
            purchase_date: "2020-08-10T00:00:00",
            expiration_date: "2020-08-22T00:00:00",
            location: "Fridge",
        });
        this.props.addIngredient({
            user_id: "joesavold",
            type: "Ice Cream",
            quantity: 4,
            unit: "Bars",
            purchase_date: "2020-08-10T00:00:00",
            expiration_date: "2020-08-15T00:00:00",
            location: "Freezer",
        });
        this.props.addIngredient({
            user_id: "joesavold",
            type: "Fruity Pebbles",
            quantity: 1,
            unit: "Boxes",
            purchase_date: "2020-08-11T00:00:00",
            expiration_date: "2020-12-31T00:00:00",
            location: "Fridge",
        });
    }

    render() {
        return (
            <div className="text-center hero my-5">
                <Paper className={this.classes.root + " mt-3"}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.addTestData()}
                    >
                        Add Test Data
                    </Button>
                    <Tabs
                        value={this.props.display}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="General" />
                        <Tab label="Pantry" />
                        <Tab label="Fridge" />
                        <Tab label="Freezer" />
                    </Tabs>
                    <DataGrid
                        columns={columns}
                        dataSource={this.props.pantry}
                        gridName="Grid"
                    />
                </Paper>
            </div>
        );
    }

    componentDidMount() {
        fetch("http://34.94.216.208:5000/ingredients/get/magicmantis")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.setIngredients(data);
            })
            .catch(console.log);
    }
}

const mapStateToProps = (state) => {
    const { pantry, display } = state;
    return { pantry, display };
};

export default connect(mapStateToProps, { setIngredients, addIngredient })(
    Pantry
);
