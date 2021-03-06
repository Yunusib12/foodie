import React from 'react';
import { makeStyles, TextField } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '18ch',
        },
        '& .MuiInputLabel-root': {
            color: "#000",
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "uppercase",
        },
    }
}));

const ChoicesArray = [
    {
        value: 'NEWEST',
        label: 'NEWEST',
    },
];

function Newest() {

    const classes = useStyles();
    const [newest, setNewest] = React.useState('N/A');

    const handleChange = (event) => {
        setNewest(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="closest"
                    select
                    label="CLOSEST"
                    value={newest}
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

export default Newest
