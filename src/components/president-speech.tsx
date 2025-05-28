"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function PresidentSpeech() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    return (
        <div className="bg-[#F5F5F5] p-0 md:p-16  ">
            <section ref={ref} className="bg-[#2F3C2B] py-16 lg:py-24 rounded-[16px]">
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
                            className="inline-flex"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 text-[14px]" />
                                PRESIDENT SPEECH
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } },
                            }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                        >
                            Inaugural Address . By Chairman Innocent...
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } },
                            }}
                            className="text-white text-base lg:text-lg leading-relaxed"
                        >
                            Welcome To The Pan Youth Association (PYA) Abuja Branch! It Is My Privilege, On Behalf Of The Executive
                            Council And Our Entire Community, To Invite You To Join Us In Celebrating And Preserving The Rich Cultural
                            Heritage Of The PAN PEOPLE.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.8 } },
                            }}
                        >
                            <Button className="bg-white hover:bg-[#1F2A1B] cursor-pointer hover:text-white text-[#1F2A1B] px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                                Read More
                            </Button>
                        </motion.div>
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
                                src="/chairman2.png"
                                alt="Chairman Innocent - Pan Youth Association"
                                width={500}
                                height={400}
                                className="w-full h-[400px] object-cover"
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
