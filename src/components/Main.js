import Slider from "./Slider";
import '../css/main.css'
import moment from "moment/moment";
import {useEffect, useState} from "react";
export default  function  Main ({news}) {
    const [news1, setNews1] = useState([])
    const [news2, setNews2] = useState([])
    useEffect(() => {
        setNews1(news.slice(0,50))
        setNews2(news.slice(50,100))
    }, [news])
    return(
        <div className="overflow-auto w-full p-2 sm:px-8 md:px-16 lg:px-31 xl:px-64 xxl:px-96" style={{maxHeight:"calc(100vh - 98px)"}}>
            <Slider news={news}/>
            <div className="grid grid-cols-2 my-5 gap-5">
                <div className=" col-span-1" >
                {
                    news1.map((item,index) => {
                        return(
                            <>
                                <div className="rounded-xl bg-slate-100 dark:bg-slate-900 mb-4">
                                <img src={item.media} className="rounded-t-xl w-full p-0" alt=""/>
                                <div className="p-3">
                                    <div className="flex justify-between my-2">
                                        <p>{moment(item.published_date).format("DD/MM/YYYY HH:mm")}</p>

                                    </div>

                                    <h1 className="text-3xl">{item.title}</h1>
                                    <p>{item.summary}</p>
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
                                        <img src={item.media} className="rounded-t-xl p-0 w-full" alt=""/>
                                        <div className="p-3">
                                            <div className="flex justify-between my-2">
                                                <p>{moment(item.publishedAt).format("DD/MM/YYYY HH:mm")}</p>

                                            </div>

                                            <h1 className="text-3xl">{item.title}</h1>
                                            <p>{item.summary}</p>
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