import React from 'react';
import style from './Blog.module.css';

const Blog = () => {
  return (
    <div className={style.mainContent}>
      <div className="container">
        <div className={style.item}>
          <h4>when to use context api in react ?</h4>
          <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        </div>

        <div className={style.item}>
          <h4>UseRef</h4>
          <p>useRef is short for reference and is a hook which allows persisting data across renders, but does so without causing the component itself to rerender. It is used by invoking useRef function and passing an initial value to it. First let's look at the syntax and how to use the hook.</p>
          <code>const reference = useRef("initial value")</code>
          <p>This returns an object which has a key called current, initialized with this initial value.</p>
          <code>
              current: 'initial value'
          </code>

          <p>A very common use case for using useRef is for when, suppose you click on a button, and then on its click you want an input to come into focus. To do this, we would need to access the DOM element of input and then call its function focus() to focus the input. This is easy to do in JavaScript by just selecting the input using querySelector or by id/class and then calling its focus() function, but React does not have a simple way built in to do it.
          So this can be achieved using useRef.</p>
          <p>
          Every element has the ref property to access it in this way. Now let's try to understand what it means to want the previous value to be preserved across renders.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog