
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const heroSlides = [
    {
        id: 1,
        image: "/heroimage.jpg",
        title: "Member of Pan Youth Association Abuja",
    },
    {
        id: 2,
        image: "/heroimage2.jpg",
        title: "Empowering Youth Across Nigeria",
    },
    {
        id: 3,
        image: "/heroimage.jpg",
        title: "Building Tomorrow's Leaders Today",
    },
]

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (isAnimating) return

        timeoutRef.current = setTimeout(() => {
            goToSlide((currentSlide + 1) % heroSlides.length)
        }, 8000)

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [currentSlide, isAnimating])

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return

        setIsAnimating(true)
        setCurrentSlide(index)

        // Allow animation to finish before enabling buttons
        setTimeout(() => setIsAnimating(false), 1500) // match motion transition duration
    }

    // Optional: keyboard navigation support
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (isAnimating) return

        if (e.key === "ArrowRight") {
            goToSlide((currentSlide + 1) % heroSlides.length)
        } else if (e.key === "ArrowLeft") {
            goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)
        }
    }

    return (
        <section
            id="home"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="relative h-screen w-full overflow-hidden bg-[#2F3C2B] outline-none"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={heroSlides[currentSlide].id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div
                        className="h-full w-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${heroSlides[currentSlide].image})`,
                        }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="mb-6 flex items-center text-white bg-[#2F3C2B] p-2 w-[136px] rounded-[20px]"
                        >
                            <div className="mr-1 h-2 w-2 rounded-full bg-white" />
                            <span className="text-[12px] font-medium uppercase tracking-wider">THE PRESIDENT</span>
                        </motion.div>

                        <motion.h1
                            key={heroSlides[currentSlide].id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            {heroSlides[currentSlide].title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="flex flex-col gap-4 sm:flex-row"
                        >
                            <Button
                                size="lg"
                                disabled={isAnimating}
                                className="bg-white text-[#2F3C2B] rounded-full hover:bg-gray-100 px-3 py-3 text-[10px] font-semibold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => alert("Become a member clicked")}
                            >
                                BECOME A MEMBER
                            </Button>
                            <Button
                                size="lg"
                                disabled={isAnimating}
                                className="bg-[#2F3C2B] rounded-full hover:bg-white hover:text-black px-3 py-3 text-[10px] font-semibold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => alert("Our project clicked")}
                            >
                                OUR PROJECT
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center space-x-2 text-white"
            >
                <span className="text-2xl font-bold">{String(currentSlide + 1).padStart(2, "0")}</span>
                <div className="flex items-center space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isAnimating}
                            className={`h-0.5 transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                            tabIndex={0}
                        />
                    ))}
                </div>
                <span className="text-2xl font-light">{String(heroSlides.length).padStart(2, "0")}</span>
            </motion.div>

            <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isAnimating}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/75"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                        tabIndex={0}
                    />
                ))}
            </div>
        </section>
    )
}

