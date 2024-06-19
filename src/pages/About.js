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
                    <div className='text-grey-medium text-justify'>At The Insights, we curate and analyze news articles from around the globe, striving to present a comprehensive view of current affairs. Our team  employs advanced sentiment analysis techniques to uncover the emotions and nuances within news articles by calculating their polarity and subjectivity. By harnessing the power of technology, we transform news into valuable insights that empower you to make informed decisions.</div>
                </div>
            </div>
            <div className='flex justify-center'>  
                <div className='w-1/2 self-center'>
                    <div className='text-2xl text-grey-dark font-bold py-2'>Why we do?</div>
                    <div className='text-grey-medium text-justify'>Our platform combines cutting-edge sentiment analysis algorithms with a user-friendly interface. We utilize state-of-the-art machine learning models to evaluate the emotional tone of news content. Through this process, we extract key sentiments, helping you grasp the broader context and emotional impact behind each news story. The seamless integration of technology and editorial expertise ensures a unique and enlightening news consumption experience.</div>
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
                    <div className='text-grey-medium text-justify'>In an era of information overload, understanding the true essence of news is more crucial than ever. The Insights was born out of a passion for demystifying headlines and offering a richer understanding of the world. We believe that informed individuals can contribute positively to society, and our mission is to empower you with the insights needed to navigate the complexities of our dynamic world.</div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default About
