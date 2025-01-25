import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog | Wellnesday Youth Week 2025 - Innovation et Leadership pour la Jeunesse",
  description:
    "Découvrez les articles et actualités de la Wellnesday Youth Week 2025. Explorez des sujets sur l'innovation numérique, le leadership et le vivre-ensemble pour une jeunesse camerounaise engagée.",
};

const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        pageDescription="Découvrez les dernières actualités et articles sur la Wellnesday Youth Week 2025."
      />

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {/* {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
