import { useEffect, useState } from 'react';
import api from "./services/api"; 
import { Dashboard } from "./components/dashboard";
import { History } from "./components/history";
import { Maps } from "./components/maps";
import logo from './assets/logo.png';

export function App() {
  const [lastLocation, setLastLocation] = useState(null);
  const [theme, setTheme] = useState("dark");

  // Carregar tema salvo
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-bs-theme", saved);
  }, []);

  // Buscar última localização
  useEffect(() => {
    async function fetchLastLocation() {
      try {
        const res = await api.get("/location/last");
        setLastLocation(res.data);
      } catch (err) {
        console.log("Erro ao carregar dados:", err);
        setLastLocation(null);
      }
    }

    fetchLastLocation();
    const interval = setInterval(fetchLastLocation, 10000);
    return () => clearInterval(interval);
  }, []);

  // Alternar tema
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-bs-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <div className="w-full max-w-6xl mx-auto flex text-3xl font-bold">
      <Dashboard />

      <div className="w-full flex flex-col border-l-[1px] border-zinc-900 pb-12">

        {/* HEADER */}
        <div className="flex items-center justify-between gap-2 p-3 border-b border-zinc-900 px-12">
          <div className="flex items-center gap-2">
            <div className="w-8 relative">
              <img src={logo} alt="" className="absolute top-0 left-0 blur-md" />
              <img src={logo} alt="" className="w-full z-20" />
            </div>
            <h1 className="text-xl">SenseWay</h1>
          </div>

          {/* Botão com texto dinâmico */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 border border-zinc-700 rounded text-base"
          >
            {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
          </button>
        </div>

        {/* CONTEÚDO */}
        <div className="px-12">
          <p className="text-lg pt-6 font-normal">
            Monitoramento inteligente das localizações em tempo real.
          </p>

          <h2 className="text-2xl font-medium tracking-tight mt-6">Última Localização</h2>
          <div className="w-full flex justify-between gap-4 mt-4">
            <div>
              <h3 className="text-2xl font-medium tracking-tight">
                {lastLocation ? lastLocation.room : "Carregando..."}
              </h3>
              <p className="text-xl font-normal">
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
