const columns = [
    {
        field: "ingredient_id",
        type: "number",
        headerName: "Id",
        hide: true,
        flex: 1,
    },
    {
        field: "type",
        type: "string",
        headerName: "Ingredient",
        filterable: true,
        searchable: true,
        flex: 1,
    },
    {
        field: "quantity",
        type: "string",
        headerName: "Quantity",
        filterable: true,
        searchable: true,
        flex: 1,
    },
    {
        field: "unit",
        type: "string",
        headerName: "Unit",
        filterable: true,
        searchable: true,
        flex: 1,
    },
    {
        field: "purchase_date",
        type: "date",
        headerName: "Purchase Date",
        filterable: true,
        searchable: true,
        flex: 1,
    },
    {
        field: "expiration_date",
        type: "date",
        headerName: "Expiration Date",
        filterable: true,
        searchable: true,
        flex: 1,
    },
    {
        field: "location",
        type: "string",
        headerName: "Location",
        filterable: true,
        searchable: true,
        flex: 1,
    },
];

export default columns;
