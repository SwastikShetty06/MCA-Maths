import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courseContent } from '../data/courseContent';
import { ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/20 blur-[100px] -z-10 rounded-full"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-6">
                        <Sparkles size={16} />
                        MCA MAH CAT Exam Prep
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Master Mathematics <br />
                        <span className="gradient-text">Visually & Intuitively</span>
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
                        A comprehensive, interactive learning experience designed for visual learners.
                        Covering Algebra, Geometry, Calculus, and more.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseContent.map((module, index) => {
                    const Icon = module.icon;
                    return (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={`/topic/${module.id}`}
                                className="group block p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-indigo-500/30 relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon color="white" size={24} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">{module.title}</h3>
                                    <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                                        {module.description}
                                    </p>

                                    <div className="flex items-center text-sm font-medium text-indigo-400 group-hover:translate-x-2 transition-transform">
                                        Start Learning <ArrowRight size={16} className="ml-2" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
