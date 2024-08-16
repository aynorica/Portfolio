import JumboText from "../typo/jumbo-text.component";
import NormalText from "../typo/normal-text.component";
import { Meteors } from "../utils/metor.component";
import { WobbleCard } from "./woble-card.component";
import Image from "next/image";

export default function ExperienceCardsComponent() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl w-full xl:px-0 px-5 ">
			<WobbleCard
				containerClassName="col-span-1 lg:col-span-2 h-full bg-primary lg:min-h-[300px] xl:max-h-[500px]"
				className=""
			>
				<div className="xl:max-w-lg">
					<JumboText
						text="Full-Stack Developer - Nakitcoins"
						className="lg:text-3xl text-xl"
						style={{
							textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
						}}
					/>
					<NormalText
						text="Developed and maintained frontend applications, pioneered blockchain applications, developed robust backend applications, and managed web servers with a focus on security and performance."
						className="mt-4 text-base/6 text-neutral-200"
					/>
				</div>
				<Image
					src="/portfolio//images/nakit-coins.png"
					width={250}
					height={250}
					alt="linear demo image"
					className="absolute -right-4 lg:right-0  bottom-0 object-contain rounded-ss-2xl hidden xl:block"
				/>
				<Meteors number={20} />
			</WobbleCard>
			<WobbleCard containerClassName="col-span-1  bg-accent">
				<JumboText
					text="Frontend Developer - Nakitcoins"
					className="lg:text-3xl text-xl"
					style={{
						textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
					}}
				/>
				<NormalText
					text="Modernized PHP websites using React.js, Developed User friendly admin panels and landing pages, ensuring responsive design and seamless user experiences."
					className="mt-4 text-base/6 text-neutral-200"
					style={{
						textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
					}}
				/>
				<Meteors number={20} />
			</WobbleCard>
			<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-secondary lg:min-h-[400px] xl:min-h-[300px]">
				<div className="xl:max-w-lg">
					<JumboText
						text="Full-Stack Developer - Self-employed (Freelance)"
						className="lg:text-3xl text-xl "
						style={{
							textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
						}}
					/>
					<NormalText
						text="Building efficient, scalable APIs with Node.js & Nest.js, managing data with Redis & PostgreSQL, and creating responsive interfaces with ReactJS and NextJS."
						className="mt-4 text-base/6 text-neutral-200"
						style={{
							textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
						}}
					/>
				</div>
				<Image
					src="/portfolio//images/freelance-img.png"
					width={400}
					height={500}
					alt="linear demo image"
					className="absolute -right-4 lg:right-0  bottom-0 object-contain rounded-ss-2xl hidden xl:block"
				/>
				<Meteors number={20} />
			</WobbleCard>
		</div>
	);
}
