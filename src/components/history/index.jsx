export function History() {
    const dados = [
        { dataHora: "11 de maio de 2025 13:45", comodo: "Sala de Estar" },
        { dataHora: "11 de maio de 2025 13:00", comodo: "Quarto" },
        { dataHora: "11 de maio de 2025 12:15", comodo: "Banheiro" },
        { dataHora: "11 de maio de 2025 11:30", comodo: "Sala de Estar" },
    ];

    return (
        <div>
            <div className="mt-6">
                <h2 className="text-4xl font-medium tracking-tight border-t text-gray-800 w-full pt-6">Histórico</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse mt-4">
                    <thead className="text-2xl">
                        <tr>
                            <th className="border-b text-left font-medium text-gray-700">
                                Data/Hora
                            </th>
                            <th className="border-b text-left font-medium text-gray-700">
                                Cômodo
                            </th>
                        </tr>
                    </thead>
                    <tbody className="pb-6">
                        {dados.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 text-xl">
                                <td className="border-b font-normal text-gray-800">{item.dataHora}</td>
                                <td className="border-b py-2 font-normal text-gray-800">{item.comodo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
