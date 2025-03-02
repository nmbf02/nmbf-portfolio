"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black dark:bg-purple-900 text-white py-8 text-center transition-all duration-300">
            <div className="container mx-auto">
                {/* Logo or name */}
                <h2 className="text-2xl font-bold">
                    Hello!✨ I'm <span className="font-semibold">Nathaly Berroa</span>
                </h2>

                {/* Custom message */}
                <p className="mt-2 text-sm">
                    Made with <span className="text-red-400 font-semibold">love</span> and{" "}
                    <span className="text-pink-400 font-semibold">personality</span> by{" "}
                    <span className="font-semibold">nmbf02</span>
                </p>

                {/* Copyright */}
                <p className="mt-2 text-xs text-gray-400">
                    © 2025 All rights reserved
                </p>

                {/* Social media icons */}
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://github.com/nmbf02" target="_blank" className="hover:text-gray-400 transition">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/nathalyberroa/" target="_blank" className="hover:text-gray-400 transition">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://x.com/nmbf02" target="_blank" className="hover:text-gray-400 transition">
                        <FaTwitter size={28} />
                    </a>
                    <a href="https://www.instagram.com/nmbf02?igsh=MXJ0b2FkZmRjNGp2cw==" target="_blank" className="hover:text-gray-400 transition">
                        <FaInstagram size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
}