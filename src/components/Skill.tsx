/*import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";*/

const Skill = ({ skill }: { skill: { tooltip: string; icon: string } }) => {
  /**
   * TODO: revisar los íconos para todas las habilidades
   */
  /*return (
    <div className="bg-sky-300/80 text-white rounded-full flex h-[56px] w-[56px] items-center justify-center text-lg font-semibold p-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={`/icons/${skill.icon}.svg`}
              width={28}
              height={28}
              alt={skill.tooltip}
            />
          </TooltipTrigger>
          <TooltipContent className="bg-sky-700 mb-3">
            {skill.tooltip}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );*/

  return (
    <div className=" text-white rounded-full flex items-center justify-center text-lg font-bold p-3 uppercase">
      {skill.tooltip}
    </div>
  );
};

export default Skill;
