"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className="bg-gray-800 text-white py-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p>
                © Powered by{" "}
                <a
                    href="http://koiwebstudio.com"
                    className="transition-colors hover:text-orange-400"
                >
                    Koi Studio
                </a>
            </p>
        </motion.footer>
    );
}
