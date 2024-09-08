"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';

export default function Home() {
  const el = useRef(null);
  const typed = useRef(null); // Create a ref to store the Typed instance
  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: ['Sales Target Alignment', 'Client Acquisition', 'Business Growth'],
        typeSpeed: 50,
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []); 

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8 fade-in">
          <h1 className="text-5xl font-bold leading-snug text-gray-800 dark:text-gray-200">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 fade-in">
            "I aim to align sales targets with business goals, ensuring that the company exceeds targets. From client acquisition to expanding existing accounts, my focus remains on delivering value at every stage of the sales cycle."
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2 fade-in">
          <img src="/image.jpg" alt="About us image" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="/typescript.webp" className="w-full h-64 object-cover rounded-t-lg"/>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 1</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 2</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 3</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};
