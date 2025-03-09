import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import map from "../images/map.png";
import mapbg from "../images/map-bg.png";
import Footer from "../Footer";
import { useAnimation, useInView, motion } from "framer-motion";

const services = [
    { title: "IFTA Reporting", description: "If your vehicle: -is used to transport people or property; -has three or two axles as well as an actual or registered gross vehicles weight that exceeds 26,000 Ibs (11,797 kgs) - or if in combination the actual or registered gross vehicles weight is more than 26,000 Ibs. (11,797 kgs). You must submit the IFTA quarterly fuel report.", img: "public/card1.webp" },
    { title: "Trucking Accounting", description: "Horizon Solutions provides trucking accounting services to keep you and your truck on the road. While you are out there on the road, we give all the necessary support and assistance to get the job done the right way, time and time again.", img: "public/card2.webp" },
    { title: "Document Management & Paperwork", description: "Horizon Solutions offers an extensive range of solutions for truckers and trucking companies. Including dispatching services dedicated to providing you invaluable support.", img: "public/card3.webp" },
    { title: "Freight Factoring", description: "As with any important business decision, whether you decide to use a truck factoring service depends on your business model, scale of operations, and how much risk you want to assume. Horizon Solutions is here to guide you.", img: "public/card4.webp" },
    { title: "Freight Rate Negotiation", description: "Horizon Solutions goes far beyond simple average rate negotiation. We help you position your operation and your brand at the forefront of the market. We’ll take care of everything. All you need to do is drive.", img: "public/card5.webp" },
    { title: "Dispatching – Trucking Services", description: "Truck Dispatching: Keeping Your Business Moving So You Can Focus on Driving. Here at Horizon Solutions, we are proud to be the truck dispatching company you can rely on.", img: "public/card6.webp" },
    { title: "Company Formation", description: "Horizon Solutions can help you create the company, register your trailers and vehicles, and get all the necessary documents and paperwork to get you up and running. We’re happy to support you, whatever stage in the process you are.", img: "public/card7.webp" },
    { title: "Truckers Accounting", description: "Driving your truck, achieving great results for the customers you work with, and providing your transportation expertise to long-term clients – these are some of your passions. Trucking accounting is probably lower down in the list of things you enjoy. Let Horizon Solutions handle it for you.", img: "public/card.webp" },
    { title: "Trucking Invoice Service", description: "Your trucking services offer great advantages to your clients. They have specific needs related to the transportation and delivery of goods, and you have the skills and equipment required to fulfill those needs. But you need to be supported too – you need the steady stream of revenue that keeps you on the road and your business growing. Horizon Solutions is here to help.", img: "public/card9.webp" },
    { title: "Truck Document Management", description: "The successful management of trucking requires striking a balance. While trucking is largely about driving, and your clients love the results you achieve for them in this capacity, there is much more going on behind the scenes. Horizon Solutions ensures everything runs smoothly.", img: "public/card10.webp" },
    { title: "Document Dispatch Services", description: "Horizon Solutions understands that hauling products from point A to point B is not the end of the day for truck drivers. Truck drivers are faced with hours of administrative paperwork long after their route is complete. We’re here to simplify that process.", img: "public/card11.webp" },
];

const Services = () => {
    useEffect(() => {
        document.title = "Horizon Solutions | Services";
    }, []);

    const { innerWidth: width, innerHeight: height } = window;
    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    /* automatically scroll to the top of the page */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-br from-blue-100">
                {/* offer */}
                <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                    <div className="container mx-auto px-10">
                        <motion.div
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 75 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, delay: 0.25 }}
                            className="flex flex-wrap -mx-4"
                        >
                            <div className="w-full px-4">
                                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                                    <span className="block mb-2 text-lg font-semibold text-gray-500">
                                        Our Services
                                    </span>
                                    <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                                        What We Offer
                                    </h2>
                                    <p className="text-lg text-gray-500">
                                        In the world of trucking and transportation, Horizon Solutions offers a wide range of services to meet your unique needs. From efficient dispatching to seamless document management, we ensure your operations run smoothly and your business stays on the road.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: 75 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, delay: 0.25 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
                        >
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    title={service.title}
                                    details={service.description}
                                    img={service.img}
                                />
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Rest of your code for the map section */}
                <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
                    <div className="mx-auto mb-12 text-center lg:mb-20">
                        <span className="block mb-2 text-lg font-semibold text-gray-500"></span>
                        <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                            More Than 10 Years We Provide Services
                            <br className="md:block hidden" />
                            All over the World
                        </h2>
                        <p className="text-lg text-gray-500">
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form
                        </p>
                    </div>
                    <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                        <img
                            src={map}
                            alt="world map image"
                            className="w-full xl:h-full h-80 sm:block hidden"
                        />
                        <img
                            src={mapbg}
                            alt="mobile-image"
                            className="sm:hidden -mt-10 block w-full h-96 absolute z-0"
                        />
                        <motion.div
                            ref={ref}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -75 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 1, delay: 0.25 }}
                            className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12"
                        >
                            <p className="text-3xl font-semibold text-gray-800">2K+</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                                Companies Helped
                            </p>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 75 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 1, delay: 0.25 }}
                            className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-0 sm:mt-0 mt-4 xl:mt-80 xl:-ml-0 sm:-ml-12"
                        >
                            <p className="text-3xl font-semibold text-gray-800">25%</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                                Average Performance Increase
                            </p>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: 75 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 1, delay: 0.25 }}
                            className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-0 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24"
                        >
                            <p className="text-3xl font-semibold text-gray-800">70%</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                                Companies Purchase Again
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Services;

const ServiceCard = ({ title, details, img }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
            <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-600 overflow-y-auto max-h-32">{details}</p>
            </div>
        </div>
    );
};