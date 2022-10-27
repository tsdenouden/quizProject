import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Redirect = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    },[navigate])
}

export default Redirect