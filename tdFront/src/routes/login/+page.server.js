import { redirect } from "@sveltejs/kit";
import * as api from "../../api.js";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        
        if (!username || !password) throw redirect(304, "/login")

        const response = await api.sendRequest('POST', "http://localhost:3000/users/login", "", {
            'username': username,
            'password': password
        })
        if (response.jwt) {
            cookies.set('token', response.jwt)
            throw redirect(302, "/locations")
        }
    },
};