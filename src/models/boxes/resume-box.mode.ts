export interface ResumeBoxModel {
	name: string;
	icon: any;
	items: ResumeBoxItemsModel[];
}

export interface ResumeBoxItemsModel {
	header: string;
	header_extra?: string;
	sub_header: string;
	example?: string;
	description: string;
	year: string;
}
