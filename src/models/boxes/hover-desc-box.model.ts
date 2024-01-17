import { DefaultBoxModel } from "./default-box.model";

export interface HoverDescBoxModel extends DefaultBoxModel {
	content?: string; // if its not a link
	link?: string;
}
