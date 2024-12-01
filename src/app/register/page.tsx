"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Schemas para cada paso
const playerSchema = z.object({
    fullName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    dni: z.string().min(7, "DNI inválido"),
    position: z.string().min(1, "Selecciona una posición"),
    city: z.string().min(2, "Ingresa tu ciudad"),
});

const teamSchema = z.object({
    category: z.string().min(1, "Selecciona una categoría"),
    additionalInfo: z.string().optional(),
    paymentNumber: z.string().min(1, "Ingresa el número de operación"),
});

// Componente para el formulario de jugador
const PlayerForm = ({ title, onSubmit, onBack, initialData }) => {
    const form = useForm({
        resolver: zodResolver(playerSchema),
        defaultValues: initialData || {
            fullName: "",
            dni: "",
            position: "",
            city: "",
        },
    });

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                <p className="text-sm md:text-base text-gray-600">
                    Ingresá los datos del jugador
                </p>
            </div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre completo</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Juan Pérez"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="dni"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>DNI</FormLabel>
                                <FormControl>
                                    <Input placeholder="12345678" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Posición en la cancha</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona tu posición" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="reves">
                                            Revés
                                        </SelectItem>
                                        <SelectItem value="drive">
                                            Drive
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ciudad</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="San Miguel de Tucumán"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        {onBack && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onBack}
                                className="w-full sm:flex-1"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Anterior
                            </Button>
                        )}
                        <Button type="submit" className="w-full sm:flex-1">
                            Siguiente
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </form>
            </Form>
        </motion.div>
    );
};

// Componente para el formulario del equipo
const TeamForm = ({ onSubmit, onBack, initialData }) => {
    const form = useForm({
        resolver: zodResolver(teamSchema),
        defaultValues: initialData || {
            category: "",
            additionalInfo: "",
            paymentNumber: "",
        },
    });

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Información del Equipo</h2>
                <p className="text-gray-600">Completá los datos finales</p>
            </div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Categoría</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona la categoría" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="quinta">
                                            Quinta
                                        </SelectItem>
                                        <SelectItem value="sexta">
                                            Sexta
                                        </SelectItem>
                                        <SelectItem value="septima">
                                            Séptima
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Información adicional</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Agrega cualquier información adicional que consideres relevante"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="paymentNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Número de operación del pago
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Ej: 123456"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onBack}
                            className="flex-1"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Anterior
                        </Button>
                        <Button type="submit" className="flex-1">
                            Finalizar inscripción
                        </Button>
                    </div>
                </form>
            </Form>
        </motion.div>
    );
};

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        player1: null,
        player2: null,
        team: null,
    });

    const handleFinalSubmit = (teamData) => {
        const finalData = {
            ...formData,
            team: teamData,
        };
        console.log("Datos finales:", finalData);
        // Aquí iría la lógica para enviar los datos
    };

    return (
        <div className="min-h-[85vh] flex flex-col justify-center">
            <div className="container mx-auto px-4 py-8 md:pt-28">
                <div className="max-w-[500px] mx-auto">
                    <div className="mb-8">
                        <div className="hidden md:block">
                            <div className="flex items-center w-full">
                                {[1, 2, 3].map((index) => (
                                    <div
                                        key={index}
                                        className="flex items-center relative flex-1 md:justify-center"
                                    >
                                        <div
                                            className={`
                                            w-8 h-8 rounded-full flex items-center justify-center
                                            transition-colors duration-200 z-10 bg-white
                                            ${
                                                step >= index
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-gray-200 text-gray-400"
                                            }
                                        `}
                                        >
                                            {index}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-2 text-sm text-gray-600">
                                <div className="flex-1 text-center">
                                    Jugador 1
                                </div>
                                <div className="flex-1 text-center">
                                    Jugador 2
                                </div>
                                <div className="flex-1 text-center">Equipo</div>
                            </div>
                        </div>

                        <div className="md:hidden">
                            {/* ... código de la versión móvil ... */}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-lg p-4 md:p-8"
                    >
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <PlayerForm
                                    key="player1"
                                    title="Jugador 1"
                                    onSubmit={(data) => {
                                        setFormData((prev) => ({
                                            ...prev,
                                            player1: data,
                                        }));
                                        setStep(2);
                                    }}
                                    initialData={formData.player1}
                                />
                            )}
                            {step === 2 && (
                                <PlayerForm
                                    key="player2"
                                    title="Jugador 2"
                                    onSubmit={(data) => {
                                        setFormData((prev) => ({
                                            ...prev,
                                            player2: data,
                                        }));
                                        setStep(3);
                                    }}
                                    onBack={() => setStep(1)}
                                    initialData={formData.player2}
                                />
                            )}
                            {step === 3 && (
                                <TeamForm
                                    key="team"
                                    onSubmit={handleFinalSubmit}
                                    onBack={() => setStep(2)}
                                    initialData={formData.team}
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
