import Slider from "./Slider";
import '../css/main.css'
import moment from "moment/moment";
export default  function  Main ({news}) {
    return(
        <div className="overflow-auto w-full p-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 xxl:px-64" style={{maxHeight:"calc(100vh - 98px)"}}>
            <Slider news={news}/>
            <div className="grid grid-cols-2 my-5 gap-5">
                {
                    news.map((item,index) => {
                        return(
                            <div className="rounded-xl col-span-1 bg-slate-100 dark:bg-slate-900 ">
                                <img src={item.image_url} className="rounded-t-xl p-0" alt=""/>
                                <div className="p-3">
                                    <div className="flex justify-between my-2">
                                        <p>{moment(item.publishedAt).format("DD/MM/YYYY HH:mm")}</p>

                                    </div>

                                    <h1 className="text-3xl">{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>





        </div>
    )
}