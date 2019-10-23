import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { addToCart } from '../redux/actions';
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

let SingleCheckoutItem = ({quantity, name, price, imgUrl, onDelete, add, id}) => {
  const classes = useStyles();
  //const theme = useTheme();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
                {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton onClick={() => add({id}, -1)} aria-label="previous">
            {<Remove />}
          </IconButton>
          <IconButton disabled aria-label="play/pause">
            {/* <PlayArrowIcon className={classes.playIcon} /> */}
            {quantity}
          </IconButton>
          <IconButton onClick={() => add({id}, 1)} aria-label="next">
            <Add />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={imgUrl}
        title={name}
      />
      <IconButton onClick={() => onDelete()} color="primary" aria-label="next">
            <DeleteForever />
        </IconButton>
    </Card>
  );
}

const mapStateToProps = state => ({
})


const mapDispatchToProps = dispatch => ({
    add: (item, quantity) => {
        dispatch(addToCart(item, quantity));
    }
  });

SingleCheckoutItem = connect(mapStateToProps, mapDispatchToProps)(SingleCheckoutItem)

export { SingleCheckoutItem }