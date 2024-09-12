"use client";
import React, { useState } from "react";
import Lottie from "react-lottie";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";

const Footer = () => {
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText("amirdeilamizadeh@gmail.com");
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};
	return (
		<div className="py-10">
			<div className="pb-10">
				<h1 className="heading">
					Ready to take{" "}
					<span className="text-purple">Your Digital Presence</span>{" "}
					to the next level?
				</h1>
				<h2 className="font-normal text-white-100/80 md:text-xl text-base text-center py-6 ">
					Reach out to me and let&apos;s discuss how I can help you
					achieve your goals
				</h2>
			</div>
			<div className="flex md:flex-row flex-col justify-between md:items-center items-start max-w-[90%]">
				<div className="flex flex-col items-start justify-center max-w-[48%]">
					<h3 className="text-white-100/80 text-3xl font-extrabold">
						My social Accounts
					</h3>
					<div className="pt-8 flex flex-wrap gap-8">
						<div>
							<h4 className="font-bold text-2xl text-white">
								Address
							</h4>
							<p className="text-base text-white/90 font-light  px-2">
								Çeliktepe, Çınarcık Sokağı No:25, 34413
								Kâğıthane/İstanbul
							</p>
						</div>
						<div>
							<h4 className="font-bold text-2xl text-white">
								Email
							</h4>
							<p className="text-base text-violet-500 tracking-widest font-light underline hover:cursor-pointer hover:text-violet-400 px-2">
								amirdeilamizadeh1996@gmail.com
							</p>
						</div>
						<div>
							<h4 className="font-bold text-2xl text-white">
								Phone
							</h4>
							<p className="text-base text-white/90 font-light px-2">
								+90 531 086 82 08
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-start justify-center max-w-[48%]">
					<div className="mt-5 relative">
						<div className={`absolute right-0 -bottom-5`}>
							<Lottie
								options={{
									loop: copied,
									autoplay: copied,
									animationData: animationData,
									rendererSettings: {
										preserveAspectRatio: "xMidYMid slice",
									},
								}}
							/>
						</div>
						<MagicButton
							title={`${copied ? "Email copied" : "Copy Email"}`}
							icon={<IoCopyOutline />}
							position="right"
							otherClasses="bg-[#161E31]"
							handleClick={handleCopy}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
