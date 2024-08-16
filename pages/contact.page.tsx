import GitHubButton from "@/components/buttons/github-btn.component";
import LinkedInBtn from "@/components/buttons/linkedin-btn.component";
import TelegramBtn from "@/components/buttons/telegram-btn.component";
import PageContainer from "@/components/containers/page-container.component";
import EmailForm from "@/components/forms/email-form.component";
import MaskedText from "@/components/typo/masked-text.component";
import NormalText from "@/components/typo/normal-text.component";
import AddressComponent from "@/components/utils/address.component";
import DividerWithText from "@/components/utils/divider-text.component";
import Divider from "@/components/utils/divider.component";

export default function ContactPage() {
	return (
		<PageContainer className="md:pb-0 pb-64">
			<MaskedText
				isHeading={true}
				text="HOW TO CONTACT ME?"
				className="text-secondary xl:mb-10 md:mb-0 text-lg md:text-lg md:mt-0 mt-4 mb-0 pt-4 xl:pt-0"
			/>
			<Divider className="sm:max-w-96 mt-7 md:block hidden max-w-64" />
			<div className="my-10 relative border-2 md:border-slate-900 border-transparent rounded-xl py-6 md:px-10 px-2 pb-6 shadow-xl shadow-slate-900/70 ">
				<div className="w-full h-full flex md:flex-row flex-col items-start gap-20">
					<div className="w-fit">
						<NormalText
							text="My Social Accounts"
							className="text-font font-bold md:text-4xl text-lg"
						/>
						{/* <Divider className="max-w-40 mt-4" /> */}
						<div className="flex flex-col gap-8 my-8 md:px-6 px-2">
							<TelegramBtn className="w-full justify-center" />
							<GitHubButton className="w-full justify-center" />
							<LinkedInBtn className="w-full justify-center" />
						</div>
						<AddressComponent />
					</div>
					<DividerWithText
						text="OR"
						className="font-extrabold font-Orbitron "
						dividerClass="bg-font max-h-96 w-[2px]"
						vertical={true}
					/>
					<div className="flex-grow w-full md:w-fit">
						<NormalText
							text="EMAIL ME"
							className="text-font font-bold md:text-5xl text-lg"
						/>
						<EmailForm />
					</div>
				</div>

				<div className="absolute  top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-slate-900 to-neutral-950 custom-blur -z-10" />
			</div>
		</PageContainer>
	);
}
