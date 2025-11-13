// Maps.jsx
export function Maps({ currentRoom }) {
  const indicatorPositions = {
    "Sala": { bottom: "-2px", right: "4px" },
    "Quarto": { bottom: "-2px", left: "4px" },
    "Cozinha": { bottom: "-4px", right: "6px" },
    "Banheiro": { bottom: "14px", right: "-2px" },
  };

  const position = indicatorPositions[currentRoom];

  return (
    <div>
      <div className="flex items-center">
        <h2 className="text-2xl">Mapa / </h2>

        <div className="flex items-center gap-2 rounded-full pl-2 pr-4">
          <div className="relative h-2 w-2 mt-2">
            <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-green-500 shadow-xl" />
          </div>
          <p className="text-base text-zinc-400 mt-2 italic">Indicador</p>
        </div>
      </div>

      <div className="mt-4 w-[450px] h-[250px] border-4 border-zinc-900 text-lg text-zinc-300 relative">
        <div className="flex h-[50%]">
          <div className="border-b-4 border-r-4 border-zinc-900 w-[60%] flex items-center justify-center relative">
            Sala de Estar
            {currentRoom === "Sala" && (
              <div
                className="absolute w-5 h-5 bg-green-500 rounded-full animate-pulse"
                style={{ bottom: position.bottom, right: position.right }}
              />
            )}
          </div>

          <div className="border-b-4 w-[40%] border-zinc-900 flex items-center justify-center relative">
            Quarto
            {currentRoom === "Quarto" && (
              <div
                className="absolute w-5 h-5 bg-green-500 rounded-full animate-pulse"
                style={{ bottom: position.bottom, left: position.left }}
              />
            )}
          </div>
        </div>

        <div className="flex h-[50%]">
          <div className="border-r-4 w-[70%] border-zinc-900 flex items-center justify-center relative">
            Cozinha
            {currentRoom === "Cozinha" && (
              <div
                className="absolute w-5 h-5 bg-green-500 rounded-full animate-pulse"
                style={{ bottom: position.bottom, right: position.right }}
              />
            )}
          </div>

          <div className="w-[30%] flex items-center justify-center relative">
            Banheiro
            {currentRoom === "Banheiro" && (
              <div
                className="absolute w-5 h-5 bg-green-500 rounded-full animate-pulse"
                style={{ bottom: position.bottom, right: position.right }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
