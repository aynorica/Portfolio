import { SendEmailInputInterface } from "@/Models/Interfaces/send-email.interface";
import emailjs from "@emailjs/browser";

export default async function SendEmail({
	email,
	message,
	name,
}: SendEmailInputInterface): Promise<boolean> {
	const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
	const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
	const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;

	emailjs.init({
		publicKey: publicKey,
		blockHeadless: true,
		limitRate: {
			id: "app",
			throttle: 10000,
		},
	});
	return await emailjs
		.send(serviceID, templateID, {
			from_name: name,
			to_name: "AMIR DEILAMIZADEH",
			message,
			reply_to: email,
		})
		.then(() => true)
		.catch(() => false);
}
