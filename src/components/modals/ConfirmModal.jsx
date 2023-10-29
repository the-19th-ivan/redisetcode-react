/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

export default function ConfirmModal({ open, handleOpen, onSubmit }) {
  return (
    <>
      <Dialog className="bg-secondary" open={open} handler={handleOpen}>
        <DialogHeader className=" font-bold">Submit Quest?</DialogHeader>
        <DialogBody className="text-gray-600">
          Are you sure you want to submit this quest?
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
          <Button variant="gradient" color="green" onClick={onSubmit}>
            <span>Accept</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
