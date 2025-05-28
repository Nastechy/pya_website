
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        setActiveLink(window.location.pathname)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleContactUsClick = () => {
        setActiveLink("/contact")
        router.push("/contact")
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }
    }

    const handleLinkClick = (link: string) => {
        setActiveLink(link)
    }

    return (
        <nav className="flex items-center justify-between p-3 md:px-20 px-3 bg-[#2F3C2B] shadow sticky top-0 z-50">
            <div className="flex items-center md:space-x-4 space-x-2">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/pyalogo.png" alt="PYA Logo" width={50} height={40} />
                </Link>
                <div className="font-bold md:text-[26px] text-[18px] text-white">Pan Youth Association</div>
            </div>

            <div className="hidden md:flex items-center space-x-16 font-[500] text-[14px]">
                <Link
                    href="/"
                    className={cn(
                        "text-white transition-transform transform",
                        activeLink === "/" ? "text-[#e1a409]" : "hover:scale-110"
                    )}
                    onClick={() => handleLinkClick("/")}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className={cn(
                        "text-white transition-transform transform",
                        activeLink === "/about" ? "text-[#e1a409]" : "hover:scale-110"
                    )}
                    onClick={() => handleLinkClick("/about")}
                >
                    Members
                </Link>
                <Link
                    href="/services"
                    className={cn(
                        "text-white transition-transform transform",
                        activeLink === "/services" ? "text-[#e1a409]" : "hover:scale-110"
                    )}
                    onClick={() => handleLinkClick("/services")}
                >
                    Information
                </Link>
                <Link
                    href="/products"
                    className={cn(
                        "text-white transition-transform transform",
                        activeLink === "/products" ? "text-[#e1a409]" : "hover:scale-110"
                    )}
                    onClick={() => handleLinkClick("/products")}
                >
                    Contact
                </Link>
                <Link
                    href="/products"
                    className={cn(
                        "text-white transition-transform transform",
                        activeLink === "/products" ? "text-[#e1a409]" : "hover:scale-110"
                    )}
                    onClick={() => handleLinkClick("/products")}
                >
                    About
                </Link>
            </div>


            <button className="md:hidden text-white p-2 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div
                className={cn(
                    "absolute top-full left-0 right-0 bg-[#0a0513] border-[1px] border-[#232225] rounded-b-[20px] shadow-lg mt-1 p-4 transition-all duration-300 transform md:hidden",
                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none",
                )}
            >
                <div className="flex flex-col space-y-4">
                    <Link
                        href="/"
                        className={cn(
                            "text-white transition-transform transform px-4",
                            activeLink === "/" ? "text-[#e1a409]" : "hover:scale-110"
                        )}
                        onClick={() => handleLinkClick("/")}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={cn(
                            "text-white transition-transform transform px-4",
                            activeLink === "/about" ? "text-[#e1a409]" : "hover:scale-110"
                        )}
                        onClick={() => handleLinkClick("/about")}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/products"
                        className={cn(
                            "text-white transition-transform transform px-4",
                            activeLink === "/products" ? "text-[#e1a409]" : "hover:scale-110"
                        )}
                        onClick={() => handleLinkClick("/products")}
                    >
                        Products
                    </Link>
                    <Link
                        href="/services"
                        className={cn(
                            "text-white transition-transform transform px-4",
                            activeLink === "/services" ? "text-[#e1a409]" : "hover:scale-110"
                        )}
                        onClick={() => handleLinkClick("/services")}
                    >
                        Our Services
                    </Link>
                    <div className="pt-2">
                        <Button
                            className="bg-[#e1a409] hover:bg-pink-700 cursor-pointer text-white hover:text-[] rounded-[10px] px-3 font-bold w-full"
                            onClick={handleContactUsClick}
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

