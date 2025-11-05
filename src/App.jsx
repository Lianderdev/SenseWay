import { useEffect, useState } from 'react';
import { Dashboard } from "./components/dashboard";
import { History } from "./components/history";
import { Maps } from "./components/maps";
import logo from './assets/logo.png';

export function App() {
  const [lastLocation, setLastLocation] = useState(null);

  useEffect(() => {
    async function fetchLastLocation() {
      try {
        const res = await fetch("http://localhost:3001/location/last");
        if (!res.ok) {
          throw new Error("Erro na resposta da API");
        }
        const data = await res.json();
        setLastLocation(data);
      } catch (err) {
        console.log("Erro ao carregar dados:", err);
        setLastLocation(null); // garante reset se der erro
      }
    }

    fetchLastLocation();

    // Atualizar a cada 10s
    const interval = setInterval(fetchLastLocation, 10000);
    return () => clearInterval(interval);
  }, []);

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
          <p className="text-lg pt-6 font-normal text-zinc-500">
            Monitoramento inteligente das localizações em tempo real.
          </p>

          <h2 className="text-2xl font-medium tracking-tight mt-6">Última Localização</h2>
          <div className="w-full flex justify-between gap-4 mt-4">
            <div>
              <h3 className="text-2xl font-medium tracking-tight">
                {lastLocation ? lastLocation.room : "Carregando..."}
              </h3>
              <p className="text-xl font-normal text-zinc-400">
                {lastLocation ? `${lastLocation.date} ${lastLocation.time}` : ""}
              </p>
            </div>
            <Maps currentRoom={lastLocation ? lastLocation.room : ""} />
          </div>

          <History />
        </div>
      </div>
    </div>
  );
}
