import { RxDashboard } from "react-icons/rx";
import { VscHistory } from "react-icons/vsc";
import { GoAlert } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";
import logo from "../../assets/logo.png"


export function Dashboard() {
    return (
        <aside className="w-[300px] h-screen px-2 ">
            <div className="flex justify-between items-center -ml-3 mt-2 mr-2 p-2 rounded-lg">
                <div className="w-7 h-7">
                    <img src={logo} alt="" className="object-contain"/>
                </div>
                <div className="text-xl rounded-full border-2 border-zinc-700 outline-1 outline-gray-600">
                    <IoPersonCircleSharp />
                </div>  
            </div>

            <ul className="mt-2 flex flex-col text-base font-medium">
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