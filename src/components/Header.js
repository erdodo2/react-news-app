import logo from "../logo.svg";
import {useEffect, useState} from "react";
import {TiThMenuOutline} from "react-icons/ti";
export default function Header({mobileAside, getMobileAside}) {

    const tailwind = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png";
    const erdogan = "/Erdogan.png"
    const [search, setSearch] = useState("");
    useEffect(() => {
        setSearch(window.location.pathname.replace('/',''))
    }, [])
    return (
        <header className=" w-full  p-3">
            <div className="flex justify-between p-3 bg-slate-100 dark:bg-slate-700 rounded-2xl px-6">
                <div className="flex items-center">
                    <button onClick={() => getMobileAside(!mobileAside)} className="block md:hidden text-2xl bg-slate-500/30 rounded-full p-2.5 mr-3">
                        <TiThMenuOutline/>
                    </button>

                    <a href="https://erdoganyesil.com.tr"  ><img src={erdogan} className="h-10" alt="logo"  /></a>
                    <img src={logo} className="h-10" alt="logo"  />
                    <img src={tailwind} className="h-10 mr-2" alt="logo"  />

                </div>
                <input type="text"
                       value={search}
                       onInput={e => setSearch(e.target.value)}
                       onKeyPress={e=> {if(e.key === 'Enter') window.location.pathname = '/'+search}}
                        placeholder={"Ara..."}
                       className="hidden sm:block h-10 rounded-2xl border dark:bg-slate-600 dark:border-slate-500 text-lg p-2 px-4"/>

            </div>
        </header>
    )
}