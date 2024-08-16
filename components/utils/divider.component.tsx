import { cn } from "@/lib/utils";
import { DividerInterface } from "@/Models/Interfaces/divider.interface";

export default function Divider({ className, vertical }: DividerInterface) {
	return (
		<div
			className={cn(
				`bg-accent  ${
					vertical ? "h-full w-[4px]" : "w-full h-[4px]"
				} shadow-2xl shadow-white`,
				className,
			)}
		/>
	);
}
