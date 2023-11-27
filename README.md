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
