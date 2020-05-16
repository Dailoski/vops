import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { Autocomplete1 } from './Autocomplete';
import AutocompleteOLD from './Autocomplete-OLD';

// import Autocomplete from './autocomplete/AutoComplete';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 0,
        display: 'flex',
        marginLeft: 0,
        paddingLeft: 30,
        width: '90%',
        height: 50
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    button: {
        textTransform: "initial",
        backgroundColor: "#ffbc21",
        color: "black",
        borderRadius: 0,
        width: 190
    }
}));

export const CustomizedInputBase = () => {
    const classes = useStyles();
    const api = {
        url: "https://api.donesi.rs/v2",
        endpoint: "/location/places",
        searchTermKeys: ["address"],
        responseShape: {
            collectionKey: 'data.addresses',
            getTextToShow: obj => (obj.street + ", " + obj.region.city)  //what is displayed in autocomplete
        }
    }
    return (
        <Paper component="form" className={classes.root}>
            <IconButton disabled type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            {/* <InputBase
                className={classes.input}
                placeholder="Unesite Vašu adresu"
                inputProps={{ 'aria-label': 'search address' }}
            /> */}
            {/* <Autocomplete
                limit={10}
                api={api}
                placeholder="ADRESA"
                selectedItems={[]}
                add={() => { }}
                addToShop={() => { }}
                remove={() => { }}
                removeFromShop={() => { }}
                wherePart={""}
            /> */}
            <AutocompleteOLD />
            <Button color="primary" className={classes.button} aria-label="directions">
                Poruči sada
            </Button>
        </Paper>
    );
}