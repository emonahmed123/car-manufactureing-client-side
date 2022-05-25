import React from 'react';

const Blogs = () => {
    return (
        <div>
             <h1 className='text-3xl' >Blogs</h1>
           
             <div className='mt-5'>
                 <h1 className='text-xl'>How will you improve the performance of a React Application?</h1>
                   <ul>
                       <li>যেখানে প্রয়োজন সেখানে Component অবস্থা স্থানীয় রাখা।</li>
                        <li>অপ্রয়োজনীয় রি-রেন্ডার প্রতিরোধ করার জন্য প্রতিক্রিয়া Component স্মরণ করা</li>
                        <li> image   Optimize  করা</li>
                   </ul>
                 </div>    

                 <div className='mt-5' >
                     <h1 className='text-xl'> 4different ways to manage a state in a React application</h1>
                     <ul>
                    <li>Local state.</li> 
                     <li> Global state.</li>
                 <li>  Server state.</li>
                   <li> URL state</li>

                     </ul>
                     
                     </div>  

                     <div className='mt-5'>
                        <h1 className='text-xl'>How does prototypical inheritance work?</h1>
                             
                           <p>প্রোটোটাইপল ইনহেরিট্যান্স হল জাভাস্ক্রিপ্টের একটি feature যা বস্তুতে পদ্ধতি এবং বৈশিষ্ট্য যোগ করতে ব্যবহৃত হয়।<br/>
                                এটি এমন একটি পদ্ধতি যার মাধ্যমে একটি বস্তু অন্য বস্তুর বৈশিষ্ট্য এবং পদ্ধতির উত্তরাধিকারী হতে পারে।<br/>
                                Traditionally, একটি বস্তুর [[প্রোটোটাইপ]] পেতে এবং সেট করার জন্য, আমরা অবজেক্ট ব্যবহার করি।
                                  getPrototypeOf এবং অবজেক্ট।</p>
                     </div>
                   
                   <div className='mt-5'>
                     <h1 className='text-xl'>Why you do not set the state directly in React</h1>
                              <p>
     নিম্নলিখিত কারণগুলির কারণে একজনের কখনই সরাসরি স্টেট আপডেট করা উচিত নয়:<br/>
      আপনি যদি এটি সরাসরি আপডেট করেন,<br/> তাহলে setState() কে পরে কল করলে আপনার করা আপডেটটি বদলে যেতে পারে।
      আপনি যখন রাজ্যকে সরাসরি আপডেট করেন, <br/>তখন এটি পরিবর্তন করে না।
     </p>
                   </div>




                 <div>
                    <h1>What is a unit test</h1>
                     <p>UNIT TESTING হল এক ধরনের সফটওয়্যার টেস্টিং <br/>
                     যেখানে একটি সফটওয়্যারের পৃথক ইউনিট বা উপাদান পরীক্ষা করা হয়।</p>
                      

                      <h1>Why should write unit tests</h1>

                      <p>
                 ইউনিট টেস্টিং সফ্টওয়্যার developers সফ্টওয়্যারটির ডিজাইনের মাধ্যমে চিন্তা করতে দেয় এবং কোড লেখার আগে তাদের কী করতে হবে। <br/>
                এটি তাদের focused  রাখতে সাহায্য করতে পারে এবং আরও ভাল ডিজাইন তৈরি করতে তাদের সাহায্য করতে পারে।
                </p>
                 </div>

        </div>
    );
};

export default Blogs;