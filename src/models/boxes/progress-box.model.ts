import { DefaultBoxModel } from "./default-box.model";

export interface ProgressBoxModel extends DefaultBoxModel {
	progress: number;
	total: number;
}

export interface ProgressBoxWithLabelModel extends ProgressBoxModel {
	label_left: string;
	label_right?: string;
}
