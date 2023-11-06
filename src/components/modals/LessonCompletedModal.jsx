/* eslint-disable react/prop-types */
import { Dialog, DialogBody, Typography } from "@material-tailwind/react";

export default function LessonCompletedModal({ handleOpen, open }) {
  return (
    <Dialog size="sm" open={open} handler={handleOpen}>
      <DialogBody>
        <div className="py-10 flex flex-col justify-center items-center gap-4">
          <img src="/done.svg" className="w-1/4" alt="" />
          <Typography variant="lead" className="font-medium text-center">
            Looks like you already completed this stage
          </Typography>
        </div>
      </DialogBody>
    </Dialog>
  );
}
