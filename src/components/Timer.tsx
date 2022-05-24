import { useEffect, useState } from "react";

export function Timer() {
    const masterDeadLine = new Date(2022, 5, 10, 14, 0);
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
    const timeLeftMS = masterDeadLine.valueOf() - currentTime.valueOf();
    const timeLeftS = masterDeadLine.getSeconds() - currentTime.getSeconds();
    const timeLeftMin = masterDeadLine.getMinutes() - currentTime.getMinutes();
    const timeLeftH = masterDeadLine.getHours() - currentTime.getHours();
    const dayDiff = masterDeadLine.getDate() - currentTime.getDate();

    const timeLeftD = masterDeadLine.getDate() - currentTime.getDate();

    const timeLeftMonth = masterDeadLine.getMonth() - currentTime.getMonth();
    //const timeLeftD = timeLeftMS / (1000 * 60 * 60 * 24)
    const timeLeftY = timeLeftMS / (1000 * 60 * 60 * 24 * 365);

    return (
        <h1>
            Days: {dayDiff ? timeLeft.getDate() : "0"}{" "}
            {/* {Math.round(timeLeftD)} */}
            <br /> Hours: {timeLeft.getHours()}{" "}
            {/* Does not work {24 - Math.abs(timeLeftH)} */}
            <br /> Minutes: {timeLeft.getMinutes()}{" "}
            {/* {59 - Math.abs(timeLeftMin)} */}
            <br /> Seconds: {timeLeft.getSeconds()}{" "}
            {/* {60 - Math.abs(timeLeftS)} */}
            <br /> Until {masterDeadLine.toLocaleDateString()}{" "}
            {masterDeadLine.toLocaleTimeString()}
        </h1>
    );
}
