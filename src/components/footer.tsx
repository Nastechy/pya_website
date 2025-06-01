"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react"
import Image from "next/image"
import React from "react"

interface FooterProps {
    organizationName?: string
}

export default function Footer({ organizationName = "Pan Youth Association" }: FooterProps) {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Youtube, href: "#", label: "YouTube" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter" },
    ]

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer className="bg-gray-100 border-t border-gray-300 py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop */}
                <div className="hidden md:flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Image src="/pyalogo.png" alt={`${organizationName} Logo`} width={40} height={32} />
                        <span className="font-semibold text-[#2F3C2B] text-lg">{organizationName}</span>
                    </div>

                    <div className="flex space-x-4">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="w-9 h-9 bg-[#2F3C2B] text-white rounded flex items-center justify-center hover:bg-green-800 shadow-md"
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-6">
                        <p className="text-sm text-[#2F3C2B]">
                            © {currentYear} Powered by:{" "}
                            <span className="font-semibold">{organizationName}</span>
                        </p>

                        <motion.button
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="w-10 h-10 bg-[#2F3C2B] text-white rounded shadow hover:shadow-lg flex items-center justify-center cursor-pointer"
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden flex flex-col items-center space-y-6">
                    <div className="flex items-center space-x-3">
                        <Image src="/pyalogo.png" alt={`${organizationName} Logo`} width={40} height={32} />
                        <span className="font-semibold text-[#2F3C2B] text-base">{organizationName}</span>
                    </div>

                    <div className="flex space-x-5">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="w-10 h-10 bg-[#2F3C2B] text-white rounded flex items-center justify-center hover:bg-green-800 shadow-md"
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <p className="text-sm text-[#2F3C2B] text-center">
                            © {currentYear} Powered by: <span className="font-semibold">{organizationName}</span>
                        </p>

                        <motion.button
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="w-10 h-10 bg-[#2F3C2B] text-white rounded shadow hover:shadow-lg flex items-center justify-center cursor-pointer"
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
