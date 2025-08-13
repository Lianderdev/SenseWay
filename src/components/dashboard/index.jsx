export function Dashboard() {
    return (
        <aside className="w-[300px] h-screen p-6 bg-slate-50 border-r-[1px] border-slate-200">
            <h2 className="text-4xl font-medium">Dashboard</h2>

            <ul className="mt-7 flex flex-col text-2xl font-normal">
                <li className="px-4 py-3 rounded-lg active">Dashboard</li>
                <li className="px-4 py-3 rounded-lg">Histórico</li>
                <li className="px-4 py-3 rounded-lg">Alertas</li>
            </ul>
        </aside>
    )
}