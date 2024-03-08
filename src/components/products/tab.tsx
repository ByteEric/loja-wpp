import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TabsSkeleton from "./skeleton";

const ProductsTab = () => {
	return (
		<Tabs defaultValue="tab1">
			<TabsList className="flex">
				<TabsTrigger value="tab1" className="flex-1">
					Tab 1
				</TabsTrigger>
				<TabsTrigger value="tab2" className="flex-1">
					Tab 2
				</TabsTrigger>
			</TabsList>
			<TabsContent value="tab1" className="mt-6">
				<TabsSkeleton />
			</TabsContent>
			<TabsContent value="tab2" className="mt-6">
				<TabsSkeleton />
			</TabsContent>
		</Tabs>
	);
};

export default ProductsTab;
