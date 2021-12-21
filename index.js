
const root = document.getElementById("root")

// This is how you create a react componet.

function Header () {
    return (
        <header>
            <h1> The Parakeet Page</h1>
        </header>
    )

}

function Main () {
    return (
        <section>

        <div>
            <img src="/img/img1.jpg" alt="Parakeet" width="200px"></img>
        </div>
        <div>
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





function Footer () {
    return (
        <footer>
        <small>
               © 2022 Hey Deja
        </small>
    </footer>
    )

}


function MyApp(){
    return (
        <div>

         <Header />

         <Main />

         <Footer />


    </div>

    )
}

ReactDOM.render(<MyApp />, root)


