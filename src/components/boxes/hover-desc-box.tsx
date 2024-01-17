import copyToClipboard from "../../helpers/copy";
import { HoverDescBoxModel } from "../../models/boxes/hover-desc-box.model";

export default function HoverDescriptionBox({
	link,
	children,
	className,
	content,
}: HoverDescBoxModel) {
	//TODO add a copy to clipboard message notification
	if (link)
		return (
			<a
				className={`${className} relative overflow-visible`}
				href={link}
				target="_blank"
			>
				{children}
			</a>
		);
	else
		return (
			<div
				onClick={() => copyToClipboard(content || "")}
				className={`${className} relative`}
			>
				{children}
			</div>
		);
}
