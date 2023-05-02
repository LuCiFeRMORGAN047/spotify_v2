import { Fragment, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BLOGS } from "../../consts";

function findBlogBySlug(slug) {
  for (let i = 0; i < BLOGS.length; i++) {
    if (BLOGS[i].slug === slug) {
      return BLOGS[i];
    }
  }
  return null;
}

export default function BlogPage() {
  const {slug} = useParams();
  const blog = findBlogBySlug(slug);
  const navigate = useNavigate();

  useEffect(() => {
    if (!blog) navigate("/");
  }, [navigate, blog]);

  return (
    <div className="mt-24">
      <h1 className="font-bold text-6xl">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="mt-8 w-full aspect-video rounded-2xl object-cover"
      />
      <div className="flex items-center mt-6">
        <img
          className="object-cover w-10 aspect-square rounded-full mr-2"
          src={blog.authorImage}
          alt={blog.authorName}
        />
        <div className="flex items-center gap-2">
          <p className="font-semibold">
            {" "}
            <span className="text-neutral-300 font-medium text-sm ml-2">
              by
            </span>{" "}
            {blog.authorName}
          </p>
          <span>&bull;</span>
          <span className="text-neutral-300 text-sm font-medium mr-2">
            {blog.date}
          </span>
        </div>
      </div>
      <div
        className="mt-12 text-lg text-neutral-50 blog-body"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      />
    </div>
  );
}
