import React from 'react'
import newsV1 from "../assets/images/newsV1.jpg"
import newsV3 from "../assets/images/newsV3.jpg"
import newsV7 from "../assets/images/newsV7.jpg"

const About = () => {
  return (
    <div className=''>
        <div className='text-7xl font-bold text-grey-dark text-center py-8'>Know More <span className='text-red-dark'>About Us</span></div>

        <div className='mx-8 '>
            <div className='flex justify-center'>  
                <div>
                    <img src={newsV1} alt="news 1" className='w-[500px]'/>
                </div>
                <div className='w-1/2 self-center'>
                    <div className='text-2xl text-grey-dark font-bold py-2'>What we do?</div>
                    <div className='text-grey-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, vero praesentium dolorem est voluptatibus repellendus incidunt recusandae ad necessitatibus! Suscipit asperiores quibusdam, laboriosam aut exercitationem iure atque illo ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsum debitis libero, veniam aliquam atque expedita repellat non ipsam sequi quasi quisquam voluptatibus, laboriosam iusto iure! Illo officiis porro beatae?</div>
                </div>
            </div>
            <div className='flex justify-center'>  
                <div className='w-1/2 self-center'>
                    <div className='text-2xl text-grey-dark font-bold py-2'>Why we do?</div>
                    <div className='text-grey-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, vero praesentium dolorem est voluptatibus repellendus incidunt recusandae ad necessitatibus! Suscipit asperiores quibusdam, laboriosam aut exercitationem iure atque illo ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsum debitis libero, veniam aliquam atque expedita repellat non ipsam sequi quasi quisquam voluptatibus, laboriosam iusto iure! Illo officiis porro beatae?</div>
                </div>
                <div>
                    <img src={newsV3} alt="news 1" className='w-[500px]'/>
                </div>
            </div>
            <div className='flex justify-center'>  
                <div>
                    <img src={newsV7} alt="news 1" className='w-[500px]'/>
                </div>
                <div className='w-1/2 self-center'>
                    <div className='text-2xl text-grey-dark font-bold py-2'>How we do?</div>
                    <div className='text-grey-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, vero praesentium dolorem est voluptatibus repellendus incidunt recusandae ad necessitatibus! Suscipit asperiores quibusdam, laboriosam aut exercitationem iure atque illo ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsum debitis libero, veniam aliquam atque expedita repellat non ipsam sequi quasi quisquam voluptatibus, laboriosam iusto iure! Illo officiis porro beatae?</div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default About
