import axios from "axios";
import { useEffect,useState } from "react";
import './App.css';

import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
    const API="ed3d0e40f2dc4f079476843e90c4e5ed"
    const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API}  `
    const getNews = async () => {
        axios.get(url).then((response) => {
            console.log(response.data)
        })
    }

    useEffect(() => {
        getNews()
    }, [])
  return (
      <div className=" flex justify-center w-full">
          <div className="w-full dark:bg-gray-600">
                <Header/>
                <div className="flex">
                    <Aside/>
                    <Main/>
                </div>
          </div>
      </div>
  );
}

export default App;
