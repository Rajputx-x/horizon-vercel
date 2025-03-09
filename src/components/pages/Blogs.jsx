import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";

const faqsData = [
  { 
    question: 'What will horizon Solutions service do for my business?',
    answer: 'Very simply, we buy you time so you can make more money. Most owners/operators get into this business to drive loads and make money, then find themselves bogged down by all the paperwork, regulatory requirements, and negotiations — things that keep you from doing what actually makes you money. By taking on all the business support activities you would like to offload, horizon Solutions allows your business to run efficiently — and for you to take on more loads. In addition, when it comes to negotiating, we aim to get you the best rates for your loads, so you get to put more money in your pocket.'
},
{ 
    question: "Isn't it always easier and cheaper to hire an in-house dispatcher?",
    answer: 'Surprisingly, no. If you want to recruit capable and competent talent, you need to develop and undergo a pretty vigorous recruitment process, which takes time and — if you need the services of headhunters — money. Even if you find what you are looking for, you will most likely need to provide office space — yet another expenditure — and in some cases, further training. Meanwhile, as many of our clients have admitted, hiring horizon Solutions turns out to be more cost-effective than even having one full-time dispatcher. Our industry expertise, networks, and experience make us the best at what we do.'
},
{ 
    question: 'Do I have to enter into a long-term contract with horizon Solutions?',
    answer: "Nope. You hire horizon Solutions on a month-to-month basis. We don't make trucker drivers commit long-term upfront because we believe in earning your business. If you aren't happy, we aren't happy, so we'll work hard for you. But we also believe that all business owners should have the freedom to work with whomever they want. It's important for us to keep that freedom for you."
},
{
    "question": "How do I sign up with you, and what do I need?",
    "answer": "Signing up with horizon Solutions is a breeze since you can submit documents to us online.\n\n- First, you sign our Dispatch Carrier Agreement, a document that clearly sets out our responsibilities and our responsibilities. This is meant to protect both of us — it is not a long-term service contract by any means. Our services are month-to-month, and you are not penalized for discontinuing our service.\n\n- You will also need insurance that names horizon Solutions as the certificate holder. This is common industry practice for shippers, dispatchers, and brokers — it just allows us to conduct business at your behest and on your behalf when you want us to. Make sure the insurance sets out liability as well as cargo coverage.\n\n- We also need the Carrier Set-Up Package and references for the shippers and brokers we work with and for our records. Your MC Permit and signed W9 form should be here as well.\n\n- At horizon Solutions, we keep impeccable and accurate records — and always maintain compliance with all safety, regulatory, and industry requirements — so we also need a copy of the CDL for each driver we will be dispatching."
}
,    
{ 
    question: 'Do I have to be working under my own MC authority to hire horizon Solutions?',
    answer: "We work with owners/operators working under their own MC authorities — but also with carriers with company drivers."
},
{ 
    question: 'Do I have to request insurance certificates every time?',
    answer: 'No. Unless you have specifically instructed your insurance agent to process the certificate requests made by "the insured only" — you — we work with your insurance agent to get the insurance certificates with the certificate holder information.'
},
{ 
    question: "Will you work with me if I'm new to the business?",
    answer: 'Absolutely. We love helping truck drivers and carriers in all stages of their careers. What we look for are keen, hardworking drivers, period. Realistically, if you are a new carrier, it may initially be harder for us to find you the best loads because most shippers and brokers prefer carriers with MC authorities more than six months to a year old. However, you can rest assured that horizon Solutions will give it our all so you can make better money in your first year. Once you hit the one year milestone, access to better rates and loads will be even easier.'
},
{
    "question": "Can I Choose which horizon Solutions services I want?",
    "answer": "Yes. Many of our clients love our comprehensive service package — which includes dispatch, documentation, compliance, and all the business supports a carrier needs — but we also have clients who, say, just want assistance with documentation and paperwork. At horizon Solutions, we believe our clients should have the freedom to do business as they see fit. After all, no one knows their business better than they do.\n\nHave any other questions? Please don't hesitate to talk to us. We look forward to helping you grow your trucking business."
}
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
    const variants = {
        open: { opacity: 1, height: 'auto' },
        collapsed: { opacity: 0, height: 0 },
    };

    return (
        <div className="border-b border-gray-300 pb-8">
            <button
                className="flex justify-between items-center w-full py-2 text-left text-lg font-medium"
                onClick={toggleOpen}
                aria-expanded={isOpen}
            >
                {question}
                <svg
                    className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            <motion.div
                initial="collapsed"
                animate={isOpen ? "open" : "collapsed"}
                variants={variants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="py-2 text-orange-500">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
};

const Blogs = () => {
    useEffect(() => {
        document.title="Horizon Solutions | FAQ";
    },[]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <Navbar />
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gradient-to-br from-blue-100">
                <div className="container mx-auto px-4">
                    <div className="mx-auto mb-12 text-center lg:mb-20">
                        <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="w-full max-w-2xl mx-auto space-y-6">
                        {faqsData.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={index === openIndex}
                                toggleOpen={() => toggleOpen(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Blogs;
