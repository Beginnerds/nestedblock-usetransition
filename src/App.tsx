import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import About from './components/tabs/about'
import Messages from './components/tabs/messages'
import Friends from './components/tabs/friends'

type Tab = 'about' | 'messages' | 'friends'

function App() {

  const [currentTab,setCurrentTab] = useState<Tab>('about')

  const updateTab = (tab:Tab) => {
    setCurrentTab(tab)
  }

  return (
   <div className='min-w-screen min-h-screen bg-slate-500 py-20 px-10'>
      <div className='w-full lg:w-3/4 mx-auto flex justify-center items-center gap-4'>
          <Button className='cursor-pointer' onClick={()=>updateTab('about')} size={'lg'}>About</Button>
          <Button className='cursor-pointer' onClick={()=>updateTab('messages')} size={'lg'}>Messages</Button>
          <Button className='cursor-pointer' onClick={()=>updateTab('friends')} size={'lg'}>Friends</Button>
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
