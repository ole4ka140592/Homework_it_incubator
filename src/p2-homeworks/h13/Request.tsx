import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import React, {useEffect, useState} from "react";
import {requestAPI} from "./api/RequestsAPI";

export const Request = () => {
    const [state, setState] = useState<any>(null)
    const [checked, setCheck] = useState<boolean>(false)

    useEffect(() => {
        let body = {
            success: true,
            checkedValue: checked
        }

        requestAPI.requestPost(body)
            .then((res) => {
                setState(res.data)
            })
    }, [checked])

    const setChecked = () => {
        setCheck(!checked)
    }

    return (
        <div>
            <SuperButton>Request</SuperButton>
            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            >
                checkedValue {/*// этот текст попадёт в children*/}
            </SuperCheckbox>


            <div> {JSON.stringify(state)}</div>
        </div>
    )
}

