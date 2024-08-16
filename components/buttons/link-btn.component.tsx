import { cn } from "@/lib/utils";
import { LinkBtnInterface } from "@/Models/Interfaces/link-btn.interface";
import Link from "next/link";

export default function LinkBtn({
	text,
	link,
	className,
	...rest
}: LinkBtnInterface) {
	return (
		<button className={cn("w-fit", className)}>
			<Link
				className="text-font font-Rajdhani text-base font-semibold tracking-wider"
				href={link}
			>
				{text}
			</Link>
		</button>
	);
}
