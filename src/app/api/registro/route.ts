// app/api/teams/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Team } from "@/models/equipo";

// GET handler
export async function GET() {
    try {
        await connectDB();
        const teams = await Team.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ teams }, { status: 200 });
    } catch (error) {
        console.error("Error en GET:", error);
        return NextResponse.json(
            { error: "Error al obtener los equipos" },
            { status: 500 }
        );
    }
}

// POST handler
export async function POST(request: Request) {
    try {
        await connectDB();
        const body = await request.json();

        console.log(body);

        // Validación básica de la estructura
        if (!body.player1 || !body.player2 || !body.team) {
            return NextResponse.json(
                { error: "Datos incompletos del equipo" },
                { status: 400 }
            );
        }

        // Crear nuevo equipo
        const newTeam = await Team.create(body);

        return NextResponse.json(newTeam, { status: 201 });
    } catch (error: unknown) {
        console.error("Error en POST:", error);

        if (error instanceof Error) {
            // Manejo específico para error de DNI duplicado
            if (error.message.includes("DNI")) {
                return NextResponse.json(
                    { error: error.message },
                    { status: 400 }
                );
            }
        }

        return NextResponse.json(
            { error: "Error al crear el equipo" },
            { status: 500 }
        );
    }
}
