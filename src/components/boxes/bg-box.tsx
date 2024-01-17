import { BgBoxModel } from "../../models/boxes/bg-box.model";

export default function BgBoxMain({ className, ...rest }: BgBoxModel) {
	return (
		<div className={`${className} bg-main w-full h-full`} {...rest}></div>
	);
}
