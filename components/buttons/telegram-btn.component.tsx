import Link from "next/link";
import TelegramIcon from "../utils/telegram-icon.component";
import NormalText from "../typo/normal-text.component";
import { ContainerInterface } from "@/Models/Interfaces/main-container.interface";
import { cn } from "@/lib/utils";

export default function TelegramBtn({ className }: ContainerInterface) {
	return (
		<Link
			className={cn(
				"bg-[#0088CC] flex justify-start items-center gap-2 p-3 rounded-md w-fit shadow-xl shadow-blue-900 hover:shadow-blue-800 transition-all",
				className,
			)}
			href={"https://t.me/Amirdlz"}
			target="_blank"
		>
			<TelegramIcon width={16} height={14} />
			<NormalText
				text="Telegram"
				className="md:text-base text-sm h-full flex items-center"
			/>
		</Link>
	);
}
