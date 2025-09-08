import { Dashboard } from "./components/dashboard";
import { History } from "./components/history";
import { Maps } from "./components/maps";
import logo from './assets/logo.png'

export function App() {
  return (
    <div className="w-full max-w-6xl mx-auto flex text-3xl font-bold">
      <Dashboard />
      <div className="w-full flex flex-col border-l-[1px] border-zinc-900 pb-12">

        <div className="flex items-center gap-2 p-3 border-b border-zinc-900 px-12">
          <div className="w-8 relative">
            <img src={logo} alt="" className="absolute top-0 left-0 blur-md" />
            <img src={logo} alt="" className="w-full z-20" />
          </div>
          <h1 className="text-xl text-zinc-300">SenseWay</h1>
        </div>

        <div className="px-12">
          <p className="text-lg pt-6 font-normal text-zinc-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis adipisci, aspernatur, pariatur nulla nesciunt voluptatum rerum temporibus numquam dignissimos accusamus mollitia officia quam ea fugiat blanditiis minus officiis? Ipsam, sed!</p>
          <h2 className="text-2xl font-medium tracking-tight mt-6">Última Localização</h2>
          <div className="w-full flex justify-between gap-4 mt-4">
            <div>
              <h3 className="text-2xl font-medium tracking-tight">Cozinha</h3>
              <p className="text-xl font-normal text-zinc-400">11 de maio de 2025 14:30</p>
            </div>
            <Maps />
          </div>
          <History />
        </div>

      </div>
    </div>
  );
}
