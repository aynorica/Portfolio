import { ContentBoxModel } from "../../models/boxes/content-box.model";

export default function ContentBox({ className, children }: ContentBoxModel) {
	return (
		<div className={`${className} max-w-[1800px] mx-auto`}>{children}</div>
	);
}
