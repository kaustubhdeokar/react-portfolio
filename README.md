# React Portfolio

## Concepts

### 1. State

project reference: 02counter

by incrementing the counter, we expect the value to be updated in multiple places at once.

to do that we can use the concept of state.
state gets monitored by react and any change in the state, the entire UI is rendered again.

state can be set by 
> const[counter, setCounter] = useState(0) <br>
> counter is a variable, setCounter is a method in which we will modify the value of the variable.

### 2. Batching:
```
  function increaseCounter()
  {
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  }
```
>This will update the counter only once, as react see it's the same call.<br>
>To avoid this we can use a concept of <strong>call back</strong>, so each call uses the value of its previous call.

### 3.Callbacks
```
  function increaseCounter(){
    setCounter((prev) => prev+1);
    setCounter((prev) => prev+1);
    setCounter((prev) => prev+1);
    console.log(counter);
  }
```

React mimics the DOM and creates a virtual DOM, so that it doesn't have to reload the entire page and loads only the part which has a difference with the original DOM.

Finding out the difference between two trees - reconciliation.


### 4. use callback - 
#### hook. (https://react.dev/reference/react/useCallback)
lets you cache the function definition between re-renders

### 5. use effect hook
on change of variables (x,y,z..) method(s) (m1,m2...) can be triggered. 

while using react-router

for a header component, where we have links to other components, instead of using an anchor tag, (which loads the page again) we can use a <u>Link</u> tag.

also NavLink is one more kind of such feature.

NavLink also possesses the feature of stating if the current link is active or not.

When hovering over the link, the nextjs framework starts to load the data from the resource and the same is done 