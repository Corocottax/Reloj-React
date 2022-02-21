import React, { useState, useEffect } from "react";
import "./CuentaAtras.scss"

export const CuentaAtras = () => {

    const [time, setTime] = useState("");

    useEffect(() => {

        let cuentaAtrasDate = new Date("Feb 25, 2022 18:00:00").getTime();
        let x = setInterval(() => {

            let now = new Date().getTime();
            let distance = cuentaAtrasDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

            if (distance < 0) {

                clearInterval(x);
                setTime("SOMOS LIBRES!");

            }

        }, 1000);

    }, [])

  return (
  <div className="cuentaAtras">

    <h2>{time}</h2>

  </div>
  );
};
