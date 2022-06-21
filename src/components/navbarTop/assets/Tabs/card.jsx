import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./card.css"
import { Translate } from '@mui/icons-material';

export default function MultiActionAreaCard(props) {
    let title = props.title
    let image = props.img
    let price = props.price
  return (
    <Card sx={{ maxWidth: 270 , minHeight: 300, textAlign: 'center',  bgcolor:'#1F1D2B',color:'#fff' , marginTop:'60px' ,position:'relative' }}>
        <CardMedia
          component="img"
          height="140"
          image={`${image}`}    
          alt="green iguana"
          className='cardMedia'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'start', fontSize: 20}}>
            {title}
          </Typography>
          <Typography variant="body2" >
            $ {price}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
