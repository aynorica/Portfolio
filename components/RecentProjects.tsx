import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3D-Pin";
import { FaLocationArrow } from "react-icons/fa";
import SectionContainer from "./containers/section-container";

const RecentProjects = () => {
	return (
		<SectionContainer
			normalTitle="A small collection of my"
			coloredTitle="Recent Projects"
			id="projects"
		>
			{projects.map((project) => {
				const { des, iconLists, id, img, link, title } = project;
				return (
					<div
						id={project.title}
						key={project.id}
						className="lg:min-h-[32.5rem] sm:h-[41rem]  h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
					>
						<PinContainer
							title={link}
							href={link}
							containerClassName=""
						>
							<div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh]  mb-10">
								<div className="relative h-full w-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
									<img
										src={"/portfolio/bg.png"}
										alt={title}
									/>
								</div>
								<img
									src={"/portfolio" + img}
									alt={title}
									className="z-10 absolute bottom-0 object-bottom"
								/>
							</div>
							<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
								{title}
							</h1>
							<p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
								{des}
							</p>
							<div className="flex items-center justify-between mt-7 mb-3">
								{iconLists.map((icon, index) => {
									return (
										<div
											key={icon}
											className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
											style={{
												transform: `translateX(-${
													5 * index * 2
												}px)`,
											}}
										>
											<img
												src={"/portfolio" + icon}
												alt={icon}
												className="p-2"
											/>
										</div>
									);
								})}
								<div className="flex justify-center items-center">
									<p className="flex lg:text-xl md:text-sm text-xs text-purple">
										Live Preview
									</p>
									<FaLocationArrow
										className="ms-3"
										color="#CBACF9"
									/>
								</div>
							</div>
						</PinContainer>
					</div>
				);
			})}
		</SectionContainer>
	);
};

export default RecentProjects;
