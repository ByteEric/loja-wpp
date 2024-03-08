import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-react";

const CartSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button>
					<ShoppingCart className="mr-2" />
					<p>Carrinho</p>
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Carrinho</SheetTitle>
				</SheetHeader>

				<div className="flex flex-col gap-5 my-3">Products</div>

				<Separator className="my-4" />

				<div className="flex justify-between items-center text-xs">
					<div>Total:</div>
					<div>R$ 10,00</div>
				</div>

				<Separator className="my-4" />

				<div className="text-center">
					<Button className="w-full">Finalizar compra</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default CartSidebar;
