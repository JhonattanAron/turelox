import { useState } from "react";

interface Props {
  dateSend?: (date: string) => void;
}

const FiltroPorFecha: React.FC<Props> = ({ dateSend }) => {
  const [fecha, setFecha] = useState("");

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setFecha(newDate);
    if (dateSend) {
      dateSend(newDate);
    }
  };

  return (
    <div className="flex flex-col my-5 p-3 max-w-[50vw] mx-auto rounded-lg  font-bold">
      <label htmlFor="porfecha" className="m-5 text-center">
        FILTRAR POR FECHA
      </label>
      <input
        type="date"
        id="porfecha"
        onChange={HandleChange}
        value={fecha}
        className="rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="Fecha"
      />
    </div>
  );
};

export default FiltroPorFecha;
