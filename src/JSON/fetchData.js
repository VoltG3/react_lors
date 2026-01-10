import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get("/data.json")
                setData(response.data)
                setError(null)
            } catch (err) {
                console.error("[ ERROR ] Failed to fetch data.json:", err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, loading, error }
}
