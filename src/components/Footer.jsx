import React from "react";

function Footer (props) {
  console.log("Footer: ", props)

  const {
    themeReaction,
    theme: { currentTheme, bgColor, bgColorSecondary, textColor, btnColor }
  } = props;

    return (
        <footer className={`mt-5 py-3 ${bgColorSecondary} ${textColor} shadow-lg`}>
          <div className="container">
            <p className="float-end mb-1">
              <a className={`${textColor}`} href="#">Back to top</a>
            </p>
            <p className="mb-1">Coded by Alper Tugriçeri.</p>
            <p className="mb-0">© 2020 Home Box Office, Inc. All Rights Reserved.</p>
          </div>
        </footer>
    )
}

export default Footer