Some of the important points regarding state can be summarised as follows:
A state can be maintained inside a class component only
A state is always initialised inside the class constructor
If you define the constructor of a class, you need to call the super() method in the first statement of the constructor definition. This method calls the constructor of the parent class
To set the state, you must always use the setState() method and must never directly manipulate the application’s state. However, setState() should never be called inside the constructor
Whenever a state is changed, the render() method of the class is called again!

Question :-
Which among the following are true for React state?
(Note: More than one option may be correct.)
a. A parent component can change the state within a child component.
b. Changing the state of a component will cause it to be re-rendered.
c. Mutating the state directly, e.g., using the assignment operator will cause the component to be re-rendered.
d. Functional components cannot have state.

Component Lifecycle

1. Mounting
Inside a mounting process, a component’s lifecycle is defined by the following methods, which are called in the given order:
    1.1 constructor()
    1.2 getDerivedStateFromProps()
    1.3 render()
    1.4 componentDidMount()

2. Updating - A component is updated whenever there is a change in the component's state or props.
    2.1 getDerivedStateFromProps()
        Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.
        This is still the natural place to set the state object based on the initial props.
    2.2 shouldComponentUpdate()
        In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
        The default value is true.
    2.3 render()
    2.4 getSnapshotBeforeUpdate()
    2.5 componentDidUpdate()

3. Unmounting - The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
    3.1 componentWillUnmount()


Recap - React component lifecycle has three categories – Mounting, Updating and Unmounting.
    The render() is the most used lifecycle method.
        It is a pure function.
        You cannot set state in render()
    The componentDidMount() happens as soon as your component is mounted.
        You can set state here but with caution.
    The componentDidUpdate() happens as soon as the updating happens.
        You can set state here but with caution.
    The componentWillUnmount() happens just before the component unmounts and is destroyed.
        This is a good place to cleanup all the data.
        You cannot set state here.
    The shouldComponentUpdate() can be used rarely.
        It can be called if you need to tell React not to re-render for a certain state or prop change.
        This needs to be used with caution only for certain performance optimizations.
    The two new lifecycle methods are getDerivedStateFromProps() and getSnapshotBeforeUpdate().
        They need to be used only occasionally.
        Not many examples are out there for these two methods and they are still being discussed and will have more references in the future.

Note: Pure Function :- 
    A function that always returns the same output for the same input and does not cause any side effects
    Meaning... It only depends on its input parameters and does not modify any external state or global variables.



Single-Page Application

    An SPA or a single-page application works on the browser and does not require a page to be reloaded while being used. Some notable examples of an SPA are Gmail, Google Maps, Facebook, Github, etc. 
    SPA is lighter and faster than an MPA because most of the resources are being loaded at once throughout the lifespan of the application. Only the data is transmitted back and forth. 
    Single-page web applications fit perfectly for building dynamic platforms with small data volumes. 
    An SPA is excellent for social networks and closed communities that require good application performance, dynamic nature and user experience.
    Coming back to React, it is a popular library for building SPAs and, in this course, you will be building one such application.

Advantages :-
    Faster loading of page; no need to download resources all over again
    Effective caching; easy local data storage
    Easy debugging; technologies provide their own debugging tools

Smart vs Dumb Components
    Components can be classified into two categories based on their roles in the application: smart and dumb. This is done to avoid any mismanagement in the state of the application
    A dumb (also known as presentational) component is a UI-based component that only presents data on the DOM. On the other hand, a smart (also known as container) component provides data and logic to dumb components
    Thus, dumb components describe the appearance of things, whereas smart components describe the working of things

There are two different ways to define components in React:
    Class-based components
        Stateful
        Access to lifecycle hooks
    Functional components
        Stateless
        Pure functions; hence, no lifecycle hooks


Class Component - Example:-

class MyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        };
    }
    onCounterClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return <div onClick={this.onCounterClick}>
            {this.state.count}
        </div>;
    }
}
<MyCounter count={0} />

The answer is ‘hooks’.
    Hooks are functions that let you ‘hook into’ the React state and lifecycle features of class components (not to be confused with React lifecycle hooks!)


function MyCounter(props) {
    const [count, setCount] = React.useState(0);
    const onCounterClick = () => setCount(count + 1);

    return <div onClick={onCounterClick}>
        {props.count}
    </div>;
}

Question :- Functional components in React essentially comprise just the render method ?
True [Answer]
False

React Hooks :- 
    Hooks are a new addition in React version 16.8
    Hooks allow using lifecycle methods and state in pure functional components without using class, leading to cleaner and more manageable code with good separation of business logic concerns
    Hooks are themselves functions provided either by the React library (built-in) or created by you
    Their use is optional. There are no plans to remove support for class-based components from React
    100% backward-compatible and do not introduce any breaking changes

Why Hooks?
The release of hooks in React 16.8 solved the following pain points:
    Managing State: Reusing logic between multiple components can lead to wrapper hell or deeply nested components
    Side Effects: Unrelated mixed in logic in lifecycle methods can get repetitive, and cause unnecessary side effects
    Optimization: Hooks might reduce your bundle size

1. useState hook

The useState is a React Hook that can be called inside a function component to add some local state to it
React will preserve this state between re-renders 
useState returns a pair: The current state value and a function that lets you update it. You can call the updater from an event handler or anywhere else
The only argument to useState is the initial state. The initial state argument is only used during the first render

Note: You will learn more about the useState hook and its implementation in the next session.


React Router is a library used to handle routing within a React application
Its primary components include:
    Routers: <BrowserRouter>, <HashRouter>
    Route Matchers: <Route>, <Switch>
    Navigation: <Link>, <NavLink>, <Redirect>

With the help of useEffect Hook, one can perform ‘side-effects’ in functional React components.
    Examples of side-effects include (but are not limited to):
        Fetching data from an API
        Subscribing to events
        Direct DOM manipulation



useEffect 
1. No dependency passed:
useEffect(() => {
  //Runs on every render
});

2. An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);

3. Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);



Usecase :- fetch the data from 
https://jsonplaceholder.typicode.com/todos
and display it in table.


React redux is an advanced state management library for React

Problem Statement :- 

npm install --save redux react-redux



    React only supports component level state management. 
    In a big and complex application, large number of components are used. 
    React recommends to move the state to the top level component and pass the state to the nested component using properties. 
    It helps to some extent but it becomes complex when the components increases.

React Redux :-
    React redux chips in and helps to maintain state at the application level. React redux allows any component to access the state at any time. Also, it allows any component to change the state of the application at any time.

Redux Flow :- 
    
Terminology :- 
Store :-
    React redux maintains the state of the application in a single place called Redux store.
    The central place to store the state of the application.
    React component can 
        a. Get the latest state from the store.
        b. Change the state at any time.

Actions :- 
    Action is an plain object with the type of the action to be done and the input necessary to do the action
    Example :- CRUD -> Create, Read, Update and Delete

Reducers:-  
     Reducers are pure functions used to create a new state based on the existing state and the current action. 
     It returns the newly created state. 
     For example, in add item scenario, 
        it creates a new item list and merges the item from the state and new item and returns the newly created list.
    
Component − Component can connect to the store to get the current state and 
            dispatch action to the store so that the store executes the action and updates it's current state.
    1. Component -> 
    2. Event Handler -> dispatch(action)
                    ex:- action->{type:'', payload:{}}; 
    3. Store(origState) 
    4. reducer(prevState, action) -> updates store(updatedState) 
    5. Store(newState) -> Component!
