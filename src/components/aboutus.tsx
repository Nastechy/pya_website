
"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: [40, -10, 0], // bounce effect
            transition: { duration: 1, ease: "easeInOut" },
        },
    }

    const titleVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
        },
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.85, rotate: -8 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 1.2, ease: "easeOut" },
        },
    }

    return (
        <div className="bg-[#F5F5F5] p-2 md:p-16">
            <section
                id="about"
                ref={ref}
                className="bg-white py-10 md:py-16 lg:py-24 rounded-[16px]"
            >
                <div className="container mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            className="space-y-6"
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.3,
                                        delayChildren: 0.4,
                                    },
                                },
                            }}
                        >
                            <motion.div
                                className="text-[26px] font-bold text-[#394636]"
                                variants={titleVariants}
                            >
                                About Us
                            </motion.div>

                            <motion.p
                                className="text-gray-600 text-base lg:text-lg leading-relaxed"
                                variants={textVariants}
                            >
                                <span className="font-semibold">Welcome to Pan Youth Association (PYA)</span>{" "}
                                <br /> Abuja Branch PYA Abuja Branch is a dynamic Association
                                dedicated to uplifting and empowering young people from diverse
                                backgrounds. As a key branch of the Pan Youth Association, we serve
                                as a hub for youth-driven initiatives, focusing on critical areas
                                such as education, healthcare, ICT and technological advancement,
                                economic development, cultural and heritage preservation, and
                                community building. <br />
                                <span className="font-semibold"> Mu Lapyil </span>
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial="hidden"
                            animate={controls}
                            variants={imageVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 150 }}
                        >
                            <motion.div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer">
                                <Image
                                    src="/woman1.png"
                                    alt=" Pan video"
                                    width={600}
                                    height={400}
                                    className="w-full h-[600px] object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

