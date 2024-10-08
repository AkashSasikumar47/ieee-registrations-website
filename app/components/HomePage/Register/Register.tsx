import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Register = () => {
    const eventData = [
        {
            title: "PROTOCOL 1.0",
            category: "Hackathon",
            image: "/assets/IEEE/img/Protocol_Poster.svg",
            url: "/protocol",
            alt: "PROTOCOL 1.0"
        },
        {
            title: "HackTrix-24",
            category: "Hackathon",
            image: "/assets/IEEE/img/HackTrix_Poster.jpeg",
            url: "/hacktrix",
            alt: "HackTrix-24"
        },
        {
            title: "TechTrek",
            category: "Hackathon",
            image: "/assets/IEEE/img/TechTreck 2024.png",
            url: "https://techtrek.ieeesrmist.com/",
            alt: "TechTrek"
        },
        {
            title: "Concepto-23",
            category: "Ideathon",
            image: "/assets/IEEE/img/Concepto_Poster.jpeg",
            url: "#",
            alt: "Concepto-23"
        }
    ];

    return (
        <section className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
            <div className="mx-auto mb-10 items-center justify-center text-center">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-2 sm:mb-4 font-sans font-semibold text-cyan-500 text-xs lg:text-normal"
                >
                    PAST EVENTS
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl"
                >
                    Highlights from Our Previous Events
                </motion.h2>
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto font-sans font-base text-gray-400 text-sm sm:text-lg"
                >
                    Discover the success stories and memorable moments from our previous events. See how we’ve fostered innovation and built community.
                </motion.h4>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-16 grid gap-x-4 gap-y-10 grid-cols-2 md:gap-x-6 lg:grid-cols-4"
            >
                {eventData.map((event, index) => (
                    <EventItem key={index} event={event} index={index} />
                ))}
            </motion.div>
        </section>
    );
};

const EventItem = ({ event, index }: { event: EventData; index: number }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <a
                href={event.url}
                className="group mb-2 block h-120 overflow-hidden bg-gray-100 lg:mb-3"
            >
                <motion.img
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    src={event.image}
                    loading="lazy"
                    alt={event.alt}
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
            </a>
            <motion.div className="text-center mt-6">
                <h1 className="mb-1 font-sans font-bold text-black text-normal sm:text-xl">
                    {event.title}
                </h1>
                <div className="mb-2 font-sans font-base text-black text-xs sm:text-normal">
                    {event.category}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default React.memo(Register);

interface EventData {
    title: string;
    category: string;
    image: string;
    url: string;
    alt: string;
}