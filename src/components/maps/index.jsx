export function Maps() {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h2>Mapa</h2>

                <div className="flex items-center gap-2 bg-gray-100 rounded-full pl-2 pr-4">
                    <div className="relative h-4 w-4">
                        <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
                        <span className="absolute inset-0 rounded-full bg-green-500 shadow-lg" />
                    </div>
                    <p className="text-xl">Indicador</p>
                </div>
            </div>
            <div className="mt-4 w-[450px] h-[250px] border-4 border-zinc-900 text-lg text-zinc-300">
                <div className="flex h-[50%]">
                    <div className="border-b-4 border-r-4 border-zinc-900 w-[60%] flex items-center justify-center relative">
                        Sala de Estar
                        <div className="w-[20px] h-[20px] absolute -bottom-2 right-4 bg-zinc-950"></div>
                    </div>

                    <div className="border-b-4 w-[40%] border-zinc-900 flex items-center justify-center relative">
                        Quarto
                        <div className="w-[20px] h-[20px] absolute -bottom-2 left-4 bg-zinc-950"></div>
                    </div>
                </div>

                <div className="flex h-[50%]">
                    <div className="border-r-4 w-[70%] border-zinc-900 flex items-center justify-center relative">
                        Cozinha
                        <div className="w-[20px] h-[20px] absolute bottom-14 -right-2 bg-zinc-950"></div>
                        <div className="w-[20px] h-[20px] absolute -bottom-4 right-6 bg-zinc-950"></div>
                    </div>
                    <div className="w-[30%] flex items-center justify-center relative">
                        Banheiro
                    </div>
                </div>
            </div>
        </div>
    )
}