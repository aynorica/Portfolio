import { DividerTextInterface } from "@/Models/Interfaces/divire-text.interface";
import NormalText from "../typo/normal-text.component";
import Divider from "./divider.component";

export default function DividerWithText({
	text,
	dividerClass,
	className,
	vertical,
}: DividerTextInterface) {
	return (
		<div
			className={`flex gap-2
			${
				vertical
					? "flex-col h-full justify-center items-center"
					: "items-center max-w-96"
			}
		`}
		>
			<NormalText text={text} className={className} />
			<Divider className={dividerClass} vertical={vertical} />
		</div>
	);
}
