import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar, Hero, Skills, Projects, ContactForm } from "./components";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Hero />
            <Skills />
            <Projects />
            <ContactForm />
        </div>
    );
}

export default App;
