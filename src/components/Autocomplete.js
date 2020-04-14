// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import propPath from 'crocks/Maybe/propPath'
import { connect } from 'react-redux';
import { selectedAddress } from '../redux/actions'

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
const api = "https://api.donesi.rs/v2/location/places/?address=";

const getAddresses = propPath(["data", "addresses"])

export const Autocomplete1 = ({ selectedAddress, addressValue }) => {
    console.log(selectedAddress, addressValue);
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    const [string, setString] = React.useState('');

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const fetchAdress = await fetch(api + string);
            await sleep(500); // For demo purposes.
            const response = await fetchAdress.json()

            if (active) {
                setOptions(getAddresses(response).option([]).map(adress => ({
                    name: adress.street
                })
                ))
            }
        })();

        return () => {
            active = false;
        };
    }, [loading, string]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const onChange = (searchTerm, value) => {
        setString(value)

    }


    return (
        <Autocomplete
            onInputChange={onChange}
            id="asynchronous-demo"
            style={{ width: 300 }}
            open={open}
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
            renderInput={(params) => console.log(params) || (
                <TextField
                    {...params}
                    label="Asynchronous"
                    variant="outlined"
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

const mapStateToProps = state => ({
    addressValue: state.location.selectedAddress
})

export default connect(mapStateToProps, {
    selectedAddress
})(Autocomplete1);