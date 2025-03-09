import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useAnimation, useInView, motion } from "framer-motion";
import ayroui from '../images/brands/ayroui.svg';
import graygrids from '../images/brands/graygrids.svg';
import uideck from '../images/brands/uideck.svg';
import SabMedia from '../images/About/horizon.png';
import profile1 from '../images/About/team/profile1.jpg';
import profile2 from '../images/About/team/profile2.png';
import profile3 from '../images/About/team/profile3.jpg';
const About = () => {
    const { innerWidth: Width } = window;
    const ref = useRef();
    const isInView = useInView(ref);
    const mainControlls = useAnimation();
    useEffect(() => {
      if (isInView) {
        mainControlls.start("visible");
      }
    }, [isInView]);
    useEffect(() => {
      document.title="Horizon Solutions | About";
  },[]);
  /* automatically scroll to the top of the page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <section className="pt-0 lg:pt-[100px] pb-20  overflow-hidden bg-gradient-to-br from-blue-100" >
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap items-center -mx-4">
            <motion.div
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="mx-auto mb-12 lg:pt-10 md:pt-20 sm:pt-40 max-sm:pt-20 text-center lg:mb-20 w-full">
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                  Why Choose Us
                </h2>
                <p className="text-lg text-gray-500">
                At Horizon Solutions, we understand the challenges of the trucking industry and are committed to helping owner-operators and fleet owners maximize their efficiency and profitability. Our expert dispatch team ensures that you get the best-paying loads, optimize your routes, and reduce downtime, so your business stays on the road to success. With 24/7 support, transparent communication, and industry-leading negotiation skills, we take the stress out of load management, allowing you to focus on driving while we handle the rest. Partner with us and experience reliable, professional, and results-driven dispatch services that put your success first! 
                </p>
            </motion.div>
            <div className="w-full px-4 lg:w-5/12 lg:pr-20 ">
              
              <motion.div
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -120 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }} className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4">
                  <div className="py-3 sm:py-4">
                    <img
                      src={SabMedia}
                      alt=""
                      className="w-full rounded-2xl transition-all duration-300 transform hover:scale-110 " 
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-7/12 ">
              <motion.div
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 100 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }} className="mt-0 lg:mt-0">
              <span className="block mb-2 text-xl font-semibold text-primary">
              About Us
              </span>
              <div className="w-[10%] h-[3px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
              <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl"></h2>
              <p className="mb-8 text-base text-gray-500">
               "At Horizon Solutions, we specialize in providing seamless and efficient dispatch services tailored to the evolving needs of trucking companies and owner-operators. With a strong focus on reliability, technology, and customer satisfaction, we empower businesses to maximize their operations and profitability. Our team of industry experts works tirelessly to optimize routes, streamline communication, and ensure that every load is handled with precision and professionalism."
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Horizon Solutions?</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Reliable dispatch services that keep your trucks on the road and earning.</li>
                <li>Expert negotiators securing the best rates for every load.</li>
                <li>24/7 support to assist with any operational challenges.</li>
                <li>Dedicated professionals committed to optimizing your success.</li>
              </ul>
              <a
               href="/contact"
               className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-blue-500 hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
               Get Started
              </a>

              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-blue-700 to-blue-400"></div>

      <Footer />
    </div>
  );
};

export default About;
