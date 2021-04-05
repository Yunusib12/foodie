import { teal } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: teal[300],
        },
        common: {
            white: teal[500]
        }
    },
    // typography: {
    //     h3: {
    //         fontFamily: "Oswald",
    //         fontSize: "3.6rem",
    //         textTransform: "uppercase",
    //         letterSpacing: "-0.8px",
    //     },
    // }

});

export default theme;