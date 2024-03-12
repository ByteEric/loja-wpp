import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckoutStore } from "@/stores/checkout-store";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

const formSchema = z.object({
	paymentMethod: z.string().min(2, "Informe a forma de pagamento"),
});

type Props = {
	setStep: Dispatch<SetStateAction<CheckoutSteps>>;
};

export const StepPayment = ({ setStep }: Props) => {
	const { payment, setPayment } = useCheckoutStore((state) => state);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { ...payment },
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		setPayment(values);
		setStep("finish");
	};
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-4">
					<div className="flex gap-4">
						<div className="w-full">
							<FormField
								control={form.control}
								name="paymentMethod"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Select
												defaultValue={field.value}
												onValueChange={field.onChange}
											>
												<SelectTrigger>
													<SelectValue placeholder="Forma de pagamento" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="Dinheiro">Dinheiro</SelectItem>
													<SelectItem value="Cartão">Cartão</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
					</div>
				</div>

				<div className="flex justify-between mt-4 gap-4">
					<Button
						variant="link"
						className="w-full"
						onClick={() => setStep("user")}
					>
						Voltar
					</Button>
					<Button type="submit" variant="outline" className="w-full">
						Continuar
					</Button>
				</div>
			</form>
		</Form>
	);
};
