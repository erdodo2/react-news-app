import Slider from "./Slider";
import '../css/main.css'
import moment from "moment/moment";
import {useEffect, useState} from "react";
export default  function  Main ({news,headlines}) {
    const [news1, setNews1] = useState([])
    const [news2, setNews2] = useState([])
    useEffect(() => {
        setNews1(news.slice(0,50))
        setNews2(news.slice(50,100))
    }, [news])
    return(
        <div className="overflow-y-auto overflow-x-hidden rounded-2xl w-full p-2 sm:px-8 md:px-16 lg:px-36 xl:px-64 xxl:px-96" style={{height:"calc(100vh - 88px)"}}>
            <Slider news={headlines}/>
            <div className="grid grid-cols-2 my-5 gap-5">
                <div className=" col-span-1" >
                {
                    news1.map((item,index) => {
                        return(
                            <>
                                <div className="rounded-xl bg-slate-100 dark:bg-slate-900 mb-4">
                                <img src={item.urlToImage} className="rounded-t-xl w-full p-0" alt=""/>
                                <div className="px-3 py-1">
                                    <div className="flex justify-between mb-2 text-sm">
                                        <p>{moment(item.publishedAt).format("DD/MM/YYYY HH:mm")}</p>

                                    </div>

                                    <h1 className="text-2xl md:text-3xl">{item.title}</h1>
                                    <p className="text-sm md:text-lg">{item.content}</p>
                                </div>
                                </div>
                            </>
                        )
                    })
                }
                </div>
                <div className=" col-span-1" >
                    {
                        news2.map((item,index) => {
                            return(
                                <>
                                    <div className="rounded-xl bg-slate-100 dark:bg-slate-900 mb-4">
                                        <img src={item.urlToImage} className="rounded-t-xl w-full p-0" alt=""/>
                                        <div className="px-3 py-1">
                                            <div className="flex justify-between mb-2 text-sm">
                                                <p>{moment(item.publishedAt).format("DD/MM/YYYY HH:mm")}</p>

                                            </div>

                                            <h1 className="text-2xl md:text-3xl">{item.title}</h1>
                                            <p className="text-sm md:text-lg">{item.content}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}