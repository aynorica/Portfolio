import GitHubButton from "@/components/buttons/github-btn.component";
import LinkedInBtn from "@/components/buttons/linkedin-btn.component";
import TelegramBtn from "@/components/buttons/telegram-btn.component";
import PageContainer from "@/components/containers/page-container.component";
import JumboText from "@/components/typo/jumbo-text.component";
import NormalText from "@/components/typo/normal-text.component";
import { TextRevealCard } from "@/components/typo/text-reveal.component";
import Divider from "@/components/utils/divider.component";

export default function HomePage() {
	return (
		<PageContainer className="max-h-none md:max-h-[1000px] pt-14 lg:pt-0">
			<TextRevealCard
				text="AMIR DEILAMIZADEH"
				revealText="Professionalism, Innovation, Continuous Learning"
				textClassName="italic md:text-5xl text-2xl"
				revealedClassName="md:text-4xl text-xs"
			/>
			<JumboText
				text="Crafting Reliable & Scalable Web Solutions"
				className="xl:max-w-[1280px] max-w-3xl mt-3 mb-6 "
			/>
			<NormalText
				text="I’m Amir Deilamizadeh, a Full-Stack Developer specializing in building efficient, secure, and scalable web applications."
				className="md:mt-6 mt-2 mb-6 max-w-full md:pr-9"
			/>
			<Divider className="md:max-w-xl lg:max-w-3xl max-w-40" />
			<div className="flex md:flex-row flex-col gap-4 md:my-16 my-8 md:items-start items-center">
				<LinkedInBtn className="md:w-fit w-full max-w-64 md:justify-start justify-center" />
				<TelegramBtn className="md:w-fit w-full max-w-64 md:justify-start justify-center" />
				<GitHubButton className="md:w-fit w-full max-w-64 md:justify-start justify-center" />
			</div>
		</PageContainer>
	);
}
