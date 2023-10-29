/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  Typography,
} from "@material-tailwind/react";

export default function BadgeModal({ open, handleOpen }) {
  return (
    <Dialog size="sm" open={open} handler={handleOpen}>
      <DialogBody>
        <div className="py-10 flex flex-col justify-center items-center gap-4">
          <img src="/complete.png" className="w-1/4" alt="" />
          <Typography variant="lead" className="font-medium">
            You earned a Badge
          </Typography>

          <Button color="green" onClick={handleOpen}>
            Continue
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  );
}
