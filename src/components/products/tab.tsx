import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";
import { ProductEmpty } from "@/components/products/empty";
import { ProductItem } from "@/components/products/item";

type Tab = {
	title: string;
	value: string;
	products: Product[];
};

const ProductsTab = async () => {
	const products = await getAllProducts();

	const tabs = [
		{
			title: "Pizza",
			value: "pizza",
			products: products.filter((item) => item.category === "pizza"),
		},
		{
			title: "Petisco",
			value: "petisco",
			products: products.filter((item) => item.category === "petisco"),
		},
		{
			title: "Bebida",
			value: "bebida",
			products: products.filter((item) => item.category === "bebida"),
		},
	];

	return (
		<Tabs defaultValue="pizza">
			<TabsList className="flex">
				{tabs.map((item) => (
					<TabsTrigger key={item.value} value={item.value} className="flex-1">
						{item.title}
					</TabsTrigger>
				))}
			</TabsList>
			{tabs.map((item) => (
				<TabsContent key={item.value} value={item.value} className="mt-6">
					{item.products.length > 0 && (
						<div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
							{item.products.map((product) => (
								<ProductItem key={product.id} item={product} />
							))}
						</div>
					)}

					{item.products.length === 0 && <ProductEmpty />}
				</TabsContent>
			))}
		</Tabs>
	);
};

export default ProductsTab;
