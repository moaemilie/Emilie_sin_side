import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi"; // A clean mail icon from HeroIcons

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <SiLinkedin size={24} />,
      url: "https://www.linkedin.com/in/emilie-giltvedt-langeland/",
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]",
    },
    {
      id: 2,
      icon: <SiGithub size={24} />,
      url: "https://github.com/moaemilie/",
      label: "GitHub",
      color: "hover:text-[#181717]",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={28} />, // HeroIcons run a bit smaller, so 28 looks better
      url: "mailto:emilie.g.l@hotmail.com",
      label: "Email",
      color: "hover:text-red-500",
    },
  ];

  return (
    <div className="flex items-center gap-6">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`text-gray-600 transition-all duration-300 ${link.color} hover:scale-110`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
