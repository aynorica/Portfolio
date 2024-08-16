import { cn } from "@/lib/utils";
import NormalText from "./normal-text.component";
import { MaskedTypoInterface } from "@/Models/Interfaces/masked-typo.interface";
import JumboText from "./jumbo-text.component";

export default function MaskedText({
	children,
	text,
	isHeading,
	className,
}: MaskedTypoInterface) {
	return (
		<div className=" overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
			{isHeading ? (
				<JumboText
					text={text}
					className={
						className +
						" bg-clip-text text-transparent bg-secondary "
					}
				/>
			) : (
				<NormalText
					text={text}
					className={cn(
						"md:text-lg text-sm py-3 font-bold bg-clip-text text-transparent bg-secondary ",
						className,
					)}
				/>
			)}
			{children}
		</div>
	);
}
