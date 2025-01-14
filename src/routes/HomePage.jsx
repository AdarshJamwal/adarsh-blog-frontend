import React from "react";
import { Link } from "react-router-dom";
import introParagraph from "../components/content";
import "../App.css";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="md:w-2/3 mt-6 relative">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-5xl font-bold">
            Traveling to New Places: An Exciting Journey to Learn and Experience
          </h1>
          <p className="mt-8 text-md md:text-xl">{introParagraph}</p>
        </div>
        {/* animated button */}
        <Link
          to="write"
          className="relative px-6 py-3 bg-blue-600 border-2  border-black text-white rounded-full overflow-hidden"
        >
          <span className="font-bold">
            {/* Text animation */}
            <span className="inline-block animate-wave text-2xl">S</span>
            <span className="inline-block animate-wave text-2xl delay-100">
              h
            </span>
            <span className="inline-block animate-wave text-2xl delay-200">
              a
            </span>
            <span className="inline-block animate-wave text-2xl delay-300">
              r
            </span>
            <span className="inline-block animate-wave text-2xl delay-400">
              e
            </span>
            {/* Add space after "Share" */}
            <span className="inline-block mr-2"></span>{" "}
            {/* margin-right for space */}
            <span className="inline-block animate-wave text-2xl delay-500">
              Y
            </span>
            <span className="inline-block animate-wave text-2xl delay-600">
              o
            </span>
            <span className="inline-block animate-wave text-2xl delay-700">
              u
            </span>
            <span className="inline-block animate-wave text-2xl delay-800">
              r
            </span>
            {/* Add space after "Your" */}
            <span className="inline-block mr-2"></span>{" "}
            {/* margin-right for space */}
            <span className="inline-block animate-wave text-2xl delay-900">
              S
            </span>
            <span className="inline-block animate-wave text-2xl delay-1000">
              t
            </span>
            <span className="inline-block animate-wave text-2xl delay-1100">
              o
            </span>
            <span className="inline-block animate-wave text-2xl delay-1200">
              r
            </span>
            <span className="inline-block animate-wave text-2xl delay-1300">
              y
            </span>
            {/* Add space after "Story" */}
            <span className="inline-block ml-4"></span>{" "}
            {/* margin-left for space */}
          </span>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories/>
      {/* FEATURED POSTS */}
      <FeaturedPosts/>
      {/* POST LIST */}
      <div className="">
        <h1 className="my-0 text-2xl text-gray-600 ">Recent Post</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
