import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';


const ChoicesArray = [
    {
        value: 'Boston',
        label: 'Boston',
    },
    {
        value: 'Worcester',
        label: 'Worcester',
    },
    {
        value: 'Springfield',
        label: 'Springfield',
    },
    {
        value: 'Cambridge',
        label: 'Cambridge',
    },
    {
        value: 'Lowell',
        label: 'Lowell',
    },
    {
        value: 'Brockton',
        label: 'Brockton',
    },
];


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '18ch',
        },
        '& .MuiInputBase-root': {
            marginTop: "20px",
            fontSize: "43px",
            fontWeight: "600",
            width: "fit-content",
            boxShadow: "inset 0 -2px 0 0 #fdd0cf",
            borderBottom: "1px solid #000000",
        },
        '& .MuiFormControl-root': {
            [theme.breakpoints.down('sm')]: {
                // backgroundColor: "green",
                width: '100%',
            }
        },
        marginLeft: "0.5rem",
    },
    selectCity: {
        fontSize: "47px",
    }
}));



function Cities() {

    const classes = useStyles();

    const [city, setCity] = useState('Boston');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="city"
                    select
                    value={city}
                    onChange={handleChange}
                >
                    {ChoicesArray.map((option) => (
                        <MenuItem
                            key={option.value}
                            value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </form>
    )
}

export default Cities
