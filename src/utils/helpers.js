export const formatDate = (date) => {
    const result = new Date(date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })
    return result;

}

export const getInputValueFromId = (id) => {
    return document.getElementById(id)?.value;
}