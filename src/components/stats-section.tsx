"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"

export default function StatsSection() {
    const stats = [
        {
            value: 25,
            suffix: "+",
            label: "People empowered",
        },
        {
            value: 200,
            suffix: "+",
            label: "Project embarked on",
        },
        {
            value: 4000,
            suffix: "+",
            label: "Members",
        },
    ]

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    return (
        <section ref={ref} className="bg-white py-14 lg:py-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                        }}
                        className="md:text-start text-center"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
                            }}
                            className="text-sm text-gray-500 mb-4 font-medium"
                        >
                            Build for you
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } },
                            }}
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                        >
                            Join Pan Youth Association Globally.
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12"
                    >
                        {stats.map((stat, index) => (
                            <StatCounter
                                key={index}
                                value={stat.value}
                                suffix={stat.suffix}
                                label={stat.label}
                                variants={itemVariants}
                                delay={index * 0.2}
                                isInView={isInView}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

interface StatCounterProps {
    value: number
    suffix: string
    label: string
    variants: Variants
    delay: number
    isInView: boolean
}

function StatCounter({ value, suffix, label, variants, delay, isInView }: StatCounterProps) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return

        let start = 0
        const duration = 2000 // ms
        const end = Math.min(value, 9999)

        const incrementTime = duration / end

        const timer = setInterval(() => {
            start += 1
            setCount(start)
            if (start >= end) clearInterval(timer)
        }, incrementTime)

        return () => clearInterval(timer)
    }, [value, isInView])

    return (
        <motion.div variants={variants} className="text-center sm:text-left">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: isInView ? 1 : 0.8, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.6, delay }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
            >
                {count}
                {suffix}
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
                transition={{ duration: 0.6, delay: delay + 0.3 }}
                className="text-gray-600 text-sm sm:text-base font-medium"
            >
                {label}
            </motion.p>
        </motion.div>
    )
}
