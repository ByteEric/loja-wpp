import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GenerateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
	const { name } = useCheckoutStore((state) => state);

	const message = GenerateMessage();
	const linkWpp = `https://wa.me/${
		process.env.NEXT_PUBLIC_WHATSAPP
	}?text=${encodeURI(message)}`;

	return (
		<div className="text-center flex flex-col gap-5">
			<p>
				Perfeito, <b>{name}</b>!
			</p>
			<p>
				Agora envie seu pedido para o nosso WhatsApp para concluir. Nosso
				atendente irá te guiar sobre o andamento do pedido.
			</p>
			<Button>
				<Link target="_blank" href={linkWpp}>
					Enviar para o WhatsApp
				</Link>
			</Button>
		</div>
	);
};
