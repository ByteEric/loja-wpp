import { Cart } from "@/types/cart";
import Image from "next/image";
import { CartItemQuantity } from "@/components/cart/item-quantity";

type Props = {
	item: Cart;
};

export const CartItem = ({ item }: Props) => {
	return (
		<div className="flex items-star justify-between">
			<div className="flex gap-4">
				<div className="w-16 overflow-hidden">
					<Image
						src={item.product.image}
						alt={item.product.name}
						width={64}
						height={64}
						className="w-full h-auto object-cover rounded"
					/>
				</div>
				<div className="flex justify-between flex-col">
					<p className="text-sm font-semibold">{item.product.name}</p>
					<CartItemQuantity cartItem={item} />
				</div>
			</div>
			<div>
				<p className="text-sm font-semibold">
					R$ {item.product.price.toFixed(2)}
				</p>
			</div>
		</div>
	);
};
