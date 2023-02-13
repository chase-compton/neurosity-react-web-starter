import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import './FFT.css';
import { notion, useNotion } from "../../services/notion";
import { Nav } from "../../components/Nav/Nav";

export function FFT() {
  const { user } = useNotion();
  const [alpha, setAlpha] = useState([]);
  const [beta, setBeta] = useState([]);
  const [delta, setDelta] = useState([]);
  const [gamma, setGamma] = useState([]);
  const [theta, setTheta] = useState([]);


  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      return;
    }

    const subscription = notion.brainwaves("powerByBand").subscribe((brainwaves) => {
        console.log(brainwaves);
        setAlpha(brainwaves.data.alpha);
        setBeta(brainwaves.data.beta);
        setDelta(brainwaves.data.delta);
        setGamma(brainwaves.data.gamma);
        setTheta(brainwaves.data.theta);
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [user]);

  return (
    <main className="main-container">
      {user ? <Nav /> : null}
      <div className="band-score">
        &nbsp;{alpha[0]}Hz <div className="band-type">Alpha</div>
        &nbsp;{beta[0]}Hz<div className="band-type">Beta</div>
        &nbsp;{delta[0]}Hz <div className="band-type">Delta</div>
        &nbsp;{gamma[0]}Hz <div className="band-type">Gamma</div>
        &nbsp;{theta[0]}Hz <div className="band-type">Theta</div>
      </div>
    </main>
  );
}
