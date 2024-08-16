"use client";
import { cn } from "@/lib/utils";
import { Input } from "./form-input.component";
import { Label } from "./form-label.component";
import TextArea from "./textarea-input.component";
import InvertBtn from "../buttons/invert-color-btn.component";
import NormalText from "../typo/normal-text.component";
import { useState } from "react";
import SendEmail from "@/services/email.service";
import SuccessComponent from "../utils/success.component";
import ErrorComponent from "../utils/error.component";

export default function EmailForm() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [sending, setSending] = useState<boolean>(false);
	const [sent, setSent] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [inputError, setInputError] = useState<Record<string, string>>({});
	const handleName = (name: string) => {
		delete inputError.name;
		setInputError(inputError);
		setName(name);
	};
	const handleEmail = (email: string) => {
		delete inputError.email;
		setInputError(inputError);
		setEmail(email);
	};
	const handleMessage = (message: string) => {
		delete inputError.message;
		setInputError(inputError);
		setMessage(message);
	};
	const senEmail = async () => {
		const errors = checkInputs(name, email, message);
		if (errors) {
			setInputError(errors);
			return;
		}
		setSending(true);
		SendEmail({ name, email, message }).then((res) => {
			if (res) setSent(res);
			else setError(true);
		});
	};
	return (
		<div className="relative">
			<div
				className={`flex flex-col gap-6 mt-4 ${
					sent || error ? "opacity-0" : ""
				}`}
			>
				<div className="flex md:flex-row flex-col gap-6 items-center justify-start">
					<LabelInputContainer>
						<Label
							htmlFor="Name"
							className={detectLabelClassName("Name", inputError)}
						>
							{detectLabelText("Name", inputError)}
						</Label>
						<Input
							id="name"
							placeholder="Tyler"
							type="text"
							className="tracking-wider"
							onChange={(e) => handleName(e.target.value)}
						/>
					</LabelInputContainer>
					<LabelInputContainer>
						<Label
							htmlFor="Email"
							className={detectLabelClassName(
								"Email",
								inputError,
							)}
						>
							{detectLabelText("Email", inputError)}
						</Label>
						<Input
							id="email"
							placeholder="example@gmail.com"
							type="email"
							className="tracking-wider"
							onChange={(e) => handleEmail(e.target.value)}
						/>
					</LabelInputContainer>
				</div>
				<LabelInputContainer>
					<Label
						htmlFor="Message"
						className={detectLabelClassName("Message", inputError)}
					>
						{detectLabelText("Message", inputError)}
					</Label>
					<TextArea
						id="message"
						placeholder="Write your message here ..."
						onChange={(e) => handleMessage(e.target.value)}
					/>
				</LabelInputContainer>
				<InvertBtn
					className={`mt-6 transition-all ${
						sending ? "animate-pulse" : ""
					}`}
					onClick={senEmail}
				>
					<NormalText
						text={sending ? "SENDING..." : "SEND"}
						className={sending ? "animate-pulse" : ""}
					/>
				</InvertBtn>
			</div>
			{sent || error ? (
				<div className="w-full h-full absolute z-50 top-0 left-0 right-0 bottom-0">
					{sent && (
						<SuccessComponent text="Email successfully sent!" />
					)}
					{error && (
						<ErrorComponent text="Failed to send email, please try again later" />
					)}
				</div>
			) : null}
		</div>
	);
}

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};

const checkInputs = (name: string, email: string, message: string) => {
	const errors: Record<string, string> = {};
	if (!name) errors.name = "* Name is required";
	if (!email) errors.email = "* Email is required";
	if (!message) errors.message = "* Message is required";
	return Object.keys(errors).length > 0 ? errors : null;
};

const detectLabelText = (
	labelKey: "Name" | "Email" | "Message",
	errors: Record<string, string>,
) => {
	const error = errors[labelKey.toLowerCase()];
	if (error) return `${labelKey} ${error}`;
	return labelKey;
};

const detectLabelClassName = (
	labelKey: "Name" | "Email" | "Message",
	errors: Record<string, string>,
) => {
	const error = errors[labelKey.toLowerCase()];
	if (error) return "text-red-500 font-normal text-xl";
	return "text-xl font-semibold";
};
