
const root = document.getElementById("root")



// This is how you create a react componet.

function Header () {
    return (
        <header className="header" >
            <h1> The Parakeet Page</h1>
            {/* <div className="hamburger-div" >
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
            </div> */}
            
            <nav className="nav-bar">
                <ul className="nav-list" >
                    <li className="nav-item"> Home </li>
                    <li className="nav-item"> About Parakeets </li>
                    <li className="nav-item"> Parakeet Photos </li>
                </ul>
            </nav>
        </header>
    )
}


function Main () {
    return (
        <section> 

        {/* <div>
                <ul className="nav-list2" id="navlist2" >
                    <li className="nav-item2"> Home </li>
                    <li className="nav-item2"> About Parakeets </li>
                    <li className="nav-item2"> Parakeet Photos </li>
                </ul>
        </div> */}

        <div className="hero-section" >
            <img className="hero-img" src="./img/img1.PNG"  alt="Parakeet"></img>
        </div>

        <div className="intro" >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Quisque lacinia lectus sed massa tincidunt, at ullamcorper nulla viverra.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Quisque lacinia lectus sed massa tincidunt, at ullamcorper nulla viverra.
            </p>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Quisque lacinia lectus sed massa tincidunt, at ullamcorper nulla viverra.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Quisque lacinia lectus sed massa tincidunt, at ullamcorper nulla viverra.
            </p>
        </div>
            
     </section>
    )

}


function Gallery () {
    return (
        <section className="section gallery" >
            <h1> Gallery</h1>
            <img src="/img/parakeet_gal_1.jpg" alt="parakeet photo" class="gal-img"/>
            <img src="/img/parakeet_gal_2.jpg" alt="parakeet photo" class="gal-img"/>
            <img src="/img/parakeet_gal_3.jpg" alt="parakeet photo" class="gal-img"/>
            <img src="/img/parakeet_gal_4.jpg" alt="parakeet photo" class="gal-img"/>
            <img src="/img/parakeet_gal_5.jpg" alt="parakeet photo" class="gal-img"/>
            <img src="/img/parakeet_gal_6.jpg" alt="parakeet photo" class="gal-img"/>
            <img src="/img/parakeet_gal_7.jpg" alt="parakeet photo" class="gal-img"/>
            <img src="/img/parakeet_gal_8.jpg" alt="parakeet photo" class="gal-img"/>
            <img src="/img/parakeet_gal_9.jpg" alt="parakeet photo" class="gal-img"/>
        </section>
    )
}





function Footer () {
    return (
        <footer className="footer" >
        <small>
               ?? 2022 Hey Deja
        </small>
    </footer>
    )

}


function MyApp(){
    return (
        <div>

         <Header />

         <Main />

         <Gallery />

         <Footer />


    </div>

    )
}

ReactDOM.render(<MyApp />, root)


