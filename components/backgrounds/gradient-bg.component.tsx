import { cn } from "@/lib/utils";
import { MainBgInputInterface } from "@/Models/Interfaces/main-bg.interface";

export default function GradientBg({
	children,
	className,
}: MainBgInputInterface) {
	return (
		<div
			className={cn(
				"w-full h-full bg-gradient-to-r from-15% from-slate-950/95 to-secondary/5 z-10",
				className,
			)}
		>
			{children}
		</div>
	);
}
