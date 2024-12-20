"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
//import TournamentSchedule from "@/components/tournament-schedule";
//import { fadeIn, slideIn } from "@/lib/animations";
import { Trophy, Medal, Check } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Home() {
    return (
        <div className="">
            {/* Hero Section */}
            <div
                className="min-h-[85vh] relative bg-cover bg-center py-10 px-4 flex flex-col justify-center"
                style={{ backgroundImage: 'url("/images/hero.webp")' }}
            >
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Contenido del hero (ahora con z-index para aparecer sobre el overlay) */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-8 text-white">
                    <div className="bg-slate-700/80 text-white px-5 py-10 rounded-2xl max-w-4xl mx-auto md:p-20">
                        <div>
                            <div>
                                <h1 className="text-center mb-5">
                                    5to Aniversario Chela Padel Tour
                                </h1>
                            </div>
                            <div className="mb-5 md:mb-8">
                                <p className="hidden md:block text-6xl md:text-7xl font-extrabold text-center text-balance">
                                    Demostrá tu nivel <br /> en la cancha
                                </p>
                                <p className="md:hidden text-6xl font-extrabold text-center">
                                    Demostrá tu nivel en la cancha
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button variant="green" size="lg">
                                    <Link
                                        href="/registro"
                                        className="text-blue-padel md:animate-pulse"
                                    >
                                        Inscribite aqui
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detalles del torneo */}
            <div className="px-4 py-20 bg-slate-50">
                <div className="container mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-center mb-12"
                    >
                        Detalles del Torneo
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Fecha del Torneo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <div className="text-blue-600 mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Fecha del Torneo
                                </h3>
                                <p className="text-gray-600">
                                    16 al 19 de Enero 2025
                                </p>
                            </Card>
                        </motion.div>

                        {/* Costo de Inscripción */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <div className="text-green-600 mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Costo de Inscripción
                                </h3>
                                <p className="text-gray-600">
                                    $20.000 por pareja
                                </p>
                            </Card>
                        </motion.div>

                        {/* Fecha Límite */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <div className="text-red-600 mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Fecha Límite de Inscripción
                                </h3>
                                <p className="text-gray-600">13 de Enero</p>
                            </Card>
                        </motion.div>

                        {/* Lugar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <div className="text-purple-600 mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Lugar
                                </h3>
                                <p className="text-gray-600">
                                    Club Illanes Padel
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                    {/* Nueva subsección de premios */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-16"
                    >
                        <h3 className="text-3xl font-bold text-center mb-8">
                            Premios
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Campeones */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="h-full"
                            >
                                <Card className="p-6 border-t-4 border-yellow-400 h-full">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Trophy className="h-8 w-8 text-yellow-400" />
                                        <h4 className="text-2xl font-bold">
                                            Campeones
                                        </h4>
                                    </div>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center gap-2">
                                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            $300.000 en efectivo
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            Indumentaria deportiva
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            Trofeo del campeonato
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            Premios adicionales
                                        </li>
                                    </ul>
                                </Card>
                            </motion.div>

                            {/* Subcampeones */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="h-full"
                            >
                                <Card className="p-6 border-t-4 border-slate-400 h-full">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Medal className="h-8 w-8 text-slate-400" />
                                        <h4 className="text-2xl font-bold">
                                            Subcampeones
                                        </h4>
                                    </div>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center gap-2">
                                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            Indumentaria deportiva
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            Accesorios deportivos
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            Trofeos
                                        </li>
                                    </ul>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Sección de Proceso de Inscripción */}
            <div className="px-4 py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            ¿Cómo participar?
                        </h2>
                        <p className="text-xl text-gray-300 mb-12">
                            Sé parte del torneo de pádel más emocionante del
                            año. ¡Solo necesitas seguir estos simples pasos!
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-12 h-12 bg-green-padel text-blue-padel rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                    1
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Paga tu inscripción
                                </h3>
                                <p className="text-gray-400 text-center">
                                    Realiza el pago de $20.000 por equipo
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-12 h-12 bg-green-padel text-blue-padel rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                    2
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Regístrate
                                </h3>
                                <p className="text-gray-400 text-center">
                                    Completa el formulario de inscripción los
                                    datos del equipo y el pago
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-12 h-12 bg-green-padel text-blue-padel rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                    3
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    ¡Listo!
                                </h3>
                                <p className="text-gray-400 text-center">
                                    Recibirás la confirmación y los detalles del
                                    torneo
                                </p>
                            </motion.div>
                        </div>

                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-block"
                            >
                                <Button variant="green" size="lg">
                                    <Link
                                        href="/registro"
                                        className="text-blue-padel md:animate-pulse"
                                    >
                                        Inscribite aqui
                                    </Link>
                                </Button>
                            </motion.div>
                            <p className="mt-4 text-sm text-gray-400">
                                ¡Apurate! Las inscripciones cierran el 10 de
                                Enero
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección FAQ */}
            <div className="px-4 py-20 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Preguntas Frecuentes
                        </h2>
                        <p className="text-gray-600">
                            Encuentra respuestas a las dudas más comunes sobre
                            el torneo
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Accordion type="single" collapsible className="mb-12">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">
                                    ¿Dónde se jugarán los partidos?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Los partidos se jugarán en las canchas de{" "}
                                    <b>Club Illanes Padel</b> como sede
                                    principal, y como subsedes{" "}
                                    <b>Club CE.RE.DE El Cerrito</b> y{" "}
                                    <b>Club Madera</b>.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">
                                    ¿Qué sucede si no tengo pareja?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    ¡No te preocupes! Contáctanos y te
                                    ayudaremos a encontrar un compañero para
                                    competir.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold">
                                    ¿Puedo cambiar de categoría después de
                                    inscribirme?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    No, una vez confirmada la inscripción, la
                                    categoría no puede modificarse. Te
                                    recomendamos elegir cuidadosamente según tu
                                    nivel de juego.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-center bg-slate-50 p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            ¿Tenés más dudas?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Contactanos por WhatsApp y te ayudaremos con todas
                            tus consultas
                        </p>
                        <Link
                            href="https://wa.me/3816520590"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Escribinos al 3816520590
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Tournament Schedule */}
            {/* <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="mb-16"
            >
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Tournament Schedule
                </h2>
                <TournamentSchedule />
            </motion.div> */}

            {/* Botón flotante */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                className="fixed bottom-6 right-6 z-50"
            >
                <Link href="/registro" className="block relative group">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <Image
                            src="/images/pelota.png"
                            alt="Inscribite"
                            width={80}
                            height={80}
                            className="hover:scale-110 transition-transform duration-300"
                        />
                    </motion.div>

                    {/* Tooltip */}
                    <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/75 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        ¡Dale inscribite!
                    </span>
                </Link>
            </motion.div>
        </div>
    );
}
