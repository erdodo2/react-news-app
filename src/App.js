import axios from "axios";
import { useEffect,useState } from "react";
import './App.css';

import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";

//import newsJson from './news.json'

function App() {
    const [news, setNews] = useState([])
    const apikey = 'm1K8NMV1VLIGw59cuo839Apd9kxP1uzFxgN6RlRi';
    const category = window.location.pathname.replace('/','');
    var url = 'https://api.currentsapi.services/v1/latest-news?' +
        'language=us&' +
        'apiKey=AHGYlXq4UNYNFOQpesDkUtofu2gPjXupgXJQrkLjdF2CtrdI';
    const getNews = async () => {
        axios.get(url).then((response) => {
            setNews(response.data.results)
            console.log(response.data.results)
        })
    }

    useEffect(() => {
        getNews()
        //setNews(newsJson)

    }, [])
  return (
      <div className=" flex justify-center w-full">
          <div className="w-full dark:bg-gray-800 dark:text-white">
                <Header/>
                <div className="flex">
                    <Aside/>
                    <Main news={news} />
                </div>
          </div>
      </div>
  );
}

export default App;
