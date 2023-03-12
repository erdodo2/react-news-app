import axios from "axios";
import { useEffect,useState } from "react";
import './App.css';

import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";



function App() {
    const [news, setNews] = useState([])
    const [headlines, setHeadlines] = useState([])
    const apikey = 'ed3d0e40f2dc4f079476843e90c4e5ed';
    const category = window.location.pathname.replace('/','');
    const [mobileAside, setMobileAside] = useState(false)

    var urlNews =`https://newsapi.org/v2/everything?q=${category}&apiKey=${apikey}`
    var urlHeadlines =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`
    const getNews = async () => {
        await axios.get(urlNews).then((response) => {
            setNews(response.data.articles)
            console.log(response.data.articles)
        })
    }
    const getHeadlines = async () => {
        await axios.get(urlHeadlines).then((response) => {
            setHeadlines(response.data.articles)
            console.log(response.data.articles)
        })
    }

    useEffect(() => {
        getNews()
        getHeadlines()
        //setNews(newsJson)
        //console.log(newsJson)

    }, [])
  return (
      <div className=" flex justify-center w-full">
          <div className="w-full dark:bg-gray-800 dark:text-white">
                <Header mobileAside={mobileAside} getMobileAside={e => setMobileAside(e)} />
                <div className="flex">
                    <Aside mobileAside={mobileAside} getMobileAside={e => setMobileAside(e)} />
                    <Main news={news} headlines={headlines} />
                </div>
          </div>
      </div>
  );
}

export default App;
