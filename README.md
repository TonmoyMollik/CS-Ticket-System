What is JSX, and why is it used?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code directly inside your JavaScript files. It is used because it makes writing React components much easier and more readable. Instead of using complex React.createElement() commands, you can write familiar HTML tags. React then converts this JSX into optimized JavaScript.

What is the difference between State and Props?
In React, both are used to manage data, but they have different roles. State is data owned and managed locally by the component. It is mutable, meaning it can be changed using a setter function. On the other hand, Props are data passed from a parent component to a child. They are immutable, which means they are read-only for the child. While a component controls its own state, props are controlled by the parent component.

What is the useState hook, and how does it work?
The useState hook is a function that allows functional components to have their own local state. It returns an array with two elements: the current state value and a setter function used to update that state. When the setter function is called, React triggers a re-render of the component to reflect the new data on the user interface.

How can you share state between components in React?
There are three main ways to share state. First is Lifting State Up, which involves moving the state to the closest common parent component and passing it down via props. Second is using the Context API to share state globally without passing props through every level. Third is using state management libraries like Redux or Zustand for complex, large-scale applications.

How is event handling done in React?
Event handling in React is similar to HTML but with key syntax differences. First, it uses camelCase naming, so instead of onclick, React uses onClick. Second, you pass a function as the handler rather than a string. For example:
const handleClick = () => { console.log("Clicked!"); };
<button onClick={handleClick}>Click Me</button>
