import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css'
import CustomerCard from './components/CustomCard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomerCard/>
  </StrictMode>,
)