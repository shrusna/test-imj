Theories Answer
1. The difference between state and props was props was used to pass data from the parent components into the child component, the props was immutable so it was readonly content. Then state was used for the mutable data that should be kept in a component, state was private to each component, but the value can be change by using method setState

2. State management on react was used to manage state component, so it will allow components to change and update the data. Example of state management can be see on the first init of using vite + react:

export default function count() {
    const [count, setCount] = useState(0)

    return (
        Count = {count}
        <button onClick={() => setCount(count + 1)}> Add Value </button>
    )
}

3. Store on redux was a container that contain all of the state tree in the application. Store holds the application state, so it will allow access to the state using getState(), allows state to updated using dispatch(action), and also register listeners using subscribe(listeners)

4. On Rendering list, key was a string that needs to be included when creating arrays of the elements. The Keys usually unique so it wont be duplicate. The key help React to identify which items have changed, added, or removed.

5. Redux was library that be used to manage state as i describe on answer number 3. And thunk was a middleware that allow dev to write aciton creators that return a cuntion instead of an action. The function usually perform async operation and dispatch action when the operations are completed. Usually, thunks are used to making API calls, before dispatch an action to update the state. I havent work with both of them in real project, but i already learn a litte bit of it from the internet. 

