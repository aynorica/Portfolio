import { DefaultBoxModel } from "./default-box.model";

export interface BottomBorderBox extends DefaultBoxModel {
	borderColor: string; // hex color
	borderHeight: number; // px
	animationClass?: string;
}
