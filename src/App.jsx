import { Dashboard } from "./components/dashboard";
import { History } from "./components/history";
import { Maps } from "./components/maps";

export function App() {
  return (
    <div className="flex bg-white text-black text-3xl font-bold">
      <Dashboard />
      <div className="p-6 w-full flex flex-col">
        <h2 className="text-4xl font-medium tracking-tight">Última Localização</h2>

        <div className="w-full flex justify-between gap-4 mt-10">
          <div>
            <h3 className="text-5xl font-medium tracking-tight">Cozinha</h3>
            <p className="text-2xl font-normal mt-4">11 de maio de 2025 14:30</p>
          </div>

          <Maps />
        </div>



        <History />
      </div>

    </div>
  );
}
