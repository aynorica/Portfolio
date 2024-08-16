"use client";
import { cn } from "@/lib/utils";
import { ContainerInterface } from "@/Models/Interfaces/main-container.interface";
import { motion } from "framer-motion";

export default function PageContainer({
	children,
	className,
}: ContainerInterface) {
	return (
		<motion.div
			initial={{ y: 100, filter: "blur(50px)" }}
			animate={{ y: 0, filter: "blur(0px)" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className={cn(
				"w-full xl:max-w-[1550px] max-w-full mx-auto h-full max-h-[1000px] flex 2xl:justify-center md:justify-start justify-start flex-col overflow-y-auto overflow-x-hidden pl-4 xl:pt-2  pb-2",
				className,
			)}
		>
			{children}
		</motion.div>
	);
}
