"use client";
import { cn } from "@/lib/utils";
import { BentoGridItemProps } from "@/models/interfaces/bento-grid-item.interface";
import BackgroundGradientAnimation from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import { techStacksFirstCol, techStacksSecondCol } from "@/data/tech-stacks";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
				className,
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	id,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: BentoGridItemProps) => {
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText("amirdeilamizadeh@gmail.com");
		setCopied(true);
	};
	return (
		<div
			style={{
				background: "rgb(16,4,42)",
				backgroundColor:
					"linear-gradient(90deg, rgba(16,4,42,1) 0%, rgba(23,30,41,1) 100%)",
			}}
			className={cn(
				"row-span-1 overflow-hidden relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white-100/10 ",
				className,
			)}
		>
			<div className={`${id === 6 && "flex justify-center h-full"}`}>
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={"/portfolio" + img}
							alt={img}
							className={cn(
								imgClassName,
								"object-cover object-center",
							)}
						/>
					)}
				</div>
				<div
					className={`absolute right-0 -bottom-5 ${
						id === 5 && "w-full  opacity-80"
					}`}
				>
					{spareImg && (
						<img
							src={"/portfolio" + spareImg}
							alt={spareImg}
							className={
								"object-cover object-center w-full h-full"
							}
						/>
					)}
				</div>
				{id === 6 && (
					<BackgroundGradientAnimation>
						{/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div> */}
					</BackgroundGradientAnimation>
				)}
				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
					)}
				>
					{id === 2 && <GlobeDemo />}
					<div className=" font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-50">
						{description}
					</div>
					<div className=" font-bold text-lg lg:text-3xl max-w-96 z-10">
						{title}
					</div>

					{id === 3 && (
						<div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2 md:pt-6">
							<div className="flex flex-col gap-3 ">
								{techStacksFirstCol.map((tech, index) => {
									return (
										<span
											key={index + "tech-stack"}
											className="py-2 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
										>
											{tech}
										</span>
									);
								})}
							</div>
							<div className="flex flex-col gap-3">
								{techStacksSecondCol.map((tech, index) => {
									return (
										<span
											key={index + "tech-stack"}
											className="py-2  px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
										>
											{tech}
										</span>
									);
								})}
							</div>
						</div>
					)}
					{id === 6 && (
						<div className="mt-5 relative">
							<div className={`absolute right-0 -bottom-5`}>
								<Lottie
									options={{
										loop: copied,
										autoplay: copied,
										animationData: animationData,
										rendererSettings: {
											preserveAspectRatio:
												"xMidYMid slice",
										},
									}}
								/>
							</div>
							<MagicButton
								title={`${
									copied ? "Email copied" : "Copy Email"
								}`}
								icon={<IoCopyOutline />}
								position="right"
								otherClasses="bg-[#161E31]"
								handleClick={handleCopy}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
