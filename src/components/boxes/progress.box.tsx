import {
	ProgressBoxModel,
	ProgressBoxWithLabelModel,
} from "../../models/boxes/progress-box.model";
import TextComponent from "../typo/text";

export function ProgressBox({ className, progress, total }: ProgressBoxModel) {
	const progressPercentage = calculateProgress(progress, total);
	return (
		<div
			className={`${className} relative animate__animated animate__fadeInLeft animation-delay-5 `}
		>
			<div
				className="absolute top-0 left-0 bottom-0 h-full bg-red-600 "
				style={{ width: `${progressPercentage}%` }}
			></div>
		</div>
	);
}

export default function ProgressBoxWithLabel(data: ProgressBoxWithLabelModel) {
	return (
		<div className="overflow-hidden">
			<div className="flex justify-between pb-4">
				<TextComponent
					content={data.label_left}
					animate={false}
					className="font-tektur text-amber-50 text-sm tracking-widest"
				/>
				{data.label_right ? (
					<TextComponent
						content={data.label_right}
						animate={false}
						className="font-tektur text-amber-50 text-sm tracking-widest"
					/>
				) : null}
			</div>
			<div>
				<ProgressBox {...data} />
			</div>
		</div>
	);
}

const calculateProgress = (progress: number, total: number): number => {
	return +((progress / total) * 100).toFixed(2);
};
