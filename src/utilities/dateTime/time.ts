/**
 * returns time in format - hh:mm meridian(AM | PM). hours are in 12hr format
 */
export const getTime = (dateObj: Date) => {
    const { hours, meridian } = getHoursIn12Format(dateObj);
    const minutes = getMinutes(dateObj);

    return `${hours}:${minutes} ${meridian}`
}

type Imeridian = "AM" | "PM"


// converts hour from 24hr format to 12hr format and returns it along with meridian
const getHoursIn12Format = (dateObj: Date) => {
    let hours = dateObj.getHours();
    let meridian: Imeridian = "AM";

    if (hours === 0) hours = 12
    else if (hours === 12) meridian = "PM"
    else if (hours > 12) {
        meridian = "PM"
        hours = hours - 12
    }

    return { hours, meridian }
}


// returns minutes in double digits. prepends 0 if minute is less than 10 to make it double digit
const getMinutes = (dateObj: Date) => {
    let minutes = dateObj.getMinutes();

    if (minutes < 10) return `0${minutes}`

    return minutes;
}