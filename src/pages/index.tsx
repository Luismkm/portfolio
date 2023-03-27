import { Header, Hero, About, Projects, Services, Skills, Footer } from '../components/landing_page'

export default function Home() {
  return (
    <>
      <div className="w-full max-w-[1120px] mx-auto px-6 xl:px-0">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Skills />    
        </main>
      </div>
      <Footer />
    </>
  )
}
