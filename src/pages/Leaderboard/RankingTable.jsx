import { Card, Typography } from "@material-tailwind/react";
import { GiFireGem } from "react-icons/gi";
import { HiArrowNarrowUp } from "react-icons/hi";

const TABLE_HEAD = ["Rank", "Name", "Character", "Exp"];

const TABLE_ROWS = [
  {
    rank: "4",
    name: "ShadowxX",
    character: "Slayer",
    exp: "2",
  },
  {
    rank: "5",
    name: "ShadowxX",
    character: "Slayer",
    exp: "1",
  },
  {
    rank: "6",
    name: "ShadowxX",
    character: "Slayer",
    exp: "1",
  },
];

export default function RankingTable() {
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
          {TABLE_ROWS.map(({ rank, name, character, exp }) => (
            <tr key={name} className="even:bg-[#f4f4f4]">
              <td className="p-4">
                <Typography
                  variant="small"
                  className="font-montserrat font-semibold text-gray-800 flex justify-center items-center gap-1"
                >
                  <HiArrowNarrowUp className="text-gray-800 text-base" />
                  {rank}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-montserrat font-medium text-gray-800"
                >
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-montserrat font-normal text-gray-800"
                >
                  {character}
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
                  {exp}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
