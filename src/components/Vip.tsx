import BackgroundVip from "./blue.webp";
import React from "react";
import Image from "./Image";
import Button from "./Button";

export default function Vip() {
  return (
    <div>
      <div className="test">
        <Image className="vip-image" src={BackgroundVip} />;<div></div>
      </div>
      <div className="subscription">
        <h2>Start your free trial of Calm Premium.</h2>
        <ul>
          <li>
            <Button className="Button-vip" onClick={() => "?"} type="button">
              <div className="span-container">
                <div>
                  <span className="yearly">
                    Yearly
                    <br />
                  </span>
                  <span className="price-yearly">Rp&nbsp;689.000,00/yr.</span>
                </div>
                <div className="price-monthly">Rp&nbsp;57.416,67 / mo.</div>
              </div>
              <div className="trial">
                <span>14-Day Free Trial</span>
              </div>
            </Button>
          </li>
        </ul>
        <p className="self-content">
          After your free trial, the yearly subscription is Rp 689.000,00 and
          automatically renews each year until cancelled.
          <a href="#">Terms</a>
          &nbsp;|&nbsp;
          <a href="#">Cancel anytime</a>
        </p>
        <Button className="continue" onClick={() => "?"} type="button">
          Continue
        </Button>
      </div>
    </div>
  );
}
