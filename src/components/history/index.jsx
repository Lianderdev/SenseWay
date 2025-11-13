import { useState, useEffect } from "react";
import api from "../../services/api"; // IMPORTA A API 🔥

export function History() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/location/history") // AGORA USA A API AUTOMATICAMENTE
      .then((res) => {
        const formattedData = res.data.map((item) => ({
          dataHora: `${item.date} ${item.time}`,
          comodo: item.room,
        }));
        setDados(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar histórico:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando histórico...</p>;
  }

  return (
    <div>
      <div className="mt-6">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-300 w-full pt-6">
          Histórico
        </h2>
      </div>
      <div>
        <table className="w-full border-collapse mt-4">
          <thead className="bg-zinc-900 text-2xl">
            <tr>
              <th className="px-4 py-2 text-lg text-left font-medium text-gray-200 rounded-tl-xl">
                Data/Hora
              </th>
              <th className="px-4 py-2 text-lg text-left font-medium text-gray-200 rounded-tr-xl">
                Cômodo
              </th>
            </tr>
          </thead>

          <tbody className="pb-6">
            {dados.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-zinc-700 text-xl border-x border-zinc-900"
              >
                <td className="px-4 py-2 border-b border-zinc-900 text-lg font-medium text-zinc-700">
                  {item.dataHora}
                </td>
                <td className="px-4 py-2 border-b border-zinc-900 text-lg font-medium text-zinc-700">
                  {item.comodo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
