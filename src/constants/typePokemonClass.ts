export const getBackgroundClass = (tipo: string) => {
  switch (tipo) {
    case "normal": return "bg-gray-400";
    case "fighting": return "bg-orange-500";
    case "flying": return "bg-sky-300";
    case "poison": return "bg-purple-400";
    case "ground": return "bg-yellow-600";
    case "rock": return "bg-amber-600";
    case "bug": return "bg-lime-500";
    case "ghost": return "bg-indigo-400";
    case "steel": return "bg-gray-500";
    case "fire": return "bg-red-400";
    case "water": return "bg-blue-400";
    case "grass": return "bg-green-400";
    case "electric": return "bg-yellow-300";
    case "psychic": return "bg-pink-400";
    case "ice": return "bg-cyan-300";
    case "dragon": return "bg-purple-600";
    case "dark": return "bg-gray-700";
    case "fairy": return "bg-pink-300";
    case "stellar": return "bg-blue-600";
    case "shadow": return "bg-gray-900";
    case "unknown": return "bg-gray-200";
    default: return "bg-gray-200";
  }
}
