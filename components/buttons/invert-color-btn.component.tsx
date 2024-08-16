import { cn } from "@/lib/utils";
import { ButtonInterface } from "@/Models/Interfaces/button.interface";

export default function InvertBtn({
	className,
	children,
	...rest
}: ButtonInterface) {
	return (
		<button
			className={cn(
				"w-fit mx-auto px-8 py-2 rounded-md bg-gradient-to-tr from-primary/10 to-slate-900/10 text-font font-bold transition duration-200 hover:from-cyan-600/90 hover:to-emerald-600 hover:text-black border-4 border-secondary/70 hover:border-transparent",
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
