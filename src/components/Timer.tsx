import { useEffect, useState } from "react";
import logoOrange from "../images/ets_orange.png";

export function Timer() {
    const masterDeadLine = new Date(2022, 5, 8, 23, 59, 59);
    let [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    }, []);

    const timeLeft = new Date(
        masterDeadLine.getFullYear() - currentTime.getFullYear(),
        masterDeadLine.getMonth() - currentTime.getMonth(),
        masterDeadLine.getDate() - currentTime.getDate(),
        masterDeadLine.getHours() - currentTime.getHours(),
        masterDeadLine.getMinutes() - currentTime.getMinutes(),
        masterDeadLine.getSeconds() - currentTime.getSeconds()
    );
    /* const timeLeftMS = masterDeadLine.valueOf() - currentTime.valueOf(); */
    /*  const timeLeftS = masterDeadLine.getSeconds() - currentTime.getSeconds();
    const timeLeftMin = masterDeadLine.getMinutes() - currentTime.getMinutes();
    const timeLeftH = masterDeadLine.getHours() - currentTime.getHours(); */
    const dayDiff = masterDeadLine.getDate() - currentTime.getDate();

    /*  const timeLeftD = masterDeadLine.getDate() - currentTime.getDate();

    const timeLeftMonth = masterDeadLine.getMonth() - currentTime.getMonth();
    //const timeLeftD = timeLeftMS / (1000 * 60 * 60 * 24)
    const timeLeftY = timeLeftMS / (1000 * 60 * 60 * 24 * 365); */
    const seconds =
        timeLeft.getSeconds().toString().length >= 2
            ? timeLeft.getSeconds()
            : `0${timeLeft.getSeconds().toString()}`;
    return (
        <>
            <img src={logoOrange} alt="Eye Tracking Studio"></img>
            <h1>
                {/*Years:  Does not work {timeLeft.getFullYear()} */}{" "}
                {/* {Math.max(Math.floor(timeLeftY), 0)} */}
                {/*<br /> Months:  {timeLeft.getMonth()} */}{" "}
                {/* {Math.max(Math.floor(timeLeftMonth), 0)} */}
                {dayDiff ? timeLeft.getDate() : "0"} dager{" "}
                {/* {Math.round(timeLeftD)} */}
                {timeLeft.getHours()} timer{" "}
                {/* Does not work {24 - Math.abs(timeLeftH)} */}
                {timeLeft.getMinutes()} minutter{" "}
                {/* {59 - Math.abs(timeLeftMin)} */}
                {seconds} sekunder {/* {60 - Math.abs(timeLeftS)} */}
                <br /> til {masterDeadLine.toLocaleDateString()}{" "}
                {masterDeadLine.toLocaleTimeString()}
                {/* <br /> Current time {currentTime.toLocaleDateString()}{" "} */}
                {/* {currentTime.toLocaleTimeString()} */}
            </h1>
        </>
    );
}
