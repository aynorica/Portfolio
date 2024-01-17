import { BottomBorderBox } from "../../models/boxes/bottom-border-box";

export default function BottomBorderedBox({
	borderColor,
	borderHeight,
	className,
	children,
	animationClass,
	...rest
}: BottomBorderBox) {
	return (
		<div {...rest} className={`w-full ${className} overflow-hidden`}>
			{children}
			<div
				style={{ backgroundColor: borderColor, height: borderHeight }}
				className={`w-full ${animationClass} `}
			></div>
		</div>
	);
}
