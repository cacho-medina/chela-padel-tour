"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { AlertOctagon } from "lucide-react";

interface RegistrationSuccessAlertProps {
    onClose: () => void;
}

export default function Error({ onClose }: RegistrationSuccessAlertProps) {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] border-red-200">
                <DialogHeader>
                    <DialogTitle className="text-red-600 flex items-center gap-2">
                        <AlertOctagon className="h-5 w-5" />
                        Error al registrar
                    </DialogTitle>
                    <DialogDescription className="text-red-700">
                        No se pudo completar el registro. Por favor, intenta
                        nuevamente.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start mt-6">
                    <Button
                        type="button"
                        onClick={handleClose}
                        className="bg-red-600 hover:bg-red-700 text-white mx-auto"
                    >
                        Ir a inicio
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
