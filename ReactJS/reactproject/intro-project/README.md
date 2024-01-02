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
