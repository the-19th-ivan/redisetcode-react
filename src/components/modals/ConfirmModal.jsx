/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

export default function ConfirmModal({ open, handleOpen }) {
  return (
    <>
      <Dialog className="bg-secondary" open={open} handler={handleOpen}>
        <DialogHeader className="text-white font-bold">
          Accept Quest?
        </DialogHeader>
        <DialogBody className="text-gray-400">
          Are you sure you want to accept this quest?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Accept</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
