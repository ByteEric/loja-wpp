import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/cart";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
	cartItem: Cart;
};

export const CartItemQuantity = ({ cartItem }: Props) => {
	const { upsertCartItem } = useCartStore((state) => state);

	return (
		<div className="flex items-center gap-2">
			<Button
				className="size-6"
				size="icon"
				variant="outline"
				onClick={() => upsertCartItem(cartItem.product, -1)}
			>
				<MinusIcon className="size-3" />
			</Button>

			<div className="text-xs">{cartItem.quantity}</div>

			<Button
				className="size-6"
				size="icon"
				variant="outline"
				onClick={() => upsertCartItem(cartItem.product, 1)}
			>
				<PlusIcon className="size-3" />
			</Button>
		</div>
	);
};
