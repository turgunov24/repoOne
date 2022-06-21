import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./card.css"

export default function MultiActionAreaCard(props) {
    let title = props.title
    let image = props.img
    let price = props.price
  return (
    <Card sx={{ maxWidth: 270 , minHeight: 300, textAlign: 'center',  bgcolor:'#1F1D2B',color:'#fff' , marginTop:'60px' ,position:'relative' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${image}`}    
          alt="green iguana"
          sx={{position:'absolute', left:"50%" , top:"-20%", zIndex:100 , width:"100%", objectFit:"contain", borderRadius:"50%"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'start', fontSize: 20}}>
            {title}
          </Typography>
          <Typography variant="body2" >
            $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
