import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Initiation from '../containers/Initiation'

export const DashboardRouter = ({ isAuthenticated }) => {
    return (
        <>
            <div>
                <Routes >
                    <Route path="/" element={<Initiation isAuthenticated={isAuthenticated} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
}
