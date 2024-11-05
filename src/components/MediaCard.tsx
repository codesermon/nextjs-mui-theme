import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({id, title, src, content}:{id: string, title: string; src: string, content: string}) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={src}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {content}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: "space-between"}}>
        <Button variant='outlined' color='inherit' size="small">Share</Button>
        <Button variant='outlined' color='inherit' size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
