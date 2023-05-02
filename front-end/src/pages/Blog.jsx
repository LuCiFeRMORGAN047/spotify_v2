import React from "react";
import { BLOGS } from "../consts";
import { FiHeart, FiSave, FiShare2 } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <div className="mt-24 text-center">
      <h1 className="text-5xl font-bold">Tune In: Spotify Blog</h1>
      <h2 className="text-2xl mt-4  mx-auto font-medium">
        From Indie to Mainstream, Discover the Latest Music Trends and Get
        Exclusive Insights into the Industry with Spotify Blog
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-8 mt-20 flex-wrap justify-center mx-auto w-fit">
        {BLOGS.map((props, i) => (
          <Article {...props} key={i} />
        ))}{" "}
      </div>
    </div>
  );
};

const Article = ({
  title,
  article,
  date,
  isLiked,
  authorName,
  image,
  slug,
  authorImage,
}) => {
  const [liked, setLiked] = useState(isLiked);

  return (
    <div className="bg-neutral-900 text-start max-w-[320px] flex flex-col text-white text-bold rounded-xl  ">
      <Link to={`/blog/${slug}`}>
        <img
          className="rounded-lg cursor-pointer hover:scale-105 transition-all object-cover h-52 w-full"
          alt="article image"
          src={image}
        />
      </Link>
      <Link className="hover:text-emerald-500" to={`/blog/${slug}`}>
        <h2 className="text-lg mt-4 px-4 font-bold">{title.toUpperCase()}</h2>
      </Link>
      <h6 className=" text-xs px-4 text-gray-300 font-normal">{date}</h6>

      <h5 className=" text-md tracking-normal font-light text-gray-300 mb-6 px-4 mt-3">
        {article.substring(0, 100)}...
      </h5>

      <div className="flex text-sm px-4 my-4 mt-auto justify-between items-center">
        <div className="flex items-center gap-x-2">
          <img
            className=" rounded-full w-8 h-8 object-cover"
            src={authorImage}
          />
          <h5 className="text-sm font-medium first-letter:uppercase">
            {authorName}
          </h5>
        </div>
        <ul className=" list-none flex gap-x-3 gap-y-3">
          <li className="option  p-1 rounded-md active:scale-[0.9] cursor-pointer transition-all">
            {liked ? (
              <FiHeart
                onClick={() => {
                  setLiked(false);
                }}
                className=" text-emerald-500"
                radius={20}
                size={20}
              />
            ) : (
              <FiHeart
                onClick={() => {
                  setLiked(true);
                }}
                fill="#10b981"
                className=" text-emerald-500"
                size={20}
              />
            )}
          </li>
          <li className="option  p-1 rounded-md active:scale-[0.9] cursor-pointer transition-all">
            <FiShare2 className=" text-emerald-500" size={20} />
          </li>
          <li className="option  p-1 rounded-md active:scale-[0.9] cursor-pointer transition-all">
            <FiSave className=" text-emerald-500" size={20} />
          </li>
        </ul>
      </div>
    </div>
  );
};
