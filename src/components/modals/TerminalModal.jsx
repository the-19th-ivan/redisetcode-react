/* eslint-disable react/prop-types */
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { HiXCircle } from "react-icons/hi";

export default function TerminalModal({ open, handleOpen }) {
  return (
    <>
      <Dialog size="lg" open={open} handler={handleOpen} className="">
        <DialogHeader className="bg-secondary text-gray-900 flex justify-between">
          <p>Xterm</p>
          <button onClick={handleOpen}>
            <HiXCircle className="text-red-500" />
          </button>
        </DialogHeader>
        <DialogBody className="bg-primary text-gray-800 h-60">
          Terminal Here
        </DialogBody>
      </Dialog>
    </>
  );
}
