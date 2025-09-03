import { RxDashboard } from "react-icons/rx";
import { VscHistory } from "react-icons/vsc";
import { GoAlert } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";
import logo from "../../assets/logo.png"


export function Dashboard() {
    return (
        <aside className="w-[300px] h-screen text-zinc-950 border-r-[1px] border-zinc-900 px-2 ">
            <div className="flex justify-between items-center -ml-3 mt-4 mr-2 p-2 bg-zinc-900 rounded-lg">
                <div className="w-8 h-8">
                    <img src={logo} alt="" className="object-contain"/>
                </div>
                <div className="text-xl text-zinc-700 rounded-full border-2 border-zinc-700 outline-1 outline-gray-600">
                    <IoPersonCircleSharp />
                </div>  
            </div>

            <ul className="mt-2 flex flex-col text-base font-medium text-zinc-500">
                <li className="flex items-center gap-2 py-2 rounded-lg active">
                    <RxDashboard className=""/> Dashboard
                </li>
                <li className="flex items-center gap-2 py-2 rounded-lg">
                    <VscHistory /> Histórico
                </li>
                <li className="flex items-center gap-2 py-2 rounded-lg">
                    <GoAlert /> Alertas
                </li>
            </ul>
        </aside>
    )
}