import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { addToCart } from '../redux/actions';

const useStyles = makeStyles({
    card: {
      width: "100%",
    },
    media: {
      height: 140,
    },
  });
  

let SingleBeer = ({imgUrl, name, description, volume, add, id, price}) =>{ 
    id = id
    const classes = useStyles();
    const item = {
      id,
      volume,
      name,
      price,
      imgUrl
    }
    return(
    <Card className={classes.card}>
    <CardActionArea onClick={() => add(item, 1)}>
      <CardMedia
        className={classes.media}
        image={imgUrl}
        title={name}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="h3">
          {`${volume} ${price}RSD`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button onClick={() => add(item, 1)} size="small" color="primary">
        Add 1
      </Button>
      <Button onClick={() => add(item, 5)} size="small" color="primary">
        Add 5
      </Button>
      <Button onClick={() => add(item, 10)} size="small" color="primary">
        Add 10
      </Button>
      {/* <Button size="small" color="primary">
        Learn More
      </Button> */}
    </CardActions>
  </Card>
)}

const mapStateToProps = state => ({
})


const mapDispatchToProps = dispatch => ({
  add: (item, quantity) => {
      dispatch(addToCart(item, quantity));
  }
});

SingleBeer = connect(mapStateToProps, mapDispatchToProps)(SingleBeer)

export {SingleBeer}