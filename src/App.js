//import React from 'react';
import {useEffect} from 'react';

//api key: 7249995d

const API_URL = 'http://www.omdbapi.com?apikey=7249995d'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }
    
    useEffect(() => {
        searchMovies("Tenenbaums");
    }, []);
    
    return(
        <h1>App!</h1>
    );
}

export default App;