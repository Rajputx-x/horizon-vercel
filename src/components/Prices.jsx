import React, { useEffect, useRef } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FcBarChart, FcMindMap, FcFlowChart } from "react-icons/fc";
import { useAnimation, useInView, motion } from "framer-motion";

const Prices = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <div className="w-full py-[10rem] px-4 -mt-28">
        <div className="mx-auto mb-12 text-center lg:mb-20">
          <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
            Our Truck Dispatch Services and Pricing
          </h2>
          <p className="text-lg text-gray-500">
            Our pricing models are designed to provide flexibility and accommodate the unique
            requirements of each client. Whether you prefer a fixed weekly or monthly rate,
            or a percentage-based plan that aligns with your earnings, we have options to
            suit your business needs.
          </p>
        </div>

        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            ref={ref}
            variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Card
              image={<FcBarChart style={{ fontSize: "5rem" }} />}
              Package={"Weekly Starter"}
              Price={"$200/truck/week"}
              Feature1={"24/7 Dispatch Support"}
              Feature2={"Load Planning and Optimization"}
              Feature3={"Rate Negotiation"}
              Feature4={"Broker and Shipper Communication"}
              Feature5={"Document Management"}
              Feature6={"Dedicated Dispatcher"}
              buttonBg={"bg-gray-300"}
              hoverBgButton={"hover:bg-gray-200"}
            />
          </motion.div>

          <motion.div
            ref={ref}
            variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <Card
              image={<FcMindMap style={{ fontSize: "5rem" }} />}
              Package={"Monthly Starter"}
              Price={"$800/truck/month"}
              Feature1={"All Weekly Plan Features"}
              Feature2={"IFTA Reporting Assistance"}
              Feature3={"Trucking Accounting Support"}
              Feature4={"Compliance Monitoring"}
              Feature5={"Performance Analytics"}
              Feature6={"Dedicated Dispatcher"}
              buttonBg={"bg-blue-400"}
              hoverBgButton={"hover:bg-blue-500"}
              buttonTextColor={"text-white"}
            />
          </motion.div>

          <motion.div
            ref={ref}
            variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Card
              image={<FcFlowChart style={{ fontSize: "5rem" }} />}
              Package={"Fixed Percentage Plan"}
              Price={"5% of gross"}
              Feature1={"All Monthly Plan Features"}
              Feature2={"10% for Box Truck"}
              Feature3={"Freight Factoring Assistance"}
              Feature4={"Company Formation Support"}
              Feature5={"DoT Compliance & Safety Guidance"}
              Feature6={"Custom Solutions"}
              buttonBg={"bg-gray-300"}
              hoverBgButton={"hover:bg-gray-200"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Prices;

const Card = ({ Package, Price, image, Feature1, Feature2, Feature3, Feature4, Feature5, Feature6, buttonBg, buttonTextColor, hoverBgButton }) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-lg hover:scale-105 duration-300">
      <div className="w-20 mx-auto mt-0">{image}</div>
      <h2 className="text-2xl font-bold text-center">{Package}</h2>
      <p className="py-2 mx-8 mb-6 -mt-2 flex justify-center text-3xl font-bold">{Price}</p>
      <div className="text-center font-medium">
        {[Feature1, Feature2, Feature3, Feature4, Feature5, Feature6].map((feature, index) => (
          <p key={index} className="py-2 border-b mx-8 flex justify-between">
            {feature}
            <BsFillCheckCircleFill className="ml-2 my-auto text-blue-500" />
          </p>
        ))}
      </div>
      <button className={`justify-center flex mx-auto w-[200px] ${buttonBg} ${hoverBgButton} ${buttonTextColor} rounded-md font-medium my-6 py-3`}>
        Contact Support
      </button>
    </div>
  );
};
