"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function SupportSection() {
    return (
        <section id="contact" className="bg-[#2F3C2B] py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto"
                    >
                        Help us reach the world with our talent
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-[14px] hover:bg-black hover:text-white text-[#2F3C2B] font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Support PYA Abuja
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative max-w-5xl mx-auto"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/computer.png"
                                alt="Modern workstation with multiple monitors showing digital content"
                                width={1200}
                                height={600}
                                className="w-full h-auto"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full blur-sm opacity-60"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400 rounded-full blur-md opacity-40"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-8 flex justify-center space-x-2"
                    >
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                                className="w-2 h-2 bg-green-600 rounded-full opacity-60"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
