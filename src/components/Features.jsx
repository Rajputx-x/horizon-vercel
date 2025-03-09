import React, { useEffect, useRef } from "react";
import { FcGenealogy, FcMindMap, FcPositiveDynamic, FcComboChart, FcLineChart, FcRadarPlot } from "react-icons/fc";
import { useAnimation, useInView, motion } from "framer-motion";

const Features = () => {
  const { innerWidth: width } = window;
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-500 to-blue-200"></div>
      <div className="max-w-screen overflow-x-hidden font-poppins">
        {/* features section */}
        {width < 631 ? (
          <>
            <section className="text-gray-700">
              <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div className="mx-auto mb-12 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                    Our Truck Dispatch Services
                  </h2>
                  <p className="text-lg text-gray-500">
                    Empowering your trucking business with advanced solutions and professional support.
                  </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                      Streamline Your Operations
                    </h3>
                    <p className="mt-3 text-lg">
                      We provide a range of services to help you manage your trucking business efficiently.
                    </p>
                    <div className="mt-12 space-y-12">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md">
                            <FcGenealogy size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            IFTA Reporting
                          </h4>
                          <p className="mt-2">
                            Simplify your IFTA reporting with our accurate and timely solutions. We ensure compliance with state and federal regulations, saving you time and reducing errors.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md">
                            <FcMindMap size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            Dispatching - Trucking Services
                          </h4>
                          <p className="mt-2">
                            Efficient dispatching services to keep your trucks moving and your business growing. We optimize routes, manage schedules, and ensure timely deliveries.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md">
                            <FcComboChart size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            Trucking Accounting
                          </h4>
                          <p className="mt-2">
                            Professional accounting services tailored to the trucking industry. We handle payroll, taxes, and financial reporting, so you can focus on driving.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md">
                            <FcPositiveDynamic size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            Document Management & Paperwork
                          </h4>
                          <p className="mt-2">
                            Streamline your paperwork and document management with our efficient solutions. We organize and store your records securely, ensuring easy access when needed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                      <img
                        src="/card4.webp"
                        alt="image1"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                        Compliance and Growth
                      </h3>
                      <p className="mt-3 text-lg">
                        Stay compliant and grow your business with our expert services.
                      </p>
                      <div className="mt-12 space-y-12">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md">
                              <FcLineChart size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              Freight Factoring
                            </h4>
                            <p className="mt-2">
                              Improve cash flow with our reliable freight factoring services. We provide quick payments for your invoices, so you can keep your business running smoothly.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md">
                              <FcRadarPlot size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              DoT Compliance / Safety
                            </h4>
                            <p className="mt-2">
                              Ensure compliance with DoT regulations and maintain safety standards. We help you stay updated with the latest rules and avoid costly penalties.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md">
                              <FcGenealogy size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              Freight Rate Negotiation
                            </h4>
                            <p className="mt-2">
                              Get the best freight rates with our expert negotiation services. We work with shippers to secure competitive rates, maximizing your profits.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md">
                              <FcMindMap size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              Company Formation
                            </h4>
                            <p className="mt-2">
                              Start your trucking business with our company formation services. We handle all the legal and administrative tasks, so you can focus on driving.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                      <img
                        src="/card7.webp"
                        alt="image2"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="text-gray-700 gap-8">
              <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div className="mx-auto mb-12 text-center lg:mb-20">
                  <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                    Our Truck Dispatch Services
                  </h2>
                  <p className="text-lg text-gray-500">
                    Empowering your trucking business with advanced solutions and professional support.
                  </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                      Streamline Your Operations
                    </h3>
                    <p className="mt-3 text-lg">
                      We provide a range of services to help you manage your trucking business efficiently.
                    </p>
                    <div className="mt-12 space-y-12">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-16 h-12 rounded-md">
                            <FcGenealogy size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            IFTA Reporting
                          </h4>
                          <p className="mt-2">
                            Simplify your IFTA reporting with our accurate and timely solutions. We ensure compliance with state and federal regulations, saving you time and reducing errors.
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-16 h-12 rounded-md">
                            <FcMindMap size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            Dispatching - Trucking Services
                          </h4>
                          <p className="mt-2">
                            Efficient dispatching services to keep your trucks moving and your business growing. We optimize routes, manage schedules, and ensure timely deliveries.
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.55 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-16 h-12 rounded-md">
                            <FcComboChart size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            Trucking Accounting
                          </h4>
                          <p className="mt-2">
                            Professional accounting services tailored to the trucking industry. We handle payroll, taxes, and financial reporting, so you can focus on driving.
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.75 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-16 h-12 rounded-md">
                            <FcPositiveDynamic size={"4rem"} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            Document Management & Paperwork
                          </h4>
                          <p className="mt-2">
                            Streamline your paperwork and document management with our efficient solutions. We organize and store your records securely, ensuring easy access when needed.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div ref={ref}>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      aria-hidden="true"
                      className="mt-10 lg:mt-0"
                    >
                      <img
                        src="/card4.webp"
                        alt="image1"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </motion.div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                        Compliance and Growth
                      </h3>
                      <p className="mt-3 text-lg">
                        Stay compliant and grow your business with our expert services.
                      </p>
                      <div className="mt-12 space-y-12">
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControls}
                          transition={{ duration: 0.5, delay: 0.15 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-16 h-12 rounded-md">
                              <FcLineChart size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              Freight Factoring
                            </h4>
                            <p className="mt-2">
                              Improve cash flow with our reliable freight factoring services. We provide quick payments for your invoices, so you can keep your business running smoothly.
                            </p>
                          </div>
                        </motion.div>
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControls}
                          transition={{ duration: 0.5, delay: 0.35 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-16 h-12 rounded-md">
                              <FcRadarPlot size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              DoT Compliance / Safety
                            </h4>
                            <p className="mt-2">
                              Ensure compliance with DoT regulations and maintain safety standards. We help you stay updated with the latest rules and avoid costly penalties.
                            </p>
                          </div>
                        </motion.div>
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControls}
                          transition={{ duration: 0.5, delay: 0.55 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-16 h-12 rounded-md">
                              <FcGenealogy size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              Freight Rate Negotiation
                            </h4>
                            <p className="mt-2">
                              Get the best freight rates with our expert negotiation services. We work with shippers to secure competitive rates, maximizing your profits.
                            </p>
                          </div>
                        </motion.div>
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControls}
                          transition={{ duration: 0.5, delay: 0.75 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-16 h-12 rounded-md">
                              <FcMindMap size={"4rem"} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              Company Formation
                            </h4>
                            <p className="mt-2">
                              Start your trucking business with our company formation services. We handle all the legal and administrative tasks, so you can focus on driving.
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                    >
                      <img
                        src="/card7.webp"
                        alt="image2"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-200 to-blue-500"></div>
    </>
  );
};

export default Features;
