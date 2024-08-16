"use client";
import { cn } from "@/lib/utils";
import { TextAreaInterface } from "@/Models/Interfaces/textarea.interface";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState } from "react";

export default function TextArea({ className, ...rest }: TextAreaInterface) {
	const radius = 100; // change this to increase the rdaius of the hover effect
	const [visible, setVisible] = useState(false);

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: any) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	return (
		<motion.div
			style={{
				background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
			}}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			className="p-[2px] rounded-lg transition duration-300 group/input"
		>
			<textarea
				className={cn(
					`flex h-48 w-full font-Rajdhani border-none bg-primary/90 text-font shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-300 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-secondary/50
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]
           group-hover/input:shadow-none transition duration-400`,
					className,
				)}
				{...rest}
			/>
		</motion.div>
	);
}
