"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepUser } from "@/components/checkout/step-user";
import { StepAddress } from "@/components/checkout/step-address";
import { StepPayment } from "@/components/checkout/step-payment";
import { StepFinish } from "@/components/checkout/step-finish";
import { CheckoutSteps } from "@/types/checkout-steps";

type Props = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
	const [step, setStep] = useState<CheckoutSteps>("user");

	let progressPct = 0;
	switch (step) {
		case "user":
			progressPct = 25;
			break;
		case "address":
			progressPct = 50;
			break;
		case "payment":
			progressPct = 75;
			break;
		case "finish":
			progressPct = 100;
			break;
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						{step === "user" && "Dados Pessoais"}
						{step === "address" && "Endereço de entrega"}
						{step === "payment" && "Método de pagamento"}
						{step === "finish" && "Envio para o WhatsApp"}
					</DialogTitle>
				</DialogHeader>

				<Progress value={progressPct} />

				<div className="flex flex-col gap-3">
					{step === "user" && <StepUser setStep={setStep} />}
					{step === "address" && <StepAddress setStep={setStep} />}
					{step === "payment" && <StepPayment setStep={setStep} />}
					{step === "finish" && <StepFinish />}
				</div>
			</DialogContent>
		</Dialog>
	);
};
