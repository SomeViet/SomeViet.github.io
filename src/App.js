import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    NavBar,
    Hero,
    Skills,
    Projects,
    ContactForm,
    Footer,
} from "./components";

const SITE = process.env.REACT_APP_SERVER_URL;

function App() {
    return (
        <div className="App">
            <NavBar />
            <Hero />
            <Skills />
            <Projects />
            <ContactForm SITE={SITE} />
            <Footer />
        </div>
    );
}

export default App;
