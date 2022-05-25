import React from 'react'
import HomePage from '../src/pages/Home'
import LoginPage from '../src/pages/Login'
import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        {/* <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />}>
                    <Route path=":invoiceId" element={<Invoice />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                /> */}
      </Route>
      <Route path='/login' element={<LoginPage />}></Route>
    </Routes>
  )
}