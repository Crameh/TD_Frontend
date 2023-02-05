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

export async function load() {
    return {null_location};
}