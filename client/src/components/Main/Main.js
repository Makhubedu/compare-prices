import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Main.css';
import TinderCard from './TinderCard';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Main({game,shoprite,picknpay,makro,checkers,isInitial}) {
    console.log(shoprite)
    const[AllItems , setAllItems] = useState([])
  const classes = useStyles();

  useEffect(() =>{
      setAllItems(game)
  },[game])

if (game.length === 0){
    return (<div>Loading ....</div>)
}
if (isInitial){
      return (
          
                <TinderCard 
                    checkers ={checkers} 
                    isInitial={isInitial}
                    shoprite={shoprite}
                    picknpay={picknpay}
                    makro={makro}
                    game={game}
                />
        )
  }
  return (
    <div className="main">
        {AllItems.map((item,i)=>{
            return (
                    <Card className={classes.root} key={i}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={item.image}
                        title={item.name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        {item.price}
                        </Button>
                        <Button size="small" color="primary" >
                        {item.name}
                        </Button>
                    </CardActions>
                    </Card>
            )

        })}
        
    
    </div>

  );

  
}
