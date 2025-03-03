import { useState } from 'react'
import './App.css'
import About from './components/tabs/about'
import Messages from './components/tabs/messages'
import Friends from './components/tabs/friends'
import TabButton from './components/tab-button'

type Tab = 'about' | 'messages' | 'friends'

function App() {

  const [currentTab,setCurrentTab] = useState<Tab>('about')

  const updateTab = (tab:Tab) => {
    setCurrentTab(tab)
  }

  return (
   <div className='min-w-screen min-h-screen bg-slate-500 py-20 px-10'>
      <div className='w-full lg:w-3/4 mx-auto flex justify-center items-center gap-4'>
          <TabButton action={()=>updateTab('about')} isActive={currentTab == 'about'}>About</TabButton>
          <TabButton  action={()=>updateTab('messages')} isActive={currentTab == 'messages'}>Messages (Slow)</TabButton>
          <TabButton  action={()=>updateTab('friends')} isActive={currentTab == 'friends'}>Friends</TabButton>
      </div>
      <div className='w-full max-w-lg mx-auto mt-10 bg-slate-400 min-h-[400px] p-4 rounded-lg'>
          {currentTab == 'about' && <About/>}
          {currentTab == 'messages' && <Messages/>}
          {currentTab == 'friends' && <Friends/>}
      </div>
   </div>
  )
}

export default App
