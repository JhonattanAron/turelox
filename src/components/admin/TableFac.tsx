/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TotalFatures } from "../../redux/reducers/DashBoardSlice";
import { RootState } from "../../store";
import { DesconfirmDataSet } from "../../redux/reducers/ConfirmData";
import ModalComponent from "../utils/ModalComponent";
import TablePaid from "./TablePaid";
import FactureInterface from "../../interfaces/FacInterface";
import FacViwer from "../viewers/FacViewer";

interface Props {
  filter?: boolean;
  date?: string;
}
const ComprobarEstado = (state: number) => {
  if (state === 1) {
    return (
      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-green-200 rounded-full opacity-50"
        ></span>
        <span className="relative">Pagada</span>
      </span>
    );
  } else {
    return (
      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-red-200 rounded-full opacity-50"
        ></span>
        <span className="relative">Pendiente</span>
      </span>
    );
  }
};
const TableFac: React.FC<Props> = ({ filter = false, date = "" }) => {
  const confirmData = useSelector(
    (state: RootState) => state.confirm_data.confirmdata
  );
  const dispatch = useDispatch();
  const id = Cookies.get("id");
  const [fetched, setFetched] = useState(false);
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

  const ReturnDataByFilter = (fecha: string) => {
    let porFecha: FactureInterface[] = [];
    data.map((data) => {
      if (fecha === data.fecha) {
        porFecha.push(data);
      }
      return null;
    });
    if (porFecha.length === 0) {
      return (
        <h2 className="text-2xl font-semibold font-display m-5 text-gray-500 xl:text-3xl">
          Ningun Dato Para La Fecha: {fecha}....
        </h2>
      );
    } else {
      return porFecha.map((dataMap, key) => {
        return (
          <tr key={key}>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p className="text-gray-900 whitespace-no-wrap">
                {dataMap.comprobante}
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
              {ComprobarEstado(parseInt(dataMap.estado_factura))}
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <ModalComponent
                styles="py-2 px-4 max-w-[25vw] bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                name="Ver Abonos"
              >
                <TablePaid />
              </ModalComponent>
            </td>
            <td className="flex px-5 py-5 text-sm bg-white border-b border-gray-200">
              <ModalComponent
                name="Ver"
                styles="mx-auto flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg "
              >
                <FacViwer data={dataMap} />
              </ModalComponent>
            </td>
          </tr>
        );
      });
    }
  };

  const ReturnData = () => {
    return data.map((dataMap, key) => {
      return (
        <tr key={key}>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {dataMap.comprobante}
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
            <p className="text-gray-900 whitespace-no-wrap">{dataMap.fecha}</p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">{dataMap.total}</p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            {ComprobarEstado(parseInt(dataMap.estado_factura))}
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <ModalComponent
              styles="py-2 px-4 max-w-[25vw]  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
              name="Ver Abonos"
            >
              <TablePaid />
            </ModalComponent>
          </td>
          <td className="flex px-5 py-5 text-sm bg-white border-b border-gray-200">
            <ModalComponent
              name="Ver"
              styles="mx-auto flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg "
            >
              <FacViwer data={dataMap} />
            </ModalComponent>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container mx-auto">
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
                    Factura
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
                    className="px-5 py-3 text-sm text-left font-normal  text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Abonos
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>

              <tbody>{filter ? ReturnDataByFilter(date) : ReturnData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableFac;
export { ComprobarEstado };
