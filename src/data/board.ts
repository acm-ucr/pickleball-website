import { StaticImageData } from "next/image";

import Aryo_Chakma from "@/public/images/board/Aryo_Chakma.webp";
import Bryan_Nguyen from "@/public/images/board/Bryan_Nguyen.webp";
import Genesis_Cho from "@/public/images/board/Genesis_Cho.webp";
import Kyle_Nguyen from "@/public/images/board/Kyle_Nguyen.webp";
import Trey_Nguyen from "@/public/images/board/Trey_Nguyen.webp";

export type BoardMember = {
  image: StaticImageData;
  name: string;
  position: string;
};

export const boardData: BoardMember[] = [
  {
    image: Bryan_Nguyen,
    name: "Bryan Nguyen",
    position: "President",
  },
  {
    image: Trey_Nguyen,
    name: "Trey Nguyen",
    position: "Vice President",
  },
  {
    image: Kyle_Nguyen,
    name: "Kyle Nguyen",
    position: "Treasurer",
  },
  {
    image: Aryo_Chakma,
    name: "Aryo Chakma",
    position: "Secretary",
  },
  {
    image: Genesis_Cho,
    name: "Genesis Cho",
    position: "Public Relations",
  },
];
