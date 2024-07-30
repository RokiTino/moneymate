import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'Robertino'}
  return (
      <section className='home'>
           <div className='home-content'>
              <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title = "Welcome"
                    user = {loggedIn?.firstName || "Guest"}
                    subtext = "Access and manage your account and transactions efficently"
                  />
                  <TotalBalanceBox
                      accounts={[]}
                      totalCurrentBalance={1250.35}
                      totalBanks={3}
                  />
              </header>
          </div>
    </section>
  )
}

export default Home