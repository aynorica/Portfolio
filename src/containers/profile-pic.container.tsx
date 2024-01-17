import { ProfilePicModel } from "../models/containers/profile-pic.model";

export default function ProfilePicContainer() {
	return (
		<div className="w-full h-full max-w-[344px] max-h-[304px] rounded-full overflow-hidden profile-bg">
			<img
				src="./branding/profile-pic.png"
				className="max-w-[344px] max-h-[344px] w-full h-full"
			/>
		</div>
	);
}

export function DynamicProfilePic({ src, className }: ProfilePicModel) {
	return (
		<div
			className={`w-full h-full max-w-[344px] max-h-[344px] overflow-hidden ${className}`}
		>
			<img
				src={src}
				className="max-w-[344px] max-h-[344px] w-full h-full"
			/>
		</div>
	);
}
