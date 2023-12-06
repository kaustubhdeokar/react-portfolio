
declare hooks at the top level of your component.
do not declare hooks inside a loop, conditions, nested functions -> because hooks should follow a certain ordering.
only call hooks from react functional components or custom hooks.