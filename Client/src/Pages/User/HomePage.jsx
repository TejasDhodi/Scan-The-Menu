import React, { useState } from 'react'
import HeroComponent from '../../components/User/HeroComponent'
import SpecialityComponent from '../../components/User/SpecialityComponent'
import SectionTitle from '../../components/User/SectionTitle'
import DishesComponent from '../../components/User/DishesComponent'
import BlurBackground from '../../components/User/BlurBackground'
import { speciality, recommendations, instructions } from '../../Service/User'
const HomePage = () => {

  const [showDescription, setShowDescription] = useState(false);

  const handleShowDescription = () => {
    setShowDescription(true);
  }

  return (
    <>
      <main>
        <section id='heroSection'>
          <HeroComponent />
        </section>

        <section id='Specialities' className='section'>
          <SectionTitle title={'What We Provide'} />
          <div className="specialityContainer">
            {
              speciality.map((currElem, index) => {
                const { img, title, description } = currElem;
                return (
                  <SpecialityComponent
                    img={img}
                    title={title}
                    description={description}
                    key={index}
                  />
                )
              })
            }
          </div>
        </section>

        <section id='Recommendations' className='section'>
          <SectionTitle title={'Our Recommended Dishes'} />
          <div className='dishContainer'>
            {
              recommendations.map((currElem, index) => {
                const { img, title } = currElem;
                return (
                  <DishesComponent
                    img={img}
                    title={title} s
                    howDescription={showDescription}
                    setShowDescription={setShowDescription}
                    handleShowDescription={handleShowDescription}
                    key={index}
                  />
                )
              })
            }
          </div>
          {showDescription && <BlurBackground />}
        </section>

        <section id='Scan' className='section'>
          <SectionTitle title={'Scan The Qr On Your Table'} title2="To Place The Order" />
          {
            instructions.map((currElem, index) => {
              const { img, title, description } = currElem;
              const { l1, l2 } = description;
              return (
                <SpecialityComponent
                  img={img}
                  title={title}
                  l1={l1}
                  l2={l2}
                  key={index}
                />
              )
            })
          }
        </section>

      </main>
    </>
  )
}

export default HomePage
