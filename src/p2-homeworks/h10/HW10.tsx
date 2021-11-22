import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import classes from "./HW10.module.css";
import {useDispatch, useSelector} from "react-redux";
import {type} from "os";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";

function HW10() {
    const isLoading = useSelector<AppStoreType, StateType>(state => state.loading)
    const dispatch = useDispatch()

      const setLoading = () => {

        dispatch(loadingAC(true))

        setTimeout(()=> {
            dispatch(loadingAC(false))
        }, 5000)

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (

                        <div className="loading">Loading</div>

                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }





            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
