import { TestimonialCardInterface } from "@/Models/Interfaces/testimonial-card.interface";
import { CardSpotlight } from "./spot-light.component";
import NormalText from "../typo/normal-text.component";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialCard({
	content,
	imageUrl,
	name,
	linkedInUrl,
	title,
}: TestimonialCardInterface) {
	return (
		<CardSpotlight className="bg-primary/50">
			<div className="z-10">
				<div className="flex mb-6 gap-4 items-center">
					<Image
						src={imageUrl}
						width={70}
						height={70}
						alt="Testimonial Image"
						className="  bottom-0 object-contain rounded-full"
					/>
					<Link
						className="flex flex-col "
						href={linkedInUrl}
						target="_blank"
					>
						<NormalText
							text={name}
							className="font-Orbitron font-bold md:text-2xl text-lg"
						/>
						<NormalText
							text={title}
							className="font-Rajdhani font-medium md:text-base text-xs text-font/90 italic"
						/>
					</Link>
				</div>
				<NormalText
					text={content}
					className="font-normal text-font md:text-xl text-sm"
				/>
			</div>
		</CardSpotlight>
	);
}
