"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Grid, List, TrendingUp, Clock, Star } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { muslifieBlogPost } from "@/constants";

const BlogSection = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  // const [sortBy, setSortBy] = useState("latest"); // 'latest', 'popular', 'featured'

  const demoPosts = [
    muslifieBlogPost,
  ];

  // const categories = ["all", "Technology", "Mobile Development", "UX Design", "Web Development"];

  // const filteredPosts = demoPosts.filter((post) => {
  //   const matchesSearch =
  //     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     post.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
  //   return matchesSearch && matchesCategory;
  // });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="blog" className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/5">
      {/* Header Section */}
      <div className="text-center pt-12 mb-12 lg:pt-16 lg:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Our Muslifie App Blog</h1>
        <motion.div
          className="mx-auto h-1.5 bg-gradient-to-r from-accent via-(--danger) to-secondary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "220px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <p className="mt-4 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Everything You Need to Know About Halal Travel
        </p>
      </div>

      {/* Search and Filter Section */}
      {/* <section className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              >
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
                <option value="featured">Featured</option>
              </select>

              <div className="flex border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-secondary/10"
                  } transition-colors`}
                  aria-label="Grid view"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-secondary/10"
                  } transition-colors`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`grid gap-8 ${
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl mx-auto"
            }`}
          >
            {muslifieBlogPost.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className={viewMode === "list" ? "transform-none hover:transform-none" : ""}
              >
                <BlogCard
                  post={post}
                  animationDelay={index * 0.1}
                  showTags={true}
                  showMeta={true}
                  className={viewMode === "list" ? "md:flex md:flex-row md:h-64" : ""}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {muslifieBlogPost.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <div className="text-foreground/50 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                {/* <p>Try adjusting your search terms or filters</p> */}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Stay Updated</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Subscribe to our newsletter for the latest insights and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </section>
  );
};

export default BlogSection;
