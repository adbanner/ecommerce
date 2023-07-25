

import {Route, Link, Routes, useNavigate} from 'react-router-dom';

export default function GoBackBtn() {
    
    const navigate = useNavigate()
    
    return (
        <button data-go-back onClick={()=>navigate(-1)}>Go back</button>
    )
}