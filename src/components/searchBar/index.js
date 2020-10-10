import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from "react-redux"
import { setSearch } from '../../rdx/actions/searchAction';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
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
  }
    
  }));
  
const SearchBar  = ({setSearch,search}) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.input}
        placeholder="Buscar"
        value={search}
        onChange = {e => { setSearch(e.target.value)}}
        inputProps={{ 'aria-label': 'Buscar' }}
      />
      <IconButton  className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      
      
    </Paper>
  );
}

const stateToProps = ({ search }) => ({ search });
const dispatchToProps = (dispatch) => ({
    setSearch: (value) => dispatch(setSearch(value)),
    
});

 
const conn = connect(stateToProps, dispatchToProps)

export default conn(SearchBar);