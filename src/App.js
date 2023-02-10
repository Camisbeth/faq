import "./styles/global.scss";
import "./styles/variables.scss";
import Faq from "./components/Faq/Faq";

function App() {
  const questions = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  return (
    <main className="main">
      <figure className="figureAt">
        <img src="/images/illustration-box-desktop.svg" />
      </figure>
      <section className="section">
        <figure className="figureMobile">
          <img
            className="imgMobile"
            src="/images/illustration-woman-online-mobile.svg"
          />
          <img
            className="shadowImgMobile"
            src="/images/bg-pattern-mobile.svg"
          />
        </figure>
        <figure className="figure">
          <img
            className="img"
            src="/images/illustration-woman-online-desktop.svg"
          />
          <img className="shadowImg" src="/images/bg-pattern-desktop.svg" />
        </figure>

        <section className="sectionText">
          <h1 className="title">FAQ</h1>

          {questions.map((q, key) => (
            <Faq question={q.question} answer={q.answer} key={key} />
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
