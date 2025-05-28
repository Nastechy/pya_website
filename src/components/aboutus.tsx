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

    return (
        <div className="bg-[#F5F5F5] p-4 md:p-16  ">
            <section ref={ref} className="bg-white py-6 md:py-16 lg:py-24 rounded-[16px]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                            }}
                            className="space-y-6"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={controls}
                                variants={{
                                    visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.6 } },
                                }}
                                className="text-[26px] font-bold text-[#394636]"
                            >
                                About Us
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={controls}
                                variants={{
                                    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } },
                                }}
                                className="text-gray-600 text-base lg:text-lg leading-relaxed"
                            >
                                <span className="font-semibold">Welcome to Pan Youth Association (PYA)</span> <br /> Abuja Branch
                                PYA Abuja Branch is a dynamic Association dedicated
                                to uplifting and empowering young people from diverse backgrounds.
                                As a key branch of the Pan Youth Association, we serve as a hub
                                for youth-driven initiatives, focusing on critical areas such as
                                education, healthcare, ICT and technological advancement,
                                economic development, cultural and heritage preservation,
                                and community building. <br />
                                <span className="font-semibold">  Mu Lapyil </span>
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30, scale: 0.9 }}
                            animate={controls}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
                                },
                            }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative overflow-hidden rounded-2xl shadow-2xl"
                            >
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
