import { motion } from 'framer-motion';

interface Logo {
  name: string;
  filename: string;
}

const logos: Logo[] = [
  {
    name: "Telkom University",
    filename: "logo-01.svg"
  },
  {
    name: "CoE Smart MSME and Halal Ecosystem",
    filename: "logo-02.svg",
  },
  {
    name: "Smart it",
    filename: "logo-03.svg",
  },
  {
    name: "Balarama",
    filename: "logo-04.svg",
  },
  {
    name: "Media Pelajar",
    filename: "logo-05.svg",
  },
  {
    name: "Bangun PC",
    filename: "logo-06.svg",
  },
  {
    name: "Aafia",
    filename: "logo-07.svg",
  },
  {
    name: "Pesantren Berdaya",
    filename: "logo-08.svg",
  },
  {
    name: "Safea",
    filename: "logo-09.svg",
  },
];

const LogoScroll = () => {
  // Duplicate the logos array to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative">
        <motion.div
          className="flex space-x-24"
          animate={{
            x: [0, -1920], // Adjust this value based on the total width of the logos
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{
            width: "fit-content"
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center w-48 h-24 relative group"
            >
              <img
                src={'/company-logo/' + logo.filename}
                alt={logo.name}
                className="w-full h-full object-contain transition-all duration-300 filter grayscale group-hover:filter-none"
                style={{
                  maxWidth: "192px",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoScroll;