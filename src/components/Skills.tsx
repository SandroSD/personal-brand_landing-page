import Skill from "./Skill";

interface Skills {
  [group: string]: {
    tooltip: string;
    icon: string;
  }[];
}

const Skills = ({ skills }: { skills: Skills[] }) => {
  return skills.map((skillGroup: Skills, index: number) => {
    return (
      <div
        key={index}
        className="text-white px-6 py-3 text-lg font-semibold mb-4 text-center"
      >
        {/*JSON.stringify(skillGroup)*/}
        {Object.keys(skillGroup).map((key, index) => {
          return (
            <div key={index}>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-5 underline">
                {key}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skillGroup[key].map((skill, index) => (
                  <Skill skill={skill} key={index} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  });
};

export default Skills;
