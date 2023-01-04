import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
        <p className={`${styles.paragraph} mt-6 max-w-[470px]`}>
          Arco tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.Aliquet ultices ac, ametau.
        </p>
        <Button styles='mt-10 rounded-[10px]' />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )
}

export default CardDeal