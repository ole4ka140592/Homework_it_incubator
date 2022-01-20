import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import classes from "./HW11.module.css";



function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRangeHandler1 = (value: number) => {
        setValue1(value)
    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={classes.superRange}>
                <div className={classes.superValue1}><span>{value1}</span></div>
                <div className={classes.range}><SuperRange onChangeRange={onChangeRangeHandler1} value1={value1}
                    // сделать так чтоб value1 изменялось
                /></div>
            </div>

            <div className={classes.superDoubleRange}>
                <div className={classes.doubleValue1}><span>{value1}</span></div>
                <div className={classes.doubleRange}><SuperDoubleRange
                    onChangeRange={onChangeRangeHandler1}
                    value1={value1}
                    value2={value2}

                /></div>
                <div className={classes.doubleValue2}><span>{value2}</span></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
