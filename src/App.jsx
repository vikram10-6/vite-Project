import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeaderComp from './components/header'
import footerComponent from './components/footercomp'

function App() {
    const [count, setCount] = useState(0)

    const exLinks = [
        {
            name: "About"
        },
        {
            name: "Service"
        },
        {
            name: "Portfolio"
        },
        {
            name: "Blog"
        },
        {
            name: "Contact"
        }
    ]


    return (
        <>
            <HeaderComp Links={exLinks} />
            <main>
                <div className="kata_center"><img src="kata1.png" alt=""></img></div>
                <br></br>
                <div className="welcome">
                    <h2><strong>W</strong>elcome!</h2>
                    <div className="vert"></div>
                    <p><a href="6">Click Here</a> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laborum
                        consequatur error, repellat reprehenderit voluptatum sed perspiciatis quo accusamus soluta nulla nisi
                        debitis ex fugit veniam modi quisquam cumque ab?</p>
                </div>
                <br></br>
            </main>
            <section className="boxes">
                <div className="box">
                    <h2>Fashion</h2>
                    <img src="mid1.png" alt=""></img>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam fuga. Ea deleniti qui eum temporibus
                        consequuntur in doloremque officiis?</p>
                    <a href="7">Read more</a>

                </div>
                <div className="box">
                    <h2>Nature</h2>
                    <img src="mid2png.png" alt=""></img>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam fuga. Ea deleniti qui eum temporibus
                        consequuntur in doloremque officiis?</p>
                    <a href="8">Read more</a>

                </div>
                <div className="box">
                    <h2>Love Story</h2>
                    <img src="mid3.png" alt=""></img>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam fuga. Ea deleniti qui eum temporibus
                        consequuntur in doloremque officiis?</p>
                    <a href="9">Read more</a>

                </div>
                <div className="box">
                    <h2>Fine Art</h2>
                    <img src="mid4.png" alt=""></img>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam fuga. Ea deleniti qui eum temporibus
                        consequuntur in doloremque officiis?</p>
                    <a href="10">Read more</a>

                </div>
            </section>

            <section className="end">
                <article className="shortly">
                    <h2>Story about me</h2>
                    <div className="deuce">
                        <div className="uno"> <img src="GRL.png" alt=""></img></div>
                        <div className="uno">
                            <p className="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus minima veniam omnis sequi odit.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque laboriosam quam ea. Est, omnis veritatis.</p>
                            <hr></hr>
                            <div className="list">
                                <ul>
                                    <li><a href="11">Facebook</a></li>
                                    <li><a href="12">Instagram</a></li>
                                    <li><a href="13">Twitter</a></li>
                                    <li><a href="14">Twitter</a></li>
                                </ul>
                                <ul>
                                    <li><a href="15">Facebook</a></li>
                                    <li><a href="16">Instagram</a></li>
                                    <li><a href="17">Twitter</a></li>
                                    <li><a href="18">Twitter</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </article>

                <article className="latest">
                    <h2>Latest Photoshoots</h2>
                    <div className="img   ">
                        <img src="LITTLE.png" alt=""></img>
                        <img src="LITTLE.png" alt=""></img>
                        <img src="LITTLE.png" alt=""></img>
                        <img src="LITTLE.png" alt=""></img>
                        <img src="LITTLE.png" alt=""></img>
                        <img src="LITTLE.png" alt=""></img>
                        <img src="LITTLE.png" alt=""></img>
                        <img src="LITTLE.png" alt=""></img>
                        <img src="LITTLE.png" alt=""></img>
                        <img src="LITTLE.png" alt=""></img>
                        <img src="LITTLE.png" alt=""></img>
                        <img src="LITTLE.png" alt=""></img>
                    </div>
                </article>
            </section>
           {/* <footerComponent/>  */}
        </>
    )
}

export default App
