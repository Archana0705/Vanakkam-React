/*
<div id="parent">
    <div id="child1">
    <h1>Im an h1 tag</h1> 
    <h2> Im an h2 tag </h2>
    </div>

      <div id="child2">
    <h1>Im an h1 tag</h1> 
    <h2> Im an h2 tag </h2>
    </div>
</div>

*/

const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child1"}, 
    [React.createElement("h1", {}, "Im an h1 Tag"),
      React.createElement("h2", {}, "Im an h2 Tag")]),

         React.createElement("div", {id: "child2"}, 
    [React.createElement("h1", {}, "Im an h1 Tag"),
      React.createElement("h2", {}, "Im an h2 Tag")]),
)

//to over this nested long code or to make html code easier jsx is introduced

// const heading = React.createElement
// ("h1", {"id": "heading"}, "Hello world from React");


console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);