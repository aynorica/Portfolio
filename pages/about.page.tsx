import PageContainer from "@/components/containers/page-container.component";
import JumboText from "@/components/typo/jumbo-text.component";
import MaskedText from "@/components/typo/masked-text.component";
import NormalText from "@/components/typo/normal-text.component";
import { TextRevealCard } from "@/components/typo/text-reveal.component";
import Divider from "@/components/utils/divider.component";

export default function AboutPage() {
	return (
		<PageContainer>
			<MaskedText
				isHeading={true}
				text="WHO AM I ?"
				className="text-secondary "
			/>
			<TextRevealCard
				text="Full-Stack Developer"
				revealText="Proficient in ReactJS, NextJS, NestJS, PostgreSQL, Redis and more"
				textClassName="italic text-3xl text-accent"
				revealedClassName="text-2xl"
				className="h-[80px]"
			/>
			<NormalText
				text='"Obstacles exist to be transcended."'
				className="font-light italic text-base -mt-6 text-font/80"
			/>
			<NormalText
				text="With a passion for coding and a strong foundation in JavaScript, TypeScript, and Python, I thrive on creating robust web applications. My experience spans front-end and back-end development, blockchain innovations, and server management."
				className="max-w-4xl font-medium my-6 md:text-2xl text-base"
				style={{
					textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
				}}
			/>
			<Divider className="max-w-32" />
			<NormalText
				text="I am deeply committed to game development and am currently expanding my expertise by learning Unreal Engine."
				className="max-w-3xl font-medium my-4 md:text-lg text-sm text-font/80"
				style={{
					textShadow: "4px 4px 15px rgba(0,0,0,0.8)",
				}}
			/>
		</PageContainer>
	);
}
