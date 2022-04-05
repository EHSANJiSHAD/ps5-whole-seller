import './Blogs.css'

import React from 'react';

const Blogs = () => {
    return (
        <div>
           <h1 style={{textAlign:'center',color:'rgb(131, 219, 30)'}}>QUESTION ANSWER</h1> 

           <div className='qstn-ans'>
               <h3>What is Context API?</h3>
               <p>Context API's like a global variable.It can be passed through any components.It doesn't have to follow family component tree.Like moving the props from grandparents to its' any of the child.Context API is the alternative of prop drilling.</p>
           </div>

           <div className='qstn-ans'>
               <h3>What is Semantic Tag?</h3>
               <p>Semantic HTML tags give information about their contents in addition to how they appear on a page.It mainly refers to as a piece of code.The browser recognizes text encased in the code element as some kind of coding language right away. Instead of attempting to display the code, the browser recognizes that the text is being used as an example of code in an article.Some of the semantic tags examples are:  h1,h2,h3..,p,ul,blockquote,div,span etc..</p>
           </div>
        </div>
    );
};

export default Blogs;