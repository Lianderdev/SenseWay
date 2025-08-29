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
            <div className="mt-4 w-[500px] h-[300px] border-4 text-xl">
                <div className="flex h-[50%]">
                    <div className="border-b-4 border-r-4 w-[60%] flex items-center justify-center relative">
                        Sala de Estar
                        <div className="w-[30px] h-[30px] absolute -bottom-2 right-4 bg-white"></div>
                    </div>

                    <div className="border-b-4 w-[40%] flex items-center justify-center relative">
                        Quarto
                        <div className="w-[30px] h-[30px] absolute -bottom-2 left-4 bg-white"></div>
                    </div>


                </div>

                <div className="flex h-[50%]">
                    <div className="border-r-4 w-[70%] flex items-center justify-center relative">
                        Cozinha
                        <div className="w-[30px] h-[30px] absolute bottom-14 -right-2 bg-white"></div>
                        <div className="w-[30px] h-[30px] absolute -bottom-4 right-6 bg-white"></div>
                    </div>
                    <div className="w-[30%] flex items-center justify-center relative">
                        Banheiro
                    </div>
                </div>
            </div>
        </div>
    )
}