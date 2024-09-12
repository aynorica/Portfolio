"use client";
import { SectionContainerProps } from "@/models/interfaces/section-container.interface";
import React from "react";

const SectionContainer = ({
	coloredTitle,
	normalTitle,
	id,
	children,
}: SectionContainerProps) => {
	return (
		<div className="py-20" id={id}>
			<h1 className="heading">
				{normalTitle}{" "}
				<span className="text-purple">{coloredTitle}</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
				{children}
			</div>
		</div>
	);
};

export default SectionContainer;
