import Image from "next/image";

type CardSkillTopProps = {
  skill: {
    icon: string;
    title: string;
    level: string;
  };
};

export default function CardSkillTop({ skill }: CardSkillTopProps) {
  return (
    <div className="object-fill h-[140px] w-[120px] bg-darkgray-500 space-y-2 mx-2 rounded-lg border border-gray-800 flex flex-col justify-center items-center px-2 py-2">
      <Image
        width={50}
        height={50}
        src={skill.icon}
        alt={`icon ${skill.title}`}
        className="object-cover h-16 w-auto"
      />
      <p className="text-base text-gray-500">{skill.title}</p>
      
    </div>
  );
}
