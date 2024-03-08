import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="w-full max-w-4xl mx-auto">
			<Header />
			<div className="mx-3">Products</div>
			<Footer />
		</div>
	);
}
