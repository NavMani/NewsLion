import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News apiKey = {apiKey} key= "general" pageSize={10} country="us" category="general" />} />
            <Route exact path="/business" element={<News apiKey = {apiKey} key= "business" pageSize={10} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey = {apiKey} key= "entertainment" pageSize={10} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News apiKey = {apiKey} key= "general" pageSize={10} country="us" category="general" />} />
            <Route exact path="/health" element={<News apiKey = {apiKey} key= "health" pageSize={10} country="us" category="health" />} />
            <Route exact path="/science" element={<News apiKey = {apiKey} key= "science" pageSize={10} country="us" category="science" />} />
            <Route exact path="/sports" element={<News apiKey = {apiKey} key= "sports" pageSize={10} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey = {apiKey} key= "technology" pageSize={10} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
  
