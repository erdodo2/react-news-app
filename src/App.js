import axios from "axios";
import { useEffect,useState } from "react";
import './App.css';

import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";

//import newsJson from './news.json'

function App() {
    const [news, setNews] = useState([])
    const apikey = 'pub_18728870c66ad4aa75ba094d83252f0405571';
    const category = window.location.pathname.replace('/','');
    const url = 'https://newsdata.io/api/1/news?apikey='+apikey+'&country=tr&language=tr &category='+category;
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
