import React from "react";
import Navbar  from "./components/navbar";
import Hero from "./components/hero";
import HeadlineCards from "./components/headlinecards";
import Food from "./components/food";
import Category from './components/category'


function App(){
    return (
        <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
        </div>
    )
}

export default App;