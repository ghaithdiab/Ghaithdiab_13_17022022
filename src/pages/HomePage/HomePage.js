import React from 'react'
import Header from '../../components/Header/Header'
import './HomePage.css'
import FeatureItem from '../../components/FeatureItem/FeatureItem'
import chat from '../../assets/icon-chat.png'
import money from '../../assets/icon-money.png'
import security from '../../assets/icon-security.png'
import Footer from '../../components/Footer/Footer'


export default function HomePage() {
  return (
    <div>
      <Header/>
      <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem image={chat} title='You are our #1 priority' description='Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.'/>
        <FeatureItem image={money} title='More savings means higher rates'description='The more you save with us, the higher your interest rate will be!'/>
        <FeatureItem image={security} title='Security you can trust' description='We use top of the line encryption to make sure your data and money
            is always safe.'/>
      </section>
      <Footer/>
    </main>
    </div>
  )
}
