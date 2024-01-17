import ContentBox from "../components/boxes/content-box";
import HoverDescriptionBox from "../components/boxes/hover-desc-box";
import TextComponent from "../components/typo/text";
import GithubVector from "../components/vectors/github.vector";
import LinkedINVector from "../components/vectors/linkedin.vector";
import WhatsAppVector from "../components/vectors/whatsapp.vector";

export default function ContactsContainer() {
	return (
		<div className="w-full bg-slate-300">
			<ContentBox className="max-w-[1200px]">
				<TextComponent
					content="Contacts"
					animate={true}
					className="max-w-[300px] mx-auto font-tektur text-slate-900 xl:text-4xl lg:text-3xl text-xl text-center tracking-widest  py-4 text-shadow-sm font-semibold"
				/>
				<div className="flex justify-between items-center md:px-5 px-4 md:flex-row flex-col">
					<div>
						<div className="w-full">
							<TextComponent
								content="Location:"
								animate={false}
								className=" font-tektur text-slate-900 xl:text-2xl lg:text-xl text-base tracking-widest  pt-4 text-shadow-sm font-semibold"
							/>
							<TextComponent
								content="Çeliktepe, Greenox Residence, Çınarcık Sokağı, Kağıthane/İstanbul, Turkey"
								animate={false}
								className=" font-orbitron text-slate-900 lg:text-base text-xs  tracking-widest  py-4 pl-8  font-medium"
							/>
						</div>
						<div className="w-full">
							<TextComponent
								content="Email:"
								animate={false}
								className=" font-tektur text-slate-900 xl:text-2xl lg:text-xl text-base   tracking-widest  pt-4 text-shadow-sm font-semibold"
							/>
							<TextComponent
								content="amirdeilamizadeh1996@gmail.com"
								animate={false}
								className=" font-orbitron text-slate-900 lg:text-base text-xs tracking-widest  py-4 pl-8  font-medium"
							/>
						</div>
						<div className="w-full">
							<TextComponent
								content="Call:"
								animate={false}
								className=" font-tektur text-slate-900 xl:text-2xl lg:text-xl text-base  tracking-widest  pt-4 text-shadow-sm font-semibold"
							/>
							<TextComponent
								content="+90 531 086 82 08"
								animate={false}
								className=" font-orbitron text-slate-900 lg:text-base text-xs  tracking-widest  py-4 pl-8  font-medium"
							/>
						</div>
					</div>
					<div className="flex md:flex-col flex-row gap-4 items-end md:yb-0 py-10">
						<HoverDescriptionBox link="https://github.com/aynorica">
							<div className="w-[48px] hover:w-[169px] overflow-hidden rounded-md ">
								<div className="w-[169px] flex bg-zinc-900 p-3 gap-4 rounded-md ">
									<GithubVector />
									<TextComponent
										content="GitHub"
										animate={false}
										className=" font-orbitron text-amber-50 text-base  tracking-widest  font-medium"
									/>
								</div>
							</div>
						</HoverDescriptionBox>
						<HoverDescriptionBox link="https://www.linkedin.com/in/amir-deilamizadeh-2712a6192/">
							<div className="w-[48px] hover:w-[169px] overflow-hidden rounded-md ">
								<div className="w-[169px] flex bg-blue-900 p-3 gap-4 rounded-md">
									<LinkedINVector />
									<TextComponent
										content="LinkedIn"
										animate={false}
										className=" font-orbitron text-amber-50 text-base  tracking-widest  font-medium"
									/>
								</div>
							</div>
						</HoverDescriptionBox>
						<HoverDescriptionBox link="https://wa.me/905310868208">
							<div className="w-[48px] hover:w-[169px] overflow-hidden rounded-md ">
								<div className="w-[169px] flex bg-green-600 p-3 gap-4 rounded-md">
									<WhatsAppVector />
									<TextComponent
										content="WhatsApp"
										animate={false}
										className=" font-orbitron text-amber-50 text-base  tracking-widest  font-medium"
									/>
								</div>
							</div>
						</HoverDescriptionBox>
					</div>
				</div>
			</ContentBox>
		</div>
	);
}
