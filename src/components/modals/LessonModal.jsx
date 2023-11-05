/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import { useCookies } from "react-cookie";
import { GiFireGem } from "react-icons/gi";

export default function LessonModal({
  open,
  handleOpen,
  nextStage,
  title,
  exp,
}) {
  const [cookies] = useCookies([]);

  return (
    <>
      <Dialog open={open} handler={handleOpen} className="bg-secondary pt-6">
        <DialogBody className="flex items-center">
          <div className="w-2/5 flex justify-center">
            <img src="/complete.svg" className="w-1/2" alt="" />
          </div>
          <div className="w-3/5">
            <Typography
              variant="h4"
              className="text-gray-900 font-montserrat font-bold"
            >
              Well Done!
            </Typography>
            <Typography
              variant="sm"
              className="text-gray-800 font-montserrat mt-2"
            >
              You have completed{" "}
              <b className="text-gray-900 font-medium">{title}</b>
            </Typography>
            <Typography
              variant="paragraph"
              className="text-gray-800 font-montserrat mt-4 flex gap-2"
            >
              <div className="flex items-center gap-1 font-bold">
                <GiFireGem className="text-red-600 text-lg" />
                {cookies.event === "Bonus" ? exp * 2 : exp} EXP
              </div>
              earned
            </Typography>

            <div className="mt-6 flex flex-col justify-center">
              <Button variant="filled" color="green" onClick={nextStage}>
                <span>Bring Me The Next Lesson</span>
              </Button>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mt-2"
              >
                <span>I&apos;ll Do It Later</span>
              </Button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
