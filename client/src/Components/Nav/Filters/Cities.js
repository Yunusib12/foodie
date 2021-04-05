import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '18ch',
        },
    }
}));


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
                    id="standard-select-currency"
                    select
                    label="Select your City"
                    value={city}
                    onChange={handleChange}
                >
                    {ChoicesArray.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </form>
    )
}

export default Cities
