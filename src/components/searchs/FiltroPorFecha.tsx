export default function FiltroPorFecha() {
  return (
    <div className="flex flex-col m-5 p-3 rounded-lg shadow-2xl font-bold">
      <label htmlFor="porfecha" className="m-5 text-center">
        FILTRAR POR FECHA
      </label>
      <input
        type="date"
        id="porfecha"
        value={1}
        className="rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="Fecha"
      />
    </div>
  );
}
