import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import StoryPage from './pages/StoryPage/StoryPage';
import "./Vendor/czizh/index.css";
import "./Vendor/nunito/index.css";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/story" element={<StoryPage />}/>
                    </Routes>
                </main>
                    <Footer/>
            </div>
        </Router>
);
}

export default App;