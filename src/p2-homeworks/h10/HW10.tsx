import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import classes from "./HW10.module.css";
import {useDispatch, useSelector} from "react-redux";
import {type} from "os";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import preloader from "./images/preloader.gif"

function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

      const setLoading = () => {

        dispatch(loadingAC(true))

        setTimeout(()=> {
            dispatch(loadingAC(false))
        }, 3000)

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (

                        <div >
                            <img className={classes.preloader} src={preloader}/>
                        </div>

                ) : (

                    <div>
                        <br/>
                        <br/>
                        <br/>
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
