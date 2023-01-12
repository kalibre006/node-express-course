const url = "https://randomuser.me/api/?results=40";

const response = await fetch(url);
const data = await response.json();

export const personel = data;
