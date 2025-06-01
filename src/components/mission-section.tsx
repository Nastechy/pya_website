"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"

export default function Mission() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    const imageVariants = {
        hidden: { opacity: 0, rotate: -10, scale: 0.85, y: 20 },
        visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            y: [20, -10, 0],
            transition: {
                duration: 1.2,
                ease: "easeInOut",
            },
        },
    }

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.4,
            },
        },
    }

    const titleVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const paragraphVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    }

    return (
        <section id="information" className="bg-[#F5F5F5] p-2 md:p-16">
            <div ref={ref} className="bg-white py-10 md:py-16 lg:py-24 rounded-[16px]">
                <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image first on lg+, second on smaller */}
                        <motion.div
                            className="relative order-2 lg:order-1"
                            initial="hidden"
                            animate={controls}
                            variants={imageVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 150 }}
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer">
                                <Image
                                    src="/image.jpg"
                                    alt=" Pan Youth Association members"
                                    width={600}
                                    height={400}
                                    className="w-full h-[400px] object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-6 order-1 lg:order-2"
                            initial="hidden"
                            animate={controls}
                            variants={containerVariants}
                        >
                            <motion.h2
                                className="text-[26px] font-bold text-[#394636]"
                                variants={titleVariants}
                            >
                                Mission & Vision
                            </motion.h2>

                            <motion.p
                                className="text-gray-600 text-base lg:text-lg leading-relaxed"
                                variants={paragraphVariants}
                            >
                                Our mission is to inspire and nurture leadership, collaboration,
                                and innovation among the youth from Pan Land, empowering them to
                                realize their full potential and excel in their chosen paths in life.
                                We are committed to equipping Pan youth with the resources, mentorship,
                                and guidance necessary to thrive in an ever-changing world while
                                fostering a deep sense of responsibility toward their community and heritage.
                                while fostering a deep sense of responsibility toward their community and heritage.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
