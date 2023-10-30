/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import { useCookies } from "react-cookie";
import { GiFireGem } from "react-icons/gi";

export default function BadgeModal({
  open,
  handleOpen,
  badge
}) {
  const [cookies] = useCookies([]);

  return (
    <>
      <Dialog open={open} className="bg-secondary pt-6">
        <DialogBody className="flex items-center gap-3">
          <div className="w-2/5 flex flex-col items-center justify-center">
            <img src={badge.image} className="w-3/4" alt="" />
            <Typography variant="h4" className="mt-4 font-bold text-gray-800">

            {badge.name}
            </Typography>
          </div>
          <div className="w-3/5">
            <Typography
              variant="h4"
              className="text-gray-900 font-montserrat font-bold"
            >
              You earned a Badge!
            </Typography>
            <Typography
              variant="sm"
              className="text-gray-800 font-montserrat mt-2"
            >
              <b className="text-gray-900 font-medium">{badge.description}</b>
            </Typography>

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
