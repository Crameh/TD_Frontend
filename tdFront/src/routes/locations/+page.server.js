import { redirect } from "@sveltejs/kit";
import * as api from "../../api.js";

const null_location = {
    address: "",
    district: "",
    endDate: "",
    filmDirectorName: "",
    filmName: "",
    filmProducerName: "",
    filmType: "",
    geolocation: {
        coordinates: ["", ""]
    },
    startDate: "",
    year: ""
}

let locations = [];
let userRole;
let token;

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {

    token = cookies.get('token');

    if (!token || token == "null") throw redirect(307, "/login")

    await api.sendRequest('GET', "https://webapp-back.onrender.com/users/me", token)
    .then(data => userRole = data.role)

    if (userRole != "admin" && userRole != "user") throw redirect(307, "/login")

    await api.sendRequest("GET", "https://webapp-back.onrender.com/locations", token)
    .then(data => locations = data)

    return { null_location, locations, userRole, token };
}