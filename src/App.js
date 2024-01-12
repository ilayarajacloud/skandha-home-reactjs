import './assets/css/bootstrap/css/bootstrap.min.css';
import './assets/css/font-awesome/css/font-awesome.min.css';
import './assets/css/toastr/toastr.min.css';
import './assets/css/charts-c3/plugin.css';
import './assets/css/main.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './component/layout';
import Dashboard from './component/dashboard';
import Overview from './component/overview';
import NewLead from './component/lead/newLead'
import LeadList from './component/lead/leadList';
import PropertyList from './component/property/propertyList';
import PropertyLocation from './component/property/propertyLocation';
import CustomerList from './component/customer/customerList';
import DeadLeadList from './component/lead/deadLeadList';
import Employee from './component/employee/employee';
import NewEmplyee from './component/employee/newEmplyee';
import EmployeeRole from './component/employee/employeeRole';
import NewProperty from './component/property/newProperty';
import LeadSource from './component/lead/leadSource';
import LeadStatus from './component/lead/leadStatus';
import PropertyPlotFacing from './component/property/propertyPlotFacing';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Layout />
        <Routes>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='overview' element={<Overview />} />
          <Route path='newlead' element={<NewLead />} />
          <Route path='newlead/:id' element={<NewLead />} />
          <Route path='leadList' element={<LeadList />} />
          <Route path='leadsource' element={<LeadSource />} />
          <Route path='leadstatus' element={<LeadStatus />} />
          <Route path='propertylist' element={<PropertyList />} />
          <Route path='newproperty' element={<NewProperty />} />
          <Route path='propertylocation' element={<PropertyLocation />} />
          <Route path='plotfacing' element={<PropertyPlotFacing/>} />
          <Route path='customerlist' element={<CustomerList />} />
          <Route path='deadlead' element={<DeadLeadList />} />
          <Route path='employee' element={<Employee />} />
          <Route path='newemployee' element={<NewEmplyee />} />
          <Route path='newemployee/:id' element={<NewEmplyee />} />
          <Route path='emplyeerole' element={<EmployeeRole />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
