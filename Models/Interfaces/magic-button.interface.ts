export interface MagicButtonProps {
	title: string;
	icon: React.ReactNode;
	position?: "left" | "right";
	handleClick?: () => void;
	otherClasses?: string;
	className?: string;
}
