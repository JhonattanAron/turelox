/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TotalFatures } from "../../redux/reducers/DashBoardSlice";
import { RootState } from "../../store";
import { DesconfirmDataSet } from "../../redux/reducers/ConfirmData";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function TableFac() {
  const confirmData = useSelector(
    (state: RootState) => state.confirm_data.confirmdata
  );
  const dispatch = useDispatch();
  const id = Cookies.get("id");
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState([
    {
      id: "21",
      empresa: "ACME Corporation",
      fecha: "2024-04-01",
      total: "100",
      comprobante: "ABC123",
      user_id: "1",
    },
  ]);
  useEffect(() => {
    SumarTotal();
  }, [data]);

  const getData = async () => {
    const fetchData = await fetch(`http://localhost:8085/fatures/${id}`);
    const dataJson = await fetchData.json();
    if (dataJson.length > 0) {
      setData(dataJson);
    }
    setFetched(true);
  };
  if (!fetched) {
    getData();
  }
  useEffect(() => {
    if (confirmData) {
      getData();
      dispatch(DesconfirmDataSet());
    }
  }, [confirmData]);

  const SumarTotal = () => {
    let total = 0;
    data.map((dataMap) => {
      total += parseFloat(dataMap.total);
      return total;
    });
    dispatch(TotalFatures(total));
  };

  return (
    <div className="container h-[32vh] overflow-scroll  mx-auto sm:px-8 shadow-2xl ">
      <div className="py-8">
        <div className=" py-4 overflow-x-auto">
          <div className="inline-block min-w-full overflow-hidden rounded-lg ">
            <table className="min-w-full leading-normal ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Nombre
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Fecha Factura
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Total
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Comprobante
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((dataMap, key) => {
                  return (
                    <tr key={key}>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {dataMap.id}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {dataMap.empresa}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {dataMap.fecha}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {dataMap.total}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                          ></span>
                          <span className="relative">Pendiente</span>
                        </span>
                      </td>
                      <td className="flex px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <button
                          type="button"
                          className=" mx-auto flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg "
                        >
                          Ver
                        </button>
                        <button
                          type="button"
                          className=" mx-auto flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg "
                        >
                          <TrashIcon className="w-9" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
