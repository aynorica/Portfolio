import BottomBorderedBox from "../components/boxes/bottom-border-box";
import ContentBox from "../components/boxes/content-box";
import QuoteText from "../components/typo/quote";
import TextComponent from "../components/typo/text";
import yearsSinceAugust1996 from "../helpers/calculate-how-old-I-am";
import { DynamicProfilePic } from "./profile-pic.container";

export default function AboutContainer() {
	return (
		<div className="w-full bg-zinc-950 md:-mt-2 md:pt-0 mt-6 pt-4 md:px-6 px-0 overflow-hidden">
			<ContentBox className="bg-zinc-950 m-auto shadow-2xl shadow-stone-950 border-2 border-stone-950">
				<BottomBorderedBox
					borderColor="#0AB9AA"
					borderHeight={2}
					className="md:max-w-[300px] max-w-[200px] m-auto xl:py-10 py-4"
					animationClass="animate__animated animate__zoomIn animation-delay-5"
				>
					<TextComponent
						content="Who Am I ?"
						animate={true}
						className="font-tektur text-teal-400 xl:text-4xl lg:text-3xl text-xl text-center tracking-widest  xl:py-4 py-2 text-shadow-sm font-semibold"
					/>
				</BottomBorderedBox>
				<div className="w-full max-w-[1500px] m-auto py-9 flex items-center justify-start gap-9">
					<div className="h-full flex flex-col justify-start">
						<TextComponent
							content="Full stack developer & Software Architect"
							animate={false}
							className="font-tektur text-pink-700 xl:text-4xl lg:text-3xl text-lg xl:text-left text-center animate__animated animate__fadeInUp animation-delay-2 tracking-widest md:px-0 px-3 md:py-4 py-0 text-shadow-sm font-semibold"
						/>
						<TextComponent
							content="Simplicity is prerequisite for reliability. A good programmer is someone who always looks both ways before crossing a one-way street. 'Edsger W. Dijkstra' "
							animate={false}
							className="font-kanit-italic text-amber-50  md:text-sm xl:text-left text-center text-xs italic animate__animated animate__fadeInUp animation-delay-7 tracking-widest  py-4 md:px-0 px-3 text-shadow-sm font-semibold"
						/>
						<div className="xl:flex-row flex-col xl:gap-0 gap-5 xl:mx-0 md:mx-9 mx-4 flex justify-between bg-slate-900 xl:p-7 md:p-4 p-2 rounded-xl shadow-2xl shadow-pink-950/50 border-2 border-pink-950">
							<div className="flex flex-col gap-5">
								<QuoteText
									content_name="Birthday"
									content="31 August 1996"
								/>
								<QuoteText
									content_name="Website"
									content="www.aynorica.github.io"
								/>
								<QuoteText
									content_name="Phone"
									content="+90 531 086 82 08"
								/>
								<QuoteText
									content_name="City"
									content="Istanbul, Turkey"
								/>
							</div>
							<div className="flex flex-col gap-5">
								<QuoteText
									content_name="Age"
									content={`${yearsSinceAugust1996()}`}
								/>
								<QuoteText
									content_name="Degree"
									content="Bachelor of Mechanical Engineering"
								/>
								<QuoteText
									content_name="Email"
									content="amirdeilamizadeh1996@gmail.com"
								/>
								<QuoteText
									content_name="Freelance"
									content="Available"
								/>
							</div>
						</div>
					</div>
					<div className="xl:block hidden">
						<DynamicProfilePic
							src="/branding/profile-pic-fantasy.jpg"
							className="max-w-[344px] max-h-[344px] rounded-full overflow-hidden shadow-2xl shadow-pink-950 border-2 border-pink-950"
						/>
					</div>
				</div>
				<div className="w-full ">
					<TextComponent
						content="For the past 5 years, I worked as a Full Stack Developer for multiple companies, where I contributed to the development and maintenance of several web and mobile applications, using cutting-edge technologies and best practices. I also partnered with other developers and stakeholders to deliver high-quality and user-friendly products, while adhering to security and performance standards. In addition, I am an avid AI enthusiast, always exploring its latest developments and applications. I enjoy reading philosophy books and playing games in my spare time. I am eager to connect with professionals, recruiters, and organizations who share my passion for technology and innovation."
						animate={false}
						className="max-w-[1500px] m-auto font-orbitron text-amber-50 xl:text-left text-center lg:text-base text-xs lg:leading-10 leading-5 md:px-0 px-4 animate__animated animate__fadeInUp animation-delay-7 tracking-widest  pt-4 pb-14 text-shadow-sm font-semibold"
					/>
				</div>
			</ContentBox>
		</div>
	);
}

//bg-[#031028]
