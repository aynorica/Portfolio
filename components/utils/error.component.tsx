import { JumboTypoInterface } from "@/Models/Interfaces/jumbo-typo.interface";
import CrossIcon from "./cross-icon.component";
import NormalText from "../typo/normal-text.component";
import { motion } from "framer-motion";

export default function ErrorComponent({ text }: JumboTypoInterface) {
	return (
		<motion.div
			initial={{ filter: "blur(50px)" }}
			animate={{ filter: "blur(0px)" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="w-full h-full flex flex-col gap-4 justify-center items-center"
		>
			<CrossIcon width={100} height={100} />
			<NormalText text={text} />
		</motion.div>
	);
}
