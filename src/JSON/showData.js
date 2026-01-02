import { useState, useEffect } from 'react'
import axios from 'axios'

export const useShowData = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get("./showData.json")
                setData(response.data)
                setError(null)
            } catch (err) {
                console.error("[ ERROR ] Failed to fetch showData.json:", err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const showWithReference = data?.showWithReference ?? null
    const showWithoutReference = data?.showWithoutReference ?? null
    const openingDate = data?.openingDate ?? null

    return {
        showWithReference,
        showWithoutReference,
        openingDate,
        loading,
        error
    }
}