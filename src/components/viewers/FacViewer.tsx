import FactureInterface from "../../interfaces/FacInterface";
import { ComprobarEstado } from "../admin/TableFac";
import DeleteConfirm from "../utils/DeleteConfirm";
import ModalComponent from "../utils/ModalComponent";

interface Props {
  data: FactureInterface;
}

const FacViwer: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-[80vw] xl:w-[35vw] p-6 overflow-hidden bg-white shadow-lg rounded-xl ">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center justify-start flex-grow w-full">
          <span className="relative block">
            <img
              alt="profil"
              src="https://adaptleap.com/static/media/logo.56d43073712524198c06.webp"
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </span>
          <div className="flex flex-col items-start ml-4">
            <span className="text-gray-700 ">{data.empresa}</span>
            <span className="text-sm font-light text-gray-400 ">Factura</span>
          </div>
        </div>
        <div className="flex-none hidden md:block ">
          <span className="w-full px-3 py-1 text-sm text-white bg-blue-500 rounded-full">
            Factura
          </span>
        </div>
      </div>
      <p className="text-l font-normal my-5 text-gray-800">
        Fecha: {data.fecha}
      </p>
      <p className="text-l font-normal my-5 text-gray-800">
        Comprobante: {data.comprobante}
      </p>
      <p className="text-l font-normal my-5 text-gray-800">
        Estado: {ComprobarEstado(parseInt(data.estado_factura))}
      </p>
      <div className="flex items-center justify-between p-2 my-6 bg-blue-100 rounded">
        <div className="flex items-start justify-between w-full">
          <p className="flex-grow w-full text-xl text-gray-700">
            TOTAL:
            <span className="font-light text-gray-400 text-md">$</span>
            {data.total}
          </p>
        </div>
      </div>
      <ModalComponent
        name="Eliminar Factura"
        styles="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 xl:ml-3 xl:w-auto xl:text-sm"
      >
        <DeleteConfirm />
      </ModalComponent>
    </div>
  );
};

export default FacViwer;
