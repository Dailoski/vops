import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { Fetch } from './Fetch';
import { fetchObjects } from './api';
import { Chip } from '@material-ui/core';
import styled from 'styled-components'

const CustomChip = styled(Chip)`
    &&{height: auto;
    max-height: none;
    padding: 3px;
    }
    span{
        width: 100%;
        word-wrap: break-word;
        white-space: initial;
        font-size: 0.7rem;
    }

`

function enclosingFn({ limit,
    api,
    placeholder,
    selectedItems,
    add,
    addToShop,
    remove,
    removeFromShop,
    wherePart
}) {

    function renderInput(inputProps) {
        const { InputProps, classes, ref, ...other } = inputProps;

        return (
            <TextField

                InputProps={{
                    inputRef: ref,
                    classes: {
                        root: classes.inputRoot,
                    },
                    ...InputProps,
                }}
                {...other}
            />
        );
    }

    function renderSuggestion({ suggestion, index, itemProps, highlightedIndex }) {
        const isHighlighted = highlightedIndex === index;
        const isSelected = ('').indexOf(suggestion.acTextToShow) > -1;

        return (
            <MenuItem
                {...itemProps}
                key={suggestion.acTextToShow}
                selected={isHighlighted}
                component="div"
                style={{
                    marginRight: "0",
                    height: "auto",
                    maxHeight: "none",
                    wordWrap: "break-word",
                    whiteSpace: "initial",
                    fontSize: "0.7rem",
                    fontWeight: isSelected ? 500 : 400
                }}
            >
                {suggestion.acTextToShow}
            </MenuItem>
        );
    }
    renderSuggestion.propTypes = {
        highlightedIndex: PropTypes.number,
        index: PropTypes.number,
        itemProps: PropTypes.object,
        suggestion: PropTypes.shape({ acTextToShow: PropTypes.string }).isRequired,
    };

    function getSuggestions(inputValue, suggestions, limit) {
        let count = 0;

        return suggestions.filter((suggestion) => {
            const keep = count < limit;

            if (keep) {
                count += 1;
            }

            return keep;
        });
    }

    class DownshiftMultiple extends React.Component {
        state = {
            inputValue: '',
            selectedItems,
        };

        handleKeyDown = (event) => {
            const { inputValue, selectedItems } = this.state
            if (selectedItems.length && !inputValue.length && keycode(event) === 'backspace') {

                remove(selectedItems[selectedItems.length - 1].id, wherePart)
                removeFromShop(wherePart) // selectedItems[selectedItems.length - 1].id)
            }
        };

        handleInputChange = (event) => {
            this.setState({ inputValue: event.target.value });
        };

        handleSelect = (item, downshift) => {
            this.setState(
                ({ inputValue }) => ({ inputValue: '' }),
                () => {
                    downshift.reset()
                    add(item, wherePart)
                    addToShop(wherePart)
                    // scroll() - todo - to be disconnected from advertising banner, to be injected as callback (like add, addToShop, etc.)
                },
            )
        }

        handleDelete = item => () => {

            const { selectedItems } = this.state
            const index = selectedItems.indexOf(item)

            if (index > -1) {
                remove(selectedItems[index].id, wherePart)
                removeFromShop(wherePart) // selectedItems[index].id)
            }
        }

        render() {
            const { classes } = this.props;
            const { inputValue, selectedItems } = this.state;

            return (
                <Downshift inputValue={inputValue} onSelect={this.handleSelect} itemToString={item => (item ? item.acTextToShow : '')}>
                    {({ getInputProps, getItemProps, isOpen, inputValue: inputValue2, highlightedIndex, clearItems, setHighlightedIndex, }) => (
                        <div className={classes.container}>
                            {renderInput({
                                fullWidth: true,
                                classes,
                                InputProps: getInputProps({
                                    startAdornment: selectedItems.map(item => (
                                        <CustomChip key={item.acTextToShow || item.id} tabIndex={-1} label={item.acTextToShow || item.id} className={classes.chip} onDelete={this.handleDelete(item)} />
                                    )),
                                    onChange: this.handleInputChange,
                                    onKeyDown: this.handleKeyDown,
                                    placeholder: placeholder,
                                    autoComplete: "off",
                                    id: 'integration-downshift-multiple',
                                }),
                            })}
                            {isOpen ? (
                                <Fetch
                                    searchValue={inputValue}
                                    omitItems={selectedItems}
                                    limit={limit}
                                    api={api}
                                    fetchObjects={fetchObjects}
                                    onLoaded={() => {
                                        clearItems()
                                        setHighlightedIndex(0)
                                    }}
                                    render={({ loading, objects, error }) => (
                                        <div>
                                            {loading ? (
                                                <div>loadign...</div>
                                            ) : error ? (
                                                <div>error...</div>
                                            ) : objects.length ? (
                                                <Paper className={classes.paper} square>
                                                    {getSuggestions(inputValue2, objects, limit).map((suggestion, index) =>
                                                        renderSuggestion({
                                                            suggestion,
                                                            index,
                                                            itemProps: getItemProps({ item: suggestion }),
                                                            highlightedIndex,
                                                        }),
                                                    )}
                                                </Paper>
                                            ) : (
                                                            <div>no results...</div>
                                                        )}
                                        </div>
                                    )}
                                />
                            ) : null}
                        </div>
                    )}
                </Downshift>
            );
        }
    }

    DownshiftMultiple.propTypes = {
        classes: PropTypes.objectOf(PropTypes.any),
    };

    const styles = theme => ({
        root: {
            flexGrow: 1,
            height: "auto",
        },
        container: {
            flexGrow: 1,
            position: 'relative',
        },
        paper: {
            width: "inherit",
            maxHeight: "300px",
            overflowY: "scroll",
            position: 'relative',
            zIndex: 1,
            marginTop: theme.spacing.unit,
            left: 0,
            right: 0,
        },
        chip: {
            maxWidth: "inherit",
            overflow: "hidden",
            fontSize: "0.5rem",
            margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
        },
        inputRoot: {
            flexWrap: 'wrap',
        },
    });

    function DownshiftIntegration(props) {
        const { classes } = props;

        return (
            <div className={classes.root}>
                <DownshiftMultiple classes={classes} />
            </div>
        );
    }

    DownshiftIntegration.propTypes = {
        classes: PropTypes.objectOf(PropTypes.any),
    };

    const Wrapped = withStyles(styles)(DownshiftIntegration);

    return <Wrapped />
}

const Autocomplete = ({
    limit, api, placeholder, selectedItems, add, addToShop, remove, removeFromShop, wherePart
}) => enclosingFn({
    limit, api, placeholder, selectedItems, add, addToShop, remove, removeFromShop, wherePart
})

export default Autocomplete;
