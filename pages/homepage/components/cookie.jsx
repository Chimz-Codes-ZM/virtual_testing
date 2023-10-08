import React from "react";

function cookie() {
  return (
    <div className="p-12 sm:p-18 md:p-24 lg:p-32 px-8 sm:px-16 md:px-36 lg:px-72 bg-teal-800 flex flex-col gap-4 text-white text-lg">
      <h1 className="font-bold text-3xl text-center">
        Baobabpad Cookie Policy
      </h1>
      <p>
        This Cookie Policy explains how Baobabpad ("we", "us", or "our") uses
        cookies and similar tracking technologies when you visit our website. By
        using our website, you consent to the use of cookies as described in
        this policy.
      </p>
      <p>
        <span className="font-semibold border-b-2 border-amber-400">
          What are cookies?
        </span>
        : Cookies are small files that are stored on your device (computer,
        smartphone, or tablet) when you visit a website. They contain data that
        helps improve your browsing experience, remember your preferences, and
        analyze website performance.
      </p>

      <span className="font-semibold text-2xl">
          {" "}
          Types of cookies we use
        </span>
      <p>
        <span className="font-semibold border-b-2 border-amber-400">
          {" "}
          Essential Cookies
        </span>
        : These cookies are necessary for the functioning of our website and enable core features, such as security, network management, and accessibility. They do not require your consent.
      </p>
      <p>
        <span className="font-semibold border-b-2 border-amber-400">
          {" "}
          Analytics Cookies
        </span>
        : We use analytics cookies to collect information about how visitors interact with our website. This helps us analyze website traffic, identify popular pages, and improve the overall user experience. The information collected is anonymized and aggregated.
      </p>
      <p>
        <span className="font-semibold border-b-2 border-amber-400">
          {" "}
          Marketing Cookies
        </span>
        : We may use marketing cookies to track and measure the effectiveness of our marketing campaigns. These cookies enable us to deliver personalized advertisements and content based on your interests and browsing behavior.
      </p>
      <p>
        <span className="font-semibold border-b-2 border-amber-400">
          {" "}
          Your cookie choices
        </span>
        : By default, we assume your consent to the use of all cookies on our website. However, you have the option to manage your cookie preferences. You can modify your browser settings to block or delete cookies or receive a notification when cookies are being sent. Please note that blocking or deleting cookies may impact certain features and functionality of our website.
      </p>
      <p>
        <span className="font-semibold border-b-2 border-amber-400">
          {" "}
          Third-party cookies
        </span>
        : We may allow third-party service providers to place cookies on our website for various purposes, including analytics and advertising. These providers have their own privacy policies governing the use of cookies. We recommend reviewing their policies for more information on how they handle your data.
      </p>
      <p>
        <span className="font-semibold border-b-2 border-amber-400">
          {" "}
          Updates to this policy
        </span>
        : We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Any revisions will be effective upon posting the updated policy on our website.
      </p>
      <p>
        <span className="font-semibold border-b-2 border-amber-400">
          {" "}
          Updates to the Privacy Policy
        </span>
        : We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Any revisions will be effective upon posting the updated policy on our website.
      </p>

      <p>
        <span className="font-semibold border-b-2 border-amber-400">
          {" "}
          Contact Us
        </span>
        : If you have any questions or concerns about our use of cookies, please contact us at admin@baobabpad.com.
      </p>
    </div>
  );
}

export default cookie;
