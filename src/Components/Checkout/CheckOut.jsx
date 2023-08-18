import React, { useState } from "react";
import CheckoutContent from "./CheckoutContent";

const CheckOut = (props) => {
  const [tab, setTab] = useState("basic");

  const tabPanel = document.querySelectorAll('[role="tabpanel"]');

  const tabButton = document.querySelectorAll('[role="tab"]');

  const toggleTab = (tab) => {
    let tabAC = document.getElementById(tab).getAttribute("aria-controls");
    setTab(tabAC);
    tabButton.forEach((button) => {
      if (button.id == tab) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    tabPanel.forEach((panel) => {
      if (panel.id == tabAC) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });
  };

  return (
    <div className="checkout">
      <div class="w-full">
        <ul
          class="flex text-md font-semibold text-gray-500 "
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li class="w-1/3" role="presentation">
            <button
              class="active"
              id="basic-tab"
              data-tabs-target="#basic"
              type="button"
              role="tab"
              aria-controls="basic"
              aria-selected="false"
              onClick={(e) => {
                toggleTab(e.target.id);
              }}
            >
              Basic
            </button>
          </li>
          <li class="w-1/3" role="presentation">
            <button
              class=" "
              id="standard-tab"
              data-tabs-target="#standard"
              type="button"
              role="tab"
              aria-controls="standard"
              aria-selected="false"
              onClick={(e) => {
                toggleTab(e.target.id);
              }}
            >
              Standard
            </button>
          </li>
          <li class="w-1/3" role="presentation">
            <button
              class=" "
              id="premium-tab"
              data-tabs-target="#premium"
              type="button"
              role="tab"
              aria-controls="premium"
              aria-selected="false"
              onClick={(e) => {
                toggleTab(e.target.id);
              }}
            >
              Premium
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          class=" bg-gray-50 "
          id="basic"
          role="tabpanel"
          aria-labelledby="basic-tab"
        >
          <CheckoutContent tab={tab} />
        </div>
        <div
          class="hidden bg-gray-50"
          id="standard"
          role="tabpanel"
          aria-labelledby="standard-tab"
        >
          <CheckoutContent tab={tab} />
        </div>
        <div
          class="hidden bg-gray-50 "
          id="premium"
          role="tabpanel"
          aria-labelledby="premium-tab"
        >
          <CheckoutContent tab={tab} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
