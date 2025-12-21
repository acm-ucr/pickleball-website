import Image from "next/image";
import { boardData } from "@/data/board";

export default function Board() {
  const topMembers = boardData.slice(0, 2);
  const otherMembers = boardData.slice(2);

  return (
    <div className="flex flex-col items-center space-y-16 pt-16">
      <div className="flex justify-center gap-24">
        {topMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center"
          >
            <div className="h-48 w-48 overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-xl font-medium text-white">{member.name}</div>
            <div className="text-pickleball-lime-100 text-lg">
              {member.position}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-20">
        {otherMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center"
          >
            <div className="h-44 w-44 overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                width={176}
                height={176}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-xl font-medium text-white">{member.name}</div>
            <div className="text-pickleball-lime-100 text-lg">
              {member.position}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
