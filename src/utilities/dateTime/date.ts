/**
 * return date in format of dd mon yyyy, here mon refers first three letters of month. example - 14 Dec 2023
 * 
 */
export const getDate = (dateObj: Date) => {
    const date = dateObj.getDate();
    const month = getMonthString(dateObj);
    const year = dateObj.getFullYear();

    return `${date} ${month} ${year}`
}

// returns first three letters of month. example - Jan
const getMonthString = (dateObj: Date) => {
    return dateObj.toDateString().substring(4, 7)
}
