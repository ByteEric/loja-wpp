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
				<Button className="flex items-center gap-1" variant="link">
					{cart.length > 0 && (
						<span className="bg-black text-white dark:bg-white dark:text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
							{cart.length}
						</span>
					)}
					<ShoppingCart className="mr-2 h-6 w-6" />
				</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-col justify-between overflow-scroll">
				<div>
					<SheetHeader>
						<SheetTitle>Carrinho</SheetTitle>
					</SheetHeader>

					<div className="flex flex-col gap-5 my-3 pt-6">
						{cart.map((item) => (
							<div key={item.product.id} className="">
								<CartItem item={item} />

								<Separator className="my-6" />
							</div>
						))}
					</div>
				</div>

				<div>
					<Separator />
					<div className="flex justify-between items-center text-xl font-medium mb-2 mt-3">
						<div>Total:</div>
						<div>R$ {subtotal.toFixed(2)}</div>
					</div>
					<div className="text-xs opacity-50 text-right mb-7">
						* taxa de entrega não inclusa
					</div>

					<div className="text-center">
						<Button
							onClick={() => setCheckoutOpen(true)}
							className="w-full"
							disabled={cart.length === 0}
						>
							Finalizar compra
						</Button>
					</div>
				</div>

				<CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
			</SheetContent>
		</Sheet>
	);
};

export default CartSidebar;
