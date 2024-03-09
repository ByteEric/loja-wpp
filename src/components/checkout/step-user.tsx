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
	name: z.string().min(2, "Preencha seu nome"),
});

type Props = {
	setStep: Dispatch<SetStateAction<CheckoutSteps>>;
};

export const StepUser = ({ setStep }: Props) => {
	const { name, setName } = useCheckoutStore((state) => state);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { name },
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		setName(values.name);
		setStep("address");
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<Label>Seu nome</Label>
							<FormControl>
								<Input autoFocus placeholder="Qual seu nome" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>

				<Button type="submit" variant="outline">
					Continuar
				</Button>
			</form>
		</Form>
	);
};
