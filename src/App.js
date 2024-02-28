import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar.jsx';
import GENERAL from './Pages/General.jsx'
import TRANSACTION from './Pages/Transaction.jsx'
import PRINT from './Pages/Print.jsx'
import TAXESGST from './Pages/TaxesandGst.jsx'
import USERMANAGEMENT from './Pages/UserMangment.jsx'
import TRANSACTIONMESSAGE from './Pages/Transactionmesage.jsx'
import PARTY from './Pages/Party.jsx' 
import ITEM  from './Pages/Item.jsx'

function App() {
  return (
    <BrowserRouter>
     <div>   
     <Sidebar>
        <Routes>
          <Route path="/" element={<GENERAL/>} />
          <Route path="/transaction" element={<TRANSACTION />} />
          <Route path="/print" element={<PRINT/>} />
          <Route path="/taxes & gst" element={<TAXESGST/>} />
          <Route path="/user management" element={<USERMANAGEMENT />} />
          <Route path="/transaction message" element={<TRANSACTIONMESSAGE/>} />
          <Route path="/party" element={<PARTY />} />
          <Route path="/item" element={<ITEM />} />
          
        </Routes>
        </Sidebar>
      
     </div>
    </BrowserRouter>
  );
}

export default App;
