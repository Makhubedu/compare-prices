import React,{useState} from 'react';
import SearchBar from "material-ui-search-bar";
import Carousel from 'react-material-ui-carousel';


import './Search.css';

function Search({handleSearch}) {
    const[data,setData] = useState('');

    return (
        <div>
            <div className="headers">
                <Carousel
                            animation="slice"
                            timeout={800}
                            autoPlay={true}
                            navButtonsAlwaysVisible={false}
                            startAt={1}
                            
                        >
            
            <img 
           
                title="Shoprite ZA" 
                alt="Shoprite ZA" 
                className="lazyloaded" 
                src="https://alspecsfarms.com/wp-content/uploads/2019/10/1163570.png"
               />
               <img 
                title="Shoprite ZA" 
                alt="Shoprite ZA" 
                className="lazyloaded" 
                src="https://assets-global.website-files.com/5d1e3ea9fdd1ef2aa86a1530/5d34f634d1cb7f0768374883_game%20logo.png"
               />
               <img 
                title="Shoprite ZA" 
                alt="Shoprite ZA" 
                className="lazyloaded" 
                src="https://www.marklives.com/wp-content/uploads/PnP-logo-slider-770x350.jpg"
               />
               <img 
                title="Shoprite ZA" 
                alt="Shoprite ZA" 
                className="lazyloaded" 
                src="https://www.pronature.co.za/wp-content/uploads/2019/08/checkers_20170623125840_large.jpg"
                />
                <img 
                title="Shoprite ZA" 
                alt="Shoprite ZA" 
                className="lazyloaded"
                
                
                src="https://ilovefourways.co.za/wp-content/uploads/2019/10/Makro-Logo-2.gif"/>
            </Carousel>


            </div>
            <SearchBar
                value={data}
                onChange={(value) =>{setData(value)}}
                onRequestSearch={() => {
                    handleSearch(data)
                }}
            />
            
        </div>
    )
}

export default Search
