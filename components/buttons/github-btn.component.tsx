import Link from "next/link";
import NormalText from "../typo/normal-text.component";
import GithubIcon from "../utils/github-icon.component";
import { ContainerInterface } from "@/Models/Interfaces/main-container.interface";
import { cn } from "@/lib/utils";

export default function GitHubButton({ className }: ContainerInterface) {
	return (
		<Link
			className={cn(
				"bg-neutral-950 flex justify-start items-center gap-2 p-3 rounded-md w-fit shadow-xl shadow-neutral-800 hover:shadow-neutral-700 transition-all",
				className,
			)}
			href={"https://github.com/aynorica"}
			target="_blank"
		>
			<GithubIcon width={20} height={20} />
			<NormalText
				text="GitHub"
				className="md:text-base text-sm h-full flex items-center"
			/>
		</Link>
	);
}
