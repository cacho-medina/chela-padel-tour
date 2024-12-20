"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const isRegisterPage = pathname === "/registro";

    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 50;
        if (scrolled !== isScrolled) setIsScrolled(scrolled);
    });

    return (
        <motion.header
            className={`fixed w-full z-50 transition-colors duration-300 ${
                isScrolled
                    ? "bg-secondary shadow-md"
                    : "bg-transparent backdrop-blur-sm"
            }`}
            initial={{ opacity: 0, y: -50 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
            }}
        >
            <div className="container px-8 py-4 flex justify-between items-center">
                <Link href="/">
                    <motion.h1
                        className={`text-2xl font-bold cursor-pointer inline-flex items-center gap-2 ${
                            isScrolled ? "text-slate-300" : "text-white"
                        }`}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src="/images/logo.png"
                            alt="Chela Padel Tour"
                            width={60}
                            height={60}
                            className="md:size-16"
                        />
                    </motion.h1>
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6 items-center">
                        {/* ... resto del código de navegación ... */}
                        {isRegisterPage ? (
                            <>
                                <Link
                                    href="/"
                                    className={`transition hover:-translate-y-1 border-b-2 border-transparent  ${
                                        isScrolled
                                            ? "text-green-padel hover:border-green-padel"
                                            : "text-blue-padel hover:border-blue-padel"
                                    }`}
                                >
                                    Detalles
                                </Link>
                                <Link
                                    href="/"
                                    className={`transition hover:-translate-y-1 border-b-2 border-transparent  ${
                                        isScrolled
                                            ? "text-green-padel hover:border-green-padel"
                                            : "text-blue-padel hover:border-blue-padel"
                                    }`}
                                >
                                    Participar
                                </Link>
                                <Link
                                    href="/"
                                    className={`transition hover:-translate-y-1 border-b-2 border-transparent  ${
                                        isScrolled
                                            ? "text-green-padel hover:border-green-padel"
                                            : "text-blue-padel hover:border-blue-padel"
                                    }`}
                                >
                                    FAQ
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/"
                                    className={`transition hover:-translate-y-1 border-b-2 border-transparent  ${
                                        isScrolled
                                            ? "text-blue-padel hover:border-blue-padel"
                                            : "text-green-padel hover:border-green-padel"
                                    }`}
                                >
                                    Detalles
                                </Link>
                                <Link
                                    href="/"
                                    className={`transition hover:-translate-y-1 border-b-2 border-transparent  ${
                                        isScrolled
                                            ? "text-blue-padel hover:border-blue-padel"
                                            : "text-green-padel hover:border-green-padel"
                                    }`}
                                >
                                    Participar
                                </Link>
                                <Link
                                    href="/"
                                    className={`transition hover:-translate-y-1 border-b-2 border-transparent  ${
                                        isScrolled
                                            ? "text-blue-padel hover:border-blue-padel"
                                            : "text-green-padel hover:border-green-padel"
                                    }`}
                                >
                                    FAQ
                                </Link>
                            </>
                        )}
                    </ul>
                </nav>
                <div>
                    <Button
                        variant="green"
                        className={`transition-all ease-in-out duration-300 outline outline-transparent outline-offset-2 ${
                            isScrolled
                                ? "hover:outline-blue-padel"
                                : "hover:outline-green-padel"
                        }`}
                    >
                        <Link href="/registro" className="text-blue-padel">
                            Inscribite aqui
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.header>
    );
}
