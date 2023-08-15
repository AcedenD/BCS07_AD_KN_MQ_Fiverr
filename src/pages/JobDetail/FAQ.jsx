import React, { useState } from "react";

const FAQ = () => {
  const [active, setActive] = useState([false, false, false, false]);
  const faqList = [
    {
      question: "What is Fiverr?",
      answer:
        "Fiverr is a digital marketplace where freelancers offer diverse services, or 'gigs,' to clients seeking tasks ranging from creative work to technical projects.",
    },
    {
      question: "How do I get started as a freelancer on Fiverr?",
      answer:
        "Begin by creating a Fiverr account, crafting detailed gig descriptions, setting competitive prices, and showcasing your skills through portfolio examples.",
    },
    {
      question: "How can I hire a freelancer on Fiverr?",
      answer:
        "Explore Fiverr's categories, review freelancers' profiles, gig offerings, ratings, and past work, then initiate communication and place orders directly through the platform.",
    },
    {
      question: "Is Fiverr a safe platform for transactions?",
      answer:
        "Fiverr employs secure payment gateways, an escrow system, and a dispute resolution process, ensuring both freelancers and clients have a protected transaction experience.",
    },
  ];

  const toggle = (index) => {
    let newActive = [...active];
    newActive[index] = !newActive[index];
    setActive(newActive);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-700 mb-6">FAQ</h2>
      <div id="accordion-collapse" data-accordion="collapse">
        {faqList.map((item, index) => {
          return (
            <div>
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  "
                  data-accordion-target={`#accordion-collapse-body-${index}`}
                  aria-expanded="true"
                  aria-controls={`accordion-collapse-body-${index}`}
                  onClick={() => {
                    toggle(index);
                  }}
                >
                  <span>{item.question}</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className={active[index] ? "" : "hidden"}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-5  ">
                  <p className="mb-2 text-gray-500">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
