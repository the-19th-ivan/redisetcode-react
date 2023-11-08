/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Textarea,
  DialogFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { HiXCircle } from "react-icons/hi";

export default function InputTerminalModal({
  open,
  handleOpen,
  size,
  userInput,
  handleUserInput,
  onSubmit,
}) {
  return (
    <>
      <Dialog size="lg" open={open} handler={handleOpen} className="">
        <DialogHeader className="bg-secondary text-gray-900 flex justify-between">
          <p>Enter Input</p>
          <button onClick={handleOpen}>
            <HiXCircle className="text-red-500" />
          </button>
        </DialogHeader>
        <DialogBody className="bg-primary text-gray-900 h-60 overflow-y-auto">
          <Textarea
            className="h-full"
            label={`Please enter ${size} input`}
            value={userInput}
            onChange={(e) => handleUserInput(e.target.value)}
          />
          <Typography variant="small" className="">
            **For multiple inputs, seperate each input by new line(press
            ENTER)**
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button onClick={onSubmit}>Continue</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
