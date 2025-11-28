import React, { useEffect, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { courseContent } from '../data/courseContent';
import { motion } from 'framer-motion';
import 'katex/dist/katex.min.css';
import renderMathInElement from 'katex/dist/contrib/auto-render';
import QuadraticVisualizer from '../components/Visualizers/QuadraticVisualizer';
import CoordinateVisualizer from '../components/Visualizers/CoordinateVisualizer';
import TrigVisualizer from '../components/Visualizers/TrigVisualizer';
import ProbVisualizer from '../components/Visualizers/ProbVisualizer';
import SetVisualizer from '../components/Visualizers/SetVisualizer';
import MensurationVisualizer from '../components/Visualizers/MensurationVisualizer';

const TopicPage = () => {
    const { id } = useParams();
    const module = courseContent.find((m) => m.id === id);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            renderMathInElement(contentRef.current, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false },
                    { left: '\\(', right: '\\)', display: false },
                    { left: '\\[', right: '\\]', display: true }
                ],
                throwOnError: false
            });
        }
    }, [id, module]);

    if (!module) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Masterclass Header */}
            <div className={`w-full py-16 px-8 bg-gradient-to-r ${module.color} text-white shadow-lg`}>
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{module.title} Masterclass</h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl">{module.description}</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12" ref={contentRef}>
                {/* Visualizers Section */}
                {id === 'algebra' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <QuadraticVisualizer />
                    </motion.div>
                )}
                {id === 'coordinate-geometry' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <CoordinateVisualizer />
                    </motion.div>
                )}
                {id === 'trigonometry' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <TrigVisualizer />
                    </motion.div>
                )}
                {id === 'probability' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <ProbVisualizer />
                    </motion.div>
                )}
                {id === 'sets' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <SetVisualizer />
                    </motion.div>
                )}
                {id === 'mensuration' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <MensurationVisualizer />
                    </motion.div>
                )}

                {/* Content Topics */}
                <div className="space-y-8 mt-8">
                    {module.topics.map((topic, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                        >
                            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                                <h2 className="text-xl font-bold text-slate-800">{topic.title}</h2>
                            </div>

                            <div
                                className="p-6 prose prose-slate max-w-none
                  prose-headings:text-slate-800 prose-p:text-slate-600
                  prose-strong:text-indigo-600 prose-code:text-pink-600 prose-code:bg-pink-50 prose-code:px-1 prose-code:rounded
                  prose-ul:text-slate-600"
                                dangerouslySetInnerHTML={{ __html: topic.content }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopicPage;
