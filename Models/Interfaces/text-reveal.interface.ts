export interface TextRevealInterface
	extends React.HTMLAttributes<HTMLParagraphElement> {
	text: string;
	revealText: string;
	textClassName?: string;
	revealedClassName?: string;
}
