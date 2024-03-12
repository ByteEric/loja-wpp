import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";

export const GenerateMessage = () => {
	const { name, address, payment } = useCheckoutStore((state) => state);
	const { cart } = useCartStore((state) => state);

	let orderProducts = [];
	for (let item of cart) {
		orderProducts.push(`${item.quantity}x ${item.product.name}`);
	}

	return `
*Nome do cliente:* ${name}\n
*Endereço de entrega:* 
Rua: ${address.street} - ${address.number} ${address.complement || ""}
Bairro: ${address.district}
Cidade: ${address.city}
Estado: ${address.state}\n
*Produtos:*
${orderProducts.join(", ")}\n
*Valor total:*
${cart
	.reduce((acc, item) => acc + item.quantity * item.product.price, 0)
	.toFixed(2)}\n\n
*Método de pagamento:*
${payment.paymentMethod}
`;
};
