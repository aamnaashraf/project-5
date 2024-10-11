import React from 'react'
import Heading from './Heading';
import Card from './Card';

const blogs = [
    {
      id:0,
      title: "Article 1",
      desc: "How I Create Passive Income With No Money",
      img: "/img 1.jpeg",
      link: "https://medium.com/@hazelparadise/how-i-create-passive-income-with-no-money-b9fc4ca219ba"
    },
    {
        id:1,
        title: "Article 2",
        desc: "How Average People Become Millionares",
        img: "/img 2.jpeg",
        link: "https://medium.com/@thecameronscott/how-average-people-become-millionaires-0c5c9935f1f9"
      },
      {
        id:2,
        title: "Article 3",
        desc: "I Read 100 Marketing Books. Here's the 10 Best Lessons From Them",
        img: "/img 4.jpeg",
        link: "https://medium.com/swlh/i-read-100-marketing-books-heres-the-10-best-lessons-from-them-12c7653bff1d"
      },
      {
        id:3,
        title: "Article 4",
        desc: "3 Practical Ways I am Using AI To Generate Outsized Marketing Results",
        img: "/img 3.jpeg",
        link: "https://medium.com/better-marketing/3-practical-ways-im-using-ai-to-generate-outsized-marketing-results-30254ac33598"
      },
      {
        id:4,
        title: "Article 5",
        desc: "24 Business Ideas for 2024",
        img: "/img 5.jpeg",
        link: "https://medium.com/@kennykandola/24-business-ideas-for-2024-dbbdb99a878e"
      },
      {
        id:5,
        title: "Article 6",
        desc: "5 Multi-Million-Dollar Businesses You Can Start Now(That are fun,scalable and Tech-free)",
        img: "/img 6.jpeg",
        link: "https://medium.com/entrepreneur-s-handbook/5-multi-million-dollar-businesses-you-can-start-now-that-are-fun-scalable-tech-free-791cd018c70a"
      },

]

const Blog = () => {
  return (
    <section className='blogs-section'>
    <div className="container mx-auto p-8">
      <h1 className="text-center underline text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="border border-accent rounded-lg overflow-hidden shadow-md">
            <img 
              src={blog.img}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="grid place-items-center p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.desc}</p>
              <a href={blog.link} className="inline-block px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition duration-200">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
  
};

export default Blog;
