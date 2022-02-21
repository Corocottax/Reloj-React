import "./RelojDigital.scss"
import React, { useEffect, useState } from "react";

export const RelojDigital = () => {

  const [reloj, setReloj] = useState();

    useEffect(() => {

      setInterval(() => {

        const date = new Date();
        setReloj(date.toLocaleTimeString());

      }, 1000)

    }, [])

  return (
  <div className='relojDigital'>

    <h2>{reloj}</h2>

  </div>
  );
};
