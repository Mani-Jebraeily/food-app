import React from 'react'
import styles from "./HomePage.module.css"
import Banner from '../module/Banner'
import Attribiutes from '../module/Attributes'
import Definition from '../module/Definition'
import Companies from '../module/Companies'
import Instruction from '../module/Instruction'
import Guide from '../module/Guide'

function HomePage() {
  return (
    <div className={styles.container}>
        <Banner/>
        <Attribiutes/>
        <Definition/>
        <Companies/>
        <Instruction/>
        <Guide/>
    </div>
  )
}

export default HomePage