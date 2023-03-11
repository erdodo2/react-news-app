import {FaBriefcase,FaGlassCheers,FaHeartbeat,FaRobot,FaBasketballBall,FaFlask,FaBook} from "react-icons/fa";
import {useState,useEffect} from "react";
import Switch from "react-switch";

export default function Aside() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if(checked){
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")
        }
    }, [checked])
    const categories = [
        {id: 1, name: "Tümü", key:"all",icon:<FaBook/>},
        {id: 2, name: "Spor" , key:"sports",icon:<FaBasketballBall/>},
        {id: 3, name: "Teknoloji", key:"technology",icon:<FaRobot/>},
        {id: 4, name: "Sağlık", key:"health",icon: <FaHeartbeat/>},
        {id: 5, name: "Bilim", key:"science",icon: <FaFlask/>},
        {id: 6, name: "Eğlence", key:"entertainment", icon: <FaGlassCheers/>},
        {id: 7, name: "Ticaret", key:"business",icon:<FaBriefcase/>},
        ];

    return(
        <div className="w-96  p-3 hidden md:block" >
            <div className="bg-slate-100 dark:bg-slate-700 flex flex-col justify-between  w-full rounded-2xl p-2 pt-3" style={{height:"calc(100vh - 130px)"}}>

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

                    <div className="flex items-center justify-center">
                        <span className="text-md mr-3">Karanlık Mod</span>
                        <Switch height={20} width={44} className="react-switch" onChange={(e)=> setChecked(e)} checked={checked} />
                    </div>
                    <hr className="my-4"/>
                    <div className="flex justify-between mb-3">
                        <div className="flex items-center">
                            <img src="https://avatars.githubusercontent.com/u/48126890?v=4" className="h-10 rounded-full" alt="logo"  />
                            <span className="ml-2 text-xl">Erdogan Yesil</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}