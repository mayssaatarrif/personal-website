import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../features/Home'
import History from '../features/Biography/History'
import Navbar from '../components/atoms/Navbar'
import Education from '../features/Biography/Education'
import TopBar from '../components/atoms/Topbar'
import DashboardSiteMap from '../features/SiteMap'
import Academic from '../features/Biography/Academic'
import HonoraryDegree from '../features/Biography/HonoraryDegree'
import HonoraryPosition from '../features/Biography/HonoraryPosition'
import Medals from '../features/Biography/Medals'
import Awards from '../features/Biography/Awards'
import Highlights from '../features/Biography/Highlights'
import Dashboard from '../features/Disclaimer'
import GuestBook from '../features/GuestBook'
import DashboardImpLink from '../features/ImpLink'
import DashboardPrivacy from '../features/Privacy'
import Highness from '../features/Highness'
import Historical from '../features/Publication/Historical'
import Literary from '../features/Publication/Literary'
import Theatrical from '../features/Publication/Theatrical'
import Local from '../features/Initiatives/Local'
import Global from '../features/Initiatives/International'
import Activity from '../features/Media/Activity'
import Video from '../features/Media/Video'
import Photo from '../features/Media/Photo'
const MainRoute: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/navbar' element ={<Navbar/>}/>
      <Route path='/history' element ={<History/>}/>
      <Route path="/education" element={<Education />} />
      <Route path ='/topbar' element={<TopBar/>}/>
      <Route path = '/sitemap' element={<DashboardSiteMap/>} />
      <Route path = '/official-positions' element={<Academic/>} />
      <Route path = '/degree' element={<HonoraryDegree/>} />
      <Route path = '/position' element={<HonoraryPosition/>} />
      <Route path = '/medals' element={<Medals/>} />
      <Route path = '/awards' element={<Awards/>} />
      <Route path = '/highlights' element={<Highlights/>} />
      <Route path = '/disclaimer' element={<Dashboard/>} />
      <Route path = '/guestbook' element={<GuestBook/>} />
      <Route path = '/important-links' element = {<DashboardImpLink/>}/>
      <Route path = "/privacy-policy" element={<DashboardPrivacy/>} />
      <Route path = "/highness" element={<Highness/>} />
      <Route path = "/historical-works" element={<Historical/>} />
      <Route path='/literary-works' element={<Literary/>}/>
      <Route path='/theatrical-works' element={<Theatrical/>}/>
      <Route path = '/local' element={<Local/>} />
      <Route path = '/global' element={<Global/>} />
      <Route path = '/activity' element={<Activity/>} />
      <Route path = '/video' element={<Video/>} />
      <Route path = '/photo' element={<Photo/>} />
    </Routes>
  )
}

export default MainRoute
