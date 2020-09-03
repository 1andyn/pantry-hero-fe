import { createColumn, ColumnDataType } from "tubular-common";

const columns = [
    createColumn("ingredient_id", {
        dataType: ColumnDataType.Numeric,
        isKey: true,
        label: "Id",
        visible: false,
    }),
    createColumn("type", {
        dataType: ColumnDataType.String,
        label: "Ingredient",
        filterable: true,
        searchable: true,
    }),
    createColumn("quantity", {
        dataType: ColumnDataType.Numeric,
        label: "Quantity",
        filterable: true,
        searchable: true,
    }),
    createColumn("unit", {
        dataType: ColumnDataType.String,
        label: "Unit",
        filterable: true,
        searchable: true,
    }),
    createColumn("purchase_date", {
        dataType: ColumnDataType.DateTime,
        label: "Purchase Date",
        filterable: true,
        searchable: true,
    }),
    createColumn("expiration_date", {
        dataType: ColumnDataType.DateTime,
        label: "Expiration Date",
        filterable: true,
        searchable: true,
    }),
    createColumn("location", {
        dataType: ColumnDataType.String,
        label: "Location",
        filterable: true,
        searchable: true,
    }),
];

export default columns;
