import mongoose, { Schema } from "mongoose";

enum Position {
    drive,
    reves,
}

const playerSchema = new Schema({
    city: {
        type: String,
        required: [true, "La ciudad es requerida"],
        trim: true,
    },
    dni: {
        type: String,
        required: [true, "El DNI es requerido"],
        unique: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: [true, "El nombre completo es requerido"],
        trim: true,
    },
    position: {
        type: Position,
        required: [true, "La posición es requerida"],
        trim: true,
    },
});

// Schema principal del equipo
const teamSchema = new Schema(
    {
        player1: {
            type: playerSchema,
            required: [true, "El jugador 1 es requerido"],
        },
        player2: {
            type: playerSchema,
            required: [true, "El jugador 2 es requerido"],
        },
        team: {
            additionalInfo: {
                type: String,
                trim: true,
            },
            category: {
                type: String,
                required: [true, "La categoría es requerida"],
                trim: true,
            },
            paymentNro: {
                type: String,
                required: [true, "El número de pago es requerido"],
                trim: true,
            },
        },
    },
    {
        timestamps: true,
    }
);

// Middleware para validar DNIs únicos entre player1 y player2
teamSchema.pre("save", function (next) {
    if (this.player1.dni === this.player2.dni) {
        next(new Error("Los jugadores no pueden tener el mismo DNI"));
    }
    next();
});

// Índices para mejorar las búsquedas
teamSchema.index({ "player1.dni": 1 });
teamSchema.index({ "player2.dni": 1 });
teamSchema.index({ "team.category": 1 });

export const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);
