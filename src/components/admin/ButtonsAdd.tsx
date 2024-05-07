import { Box, Modal } from "@mui/material";
import { useState } from "react";
import Form from "../forms/Form";

export default function ButtonsAdd() {
  const [open, setOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("Agregar");
  const [isFactura, setIsFactura] = useState<boolean>(false);

  const handleOpen = (titulo: string, factura: boolean) => {
    setModalTitle(titulo);
    setOpen(true);
    setIsFactura(factura);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="w-[90vw] p-4 m-auto bg-white shadow-lg rounded-2xl">
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center justify-around w-full gap-4 ">
          <button
            onClick={() => handleOpen("Agregar Factura", true)}
            type="button"
            className="py-2 px-4 max-w-[25vw]  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Agregar Factura
          </button>
          <button
            onClick={() => handleOpen("Agregar Pago", false)}
            type="button"
            className="py-2 px-4 max-w-[25vw]  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Agregar Pago
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="absolute bg-white rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className=" flex justify-end">
              <button
                onClick={() => handleClose()}
                type="button"
                className="py-2 px-4 m-2 w-14  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                X
              </button>
            </div>
            <Form data={{ titulo: modalTitle, type: isFactura }} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
