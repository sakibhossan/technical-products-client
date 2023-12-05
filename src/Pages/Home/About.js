import React from 'react';


// document.getElementById('btn-post').addEventListener('click',function(){
//     console.log('yes i am in')
// })
const About = () => {
    return (
        <div className='w-96 mx-auto '>
            <h2 className='text-2xl text-orange-400'>Please Comment for my Website</h2>
            <div>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam illo ratione, esse enim rerum amet et voluptas atque provident eos, odio ullam distinctio unde vitae aliquam quasi similique! Magnam, voluptatum.</h2>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam illo ratione, esse enim rerum amet et voluptas atque provident eos, odio ullam distinctio unde vitae aliquam quasi similique! Magnam, voluptatum.</h2>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam illo ratione, esse enim rerum amet et voluptas atque provident eos, odio ullam distinctio unde vitae aliquam quasi similique! Magnam, voluptatum.</h2>
            </div>
            <div>
                <textarea name="" id="newComment" cols="60" rows="5"></textarea>
                <button id='btn-post'>Post</button>
            </div>
        </div>
    );
};

export default About;