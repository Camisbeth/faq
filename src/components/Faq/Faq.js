import { useState } from "react";

function Faq(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="sectionBorder">
        <section className="sectionQuestion">
          <p
            onClick={() => setShow((value) => !value)}
            className={show ? "boldQuestion" : "question"}
          >
            {props.question}
          </p>
          <img
            className={show ? "imgArrowQuestionReversed" : "imgArrowQuestion"}
            onClick={() => setShow((value) => !value)}
            src="/images/icon-arrow-down.svg"
          />
        </section>
        {show && <p className="answer">{props.answer}</p>}
      </section>
    </>
  );
}

export default Faq;
