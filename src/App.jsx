import LanguageList from "./components/LanguageList.jsx";

const topics = ["Python", "Java", "HTML", "CSS", "Linux"];

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">My learning project</p>
        <h1>Welcome to my coding page</h1>
        <p className="intro">
          A place to learn, practice, and improve one step at a time.
        </p>
        <a className="button-link" href="#about">
          Get to know the project
        </a>
      </header>

      <section className="card" id="about" aria-labelledby="about-title">
        <h2 id="about-title">About me</h2>
        <p>
          My name is Plamin. I am learning how to improve my coding skills and
          build useful projects.
        </p>
      </section>

      <section className="card" id="topics" aria-labelledby="topics-title">
        <h2 id="topics-title">What I am exploring</h2>
        <p>
          There are many tools and languages to learn. These are some of the
          topics I want to explore:
        </p>
        <LanguageList items={topics} />
      </section>
    </main>
  );
}
