import * as api from "../../api.js";

export async function load() {
    console.log("load")
    return {};
}

/** @type {import('./$types').Actions} */

export const actions = {
    default: async ({ request }) => {
        console.log('test')
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        console.log('test')
        await api.sendRequest('POST', "http://localhost:3000/users/login", "", {
            'username': username,
            'password': password
        })
        return { success: true };
    },
};