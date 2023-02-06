import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    cookies.set('token', "null")
    throw redirect(307, "/login")
}