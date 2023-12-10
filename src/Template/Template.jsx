import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './Pages/MainPage';
import { SearchPage } from './Pages/SearchPage';
import { Bar } from './Blocks/Bar/Bar';
import { Tools } from './Blocks/Tools/Tools';

export const Template = () => {
  return (
    <>
      <Bar/>
        <Routes>
          <Route
            path="/"
            element={<MainPage/>}
          />
          <Route
            path="/search"
            element={<SearchPage/>}
          />
        </Routes>
        <Tools/>
    </>
  )
}