"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"


export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState<string>("home")

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "members", "information", "contact", "about"]
            const scrollPos = window.scrollY + 100

            for (const section of sections) {
                const el = document.getElementById(section)
                if (el) {
                    const top = el.offsetTop
                    const bottom = top + el.offsetHeight
                    if (scrollPos >= top && scrollPos < bottom) {
                        setActiveLink(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const handleLinkClick = (link: string) => {
        setActiveLink(link)
        setIsMenuOpen(false)
    }

    return (
        <nav className="flex items-center justify-between p-3 md:px-20 px-3 bg-[#2F3C2B] shadow sticky top-0 z-50">
            <div className="flex items-center md:space-x-4 space-x-2">
                <a href="#home" onClick={() => handleLinkClick("home")} className="flex items-center space-x-2">
                    <Image src="/pyalogo.png" alt="PYA Logo" width={50} height={40} />
                </a>
                <div className="font-bold md:text-[26px] text-[18px] text-white">Pan Youth Association</div>
            </div>

            <div className="hidden md:flex items-center space-x-16 font-[500] text-[14px]">
                {[
                    { label: "Home", id: "home" },
                    { label: "Members", id: "members" },
                    { label: "Information", id: "information" },
                    { label: "Contact", id: "contact" },
                    { label: "About", id: "about" },
                ].map(({ label, id }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={() => handleLinkClick(id)}
                        className={cn(
                            "text-white transition-transform transform",
                            activeLink === id ? "text-[#e1a409]" : "hover:scale-110"
                        )}
                    >
                        {label}
                    </a>
                ))}
            </div>

            <button
                className="md:hidden text-white p-2 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div
                className={cn(
                    "absolute top-full left-0 right-0 bg-[#0a0513] border-[1px] border-[#232225] rounded-b-[20px] shadow-lg mt-1 p-4 transition-all duration-300 transform md:hidden",
                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                )}
            >
                <div className="flex flex-col space-y-4">
                    {[
                        { label: "Home", id: "home" },
                        { label: "Members", id: "members" },
                        { label: "Information", id: "information" },
                        { label: "Contact", id: "contact" },
                        { label: "About", id: "about" },
                    ].map(({ label, id }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={cn(
                                "text-white transition-transform transform px-4",
                                activeLink === id ? "text-[#e1a409]" : "hover:scale-110"
                            )}
                            onClick={() => handleLinkClick(id)}
                        >
                            {label}
                        </a>
                    ))}
                    <div className="pt-2">
                        <Button
                            className="bg-[#e1a409] hover:bg-pink-700 cursor-pointer text-white rounded-[10px] px-3 font-bold w-full"
                            onClick={() => {
                                setActiveLink("contact")
                                setIsMenuOpen(false)
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                            }}
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

