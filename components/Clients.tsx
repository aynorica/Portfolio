import React from "react";
import SectionContainer from "./containers/section-container";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

function Clients() {
	return (
		<SectionContainer
			normalTitle="Kind words from"
			coloredTitle="Satisfied Co-workers"
			id="Testimonials"
		>
			<div className="flex flex-col items-center">
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="slow"
				/>
				<div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
					{companies.map((company, index) => {
						const { id, img, name, nameImg } = company;
						return (
							<div
								key={id}
								className="flex max-w-32 md:max-w-60 gap-2"
							>
								<img
									src={"/portfolio" + img}
									alt={name}
									className="md:w-10 w-5"
								/>
								<img
									src={"/portfolio" + nameImg}
									alt={name}
									className="md:w-24 w-20"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</SectionContainer>
	);
}

export default Clients;
