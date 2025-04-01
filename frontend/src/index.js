import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'lightbox.js-react/dist/index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AdmissionPolicy from './Pages/AdmissionPolicy';
import AlumniRegister from './Pages/AlumniRegister';
import ExamPolicy from './Pages/ExamPolicy';
import Faculty from './Pages/Faculty';
import FeeStructure from './Pages/FeeStructure';
import Home from './Pages/Home';
import Hostel from './Pages/Hostel';
import HostelPolicy from './Pages/HostelPolicy';
import MandatoryPublicDisclosure from './Pages/MandatoryPublicDisclosure';
import MiddleWingSchool from './Pages/MiddleWingSchool';
import PrimaryWingSchoool from './Pages/PrimaryWingSchool';
import SchoolRules from './Pages/SchoolRules';
import SeniorWingSchool from './Pages/SeniorWingSchool';
import TCIssue from './Pages/TCIssue';
import AtGlance from './Pages/AtGlance';
import SchoolManagement from './Pages/SchoolManagement';
import Login from './admin/auth/Login';
import Dashboard from './admin/auth/Dashboard';
import Layout from './admin/components/Layout';
import AddTC from './admin/pages/AddTC';
import ViewTC from './admin/pages/ViewTC';
import ViewAlumni from './admin/pages/ViewAlumni';
import AddNews from './admin/pages/AddNews';
import ViewNews from './admin/pages/ViewNews';
import SchoolMagazine from './Pages/SchoolMagazine';
import Newsletter from './Pages/Newsletter';
import AddNewsletter from './admin/pages/AddNewsletter';
import ViewNewsletter from './admin/pages/ViewNewsletter';
import AddSchoolnews from './admin/pages/AddSchoolnews';
import ViewSchoolnews from './admin/pages/ViewSchoolnews';
import AddDownload from './admin/pages/AddDownload';
import ViewDownload from './admin/pages/ViewDownload';
import Download from './Pages/Download';
import EventDetails from './Pages/EventDetails';
import AddEvent from './admin/pages/AddEvent';
import ViewEvent from './admin/pages/ViewEvent';
import AddAchievement from './admin/pages/AddAchievement';
import ViewAchievement from './admin/pages/ViewAchievement';
import AuthoritiesMessage from './Pages/AuthoritiesMessage';
import MissinVission from './Pages/MissinVission';
import Infrastructure from './Pages/Infrastructure';
import VirtualTour from './Pages/VirtualTour';
import Event from './Pages/Event';
import Achievement from './Pages/Achievement';
import AddFaculty from './admin/pages/AddFaculty';
import ViewAllFaculty from './admin/pages/ViewAllFaculty';
import Enquiry from './admin/pages/Enquiry';
import Assembly from './Pages/Assembly';
import AssemblyDetails from './Pages/AssemblyDetails';
import AddAssembly from './admin/pages/AddAssembly';
import ViewAssembly from './admin/pages/ViewAssembly';
import AdmissionProcedure from './Pages/AdmissionProcedure';
import StudentCouncil from './Pages/StudentCouncil';
import StudentCircular from './Pages/SchoolCircular'
import SchoolNews from './Pages/SchoolNews';
import ViewInfrastructure from './admin/pages/ViewInfrastructure';
import AddInfrastructure from './admin/pages/AddInfrastructure';
import AddStudentCouncil from './admin/pages/AddStudentCouncil';
import ViewStudentCouncil from './admin/pages/ViewStudentCouncil';
import AddImage from './admin/pages/AddImage';
import ViewImage from './admin/pages/ViewImage';
import AddPopup from './admin/pages/AddPopup';
import ViewPopup from './admin/pages/ViewPopup';
import SubjectCombination from './Pages/SubjectCombination';
import AddFile from './admin/pages/AddFile';
import ViewFile from './admin/pages/ViewFile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'authorities-message',
    element:<AuthoritiesMessage/>
  },
  {
    path: 'mission-vision',
    element:<MissinVission/>
  },
  {
    path: 'infrastructure',
    element:<Infrastructure/>
  },
  {
    path: 'virtual-tour',
    element:<VirtualTour/>
  },
  {
    path: 'fee-structure',
    element: <FeeStructure />,
  },
  {
    path: 'subject-combination',
    element: <SubjectCombination />,
  },
  {
    path: 'school-rules',
    element: <SchoolRules />
  },
  {
    path: 'mandatory-public-disclosure',
    element: <MandatoryPublicDisclosure />
  },
  {
    path: 'primary-wing',
    element: <PrimaryWingSchoool />
  },
  {
    path: 'middle-wing',
    element: <MiddleWingSchool />
  },
  {
    path: 'senior-wing',
    element: <SeniorWingSchool />
  },
  {
    path: 'hostel',
    element: <Hostel />
  },
  {
    path: 'alumni-register',
    element: <AlumniRegister />
  },
  {
    path: 'faculty',
    element: <Faculty />
  },
  {
    path: 'admission-procedure',
    element: <AdmissionProcedure />
  },
  {
    path: 'hostel-policy',
    element: <HostelPolicy />
  },
  {
    path: 'events/:slug',
    element: <EventDetails />
  },
  {
    path: 'event',
    element:<Event/>
  },
  {
    path: 'assembly/:slug',
    element: <AssemblyDetails />
  },
  {
    path: 'assembly',
    element:<Assembly/>
  },
  {
    path: 'exam-policy',
    element: <ExamPolicy />
  },
  {
    path: 'transfer-certificate',
    element: <TCIssue />
  },
  {
    path: 'at-a-glance',
    element: <AtGlance />
  },
  {
    path: 'school-management',
    element: <SchoolManagement />
  },
  {
    path: 'school-magazine',
    element: <SchoolMagazine />
  },
  {
    path: 'school-news',
    element: <SchoolNews />
  },
  {
    path: 'newsletter',
    element: <Newsletter />
  },
  {
    path: 'download',
    element: <Download />
  },
  {
    path: 'achievement',
    element: <Achievement />
  },
  {
    path: 'student-council',
    element: <StudentCouncil />
  },
  {
    path: 'student-circular',
    element: <StudentCircular />
  },
  {
    path: 'admin-dps',
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/tc/add',
        element: <AddTC />
      },
      {
        path: '/tc/view',
        element: <ViewTC />
      },
      {
        path: '/alumni',
        element: <ViewAlumni />
      },
      {
        path: '/enquiry',
        element: <Enquiry />,
      },
      {
        path: '/news/add',
        element: <AddNews />
      },
      {
        path: '/news/view',
        element: <ViewNews />
      },
      {
        path: '/newsletter/add',
        element: <AddNewsletter />
      },
      {
        path: '/newsletter/view',
        element: <ViewNewsletter />
      },
      {
        path: '/schoolnews/add',
        element: <AddSchoolnews />
      },
      {
        path: '/schoolnews/view',
        element: <ViewSchoolnews />
      },
      {
        path: '/download/add',
        element: <AddDownload />
      },
      {
        path: '/download/view',
        element: <ViewDownload />
      },
      {
        path: '/event/add',
        element: <AddEvent />
      },
      {
        path: '/event/view',
        element: <ViewEvent />
      },
      {
        path: '/assembly/add',
        element: <AddAssembly />
      },
      {
        path: '/assembly/view',
        element: <ViewAssembly />
      },
      {
        path: '/achievement/add',
        element: <AddAchievement />
      },
      {
        path: '/achievement/view',
        element: <ViewAchievement />
      },
      {
        path: '/faculty/add',
        element: <AddFaculty />
      },
      {
        path: '/faculty/viewall',
        element: <ViewAllFaculty />
      },
      {
        path: '/infrastructure/add',
        element: <AddInfrastructure/>
      },
      {
        path: '/infrastructure/view',
        element: <ViewInfrastructure />
      },
      {
        path: '/studentcouncil/add',
        element: <AddStudentCouncil />
      },
      {
        path: '/studentcouncil/view',
        element: <ViewStudentCouncil />
      },
      {
        path: '/popup/add',
        element: <AddPopup />
      },
      {
        path: '/popup/view',
        element: <ViewPopup />
      },
      {
        path: '/siteimage/add',
        element: <AddImage />
      },
      {
        path: '/siteimage/view',
        element: <ViewImage />
      },
      {
        path: '/websitefile/add',
        element: <AddFile />
      },
      {
        path: '/websitefile/view',
        element: <ViewFile />
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
