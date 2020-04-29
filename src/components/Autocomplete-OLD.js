// *https://www.registers.service.gov.uk/registers/country/use-the-api*
//import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import propPath from 'crocks/Maybe/propPath'
import axios from 'axios';
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
const api = "https://api.donesi.rs/v2/location/places/?address=";

const getAddresses = propPath(["data","data", "addresses"])

const fetch = axios.create({
    baseURL: 'https://api.donesi.rs/v2/location/places/?address=',
    timeout: 1000,
    headers: {'accept-language': 'sr_latin'}
  });

export const AutocompleteOLD = () => {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    const [string, setString] = React.useState('');

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        debounce(async () => {
            const fetchAdress = await fetch.get(string);
            if (active) {
                setOptions(getAddresses(fetchAdress).option([]).map(adress => ({
                    name: adress.street
                })
                ))
            }
        }, 500);

        return () => {
            active = false;
        };
    }, [loading, string]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const onChange = (searchTerm) => {
        setString(searchTerm.target.value)
    }

    console.log(options)
    return (
        <Autocomplete
            id="asynchronous-demo"
            style={{ width: 300 }}
            open={open && options.length > 0}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Adress"
                    variant="outlined"
                    onChange={onChange}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                               {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}
