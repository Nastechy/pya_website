"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const members = [
    { id: 1, name: "Abasiye Edet Archibong", position: "Marketing Manager/CFO", image: "/person1.jpg" },
    { id: 2, name: "Esha Nadeem", position: "Sales manager", image: "/person2.jpg" },
    { id: 3, name: "Noshaba Ahmad", position: "Product Manager", image: "/person3.jpg" },
    { id: 4, name: "Ali Hassan", position: "Media Director", image: "/person4.jpg" },
    { id: 5, name: "Fatima Ibrahim", position: "Community Outreach", image: "/person5.jpg" },
    { id: 6, name: "Mohammed Yusuf", position: "Technical Lead", image: "/person6.jpg" },
    { id: 7, name: "Sarah Ahmed", position: "Creative Director", image: "/person7.jpg" },
    { id: 8, name: "Ibrahim Musa", position: "Operations Manager", image: "/person8.jpg" },
    { id: 9, name: "Amina Hassan", position: "Public Relations", image: "/person9.jpg" },
]

export default function MembersCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [direction, setDirection] = useState(1)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            slideNext()
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    useEffect(() => {
        const timeout = setTimeout(() => setIsAutoPlaying(true), 1000)
        return () => clearTimeout(timeout)
    }, [currentIndex])

    function slideNext() {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % members.length)
    }

    function slidePrev() {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)
    }

    function getVisibleMembers() {
        const visibleCount = 3
        const result = []

        for (let i = -1; i < visibleCount - 1; i++) {
            const index = (currentIndex + i + members.length) % members.length
            result.push({ ...members[index], displayIndex: i + 1 })
        }

        return result
    }

    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <section
            id="members"
            className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            ref={containerRef}
        >
            <FloatingElement delay={0} duration={20} size={200} />
            <FloatingElement delay={5} duration={25} size={150} />
            <FloatingElement delay={10} duration={30} size={100} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-16 text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-block mb-4"
                    >
                        <div className="w-16 h-1 bg-gradient-to-r from-[#2F3C2B] to-green-800 rounded-full mx-auto" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-[18px] md:text-[30px] font-bold mb-4 text-[#2F3C2B]"
                    >
                        PYA Members
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-600 text-[14px] md:text-[16px] max-w-2xl mx-auto"
                    >
                        Our members in key positions and leadership roles
                    </motion.p>
                </motion.div>

                <div className="px-8 sm:px-20 overflow-hidden">
                    <motion.div className="flex justify-center items-center space-x-6 md:space-x-8" layout>
                        <AnimatePresence mode="popLayout" custom={direction}>
                            {getVisibleMembers().map((member, index) => (
                                <motion.div
                                    key={`${member.id}-${currentIndex}`}
                                    custom={direction}
                                    initial={{
                                        opacity: 0,
                                        x: direction > 0 ? 400 : -400,
                                        scale: 0.7,
                                        rotateY: direction > 0 ? 45 : -45,
                                    }}
                                    animate={{
                                        opacity: index === 1 ? 1 : 0.7,
                                        x: 0,
                                        scale: index === 1 ? 1.1 : index === 0 || index === 2 ? 0.95 : 0.8,
                                        rotateY: 0,
                                        zIndex: index === 1 ? 20 : 10 - Math.abs(index - 1),
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: direction > 0 ? -400 : 400,
                                        scale: 0.7,
                                        rotateY: direction > 0 ? -45 : 45,
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        delay: index * 0.05,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 25,
                                    }}
                                    className="flex-shrink-0 w-72 sm:w-80 md:w-72"
                                    style={{
                                        perspective: "1000px",
                                    }}
                                >
                                    <EnhancedMemberCard member={member} isCenter={index === 1} enableTilt={isDesktop && index === 1} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Slide progress and dots */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex justify-center mt-12 space-x-3"
                >
                    {members.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1)
                                setCurrentIndex(index)
                            }}
                            className="relative"
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Go to member ${index + 1}`}
                        >
                            <div
                                className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentIndex
                                        ? "bg-gradient-to-r from-green-600 to-green-800 shadow-lg"
                                        : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                            {index === currentIndex && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute inset-0 rounded-full bg-green-500/30"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Buttons container */}
                <div
                    className={`
            z-20 flex
            ${isDesktop
                            ? "absolute left-4 top-1/2 -translate-y-1/2 flex-col space-y-6"
                            : "relative mt-6 justify-center flex-row space-x-6"
                        }
          `}
                >
                    <motion.button
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={slidePrev}
                        aria-label="Previous member"
                        className="w-12 h-12 bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={slideNext}
                        aria-label="Next member"
                        className="w-12 h-12 bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <ChevronRight size={24} />
                    </motion.button>
                </div>
            </div>
        </section>
    )
}

interface MemberCardProps {
    member: {
        id: number
        name: string
        position: string
        image: string
    }
    isCenter: boolean
    enableTilt: boolean
}

function EnhancedMemberCard({ member, isCenter, enableTilt }: MemberCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [-100, 100], [10, -10])
    const rotateY = useTransform(mouseX, [-100, 100], [-10, 10])

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!enableTilt || !cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set(e.clientX - centerX)
        mouseY.set(e.clientY - centerY)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{
                y: -20,
                scale: isCenter ? 1.05 : 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300 },
            }}
            style={{
                rotateX: enableTilt ? rotateX : 0,
                rotateY: enableTilt ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            className={`relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${isCenter ? "ring-4 ring-green-500/50 shadow-green-500/25" : ""
                }`}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10"
                animate={{
                    background: [
                        "linear-gradient(45deg, rgba(34,197,94,0.1), transparent, rgba(59,130,246,0.1))",
                        "linear-gradient(225deg, rgba(59,130,246,0.1), transparent, rgba(34,197,94,0.1))",
                        "linear-gradient(45deg, rgba(34,197,94,0.1), transparent, rgba(59,130,246,0.1))",
                    ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative h-96 overflow-hidden">
                <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.6, ease: "easeOut" }} className="h-full">
                    <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute bottom-4 left-4 right-4"
                >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl font-bold text-gray-900 mb-1"
                        >
                            {member.name}
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-green-700 font-semibold text-sm"
                        >
                            {member.position}
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    background: "radial-gradient(circle at center, rgba(34,197,94,0.1) 0%, transparent 70%)",
                }}
            />
        </motion.div>
    )
}

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)
    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        media.addEventListener("change", listener)
        return () => media.removeEventListener("change", listener)
    }, [matches, query])
    return matches
}

function FloatingElement({ delay, duration, size }: { delay: number; duration: number; size: number }) {
    return (
        <motion.div
            className="absolute rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-xl pointer-events-none"
            style={{ width: size, height: size }}
            animate={{
                x: [0, 100, -50, 0],
                y: [0, -80, 50, 0],
                scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    )
}
