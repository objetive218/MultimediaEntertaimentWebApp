import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react'
import { BookProvider } from './context/bookMarksContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BookProvider>
            <App />
        </BookProvider>
    </StrictMode>
)
