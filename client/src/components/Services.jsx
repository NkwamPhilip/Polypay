import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from 'react-icons/ri';
import { MdCached } from 'react-icons/md';
import { MdBolt } from 'react-icons/md';


const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-white text-lg">{title}</h1>
      <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>

  </div>
)

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">Services that we
            <br />
            continue to improve and release</h1>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        <ServiceCard
          color="bg-[#98e79c]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. Privacy and Quality of our products is maintained."
        />

        <ServiceCard
          color="bg-[#7B3FE4]"
          title="Deployed on Polygon ZkEVM"
          icon={<MdCached fontSize={21} className="text-white" />}
          subtitle="Products are deployed on Polygon Network, providing rapid transactions"
        />

        <ServiceCard
          color="bg-[#f75596]"
          title="PolygonID"
          icon={<MdBolt fontSize={21} className="text-white" />}
          subtitle="Get your PolygonID - Decentralized Identifier & Use your DID anywhere."
        />
      </div>
    </div>
  )
};

export default Services;
