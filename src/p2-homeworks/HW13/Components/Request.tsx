import React, {useEffect, useState} from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsAPI} from "../api/requests-api";

const Request = () => {
    const [success, setSuccess] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('Нажми кнопку')

    const sendSuccess = () => {
        requestsAPI.postRequest(success)
            .then((response) => {
                console.log({...response})
                setMessage(response.data.errorText)
            })
            .catch((error) => {
                console.log({...error});
                setMessage(error.response ? error.response.data.errorText : error.message);
            })
    }
    return (
        <div>
            <SuperButton onClick={() => sendSuccess()}>Click me!</SuperButton>
            <SuperCheckbox onChangeChecked={setSuccess}/>
            <div>
                {message}
            </div>
        </div>
    );
};

export default Request;