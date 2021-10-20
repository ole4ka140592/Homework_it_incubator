import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={classes.buttons}>
            {mappedAffairs}
            <span><button onClick={setAll} className=
                {props.filter === 'all' ? classes.buttonActive : classes.button}>All</button></span>
            <span><button onClick={setHigh} className=
                {props.filter === 'high' ? classes.buttonActive : classes.button}>High</button></span>
            <span><button onClick={setMiddle} className=
                {props.filter === 'middle' ? classes.buttonActive : classes.button}>Middle</button></span>
            <span><button onClick={setLow} className=
                {props.filter === 'low' ? classes.buttonActive : classes.button}>Low</button></span>
        </div>
    )
}

export default Affairs
