/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function AcceptQuestModal({ open, handleOpen, openQuest }) {
  const navigate = useNavigate();

  return (
    <>
      <Dialog className="bg-secondary" open={open} handler={handleOpen}>
        <DialogHeader className=" font-bold">Accept Quest?</DialogHeader>
        <DialogBody className="text-gray-600">
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
          <Button
            variant="gradient"
            color="green"
            onClick={() => navigate(`/quest/${openQuest.quest._id}`)}
          >
            <span>Accept</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
