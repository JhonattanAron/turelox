import { Box, Modal } from "@mui/material";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  name?: string;
  styles: string;
  icon?: React.ReactElement;
}

export default function ModalComponent(props: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => handleOpen()}
        type="button"
        className={`flex ${props.styles}`}
      >
        {props.name}
        <span>{props.icon}</span>
      </button>
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
            <div>{props.children}</div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
