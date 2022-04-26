import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumpUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts.js';

import useStyles from './style.js';

function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
        <div className={classes.overlay}>
          <Typography variant='h6'>{post.creator}</Typography>
          <Typography variant='h6'>{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button 
          style={{color: "white"}} 
          size="small" 
          onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color='textSecondary'>{post.tags.map((tag) => `#${tag}`)}</Typography>
        </div>
        <CardContent>
          <Typography className={classes.title} variant="h5" gutterBotttom>{post.title}</Typography>
          <Typography variant="body2" component="p" color="textSecondary">{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
            <ThumpUpAltIcon fontSize="small" />
           &nbsp; Like &nbsp;
            {post.likeCount}
          </Button>
          <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> &nbsp;
            Delete
          </Button>
        </CardActions>
      </Card>
      )
}

export default Post;