import React, { useState } from 'react'


const Comment = () => {
    const [comment, setComment] = useState([]);
    const [input, setIntput] = useState();
    console.log(input)
    console.log(comment)

    const postComment = (e) => {
        e.preventDefault();
        // alert("yes")



        let temp = { message: input, useName: localStorage.getItem("name") }
        setComment([temp, ...comment])


    }
    return (
        <div className='main'>
            <div>
                <form onSubmit={(e) => postComment(e)}>
                    <input onChange={(e) => setIntput(e.target.value)} type='text' placeholder='Add a comment...' />
                    <button type='submit'>send</button>
                </form>
            </div>

            <div>{comment.map((item) => <div>
                <span>{item.useName}</span> <br />
                <span>{item.message}</span>
            </div>)} </div>
        </div >
    )
}

export default Comment