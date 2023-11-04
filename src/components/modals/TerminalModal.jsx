/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Spinner,
} from "@material-tailwind/react";
import { HiXCircle } from "react-icons/hi";

export default function TerminalModal({ open, handleOpen, output, isLoading }) {
  return (
    <>
      <Dialog size="lg" open={open} handler={handleOpen} className="">
        <DialogHeader className="bg-secondary text-gray-900 flex justify-between">
          <p>Terminal</p>
          <button onClick={handleOpen}>
            <HiXCircle className="text-red-500" />
          </button>
        </DialogHeader>
        <DialogBody className="bg-primary text-gray-900 h-60 overflow-y-auto">
          {isLoading ? (
            <div className="h-3/4 flex items-center justify-center">
              <Spinner color="indigo" />
            </div>
          ) : (
            <div className="whitespace-pre-wrap">{output}</div>
          )}
        </DialogBody>
      </Dialog>
    </>
  );
}
