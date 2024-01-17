import { TextModel } from "../../models/typo/text.model";

export default function TextComponent({
	content,
	className,
	animate,
	...rest
}: TextModel) {
	return (
		<p
			className={`${className} ${animate ? "typewriter-animation" : ""}`}
			{...rest}
		>
			{content}
		</p>
	);
}
