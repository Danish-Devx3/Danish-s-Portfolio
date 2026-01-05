
import React from 'react';
import { motion } from 'framer-motion';
import { blogs } from '../data';
import { FiArrowUpRight } from 'react-icons/fi';

const Blogs = () => {
    return (
        <section id="blogs" className="py-10">
            <h2 className="text-xl font-bold mb-6 text-neutral-100">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                    <motion.a
                        key={blog.id}
                        href={blog.link}
                        target="_blank"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group block bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs text-neutral-500 font-mono">{blog.date}</span>
                            <FiArrowUpRight className="text-neutral-500 group-hover:text-green-400 transition-colors" />
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-white mb-2">
                            {blog.title}
                        </h3>
                        <p className="text-sm text-neutral-400 line-clamp-2">
                            {blog.description}
                        </p>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
