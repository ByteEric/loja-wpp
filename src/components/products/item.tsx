"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCartStore } from "@/stores/cart-store";

type Props = {
	item: Product;
};

export const ProductItem = ({ item }: Props) => {
	const { toast } = useToast();
	const { upsertCartItem } = useCartStore();

	function handleAddToCart() {
		upsertCartItem(item, 1);
		toast({
			title: "Adicionado ao carrinho",
			description: item.name,
			action: <ToastAction altText="fechar">Fechar</ToastAction>,
		});
	}

	return (
		<div>
			<div className="rounded-md overflow-hidden">
				<Image
					src={item.image}
					alt={item.name}
					width={400}
					height={300}
					className="w-full h-32 object-cover"
				/>
			</div>
			<div className="mt-3 flex flex-col gap-2">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger className="text-left">
							<p className="text-lg">{item.name}</p>
						</TooltipTrigger>
						<TooltipContent>
							<p>{item.ingredients}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				<p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>
				<Button variant="outline" onClick={handleAddToCart}>
					Adicionar
				</Button>
			</div>
		</div>
	);
};
