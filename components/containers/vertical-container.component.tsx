import { cn } from "@/lib/utils";
import { ContainerInterface } from "@/Models/Interfaces/main-container.interface";

export default function VerticalContainer({
	children,
	className,
}: ContainerInterface) {
	return (
		<div className={cn("w-full max-w-screen-2xl mx-auto", className)}>
			{children}
		</div>
	);
}
