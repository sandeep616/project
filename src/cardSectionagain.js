import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from './banner-img.png';
import './App.css';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '52.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container fixed>
    <Card className={classes.card}>
   
      <CardMedia
        className={classes.media}
        image={logo}
        title="Paella dish"
      />
      <CardContent>
      <Typography className="pre-bg" variant="body2" color="textSecondary" component="h6">
           PRE CAMPAIGN
        </Typography>
      <Typography className="main-heading" variant="body2" color="textSecondary" component="h6">
           176 Camerland street The Rocks, NSW 2000
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
           Ref paella
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Typography className="clr-txt" variant="body2" color="textSecondary" component="p">
           VIEW LISTING
        </Typography>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography className="pre-bg" variant="body2" color="textSecondary" component="h6">
           PRE CAMPAIGN
        </Typography>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>      
        </CardContent>
      </Collapse>
    </Card>
    <Card className={classes.card}>      
      <CardMedia
        className={classes.media}
        image={logo}
        title="Paella dish"/>
      <CardContent>
      <Typography className="pre-bg" variant="body2" color="textSecondary" component="h6">
           PRE CAMPAIGN
        </Typography>
      <Typography className="main-heading" variant="body2" color="textSecondary" component="h6">
           176 Camerland street The Rocks, NSW 2000
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
           Ref paella
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
        <Typography className="clr-txt" variant="body2" color="textSecondary" component="p">
           VIEW LISTING
        </Typography>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography className="pre-bg" variant="body2" color="textSecondary" component="h6">
           PRE CAMPAIGN
        </Typography>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>      
        </CardContent>
      </Collapse>
    </Card>
    <Card className={classes.card}>
      
      <CardMedia
        className={classes.media}
        image={logo}
        title="Paella dish"/>
      <CardContent>
      <Typography className="pre-bg" variant="body2" color="textSecondary" component="h6">
           PRE CAMPAIGN
        </Typography>
      <Typography className="main-heading" variant="body2" color="textSecondary" component="h6">
           176 Camerland street The Rocks, NSW 2000
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
           Ref paella
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      <Typography className="clr-txt" variant="body2" color="textSecondary" component="p">
           VIEW LISTING
        </Typography>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography className="pre-bg" variant="body2" color="textSecondary" component="h6">
           PRE CAMPAIGN
        </Typography>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
      
        </CardContent>
      </Collapse>
    </Card>
    </Container>
    

    
  );
  
}



