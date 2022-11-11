import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../assets/particles/particles.json";

function Particle(){
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <Particles options={particlesOptions} init={particlesInit}/>
    )
}

export default Particle