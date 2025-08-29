// components/BlogCard.js
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogCard = ({ post, animationDelay = 0, showTags = true, showMeta = true, className = "" }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 h-full flex flex-col ${className}`}
    >
      <Link href={post.link} rel="noopener noreferrer" target="_blank" className="h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Badge */}
          {post.category && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
                <Tag className="w-3 h-3 mr-1" />
                {post.category}
              </span>
            </div>
          )}

          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Meta Information */}
          {showMeta && (post.date || post.readTime) && (
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              {post.date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
              {post.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} mins read</span>
                </div>
              )}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          {/* Subtitle/Description */}
          {post.subtitle && <p className="text-base text-gray-600 mb-4 flex-1 line-clamp-3">{post.subtitle}</p>}

          {/* Tags */}
          {showTags && post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-500">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Read More */}
          <motion.div
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 cursor-pointer mt-auto"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
