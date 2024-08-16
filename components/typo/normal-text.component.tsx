import { cn } from "@/lib/utils";
import { JumboTypoInterface } from "@/Models/Interfaces/jumbo-typo.interface";

export default function NormalText({
	text,
	className,
	...rest
}: JumboTypoInterface) {
	return (
		<p
			className={cn(
				"md:text-xl text-base font-Rajdhani text-font font-semibold tracking-wider",
				className,
			)}
			{...rest}
		>
			{text}
		</p>
	);
}
