import { QuoteTextModel } from "../../models/typo/quote.model";
import PointerVector from "../vectors/pointer.vector";

export default function QuoteText({ content, content_name }: QuoteTextModel) {
	return (
		<div className="flex gap-2 items-center">
			<div>
				<PointerVector />
			</div>
			<p className="font-orbitron  text-amber-500 md:text-base text-sm">
				{content_name}
			</p>
			<p className="font-orbitron  text-amber-500 md:text-base text-sm">
				:
			</p>
			<p className="font-tektur text-pink-600 md:text-base text-sm">
				{content}
			</p>
		</div>
	);
}
