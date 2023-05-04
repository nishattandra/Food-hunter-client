import React from 'react';
import { Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container'>
            <div className=' mt-5 p-5  border rounded mb-2'>
                <h1 className='text-center font-bold'>Ques-01: Tell us the differences between uncontrolled and controlled components?</h1>
                <Table striped bordered hover className='mt-3 rounded'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Features</th>
                            <th>Controlled Component</th>
                            <th>Uncontrolled Component</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Value Management</td>
                            <td>Managed by React state</td>
                            <td>Managed by component's own internal state</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>User Interaction</td>
                            <td>Parent component updates state on user interaction</td>
                            <td>Component updates own internal state on user interaction</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Data Flow</td>
                            <td >Data flows from parent component to component</td>
                            <td>Data flows within the component</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Debugging</td>
                            <td >Easier to debug</td>
                            <td>More difficult to debug</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Performance</td>
                            <td >Generally faster as there's less state management</td>
                            <td>Generally slower as there's more state management</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className=' m-10 p-5  border border-indigo-600 rounded-md mb-2'>
                <h1 className='text-center font-bold'>Ques-02: How to validate React props using PropTypes?</h1>
                <p>Props are used to passing the read-only attributes to React components. For the proper functioning of components and to avoid future bugs and glitches it is necessary that props are passed correctly. Hence, it is required to use props validation for improving react component’s performance. React JS has an inbuilt feature for validating props data type to make sure that values passed through props are valid. React components have a property called propTypes which is used to setup data type validation.</p>
                <h3>React PropTypes Validators</h3>
                <ol>
                    <li> PropTypes.any: This means the prop can be of any data type.</li>
                    <li> PropTypes.bool: This means the prop should be a boolean.</li>
                    <li> PropTypes.number: This means the prop should be a number.</li>
                    <li> PropTypes.string: This means the prop should be a string.</li>
                    <li> PropTypes.func: This means the prop should be a function.</li>
                    <li> PropTypes.array: This means the prop should be an array.</li>
                    <li> PropTypes.object: This means the prop should be an object.</li>
                    <li> PropTypes.symbol: This means the prop should be a symbol.</li>
                    <li> PropTypes.instanceOf: This means the prop should be an instance of a particular JavaScript class.</li>
                    <li> PropTypes.isRequired: This means the prop should be provided.</li>
                    <li> PropTypes.oneOf(): This means the props should be one of several types of specified values.</li>
                    <li> PropTypes.element: This means the props must be an element.</li>
                </ol>
            </div>
            <div className=' m-10 p-5  border border-indigo-600 rounded-md mb-2'>
                <h1 className='text-center font-bold'>Ques-03: Tell us the difference between nodejs and express js?</h1>
                <Table striped bordered hover className='mt-3 rounded'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Features</th>
                            <th>Express.js</th>
                            <th>Node.js</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Usage</td>
                            <td>It is used to build web-apps using approaches and principles of Node.js.</td>
                            <td> It is used to build server-side, input-output, event-driven apps.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Level of Features</td>
                            <td>More features than Node.js.</td>
                            <td>Fewer features.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Building Block</td>
                            <td >It is built on Node.js.</td>
                            <td>It is built on Google's V8 engine.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Written In</td>
                            <td >JavaScript.</td>
                            <td>C, C++, JavaScript.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Framework/ Platform</td>
                            <td >Framework based on Node.js.</td>
                            <td>Run-time platform or environment designed for server-side execution of JavaScript.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className=' m-10 p-5  border border-indigo-600 rounded-md'>
                <h1 className='text-center font-bold'>Ques-04: What is a custom hook, and why will you create a custom hook?</h1>
                <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </div>
    );
};

export default Blog;