import React from 'react';
import './SingleProgram.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const SingleProgram = (props) => {
    const {program, price, imageURL, _id} = props.program;
    const classes = useStyles();

    const history = useHistory();
    const handleApply = () => {
        history.push(`/apply/${_id}`)
    }

  return (
    <div className="col-md-4 mt-3 single-container">
        <Link to={`/apply/${_id}`}>
        <div style={{padding:'0px 5px'}} className="shadow p-3">
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {program}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Price : <span style={{fontSize:'26px'}}>${price}</span>
        </Button>
        <Button size="small" color="primary">
          Time : 9:00-11:00
        </Button>
        <Button size="small" color="primary" onClick={handleApply}>
          Apply
        </Button>
      </CardActions>
    </Card>
        </div>
        </Link>
    </div>
  );
};

export default SingleProgram;