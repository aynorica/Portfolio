import Link from "next/link";
import NormalText from "../typo/normal-text.component";
import LinkedInIcon from "../utils/linkedin-icon.component";
import { ContainerInterface } from "@/Models/Interfaces/main-container.interface";
import { cn } from "@/lib/utils";

export default function LinkedInBtn({ className }: ContainerInterface) {
	return (
		<Link
			className={cn(
				"bg-[#2867B2] flex justify-start items-center gap-2 p-3 rounded-md w-fit shadow-xl shadow-blue-950 hover:shadow-blue-900 transition-all",
				className,
			)}
			href={"https://www.linkedin.com/in/amir-deilamizadeh-2712a6192/"}
			target="_blank"
		>
			<LinkedInIcon width={16} height={16} />
			<NormalText
				text="LinkedIn"
				className="md:text-base text-sm h-full flex items-center"
			/>
		</Link>
	);
}
