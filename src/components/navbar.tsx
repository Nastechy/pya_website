
"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const SECTIONS = ["home", "about", "information", "contact", "members"] as const
type SectionId = (typeof SECTIONS)[number]

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState<SectionId>("home")

    const setActiveSection = useCallback((id: SectionId) => {
        setActiveLink(id)
        try {
            localStorage.setItem("activeSection", id)
        } catch { }
        if (typeof window !== "undefined") {
            const hash = `#${id}`
            if (window.location.hash !== hash) {
                history.replaceState(null, "", hash)
            }
        }
    }, [])

    useEffect(() => {
        if (typeof window === "undefined") return

        const fromHash = (window.location.hash || "").replace("#", "") as SectionId
        const stored = (localStorage.getItem("activeSection") || "") as SectionId
        const target: SectionId =
            (SECTIONS as readonly string[]).includes(fromHash) ? fromHash
                : (SECTIONS as readonly string[]).includes(stored) ? stored
                    : "home"

        setActiveSection(target)

        const el = document.getElementById(target)
        if (el) {
            requestAnimationFrame(() => el.scrollIntoView({ behavior: "auto", block: "start" }))
        }
    }, [setActiveSection])

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 100
            for (const section of SECTIONS) {
                const el = document.getElementById(section)
                if (!el) continue
                const top = el.offsetTop
                const bottom = top + el.offsetHeight
                if (scrollPos >= top && scrollPos < bottom) {
                    if (activeLink !== section) setActiveSection(section)
                    break
                }
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [activeLink, setActiveSection])

    const toggleMenu = () => setIsMenuOpen((v) => !v)

    const smoothScrollTo = (id: SectionId) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    const handleLinkClick = (id: SectionId, e?: React.MouseEvent) => {
        e?.preventDefault()
        setActiveSection(id)
        smoothScrollTo(id)
        setIsMenuOpen(false)
    }

    return (
        <nav className="flex items-center justify-between p-3 md:px-20 px-3 bg-[#2F3C2B] shadow sticky top-0 z-50">
            <div className="flex items-center md:space-x-4 space-x-2">
                <a href="#home" onClick={(e) => handleLinkClick("home", e)} className="flex items-center space-x-2">
                    <Image
                        src="/Newpanlogo.jpeg"
                        alt="PYA Logo"
                        width={80}
                        height={40}
                        className="w-[50px] md:w-[90px] h-auto"
                    />
                </a>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-16 font-[500] text-[14px]">
                {SECTIONS.map((id) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => handleLinkClick(id, e)}
                        className={cn(
                            "text-white transition-transform transform",
                            activeLink === id ? "text-[#e1a409]" : "hover:scale-110"
                        )}
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                ))}
            </div>

            {/* Mobile menu button */}
            <button
                className="md:hidden text-white p-2 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile drawer */}
            <div
                className={cn(
                    "absolute top-full left-0 right-0 bg-[#0a0513] border-[1px] border-[#232225] rounded-b-[20px] shadow-lg mt-1 p-4 transition-all duration-300 transform md:hidden",
                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                )}
            >
                <div className="flex flex-col space-y-4">
                    {SECTIONS.map((id) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={cn(
                                "text-white transition-transform transform px-4",
                                activeLink === id ? "text-[#e1a409]" : "hover:scale-110"
                            )}
                            onClick={(e) => handleLinkClick(id, e)}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    ))}

                    <div className="pt-2">
                        <Button
                            className="bg-[#e1a409] hover:bg-pink-700 cursor-pointer text-white rounded-[10px] px-3 font-bold w-full"
                            onClick={() => handleLinkClick("contact")}
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
