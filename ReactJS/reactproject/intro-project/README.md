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