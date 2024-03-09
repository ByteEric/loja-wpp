"use client";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "@/components/cart/item";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { CheckoutDialog } from "@/components/checkout/dialog";

const CartSidebar = () => {
	const [checkoutOpen, setCheckoutOpen] = useState(false);
	const { cart } = useCartStore((state) => state);

	let subtotal = 0;
	for (let item of cart) {
		subtotal += item.quantity * item.product.price;
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="relative">
					<ShoppingCart className="mr-2" />
					<p>Carrinho</p>
					{cart.length > 0 && (
						<span className="absolute bg-red-600 size-3 rounded-full -right-1 -top-1" />
					)}
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Carrinho</SheetTitle>
				</SheetHeader>

				<div className="flex flex-col gap-5 my-3">
					{cart.map((item) => (
						<CartItem key={item.product.id} item={item} />
					))}
				</div>

				<Separator className="my-4" />

				<div className="flex justify-between items-center text-xs">
					<div>Total:</div>
					<div>R$ {subtotal.toFixed(2)}</div>
				</div>

				<Separator className="my-4" />

				<div className="text-center">
					<Button
						onClick={() => setCheckoutOpen(true)}
						className="w-full"
						disabled={cart.length === 0}
					>
						Finalizar compra
					</Button>
				</div>

				<CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
			</SheetContent>
		</Sheet>
	);
};

export default CartSidebar;
