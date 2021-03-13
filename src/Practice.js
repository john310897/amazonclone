import React from 'react';

const practice = props => {

    let p=new Promise((resolve,reject)=>{
        resolve("this is p")
    })
    let c=new Promise((resolve,reject)=>{
        resolve("this is c")
    })
    Promise.race([
        p,
        c
    ]).then((messages)=>{
        console.log(messages)
    })
    return (
        <div>
            {Promise}
        </div>
    );
};


export default practice;