import React, { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";
import A from './images/A.png';

const Review = () => {
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="overflow-x-hidden max-w-screen font-poppins">
      <section className="">
        {Width < 631 ? (
          <>
            <div className="container px-6 py-12 mx-auto">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <div className="max-w-2xl mx-auto rounded shadow-md bg-white p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                  <h2 className="text-4xl font-bold text-blue-500">
                    What Our Customers Have to Say
                  </h2>
                  <p className="text-black">
                    Here are some reviews from our customers about their experience with Horizon Solutions and the services we provide!
                  </p>
                </div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-white">
                        <p>
                          Horizon Solutions has been a game-changer for my trucking business. Their dispatch services are incredibly efficient, and their team is always available to assist. They’ve helped me streamline my operations and save time. Highly recommended!
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={A}
                            alt="profile"
                            className="w-12 h-12 bg-center bg-cover rounded-full"
                          />
                          <div>
                            <p className="text-md font-semibold">John Carter</p>
                            <p className="text-sm text-gray-400">FreightLine Inc.</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-white">
                        <p>
                          I’ve been using Horizon Solutions for over a year now, and I couldn’t be happier. Their team is professional, responsive, and always goes the extra mile to ensure my loads are dispatched on time. A reliable partner for any trucking business.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={A}
                            alt=""
                            className="w-12 h-12 bg-center bg-cover rounded-full"
                          />
                          <div>
                            <p className="text-md font-semibold">Sarah Johnson</p>
                            <p className="text-sm text-gray-400">Swift Haulers</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-white">
                        <p>
                          Horizon Solutions has made my life so much easier. Their dispatch team is always on top of things, and their communication is excellent. I no longer have to worry about missed loads or delays. Thank you, Horizon Solutions!
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={A}
                            alt=""
                            className="w-12 h-12 bg-center bg-cover rounded-full"
                          />
                          <div>
                            <p className="text-md font-semibold">Mike Thompson</p>
                            <p className="text-sm text-gray-400">Elite Trucking</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-white">
                        <p>
                          I switched to Horizon Solutions six months ago, and it’s been the best decision for my business. Their dispatch services are top-notch, and their team is incredibly supportive. I highly recommend them to anyone in the trucking industry.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={A}
                            alt=""
                            className="w-12 h-12 bg-center bg-cover rounded-full"
                          />
                          <div>
                            <p className="text-md font-semibold">Emily Davis</p>
                            <p className="text-sm text-gray-400">Prime Movers</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container px-6 py-12 mx-auto">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="max-w-2xl mx-auto rounded shadow-md bg-white p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left"
                >
                  <h2 className="text-4xl font-bold text-blue-500">
                    What Our Customers Have to Say
                  </h2>
                  <p className="text-gray-500">
                    Here are some reviews from our customers about their experience with Horizon Solutions and the services we provide!
                  </p>
                </motion.div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: -75, y: -45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="p-6 rounded-lg shadow-lg bg-white mt-6"
                      >
                        <p>
                          Horizon Solutions has been a game-changer for my trucking business. Their dispatch services are incredibly efficient, and their team is always available to assist. They’ve helped me streamline my operations and save time. Highly recommended!
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            {/* <img
                              src={A}
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            /> */}
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">John Carter</p>
                              <p className="text-sm text-gray-400 block">FreightLine Inc.</p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: -75, y: 45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="p-6 rounded-lg shadow-lg bg-white"
                      >
                        <p>
                          I’ve been using Horizon Solutions for over a year now, and I couldn’t be happier. Their team is professional, responsive, and always goes the extra mile to ensure my loads are dispatched on time. A reliable partner for any trucking business.
                        </p>
                        <div className="flex items-center justify-between mt-4 space-x-4">
                          <div className="flex">
                            {/* <img
                              src={A}
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            /> */}
                            <div className="flex-col sm:ml-2">
                              <p className="text-lg font-semibold block">Sarah Johnson</p>
                              <p className="text-sm text-gray-400 block">Swift Haulers</p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: 75, y: -45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="p-6 rounded-lg shadow-lg bg-white"
                      >
                        <p>
                          Horizon Solutions has made my life so much easier. Their dispatch team is always on top of things, and their communication is excellent. I no longer have to worry about missed loads or delays. Thank you, Horizon Solutions!
                        </p>
                        <div className="flex justify-between items-center mt-2 space-x-4">
                          <div className="flex">
                            {/* <img
                              src={A}
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            /> */}
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">Mike Thompson</p>
                              <p className="text-sm text-gray-400 block">Elite Trucking</p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: 75, y: 45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.8, delay: 0.75 }}
                        className="p-6 rounded-lg shadow-lg bg-white"
                      >
                        <p>
                          I switched to Horizon Solutions six months ago, and it’s been the best decision for my business. Their dispatch services are top-notch, and their team is incredibly supportive. I highly recommend them to anyone in the trucking industry.
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            {/* <img
                              src={A}
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            /> */}
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">Emily Davis</p>
                              <p className="text-sm text-gray-400 block">Prime Movers</p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Review;