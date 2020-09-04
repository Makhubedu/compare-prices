import React,{useState,useEffect} from 'react';
import CardTinder from 'react-tinder-card'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Main.css';


function TinderCard({game,shoprite,picknpay,makro,checkers,isInitial}) {
    const[gameData, setGameData] = useState([])
    const[shopriteData, setShopriteData] = useState([])
    const[picknpayData, setPicknpayData] = useState([])
    const[checkersData, setCheckersData] = useState([])
    const[makroData, setMakroData] = useState([])

    useEffect(() =>{
        setGameData(game)
        setShopriteData(shoprite)
        setPicknpayData(picknpay)
        setCheckersData(checkers)
        setMakroData(makro)
    },[picknpay,game,checkers,makro,shoprite])
            const onSwipe = (direction) => {
            console.log('You swiped: ' + direction)
        }
        
        const onCardLeftScreen = (myIdentifier) => {
            console.log(myIdentifier + ' left the screen')
        }
        

    return (
        <div className="container">

        <div className="first">
        <div className="game">
        <img 
                title="Shoprite ZA" 
                alt="Shoprite ZA" 
                className="lazy" 
                src="https://assets-global.website-files.com/5d1e3ea9fdd1ef2aa86a1530/5d34f634d1cb7f0768374883_game%20logo.png"
               />
        {gameData.map((item,i)=>(
            
            <CardTinder 
                onSwipe={onSwipe} 
                className="swipe-game"
                onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
                preventSwipe={['up','down']}
                >
                <Card className="root" key={i}>
                <CardActionArea>
                    <CardMedia
                    className="media"
                    image={item.image}
                    title={item.name}
                    />
                    <CardContent>
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
                    Game
                    </Button>
                </CardActions>
                </Card>
                </CardTinder>
                

                ))}
                </div>
                

                {/** The secound cards */}
                <div className="checkers">
                <img 
                title="Shoprite ZA" 
                alt="Shoprite ZA" 
                className="lazy" 
                src="https://www.pronature.co.za/wp-content/uploads/2019/08/checkers_20170623125840_large.jpg"
                />
            {checkersData.map((item,i)=>(
            
            <CardTinder 
                onSwipe={onSwipe} 
                className="swipe-checkers"
                onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
                preventSwipe={['up', 'down']}>
                <Card className="root" key={i}>
                <CardActionArea>
                    <CardMedia
                    className="media"
                    image={item.image}
                    title={item.name}
                    />
                    <CardContent>
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
                    Checkers
                    </Button>
                </CardActions>
                </Card>
                </CardTinder>
                

                ))}
                </div>
                
                {/**The this cards */}
                

                <div className="shoprite"> 
                <img 
           
                title="Shoprite ZA" 
                alt="Shoprite ZA" 
                className="lazy" 
                src="https://alspecsfarms.com/wp-content/uploads/2019/10/1163570.png"
               />
            {shopriteData.map((item,i)=>(
                
            <CardTinder 
                onSwipe={onSwipe} 
                className="swipe-shoprite"
                onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
                preventSwipe={['up', 'down']}>
                <Card className="root" key={i}>
                <CardActionArea>
                    <CardMedia
                    className="media"
                    image={item.image}
                    title={item.name}
                    />
                    <CardContent>
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
                    Shoprite
                    </Button>
                </CardActions>
                </Card>
                </CardTinder>
                

                ))}
                </div>
                </div>

                {/** The fourth acrds */}
                <div className="second">
                <div className="picknpay">
                <img 
                title="Shoprite ZA" 
                alt="Shoprite ZA" 
                className="lazy" 
                src="https://www.marklives.com/wp-content/uploads/PnP-logo-slider-770x350.jpg"
               />
                {picknpayData.map((item,i)=>(
                    
            <CardTinder 
                onSwipe={onSwipe} 
                className="swipe-picknpay"
                onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
                preventSwipe={['up', 'down']}>
                <Card className="root" key={i}>
                <CardActionArea>
                    <CardMedia
                    className="media"
                    image={item.image}
                    title={item.name}
                    />
                    <CardContent>

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
                    Pick N Pay
                    </Button>
                </CardActions>
                </Card>
                </CardTinder>
                

                ))}
                </div>
                
                {/** Last data */}
                <div className="makro">
                <img 
                title="Shoprite ZA" 
                alt="Shoprite ZA" 
                className="lazy"
                
                
                src="https://ilovefourways.co.za/wp-content/uploads/2019/10/Makro-Logo-2.gif"/>
                {makroData.map((item,i)=>(
                    
            <CardTinder 
                onSwipe={onSwipe} 
                className="swipe-makro"
                onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
                preventSwipe={['up', 'down']}>
                <Card className="root" key={i}>
                <CardActionArea>
                    <CardMedia
                    className="media"
                    image={item.image}
                    title={item.name}
                    />
                    <CardContent>
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
                    Makro
                    </Button>
                </CardActions>
                </Card>
                </CardTinder>
                

                ))}
                </div>
                </div>
                
            
         </div>
    )
}

export default TinderCard
