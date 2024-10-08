import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  CircleStackIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { AppDispatch, RootState } from "../../store";
import FactureInterface from "../../interfaces/FacInterface";
interface Params {
  data: {
    titulo: string;
    type: boolean;
  };
}

export default function Form(params: Params) {
  const id = Cookies.get("id");
  const [submit, setSubmit] = useState(false);
  const [response, setResponse] = useState("");
  const [formData, setFormData] = useState({
    empresa: "",
    fecha: "",
    total: "0",
    tipo: params.data.type ? "factura" : "pago",
    estado_factura: "0",
    comprobante: "",
  });

  const [factExists, setFactExists] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const HandleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const [data, setData] = useState<FactureInterface[]>([
    {
      id: "21",
      empresa: "ACME Corporation",
      fecha: "2024-04-01",
      total: "100",
      comprobante: "ABC123",
      estado_factura: "1",
      user_id: "1",
    },
  ]);

  const handleSubmitFacture = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleSubmitPaid = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Se Hizo Submit Paid");
  };

  return (
    <div className="flex w-[90vw] rounded-e-2xl  top-4 flex-col max-w-md px-4 py-8 bg-white  shadow sm:px-6 md:px-8 lg:px-10">
      {submit ? (
        <div className="flex flex-col items-center">
          <CircleStackIcon className="w-24 text-purple-700" />
          <h1 className="text-3xl text-center font-extrabold text-blue-600  sm:text-4xl">
            {response}
          </h1>
        </div>
      ) : (
        <>
          <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl">
            {params.data.titulo}
          </div>
          <div className="p-6 mt-8">
            <form
              onSubmit={
                params.data.type ? handleSubmitFacture : handleSubmitPaid
              }
            >
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={HandleChange}
                  className="rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Empresa"
                />
              </div>

              <div className="flex flex-col mb-4">
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={HandleChange}
                  className="rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Fecha"
                />
              </div>
              <div className="flex flex-col mb-4">
                <input
                  type="number"
                  id="total"
                  name="total"
                  value={formData.total}
                  onChange={HandleChange}
                  className="rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Total a Pagar"
                />
              </div>
              {params.data.type ? (
                <div className="flex flex-col mb-4">
                  <label className="hidden" htmlFor="estado_factura">
                    estado
                  </label>
                  <select
                    onChange={HandleSelectChange}
                    value={formData.estado_factura}
                    name="estado_factura"
                    id="estado_factura"
                    className="rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value={1}>Pagada</option>
                    <option value={0}>Pendiente</option>
                  </select>
                </div>
              ) : (
                <div className="flex flex-col mb-4">
                  <label className="hidden" htmlFor="estado_factura">
                    Asinar Pago
                  </label>
                  <select
                    onChange={HandleSelectChange}
                    value={formData.estado_factura}
                    name="estado_factura"
                    id="estado_factura"
                    className="rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value={0}>No Asignar Pago</option>
                    {data.map((facmap, index) => {
                      return (
                        <option key={index} value={facmap.comprobante}>
                          Factura: {facmap.comprobante} - Empresa:{" "}
                          {facmap.empresa}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  id="comprobante"
                  name="comprobante"
                  value={formData.comprobante}
                  onChange={HandleChange}
                  className="rounded-lg border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder={
                    params.data.type
                      ? "Numero de Factura"
                      : "Numero de Comprobante"
                  }
                />
              </div>
              {factExists ? (
                <div className="mb-2 text-red-500 flex">
                  <ExclamationCircleIcon className="w-5 mr-1" />{" "}
                  {`${params.data.type ? "La Factura" : "El Pago"} con
                  este Numero Ya Existe`}
                </div>
              ) : (
                <></>
              )}
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
        </>
      )}
    </div>
  );
}
