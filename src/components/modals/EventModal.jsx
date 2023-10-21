/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

export default function EventModal({ open, handleOpen, title, children }) {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>{title}</DialogHeader>
      <DialogBody className="text-gray-800">{children}</DialogBody>
      <DialogFooter>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Continue</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
