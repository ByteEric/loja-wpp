import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";

export const GenerateMessage = () => {
	const { name, address } = useCheckoutStore((state) => state);
	const { cart } = useCartStore((state) => state);

	let orderProducts = [];
	for (let item of cart) {
		orderProducts.push(`${item.quantity}x ${item.product.name}`);
	}

	return `**Dados do cliente:**
  Nome: ${name}
  Endereço: ${address.street}, ${address.number} ${
		address.complement || ""
	} - ${address.district}, ${address.city}/ ${address.state}
  ------
  **Produtos:**
  ${orderProducts.join("\n")}`;
};
