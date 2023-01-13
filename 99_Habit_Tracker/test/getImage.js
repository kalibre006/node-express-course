const url = "https://picsum.photos/600/600";

const response = await fetch(url);
const data = await response;

export const img = data;
