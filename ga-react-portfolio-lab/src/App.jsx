import { useState } from 'react'
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
      backend: false
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
    <li key={index}>{skill.frontEnd ? `Front end - ${skill.name}` : (skill.backEnd ? `Back end - ${skill.name}` : `Other - ${skill.name}`) }</li>
  )



  return (
    <>
      <ul>{frontEndSkillList}</ul>
    </>
  )
}

export default App
