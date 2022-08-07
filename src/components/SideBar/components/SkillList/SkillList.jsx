import React from 'react'
import styles from './SkillList.module.scss'
import { ItemSkill } from './ItemSkill';

const skillsItems = [
    {
        id:0,
        title: 'Website Development',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Website.svg',
        link: '/'
    },
    {
        id:1,
        title: 'Writing Texts',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Texts.svg',
        link: '/'
    },
    {
        id:2,
        title: 'Website Development',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Website.svg',
        link: '/'
    },
    {
        id:3,
        title: 'Writing Texts',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Texts.svg',
        link: '/'
    },
    {
        id:4,
        title: 'Website Development',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Website.svg',
        link: '/'
    },
    {
        id:5,
        title: 'Writing Texts',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Texts.svg',
        link: '/'
    },
    {
        id:6,
        title: 'Website Development',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Website.svg',
        link: '/'
    },
    {
        id:7,
        title: 'Writing Texts',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Texts.svg',
        link: '/'
    },
    {
        id:8,
        title: 'Website Development',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Website.svg',
        link: '/'
    },
    {
        id:9,
        title: 'Writing Texts',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Texts.svg',
        link: '/'
    },
    {
        id:10,
        title: 'Website Development',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Website.svg',
        link: '/'
    },
    {
        id:11,
        title: 'Writing Texts',
        count: 543,
        img: 'src/assets/icons/side-menu-icons/Texts.svg',
        link: '/'
    },
]
export const SkillList = () => {
    return (
        <ul className={styles.skills_list}>
            {skillsItems.map(item=>
                <ItemSkill key={item.id} skillsItem={item} />
                )}
        </ul>
    )
}
