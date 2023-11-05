/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  Progress,
  Typography,
} from "@material-tailwind/react";
import { useCookies } from "react-cookie";
import { GiFireGem } from "react-icons/gi";

export default function LevelUpModal({ open, handleOpen, level }) {
  return (
    <>
      <Dialog open={open} className="bg-secondary pt-6">
        <DialogBody className="flex items-center gap-3">
          <div className="w-2/5 flex flex-col items-center justify-center">
            <img src="/level-up.svg" className="w-3/4" alt="" />
          </div>
          <div className="w-3/5">
            <Typography
              variant="h4"
              className="text-gray-900 font-montserrat font-bold"
            >
              You Leveled Up!
            </Typography>

            <Typography className="mt-3 text-gray-700">
              Keep going and you will be the next Steve Job
            </Typography>

            <div className="w-full my-8">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  Level {level - 1}
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  Level {level}
                </Typography>
              </div>
              <Progress value={100} size="lg" label="Level Up" color="teal" />
            </div>

            <div className="mt-6 flex flex-col justify-center">
              <Button variant="filled" color="green" onClick={handleOpen}>
                <span>Continue</span>
              </Button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
