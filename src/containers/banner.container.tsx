import BgBoxMain from "../components/boxes/bg-box";
import TextComponent from "../components/typo/text";
import ProfilePicContainer from "./profile-pic.container";
import SocialMediaContainer from "./social-media.container";
import TechStackContainer from "./tech-stack.container";

export default function BannerContainer() {
	return (
		<div className="w-screen banner-height relative pt-8 pb-24 flex flex-col justify-center ">
			<BgBoxMain className="xl:block hidden absolute top-0 right-0 left-0 bottom-0 -z-10" />
			<div className="z-0 flex flex-col items-center gap-12">
				<TextComponent
					content="Hello World!"
					animate={true}
					className="text-white text-center w-full font-tektur tracking-widest text-5xl pb-7"
				/>
				<div className="xl:p-0 p-5">
					<div className="w-full max-w-[1340px] flex xl:flex-row flex-col gap-6 py-11 items-center xl:justify-start ">
						<div className="min-w-[307px]  animate__animated animate__fadeInDown">
							<ProfilePicContainer />
						</div>
						<div className="h-full flex flex-col xl:justify-start justify-center">
							<div>
								<TextComponent
									animate={true}
									content="AMIR DEIALMIZADEH"
									className="text-teal-400 w-full font-orbitron tracking-widest xl:text-5xl lg:text-4xl md:text-2xl text-xl py-7 text-shadow-sm font-extrabold xl:text-left text-center"
								/>
								<div className="xl:w-full w-[300px] mx-auto">
									<SocialMediaContainer />
								</div>
							</div>
							<TextComponent
								animate={false}
								content="As a self-taught Full Stack Developer with a Mechanical Engineering degree, I bring a unique perspective and skill set to the world of programming. I have mastered various languages and frameworks, such as JavaScript, TypeScript, Python, React.js, Vue.js, Nest.js, and Nestjs, and I have extensive experience in database design and administration, server-side technologies, and blockchain development."
								className="xl:text-left text-center text-orange-100 w-full font-orbitron tracking-widest lg:text-lg text-sm py-7 text-shadow-md font-semibold animate__animated animate__fadeIn animation-delay-8"
							/>
						</div>
					</div>
					<div className="xl:visible hidden w-full h-auto xl:flex justify-center items-center">
						<TechStackContainer />
					</div>
				</div>
			</div>
		</div>
	);
}
