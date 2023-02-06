import { redirect } from "@sveltejs/kit";
import * as api from "../../api.js";

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        
        if (!username || !password) throw redirect(304, "/register")

        const response = await api.sendRequest('POST', "http://localhost:3000/users/register", "", {
            'username': username,
            'password': password
        })
        if (response.jwt) {
            cookies.set('token', response.jwt)
            throw redirect(302, "/login")
        }
    },
};