import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { teal } from '@material-ui/core/colors';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import CardFood from "../../assets/images/paella.jpg";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 260,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    mapIcon: {
        color: teal[300],
        fontSize: "2.5rem",
    },

}));



function RestaurantCard() {

    const classes = useStyles();


    return (

        <Card className={classes.root}>
            <CardHeader
                avatar={<RoomRoundedIcon className={classes.mapIcon} />}
                title="Boston Bagel Company"
                subheader="753 Broadway, South Boston MA, 02127"
            />
            <CardMedia
                className={classes.media}
                image={CardFood}
                title="Boston Bagel Company"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="save to favorites">
                    <BookmarkBorderRoundedIcon style={{ fontSize: 30 }} />
                </IconButton>
                <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: "12px" }}>
                    Saved 2 minutes ago...
                </Typography>
            </CardActions>
        </Card>
    )
}

export default RestaurantCard
