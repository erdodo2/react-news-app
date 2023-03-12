import {FaBriefcase,FaGlassCheers,FaHeartbeat,FaRobot,FaBasketballBall,FaFlask,FaBook} from "react-icons/fa";
import {useState,useEffect} from "react";
import Switch from "react-switch";

export default function Aside({mobileAside, getMobileAside}) {
    const [search, setSearch] = useState("");
    const [checked, setChecked] = useState(false);
    const categories = [
        {id: 1, name: "General", key:"general",icon:<FaBook/>},
        {id: 2, name: "Sports" , key:"sports",icon:<FaBasketballBall/>},
        {id: 3, name: "Technology", key:"technology",icon:<FaRobot/>},
        {id: 4, name: "Health", key:"health",icon: <FaHeartbeat/>},
        {id: 5, name: "Science", key:"science",icon: <FaFlask/>},
        {id: 6, name: "Entertainment", key:"entertainment", icon: <FaGlassCheers/>},
        {id: 7, name: "Business", key:"business",icon:<FaBriefcase/>},
    ];
    useEffect(() => {
        if(checked){
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")
        }
    }, [checked])
    useEffect(() => {
        setSearch(window.location.pathname.replace('/',''))
    }, [])


    return(
        <div className={`${mobileAside ? "block" : "hidden"} md:block  w-72 z-[2] fixed md:relative`}>
            <div className="w-72 p-3" >
                <div className="bg-slate-100 dark:bg-slate-700 flex flex-col justify-between  w-full rounded-2xl p-2 pt-3" style={{height:"calc(100vh - 112px)"}}>

                    <ul>
                        {categories.map((category) => (
                            <li
                                key={category.id}
                                className={ (window.location.pathname == '/'+category.key ?'dark:bg-slate-600 dark:hover:bg-slate-500 hover:bg-slate-300 bg-slate-300 ':' dark:hover:bg-slate-600 hover:bg-slate-200')+ `  rounded-2xl px-3 p-2 text-xl mb-1.5 cursor-pointer`}
                                onClick={() => {window.location.pathname = '/'+category.key}}
                            >
                                <div className="flex items-center">
                                    <span className={"text-cyan-900 dark:text-cyan-400 mr-3 text-xxl "}>{category.icon}</span>
                                    <span>{category.name}</span>
                                </div>
                            </li>
                        ))}


                    </ul>

                    <div>
                        <input type="text"
                               value={search}
                               onInput={e => setSearch(e.target.value)}
                               onKeyPress={e=> {if(e.key === 'Enter') window.location.pathname = '/'+search}}
                               placeholder={"Ara..."}
                               className=" sm:hidden h-10 w-full mb-3 rounded-2xl border dark:bg-slate-600 dark:border-slate-500 text-lg p-2 px-4"/>

                        <div className="flex items-center justify-center border rounded-3xl p-1 mb-3 dark:border-slate-500">
                            <span className="text-md mr-3">Dark Mode</span>
                            <Switch height={20} width={44} className="react-switch" onChange={(e)=> setChecked(e)} checked={checked} />
                        </div>

                        <div className="flex justify-between mb-3 border rounded-3xl p-1 dark:border-slate-500">
                            <div className="flex items-center">
                                <img src="https://avatars.githubusercontent.com/u/48126890?v=4" className="h-10 rounded-full" alt="logo"  />
                                <span className="ml-2 text-xl font-medium">Erdoğan Yeşil</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}