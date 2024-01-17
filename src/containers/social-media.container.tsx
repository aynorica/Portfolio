import HoverDescriptionBox from "../components/boxes/hover-desc-box";
import DiscordVector from "../components/vectors/discord.vector";
import GithubVector from "../components/vectors/github.vector";
import GoogleVector from "../components/vectors/google.vector";
import LinkedINVector from "../components/vectors/linkedin.vector";
import WhatsAppVector from "../components/vectors/whatsapp.vector";

export default function SocialMediaContainer() {
	return (
		<div className="flex gap-5 items-center xl:justify-start justify-center overflow-hidden">
			<HoverDescriptionBox
				className="animate__animated animate__backInRight"
				link="https://github.com/aynorica"
			>
				<GithubVector />
			</HoverDescriptionBox>
			<HoverDescriptionBox
				className="animate__animated animate__backInRight animation-delay-1"
				link="https://www.linkedin.com/in/amir-deilamizadeh-2712a6192/"
			>
				<LinkedINVector />
			</HoverDescriptionBox>
			<HoverDescriptionBox
				className="animate__animated animate__backInRight animation-delay-2"
				link="https://discord.gg/4PxSz99a"
			>
				<DiscordVector />
			</HoverDescriptionBox>
			<HoverDescriptionBox
				content="amirdeilamizadeh1996@gmail.com"
				className="animate__animated animate__backInRight animation-delay-3"
			>
				<GoogleVector />
			</HoverDescriptionBox>
			<HoverDescriptionBox
				className="animate__animated animate__backInRight animation-delay-4"
				link="https://wa.me/905310868208"
			>
				<WhatsAppVector />
			</HoverDescriptionBox>
		</div>
	);
}
