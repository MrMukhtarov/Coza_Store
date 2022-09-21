import React, { useEffect } from 'react'
import './About.css'

const About = () => {

    useEffect(() => {
        document.title = 'About';
      });

  return (
    <div id='about'>
        <section className="about-top">
            <h1 className='text-center title'>About</h1>
        </section>
        <div className="about">
        <div className="container my-5 py-3">
                <div className="row">
                <div className="col-md-6 mb-5 col-12 text-center">
                        <img src="https://static.pullandbear.net/2/photos//2022/I/0/2/p/8555/512/400/03/8555512400_5_1_8.jpg?t=1661255183326&imwidth=1440" alt="About" className='w-75 img1'/>
                    </div>
                    <div className="col-md-6 top">
                        <h3 className="mb-0 about-title">Our Story</h3>
                        <hr className='w-50'/>
                        <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
                        <p>Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>
                        <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    </div>
                    
                </div>
                <div className="row mt-5">
                
                    <div className="col-md-6 bottom">
                        <h3 className="mb-0 about-title">Our Mission</h3>
                        <hr className='w-50'/>
                        <p className="lead mb-4">Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
                        <p>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.- Steve Job’s</p>
                    </div>
                    <div className="col-md-6 order-2 col-12 text-center img2s">
                        <img src="https://static.pullandbear.net/2/photos//2022/I/0/2/p/8715/555/401/02/8715555401_5_1_8.jpg?t=1661850690615&imwidth=1440" alt="About" className='w-75 mt-5 img2'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About