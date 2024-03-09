import { Cart } from "@/types/cart";
import Image from "next/image";
import { CartItemQuantity } from "@/components/cart/item-quantity";

type Props = {
	item: Cart;
};

export const CartItem = ({ item }: Props) => {
	return (
		<div className="flex items-center gap-5">
			<div className="w-16 overflow-hidden">
				<Image
					src={item.product.image}
					alt={item.product.name}
					width={64}
					height={64}
					className="w-full h-auto object-cover rounded"
				/>
			</div>
			<div className="flex-1">
				<p className="text-md">{item.product.name}</p>
				<p className="text-xs opacity-50">{item.product.price.toFixed(2)}</p>
			</div>
			<div>
				<CartItemQuantity cartItem={item} />
			</div>
		</div>
	);
};