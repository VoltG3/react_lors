import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [showData, setShowData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                setLoading(true)
                const [dataRes, showDataRes] = await Promise.all([
                    axios.get("/data.json"),
                    axios.get("/showData.json")
                ])
                setData(dataRes.data)
                setShowData(showDataRes.data)
                setError(null)
            } catch (err) {
                console.error("[ ERROR ] Failed to fetch project data:", err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchAllData()
    }, [])

    const value = {
        data,
        showData,
        loading,
        error,
        // Helper aliases derived from showData
        showWithReference: showData?.showWithReference ?? null,
        showWithoutReference: showData?.showWithoutReference ?? null,
        openingDate: showData?.openingDate ?? null
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export const useProjectData = () => {
    const context = useContext(DataContext)
    if (context === undefined) {
        throw new Error('useProjectData must be used within a DataProvider')
    }
    return context
}
