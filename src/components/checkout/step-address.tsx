import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckoutStore } from "@/stores/checkout-store";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
	street: z.string().min(2, "Preencha sua rua"),
	number: z.string().min(2, "Preencha seu número da casa"),
	district: z.string().min(2, "Preencha seu bairro"),
	city: z.string().min(2, "Preencha sua cidade"),
	state: z.string().min(2, "Preencha seu estado"),
	complement: z.string().optional(),
});

type Props = {
	setStep: Dispatch<SetStateAction<CheckoutSteps>>;
};

export const StepAddress = ({ setStep }: Props) => {
	const { address, setAddress } = useCheckoutStore((state) => state);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { ...address },
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		setAddress(values);
		setStep("payment");
	};
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-4">
					<div className="flex gap-4">
						<div className="w-3/4">
							<FormField
								control={form.control}
								name="street"
								render={({ field }) => (
									<FormItem>
										<Label>Rua</Label>
										<FormControl>
											<Input {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<div className="1/4">
							<FormField
								control={form.control}
								name="number"
								render={({ field }) => (
									<FormItem>
										<Label>Número</Label>
										<FormControl>
											<Input {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
					</div>

					<div className="flex gap-4">
						<div className="w-1/4">
							<FormField
								control={form.control}
								name="complement"
								render={({ field }) => (
									<FormItem>
										<Label>Complemento</Label>
										<FormControl>
											<Input {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>

						<div className="w-3/4">
							<FormField
								control={form.control}
								name="district"
								render={({ field }) => (
									<FormItem>
										<Label>Bairro</Label>
										<FormControl>
											<Input {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
					</div>

					<div className="flex gap-4">
						<div className="w-1/2">
							<FormField
								control={form.control}
								name="city"
								render={() => (
									<FormItem>
										<Label>Cidade</Label>
										<FormControl>
											<Input disabled value="Juiz de Fora" />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>

						<div className="w-1/2">
							<FormField
								control={form.control}
								name="state"
								render={() => (
									<FormItem>
										<Label>Estado</Label>
										<FormControl>
											<Input disabled value="MG" />
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
