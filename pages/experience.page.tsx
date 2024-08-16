import ExperienceCardsComponent from "@/components/cards/experience-card.component";
import PageContainer from "@/components/containers/page-container.component";
import MaskedText from "@/components/typo/masked-text.component";
import Divider from "@/components/utils/divider.component";

export default function ExperiencePage() {
	return (
		<PageContainer className="max-h-none md:max-h-[1000px] pt-14 lg:pt-0">
			<MaskedText
				isHeading={true}
				text="MY EXPERIENCES"
				className="text-secondary"
			/>
			<Divider className="sm:max-w-96 mt-7 max-w-64" />
			<div className="mt-10 overflow-y-auto max-h-screen md:pb-0 pb-96">
				<ExperienceCardsComponent />
			</div>
		</PageContainer>
	);
}
