import logo from "../logo.svg";
import {useState} from "react";
export default function Header() {

    const tailwind = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png";
    const erdogan = "/Erdogan.png"
    const [search, setSearch] = useState("");
    return (
        <header className=" w-full  p-3">
            <div className="flex justify-between p-3 bg-slate-100 dark:bg-slate-700 rounded-2xl px-6">
                <div className="flex items-center">
                    <a href="https://erdoganyesil.com.tr" ><img src={erdogan} className="h-10" alt="logo"  /></a>
                    <img src={logo} className="h-10" alt="logo"  />
                    <img src={tailwind} className="h-10 mr-2" alt="logo"  />
                    <h1 className="text-red-600 text-xl">Veriler güncel değildir!</h1>
                </div>
                <input type="text"
                       value={search}
                       onInput={e => setSearch(e.target.value)}
placeholder={"Ara..."}
                       className=" rounded-2xl border dark:bg-slate-600  text-2xl p-2 px-4"/>

            </div>
        </header>
    )
}