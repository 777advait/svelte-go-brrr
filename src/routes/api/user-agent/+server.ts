import { json, type RequestEvent } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export async function GET({ request, cookies }: RequestEvent) {
	const allCookies = cookies.getAll().map((cookie) => {
		return { [cookie.name]: cookie.value };
	});

	let flag = allCookies.find((cookie) => cookie.flag);
	const flagHeader = request.headers.get("flag");

	return json(
		{
			message: flag
				? "Congratulations! Check the response headers for your flag!"
				: flagHeader
					? "Nice try with that header! But I prefer cookies... maybe give me a sweet treat?"
					: "Hmm... try sending a flag header!"
		},
		{
			headers: {
				...(flag && { "x-final-flag": env.FINAL_FLAG })
			}
		}
	);
}
