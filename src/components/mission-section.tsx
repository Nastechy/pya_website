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

    return (
        <section id="information"  className="bg-[#F5F5F5] p-2 md:p-16  ">
            <div ref={ref} className="bg-white py-10 md:py-16 lg:py-24 rounded-[16px]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row  gap-12 lg:gap-16 items-center">
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
                                    src="/image.jpg"
                                    alt=" Pan Youth Association members"
                                    width={600}
                                    height={400}
                                    className="w-full h-[400px] object-cover"
                                    priority
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </motion.div>
                        </motion.div>
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
                                Mission & Vision
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={controls}
                                variants={{
                                    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } },
                                }}
                                className="text-gray-600 text-base lg:text-lg leading-relaxed"
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
