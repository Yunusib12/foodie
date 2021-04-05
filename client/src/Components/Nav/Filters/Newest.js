import React from 'react';
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
        value: 'Closets',
        label: 'Closets',
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
                    id="newest"
                    select
                    label="Newest"
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
