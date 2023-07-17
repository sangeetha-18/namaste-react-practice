

const heading = React.createElement(
    "div",
    {id:"headingDesing"},
    React.createElement(
    "div",
    {id:"second"},
    [React.createElement(
        "h1",
        {id:"third"},
        "h1 tag",
    ),
    React.createElement(
        "h1",
        {id:"fouth"},
        "h2 tag",
    )]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)