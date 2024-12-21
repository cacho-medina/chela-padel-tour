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
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface RegistrationSuccessAlertProps {
    onClose: () => void;
}

export default function Alert({ onClose }: RegistrationSuccessAlertProps) {
    const [open, setOpen] = useState(true);
    const router = useRouter();
    const handleClose = () => {
        setOpen(false);
        onClose();
        router.push("/");
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] border-green-200">
                <DialogHeader>
                    <DialogTitle className="text-green-600 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        Registro completado
                    </DialogTitle>
                    <DialogDescription className="text-green-700">
                        Pronto podrás ver los cruces definidos. Quedate atento!
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start mt-6">
                    <Button
                        type="button"
                        onClick={handleClose}
                        className="bg-green-600 hover:bg-green-700 text-white mx-auto"
                    >
                        Continuar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
