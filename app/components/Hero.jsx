"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Statistics from "@/app/components/Statistics";

export default function Hero() {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Evita errores de hidratación
    }

    // Verifica el modo actual
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <section
            className={`relative flex flex-col justify-center items-start px-8 h-screen transition-all duration-300 ${
                currentTheme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

                {/* Texto principal */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="md:w-1/2"
                >
                    <h1 className="text-6xl font-extrabold leading-tight md:text-7xl">
                        <span className={currentTheme === "dark" ? "text-white" : "text-black"}>Hello</span> 👋,
                        <br/>
                        <span className="text-purple-500">I'm a Developer</span>
                    </h1>

                    <p className="mt-4 text-xl text-gray-400">
                        I build things for the web and app
                    </p>

                    {/* Redes Sociales */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.2}}
                        className="mt-6 flex space-x-4"
                    >
                        <a href="https://github.com/nmbf02" target="_blank" className="hover:text-gray-400">
                            <FaGithub size={35}/>
                        </a>
                        <a href="https://www.linkedin.com/in/nathalyberroa/" target="_blank"
                           className="hover:text-gray-400">
                            <FaLinkedin size={35}/>
                        </a>
                        <a href="https://x.com/nmbf02" target="_blank" className="hover:text-gray-400">
                            <FaTwitter size={35}/>
                        </a>
                        <a href="https://www.instagram.com/nmbf02?igsh=MXJ0b2FkZmRjNGp2cw==" target="_blank"
                           className="hover:text-gray-400">
                            <FaInstagram size={35}/>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Imagen de fondo */}
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8}}
                    className="hidden md:block md:w-1/2"
                >
                    <Image src="/images/hero-image.png" alt="Hero Image" width={450} height={450}/>
                </motion.div>

            </div>

            {/* Sección inferior con estadísticas y tecnologías */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 0.4}}
                className={`absolute bottom-0 left-0 w-full py-6 transition-all duration-300 ${
                    currentTheme === "dark" ? "bg-[#1E1E1E]" : "bg-gray-200"
                }`}
            >
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">

                    {/* Estadísticas - Alineadas con el texto principal */}
                    <Statistics />

                    {/* Logos de tecnologías */}
                    <div className="flex space-x-8 ml-auto">
                        <Image src="/icons/javascript.svg" alt="JS" width={50} height={50} />
                        <Image src="/icons/html5.svg" alt="HTML5" width={50} height={50} />
                        <Image src="/icons/css3.svg" alt="CSS3" width={50} height={50} />
                        <Image src="/icons/react.svg" alt="React" width={50} height={50} />
                        <Image src="/icons/php.svg" alt="PHP" width={50} height={50} />
                    </div>

                </div>
            </motion.div>

        </section>
    );
}



// Parte 2
// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import { useTheme } from "next-themes";
// import { useEffect, useRef, useState } from "react";
// import { Points, PointMaterial } from "@react-three/drei";
// import * as THREE from "three";
// import Statistics from "@/app/components/Statistics";
//
// function Particles({ count = 5000 }) {
//     const mesh = useRef();
//     const [positions, setPositions] = useState([]);
//
//     useEffect(() => {
//         const temp = new Float32Array(count * 3);
//         for (let i = 0; i < count; i++) {
//             temp[i * 3] = (Math.random() - 0.5) * 5;
//             temp[i * 3 + 1] = (Math.random() - 0.5) * 5;
//             temp[i * 3 + 2] = (Math.random() - 0.5) * 5;
//         }
//         setPositions(temp);
//     }, [count]);
//
//     useFrame((state) => {
//         const { mouse } = state;
//         if (mesh.current) {
//             mesh.current.rotation.x = mouse.y * 0.2;
//             mesh.current.rotation.y = mouse.x * 0.2;
//         }
//     });
//
//     return (
//         <Points ref={mesh} positions={positions} stride={3}>
//             <PointMaterial size={0.02} color="white" />
//         </Points>
//     );
// }
//
// export default function Hero() {
//     const { theme, systemTheme } = useTheme();
//     const [mounted, setMounted] = useState(false);
//
//     useEffect(() => {
//         setMounted(true);
//     }, []);
//
//     if (!mounted) return null;
//
//     const currentTheme = theme === "system" ? systemTheme : theme;
//
//     return (
//         <section
//             className={`relative flex flex-col justify-center items-start px-8 h-screen transition-all duration-300 overflow-hidden ${
//                 currentTheme === "dark" ? "bg-black text-white" : "bg-white text-black"
//             }`}
//         >
//             {/* Fondo de gradiente animado */}
//             <div className="absolute inset-0 z-0">
//                 <div className="w-full h-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-gradient"></div>
//                 <Canvas className="absolute inset-0">
//                     <Particles />
//                 </Canvas>
//             </div>
//
//             {/* Contenido */}
//             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="md:w-1/2"
//                 >
//                     <h1 className="text-6xl font-extrabold leading-tight md:text-7xl">
//                         <span className={currentTheme === "dark" ? "text-white" : "text-black"}>Hello</span> 👋,
//                         <br />
//                         <span className="text-purple-300">I'm a Developer</span>
//                     </h1>
//
//                     <p className="mt-4 text-xl text-gray-300">
//                         I build things for the web and app
//                     </p>
//
//                     {/* Redes Sociales */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1, delay: 0.2 }}
//                         className="mt-6 flex space-x-4"
//                     >
//                         <a href="https://github.com/nmbf02" target="_blank" className="hover:text-gray-400">
//                             <FaGithub size={35} />
//                         </a>
//                         <a href="https://www.linkedin.com/in/nathalyberroa/" target="_blank" className="hover:text-gray-400">
//                             <FaLinkedin size={35} />
//                         </a>
//                         <a href="https://x.com/nmbf02" target="_blank" className="hover:text-gray-400">
//                             <FaTwitter size={35} />
//                         </a>
//                         <a href="https://www.instagram.com/nmbf02?igsh=MXJ0b2FkZmRjNGp2cw==" target="_blank" className="hover:text-gray-400">
//                             <FaInstagram size={35} />
//                         </a>
//                     </motion.div>
//                 </motion.div>
//
//                 {/* Imagen de fondo */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="hidden md:block md:w-1/2"
//                 >
//                     <Image src="/images/hero-image.png" alt="Hero Image" width={450} height={450} />
//                 </motion.div>
//             </div>
//
//             {/* Sección inferior con estadísticas y tecnologías */}
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 0.4 }}
//                 className={`absolute bottom-0 left-0 w-full py-6 transition-all duration-300 ${
//                     currentTheme === "dark" ? "bg-[#1E1E1E]" : "bg-gray-200"
//                 }`}
//             >
//                 <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
//                     <Statistics />
//                     <div className="flex space-x-8 ml-auto">
//                         <Image src="/icons/javascript.svg" alt="JS" width={50} height={50} />
//                         <Image src="/icons/html5.svg" alt="HTML5" width={50} height={50} />
//                         <Image src="/icons/css3.svg" alt="CSS3" width={50} height={50} />
//                         <Image src="/icons/react.svg" alt="React" width={50} height={50} />
//                         <Image src="/icons/php.svg" alt="PHP" width={50} height={50} />
//                     </div>
//                 </div>
//             </motion.div>
//
//             {/* Estilos adicionales */}
//             <style jsx>{`
//                 @keyframes gradient-animation {
//                     0% { background-position: 0% 50%; }
//                     50% { background-position: 100% 50%; }
//                     100% { background-position: 0% 50%; }
//                 }
//
//                 .animate-gradient {
//                     background-size: 300% 300%;
//                     animation: gradient-animation 6s ease infinite;
//                     filter: blur(50px);
//                     opacity: 0.8;
//                 }
//             `}</style>
//         </section>
//     );
// }

// Parte 3
// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Statistics from "@/app/components/Statistics";
//
// export default function Hero() {
//     const { theme, systemTheme } = useTheme();
//     const [mounted, setMounted] = useState(false);
//     const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//
//     useEffect(() => {
//         setMounted(true);
//     }, []);
//
//     if (!mounted) {
//         return null; // Evita errores de hidratación
//     }
//
//     // Verifica el modo actual
//     const currentTheme = theme === "system" ? systemTheme : theme;
//
//
//
//     return (
//         <section
//
//             className={`relative flex flex-col justify-center items-start px-8 h-screen transition-all duration-300 overflow-hidden ${
//                 currentTheme === "dark" ? "text-white" : "text-black"
//             }`}
//             style={{
//                 background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%,
//                 rgba(255, 0, 150, 0.3),
//                 rgba(0, 255, 255, 0.3),
//                 rgba(255, 255, 0, 0.3),
//                 transparent)`,
//                 transition: "background 0.3s ease-out"
//             }}
//         >
//             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//
//                 {/* Texto principal */}
//                 <motion.div
//                     initial={{opacity: 0, y: 20}}
//                     animate={{opacity: 1, y: 0}}
//                     transition={{duration: 0.8}}
//                     className="md:w-1/2"
//                 >
//                     <h1 className="text-6xl font-extrabold leading-tight md:text-7xl">
//                         <span>Hello</span> 👋,
//                         <br/>
//                         <span className="text-purple-500">I'm a Developer</span>
//                     </h1>
//
//                     <p className="mt-4 text-xl text-gray-400">
//                         I build things for the web and app
//                     </p>
//
//                     {/* Redes Sociales */}
//                     <motion.div
//                         initial={{opacity: 0, y: 20}}
//                         animate={{opacity: 1, y: 0}}
//                         transition={{duration: 1, delay: 0.2}}
//                         className="mt-6 flex space-x-4"
//                     >
//                         <a href="https://github.com/nmbf02" target="_blank" className="hover:text-gray-400">
//                             <FaGithub size={35}/>
//                         </a>
//                         <a href="https://www.linkedin.com/in/nathalyberroa/" target="_blank"
//                            className="hover:text-gray-400">
//                             <FaLinkedin size={35}/>
//                         </a>
//                         <a href="https://x.com/nmbf02" target="_blank" className="hover:text-gray-400">
//                             <FaTwitter size={35}/>
//                         </a>
//                         <a href="https://www.instagram.com/nmbf02?igsh=MXJ0b2FkZmRjNGp2cw==" target="_blank"
//                            className="hover:text-gray-400">
//                             <FaInstagram size={35}/>
//                         </a>
//                     </motion.div>
//                 </motion.div>
//
//                 {/* Imagen de fondo */}
//                 <motion.div
//                     initial={{opacity: 0, scale: 0.8}}
//                     animate={{opacity: 1, scale: 1}}
//                     transition={{duration: 0.8}}
//                     className="hidden md:block md:w-1/2"
//                 >
//                     <Image src="/images/hero-image.png" alt="Hero Image" width={450} height={450}/>
//                 </motion.div>
//
//             </div>
//
//             {/* Sección inferior con estadísticas y tecnologías */}
//             <motion.div
//                 initial={{opacity: 0, y: 20}}
//                 animate={{opacity: 1, y: 0}}
//                 transition={{duration: 1, delay: 0.4}}
//                 className={`absolute bottom-0 left-0 w-full py-6 transition-all duration-300 ${
//                     currentTheme === "dark" ? "bg-[#1E1E1E]" : "bg-gray-200"
//                 }`}
//             >
//                 <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
//
//                     {/* Estadísticas */}
//                     <Statistics />
//
//                     {/* Logos de tecnologías */}
//                     <div className="flex space-x-8 ml-auto">
//                         <Image src="/icons/javascript.svg" alt="JS" width={50} height={50} />
//                         <Image src="/icons/html5.svg" alt="HTML5" width={50} height={50} />
//                         <Image src="/icons/css3.svg" alt="CSS3" width={50} height={50} />
//                         <Image src="/icons/react.svg" alt="React" width={50} height={50} />
//                         <Image src="/icons/php.svg" alt="PHP" width={50} height={50} />
//                     </div>
//
//                 </div>
//             </motion.div>
//         </section>
//     );
// }

// Ultima parte
// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Statistics from "@/app/components/Statistics";
//
// export default function Hero() {
//     const { theme, systemTheme } = useTheme();
//     const [mounted, setMounted] = useState(false);
//     const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//
//     useEffect(() => {
//         setMounted(true);
//     }, []);
//
//     if (!mounted) {
//         return null; // Evita errores de hidratación
//     }
//
//     // Verifica el modo actual
//     const currentTheme = theme === "system" ? systemTheme : theme;
//
//     // Captura el movimiento del mouse y suaviza la actualización del estado
//     useEffect(() => {
//         const handleMouseMove = (e: MouseEvent) => {
//             requestAnimationFrame(() => {
//                 const x = (e.clientX / window.innerWidth) * 100;
//                 const y = (e.clientY / window.innerHeight) * 100;
//                 setMousePos({ x, y });
//             });
//         };
//
//         window.addEventListener("mousemove", handleMouseMove);
//         return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, []);
//
//     return (
//         <section
//             className={`relative flex flex-col justify-center items-start px-8 h-screen transition-all duration-300 overflow-hidden ${
//                 currentTheme === "dark" ? "text-white" : "text-black"
//             }`}
//             style={{
//                 background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%,
//                 rgba(255, 0, 150, 0.4),
//                 rgba(0, 255, 255, 0.4),
//                 rgba(255, 255, 0, 0.3),
//                 transparent)`,
//                 transition: "background 0.1s ease-out"
//             }}
//         >
//             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//
//                 {/* Texto principal */}
//                 <motion.div
//                     initial={{opacity: 0, y: 20}}
//                     animate={{opacity: 1, y: 0}}
//                     transition={{duration: 0.8}}
//                     className="md:w-1/2"
//                 >
//                     <h1 className="text-6xl font-extrabold leading-tight md:text-7xl">
//                         <span>Hello</span> 👋,
//                         <br/>
//                         <span className="text-purple-500">I'm a Developer</span>
//                     </h1>
//
//                     <p className="mt-4 text-xl text-gray-400">
//                         I build things for the web and app
//                     </p>
//
//                     {/* Redes Sociales */}
//                     <motion.div
//                         initial={{opacity: 0, y: 20}}
//                         animate={{opacity: 1, y: 0}}
//                         transition={{duration: 1, delay: 0.2}}
//                         className="mt-6 flex space-x-4"
//                     >
//                         <a href="https://github.com/nmbf02" target="_blank" className="hover:text-gray-400">
//                             <FaGithub size={35}/>
//                         </a>
//                         <a href="https://www.linkedin.com/in/nathalyberroa/" target="_blank"
//                            className="hover:text-gray-400">
//                             <FaLinkedin size={35}/>
//                         </a>
//                         <a href="https://x.com/nmbf02" target="_blank" className="hover:text-gray-400">
//                             <FaTwitter size={35}/>
//                         </a>
//                         <a href="https://www.instagram.com/nmbf02?igsh=MXJ0b2FkZmRjNGp2cw==" target="_blank"
//                            className="hover:text-gray-400">
//                             <FaInstagram size={35}/>
//                         </a>
//                     </motion.div>
//                 </motion.div>
//
//                 {/* Imagen de fondo */}
//                 <motion.div
//                     initial={{opacity: 0, scale: 0.8}}
//                     animate={{opacity: 1, scale: 1}}
//                     transition={{duration: 0.8}}
//                     className="hidden md:block md:w-1/2"
//                 >
//                     <Image src="/images/hero-image.png" alt="Hero Image" width={450} height={450}/>
//                 </motion.div>
//
//             </div>
//
//             {/* Sección inferior con estadísticas y tecnologías */}
//             <motion.div
//                 initial={{opacity: 0, y: 20}}
//                 animate={{opacity: 1, y: 0}}
//                 transition={{duration: 1, delay: 0.4}}
//                 className={`absolute bottom-0 left-0 w-full py-6 transition-all duration-300 ${
//                     currentTheme === "dark" ? "bg-[#1E1E1E]" : "bg-gray-200"
//                 }`}
//             >
//                 <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
//
//                     {/* Estadísticas */}
//                     <Statistics />
//
//                     {/* Logos de tecnologías */}
//                     <div className="flex space-x-8 ml-auto">
//                         <Image src="/icons/javascript.svg" alt="JS" width={50} height={50} />
//                         <Image src="/icons/html5.svg" alt="HTML5" width={50} height={50} />
//                         <Image src="/icons/css3.svg" alt="CSS3" width={50} height={50} />
//                         <Image src="/icons/react.svg" alt="React" width={50} height={50} />
//                         <Image src="/icons/php.svg" alt="PHP" width={50} height={50} />
//                     </div>
//
//                 </div>
//             </motion.div>
//         </section>
//     );
// }