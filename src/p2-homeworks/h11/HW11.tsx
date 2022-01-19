import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRangeHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue1(JSON.parse(e.currentTarget.value))
        console.log(JSON.parse(e.currentTarget.value))
    }

    const onChangeRangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        // setValue1(JSON.parse(e.currentTarget.value))
        setValue2(JSON.parse(e.currentTarget.value))
        console.log(JSON.parse(e.currentTarget.value))
    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange onChange={onChangeRangeHandler1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChange={onChangeRangeHandler1}
                    value1={value1}
                    value2={value2}
                />
                <span>{value2}</span>
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
