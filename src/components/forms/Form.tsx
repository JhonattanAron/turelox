import { useState } from "react";

interface Params {
  data: {
    titulo: string;
  };
}

export default function Form(params: Params) {
  const [empresa, setEmpresa] = useState("");
  const [fecha, setFecha] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [comprobante, setComprobante] = useState<File | null>(null);

  const handleEmpresaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmpresa(event.target.value);
  };

  const handleFechaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFecha(event.target.value);
  };

  const handleCantidadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCantidad(event.target.value);
  };

  const handleComprobanteChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setComprobante(file);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex w-[90vw]  top-4 flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl">
          {params.data.titulo}
        </div>

        <div className="p-6 mt-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <input
                type="text"
                id="empresa"
                value={empresa}
                onChange={handleEmpresaChange}
                className="rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Empresa"
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                type="date"
                id="fecha"
                value={fecha}
                onChange={handleFechaChange}
                className="rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Fecha"
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                type="text"
                id="cantidad"
                value={cantidad}
                onChange={handleCantidadChange}
                className="rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Total a Pagar"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="comprobante" className="hidden">
                Factura
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  id="comprobante"
                  onChange={handleComprobanteChange}
                  className="hidden"
                />
                <button
                  type="button"
                  className="items-center px-4 py-20 w-full bg-purple-600 border border-transparent rounded-md font-semibold text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  onClick={() =>
                    document.getElementById("comprobante")?.click()
                  }
                >
                  Subir Comprobante
                </button>
                {comprobante && (
                  <span className="ml-3">{comprobante.name}</span>
                )}
              </div>
            </div>
            <div className="flex w-full my-4">
              <button
                type="submit"
                className="py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
