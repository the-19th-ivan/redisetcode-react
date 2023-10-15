/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  Typography,
} from "@material-tailwind/react";

export default function LevelUpModal({ open, handleOpen }) {
  return (
    <Dialog size="sm" open={open} handler={handleOpen} className="pt-6">
      <DialogBody>
        <div className="flex flex-col gap-6 items-center justify-center">
          <img src="/complete.png" className="w-1/4" alt="" />
          <Typography variant="lead" className="font-medium">
            You Leveled Up!
          </Typography>

          <Button color="green" onClick={handleOpen}>
            Continue
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  );
}
