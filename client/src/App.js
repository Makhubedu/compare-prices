import React from 'react';



import Main from './components/Main/Main';
import Search from './components/Search/Search';

class App extends React.Component{
    state = {
        shoprite : [],
        picknpay : [],
        checkers : [],
        game: [],
        makro : [],
        search : "chocolate",
        isInitial : false
    }

    componentDidMount(){
        const fetchData = async () =>{
            const data = await fetch('http://localhost:8000/api/search/makro',{
                method: 'post',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({"search":this.state.search})
                })
                let response = await data.json()
                response = response.reverse(); 
                this.setState({game : response})
            
            } 
        fetchData()  
    }

    getData = async (shop, searchTerm) => {
        const data = await fetch(`http://localhost:8000/api/search/${shop}`,{
        method: 'post',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({"search": searchTerm})
        })
        let response = await data.json()
        response = response.reverse(); 
        if (shop === "shoprite"){
                this.setState({
                shoprite :response,
            })
        }
        else if (shop ==="game"){
            this.setState({
            game :response,
            })
        }
        else if (shop === "picknpay"){
            this.setState({
            picknpay :response,
            })
        }
        else if (shop === "checkers"){
            this.setState({
            checkers :response,
            })
        }
        else{
            this.setState({
            makro :response,
            })
        }
        
        

    }
    handleSearch = (search) => {
        this.getData("shoprite", search)
        this.getData("picknpay",search)
        this.getData("checkers",search)
        this.getData("game",search)
        this.getData("makro",search)
        this.setState({isInitial:true, search})
    }


    render(){
        const {checkers,shoprite,game,picknpay,makro,isInitial, search} = this.state;
        return (
            <div>
                <Search handleSearch={this.handleSearch} />
                <Main 
                    checkers ={checkers} 
                    isInitial={isInitial}
                    shoprite={shoprite}
                    picknpay={picknpay}
                    makro={makro}
                    game={game}
                />
            </div>
        )
    }
}
export default App;