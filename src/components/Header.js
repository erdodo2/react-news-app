import logo from "../logo.svg";
import {useState} from "react";
export default function Header() {

    const tailwind = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png";
    const erdogan = "/Erdogan.png"
    const [search, setSearch] = useState("");
    return (
        <header className=" w-full rounded-lg p-3">
            <div className="flex justify-between p-3 bg-slate-100 dark:bg-slate-700 rounded">
                <div className="flex items-center">
                    <a href="https://erdoganyesil.com.tr" ><img src={erdogan} className="h-10" alt="logo"  /></a>
                    <img src={logo} className="h-10" alt="logo"  />
                    <img src={tailwind} className="h-10" alt="logo"  />
                </div>
                <input type="text"
                       value={search}
                       onInput={e => setSearch(e.target.value)}

                       className=" rounded border dark:bg-slate-600  text-2xl p-2"/>

            </div>
        </header>
    )
}