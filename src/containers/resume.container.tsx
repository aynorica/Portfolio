import BottomBorderedBox from "../components/boxes/bottom-border-box";
import ContentBox from "../components/boxes/content-box";
import TextComponent from "../components/typo/text";

export default function ResumeContainer() {
	return (
		<div className="w-full  overflow-hidden">
			<ContentBox>
				<BottomBorderedBox
					borderColor="#0AB9AA"
					borderHeight={2}
					className="max-w-[300px] m-auto py-10"
					animationClass="animate__animated animate__zoomIn animation-delay-5"
				>
					<TextComponent
						content="Resume"
						animate={true}
						className="font-tektur text-teal-400 text-4xl text-center tracking-widest  py-4 text-shadow-sm font-semibold"
					/>
				</BottomBorderedBox>
			</ContentBox>
		</div>
	);
}
