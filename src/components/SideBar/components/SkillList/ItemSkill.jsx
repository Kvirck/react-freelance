import React from 'react'
import { Link } from 'react-router-dom';
import styles from './SkillList.module.scss'

export const ItemSkill = ({ skillsItem }) => {
  return (
    <Link to={skillsItem.link}>
      <li className={styles.skills__list__item}>
        <img src={skillsItem.img} alt="img" />
        <p className={styles.skills__list__item__title}>{skillsItem.title}</p>
        <div className={styles.skills__list__item__count}>{skillsItem.count}</div>
      </li>
    </Link>
  )
}
