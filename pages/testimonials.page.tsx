import TestimonialCard from "@/components/cards/testimonial-card.component";
import PageContainer from "@/components/containers/page-container.component";
import MaskedText from "@/components/typo/masked-text.component";

export default function TestimonialsPage() {
	return (
		<PageContainer className="max-h-[700px] py-14 md:py-0 px-4 md:px-0">
			<MaskedText
				isHeading={true}
				text="RECOMMENDATIONS"
				className="text-secondary mb-10 text-lg md:text-lg"
			/>
			<TestimonialCard
				content={`In my working period with Amir, I saw how dedicated and skilled he was in both front/back end development. 

He always came up with creative fixed and ideas no matter how competitive the situation was. 

He is a team player, social person, and I highly recommend him`}
				imageUrl="/images/testimonial-hazem.jpeg"
				name="Hazem Elsayed"
				title="Lead Offensive Security Engineer @ Cyrex | Top 300 on Hackerone."
				linkedInUrl="https://www.linkedin.com/in/hacktus/"
			/>
		</PageContainer>
	);
}
