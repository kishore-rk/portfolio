export const getImageurl = (path) =>{
    return new URL(`/assests/${path}`, import.meta.url).href;
};
