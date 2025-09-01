"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Grid,
  List,
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  Instagram,
  ExternalLink,
  Heart,
  MessageCircle,
  Share,
} from "lucide-react";

const SocialPosts = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Instagram API configuration
  const INSTAGRAM_ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const INSTAGRAM_USER_ID = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;

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

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Fetch Instagram posts
  const fetchInstagramPosts = async () => {
    try {
      setLoading(true);

      if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
        throw new Error("Instagram API credentials not found");
      }

      const response = await fetch(
        `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=3`
      );

      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status}`);
      }

      const data = await response.json();
      setInstagramPosts(data.data || []);
    } catch (err) {
      console.error("Error fetching Instagram posts:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  // Format date
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Truncate caption
  const truncateCaption = (caption, maxLength = 150) => {
    if (!caption) return "";
    return caption.length > maxLength ? caption.substring(0, maxLength) + "..." : caption;
  };

  return (
    <section id="blog" className="min-h-screen bg-white pt-18 lg:pt-16">
      {/* Header Section */}
      <div className="text-center mb-12 lg:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Muslifie App Instagram Page</h1>
        <motion.div
          className="mx-auto h-1.5 bg-gradient-to-r from-accent via-danger to-purple rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "220px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      {/* Instagram Posts Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <Instagram className="w-8 h-8 text-pink-600" />
              Latest from Instagram
            </h2>
            <p className="text-gray-600">Follow our journey on social media</p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-600 font-medium mb-2">Unable to load Instagram posts</p>
                <p className="text-red-500 text-sm">{error}</p>
                <button
                  onClick={fetchInstagramPosts}
                  className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Instagram Posts Grid */}
          {!loading && !error && instagramPosts.length > 0 && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {instagramPosts.map((post, index) => (
                <motion.div key={post.id} variants={itemVariants} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    {/* Post Media */}
                    <div className="relative aspect-square overflow-hidden">
                      {post.media_type === "VIDEO" ? (
                        <video
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          poster={post.thumbnail_url}
                          controls={false}
                          muted
                        >
                          <source src={post.media_url} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={post.media_url}
                          alt={post.caption ? truncateCaption(post.caption, 50) : "Instagram post"}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <ExternalLink className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Media Type Badge */}
                      {post.media_type === "VIDEO" && (
                        <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                          VIDEO
                        </div>
                      )}
                    </div>

                    {/* Post Content */}
                    <div className="p-4">
                      {/* Caption */}
                      {post.caption && (
                        <p className="text-gray-800 text-sm mb-3 leading-relaxed">{truncateCaption(post.caption)}</p>
                      )}

                      {/* Post Stats */}
                      <div className="flex items-center justify-between text-gray-500 text-xs mb-3">
                        <div className="flex items-center gap-4">
                          {post.like_count && (
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span>{post.like_count.toLocaleString()}</span>
                            </div>
                          )}
                          {post.comments_count && (
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.comments_count}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{formatDate(post.timestamp)}</span>
                        </div>
                      </div>

                      {/* View on Instagram Button */}
                      <a
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium"
                      >
                        View on Instagram
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* No Posts State */}
          {!loading && !error && instagramPosts.length === 0 && (
            <div className="text-center py-12">
              <Instagram className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No Instagram posts found</p>
            </div>
          )}

          {/* Follow Button */}
          <div className="text-center mt-12">
            <motion.a
              href="https://www.instagram.com/muslifie?igsh=NHdpMjNybzNjZjBr&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
              Follow @muslifie
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SocialPosts;
