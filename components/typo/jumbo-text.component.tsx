import { cn } from "@/lib/utils";
import { JumboTypoInterface } from "@/Models/Interfaces/jumbo-typo.interface";

export default function JumboText({
	text,
	className,
	...rest
}: JumboTypoInterface) {
	return (
		<h1
			className={cn(
				" text-font font-extrabold lg:text-7xl md:text-5xl text-4xl tracking-wider font-Orbitron",
				className,
			)}
			{...rest}
		>
			{text}
		</h1>
	);
}
