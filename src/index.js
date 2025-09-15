import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";
/* 
 import LoginForm from "./login";
import App from "./social_media";  */
import Portfolio from "./portfolio"; 

Sentry.init({
  dsn: "https://bcc60e83e33967ad4395e0863d94d1f1@o4510023066648589.ingest.us.sentry.io/4510023068221452",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});
/* 
 function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/App" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
} 
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portfolio/>);