import BottomBorderedBox from "../components/boxes/bottom-border-box";
import ContentBox from "../components/boxes/content-box";
import ProgressBoxWithLabel from "../components/boxes/progress.box";
import TextComponent from "../components/typo/text";

export default function SkillsContainer() {
	return (
		<div className="w-full bg-primary/0 pb-10">
			<ContentBox className="w-full">
				<BottomBorderedBox
					borderColor="#0AB9AA"
					borderHeight={2}
					className="md:max-w-[300px] max-w-[150px] m-auto xl:py-10 py-4"
					animationClass="animate__animated animate__zoomIn animation-delay-5"
				>
					<TextComponent
						content="Skills"
						animate={true}
						className="font-tektur text-teal-400  xl:text-4xl lg:text-3xl text-xl text-center tracking-widest  py-4 text-shadow-sm font-semibold"
					/>
				</BottomBorderedBox>
				<div className="overflow-hidden">
					<TextComponent
						content="As a seasoned full-stack developer, I possess a robust and adaptable skill set that spans across a diverse range of technologies utilized in both front-end and back-end development. My professional journey has equipped me with hands-on experience in numerous programming languages and frameworks. This exposure enables me to rapidly assimilate and excel in new technologies, as I find that while their syntax may vary, their underlying structures often share remarkable similarities. This unique combination of experience and adaptability not only demonstrates my technical prowess but also highlights my commitment to staying at the forefront of technological advancements, making me an ideal candidate for any development team."
						className="font-orbitron text-amber-50 md:text-sm text-xs text-center tracking-widest py-6 xl:px-4 px-4   text-shadow-sm font-medium animate__animated animate__fadeInUp animation-delay-2"
						animate={false}
					/>
				</div>
				<div className="flex md:flex-row flex-col items-start gap-12 w-full bg-slate-950 p-10 xl:rounded-xl rounded-none my-7 shadow-2xl shadow-teal-950 border-2 border-slate-900 animate__animated animate__fadeIn">
					<div className="md:w-3/6 w-full">
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="HTML"
							label_right="100%"
							progress={100}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="CSS"
							label_right="100%"
							progress={100}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="TailwindCSS"
							label_right="90%"
							progress={90}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="Javascript"
							label_right="90%"
							progress={90}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="Typescript"
							label_right="90%"
							progress={90}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="Python"
							label_right="60%"
							progress={60}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="C++"
							label_right="40%"
							progress={40}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="ReactJs"
							label_right="80%"
							progress={80}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="NextJs"
							label_right="80%"
							progress={80}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="React Native"
							label_right="50%"
							progress={50}
							total={100}
						/>
					</div>
					<div className="md:w-3/6 w-full">
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="Redis"
							label_right="60%"
							progress={60}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="PostgreSQL"
							label_right="80%"
							progress={80}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="MongoDB"
							label_right="30%"
							progress={30}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="NodeJs"
							label_right="90%"
							progress={90}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="NestJs"
							label_right="80%"
							progress={80}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="NGINX"
							label_right="50%"
							progress={50}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="Unreal Engine"
							label_right="60%"
							progress={60}
							total={100}
						/>
						<ProgressBoxWithLabel
							className="h-[4px] bg-transparent mb-5"
							label_left="Linux"
							label_right="50%"
							progress={50}
							total={100}
						/>
					</div>
				</div>
			</ContentBox>
		</div>
	);
}
