import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const mySkills = [
    {
      name:'JavaScript',
      comfort: 9,
      challenge: 9,
      frontEnd: true,
      backend: true
    },
    {
      name:'CSS',
      comfort: 8,
      challenge: 2,
      frontEnd: true,
      backEnd: false
    },
    {
      name:'HTML',
      comfort: 10,
      challenge: 3,
      frontEnd: true,
      backend: false
    },
    {
      name:'EJS',
      comfort: 4,
      challenge: 2,
      frontEnd: false,
      backEnd: true
    },
    {
      name:'Spanish',
      comfort: 7,
      challenge: 8,
      frontEnd: false,
      backEnd: false
    }
  ]

  const frontEndSkillList = mySkills.map((skill, index) =>
    <li key={index}>{skill.frontEnd  
        ? `Front end - ${skill.name} @ ${skill.comfort} comfort + ${skill.challenge} challenge` 
        : (skill.backEnd 
            ? `Back end - ${skill.name} @ ${skill.comfort} comfort + ${skill.challenge} challenge` 
            : `Other - ${skill.name} @ ${skill.comfort} comfort + ${skill.challenge} challenge`
          ) 
        }
    </li>
  )

  const liStyle = {
    color: `#333333`,
    fontWeight: `800`,
    fontSize: `1.5rem`,
    textAlign: `left`,
  }

  // See https://2019.wattenberger.com/blog/react-and-d3
  const svgRef = useRef()

  const Circle = () => {
    return (
      <svg 
        width="300" 
        height="154" 
        style={{
          border: "2px solid gold"
        }}>
        <circle
          cx="150"
          cy="77"
          r="40"
          fill="red"
        />
      </svg>
    );
  };



  return (
    <>
      <ul style={liStyle}>{frontEndSkillList}</ul>
      <svg ref={svgRef} />
      <Circle/>
    </>

  )
}

export default App
