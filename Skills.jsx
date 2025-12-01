import React from "react";
import ScriptImg from "../assets/javascript.png";
import JavaImg from "../assets/java.png";
import PyImg from "../assets/python.png";
import BotImg from "../assets/Bootstrap.png";
import ReImg from "../assets/React.png";
import SqlImg from "../assets/mysql.png"

export default function Skills(){
    return(
        <section id="skills" className="relative overflow-hidden flex flex-col text-white body-font">
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div data-aos='fade-up' data-aos-delay='200'
                className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400">
                <h1 data-aos='fade-up'
                data-aos-delay='200'
                className="sm:text-4xl text-2xl font-medium title-font mb-2 text-white "> Skills</h1>
                <p data-aos='fade-right' data-aos-delay='500'
                className="leading-relaxed text-base">
                    I'm a dedicated Full Stack Web Developer with expertise in JavaScript,React,Java,Python,Bootstrap and MySQL.
                    I focus on creating responsive,user-centered web applications and writing clean,efficient code.
                    I love learning new technologies and continuously improving my craft.
                </p>
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className="flex flex-col md:w-1/2 md:pl-12">
            <nav className="flex flex-wrap list-none -mb-1">
                <li className="lg:w-1/3 mb-4 w-1/2">
                   <img src={ScriptImg} alt="" className="rounded-full w-24 h-24 object-cover"/>
                </li>
                <li className="lg:w-1/3 mb-4 w-1/2">
                   <img src={JavaImg} alt="" className="rounded-full w-24 h-24 object-cover"/>
                </li>
                <li className="lg:w-1/3 mb-4 w-1/2">
                   <img src={PyImg} alt="" className="rounded-full w-24 h-24 object-cover"/>
                </li>
                <li className="lg:w-1/3 mb-4 w-1/2">
                   <img src={BotImg} alt="" className="rounded-full w-24 h-24 object-cover"/>
                </li>
                <li className="lg:w-1/3 mb-4 w-1/2">
                   <img src={ReImg} alt="" className="rounded-full w-24 h-24 object-cover"/>
                </li>
                <li className="lg:w-1/3 mb-4 w-1/2">
                   <img src={SqlImg} alt="" className="rounded-full w-24 h-24 object-cover"/>
                </li>
            </nav>
            </div>
            </div>
        </section>
    )
}