"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react"
import Image from "next/image"


export default function Footer() {
    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Youtube, href: "#", label: "YouTube" },
    ]

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer className="bg-gray-100 py-8 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    // className="flex items-center space-x-3"
                    >
                        <div className="flex items-center md:space-x-4 space-x-2">
                            <a className="flex items-center space-x-2">
                                <Image src="/pyalogo.png" alt="PYA Logo" width={50} height={40} />
                            </a>
                            <div className="font-bold md:text-[26px] text-[18px] text-[#2F3C2B]">Pan Youth Association</div>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center space-x-3"
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="w-10 h-10 bg-gray-800 hover:bg-green-800 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                                aria-label={social.label}
                            >
                                <social.icon size={18} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <div className="md:hidden mt-6 pt-6 border-t border-gray-300">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-10 h-10 bg-gray-800 hover:bg-green-800 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex items-center justify-between w-full">
                            <p className="text-gray-600 text-sm text-center flex-1">
                                © 2024 Powered by: <span className="font-semibold">Pan Youth Association</span>
                            </p>

                            <motion.button
                                onClick={scrollToTop}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="w-10 h-10 bg-[#2F3C2B] cursor-pointer text-white rounded-lg flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl ml-4"
                                aria-label="Back to top"
                            >
                                <ArrowUp size={18} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
