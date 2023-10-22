/* eslint-disable react/prop-types */
import { Card, Typography } from "@material-tailwind/react";
import { GiFireGem } from "react-icons/gi";
import { HiArrowNarrowUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["Rank", "Name", "Character", "Exp"];

export default function RankingTable({ users }) {
  const navigate = useNavigate();

  return (
    <Card className="">
      <table className="w-full text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 p-4 bg-secondary"
              >
                <Typography
                  variant="small"
                  className="font-barlow font-bold text-gray-900"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-secondary">
          {users.map((user, index) => (
            <tr
              key={user._id}
              className="even:bg-[#f4f4f4] hover:border border-green-800 cursor-pointer"
              onClick={() => {
                localStorage.setItem("lastPage", "/leaderboard");
                navigate(`/profile/${user.username}`);
              }}
            >
              <td className="p-4">
                <Typography
                  variant="small"
                  className="font-montserrat font-semibold text-gray-800 flex justify-center items-center gap-1"
                >
                  <HiArrowNarrowUp className="text-gray-800 text-base" />
                  {index + 4}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-montserrat font-medium text-gray-800"
                >
                  {user.username}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-montserrat font-normal text-gray-800"
                >
                  {user.character.name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-montserrat font-medium text-gray-800 flex justify-center items-center gap-1"
                >
                  <GiFireGem className="text-xl text-red-800" />
                  {user.experience}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
