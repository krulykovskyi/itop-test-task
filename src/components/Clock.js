import React from "react";

export function Clock({ hours, minutes, seconds, milliseconds }) {
  return (
    <div className="clock">
      <div class="block box is-flex is-align-items-baseline is-justify-content-center">
        <div className="box">{hours < 10 ? `0${hours}` : hours}</div>
        <div>:</div>
        <div className="box">{minutes < 10 ? `0${minutes}` : minutes}</div>
        <div>:</div>
        <div className="box">{seconds < 10 ? `0${seconds}` : seconds}</div>
        <div>:</div>
        <div className="box">{milliseconds < 10 ? `0${milliseconds}` : milliseconds}</div>
      </div>
    </div>
  );
}
