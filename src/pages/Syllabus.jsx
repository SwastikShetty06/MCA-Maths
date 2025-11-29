import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, AlertCircle } from 'lucide-react';

const Syllabus = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-10">
                    <h1 className="text-4xl font-bold mb-4 text-slate-900">MAH-MCA-CET 2026 Syllabus</h1>
                    <p className="text-lg text-slate-600">Comprehensive guide to the examination syllabus and marking scheme.</p>
                </div>

                {/* Examination Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-indigo-700">
                        <BookOpen size={24} /> Examination Overview
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <OverviewCard label="Mode" value="Online" />
                        <OverviewCard label="Duration" value="90 Minutes" />
                        <OverviewCard label="Total Marks" value="200" />
                        <OverviewCard label="Medium" value="English" />
                        <OverviewCard label="Question Type" value="Multiple Choice (4 Options)" />
                        <OverviewCard label="Negative Marking" value="None" highlight />
                    </div>
                </section>

                {/* Detailed Syllabus */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">Detailed Syllabus</h2>

                    <div className="space-y-8">
                        <SyllabusSection
                            title="1. Mathematics & Statistics"
                            description="Questions will cover high school mathematics topics (up to the 12th standard)."
                        >
                            <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                <li><strong>Algebra:</strong> Fundamental operations in Algebra, Expansion, Factorization, Quadratic equations, Indices, Logarithms, Arithmetic, Geometric and Harmonic progressions, Binomial theorem, Permutations and Combinations.</li>
                                <li><strong>Co-ordinate Geometry:</strong> Rectangular Cartesian co-ordinates, Equations of a line, Mid-point, Intersections, Equations of a circle, Distance formulae, Pair of straight lines, Parabola, Ellipse and Hyperbola, Simple geometric transformations such as translation, rotation, scaling.</li>
                                <li><strong>Differential Equations:</strong> Differential equations of first order and their solutions, Linear differential equations with constant coefficients, Homogeneous linear differential equations.</li>
                                <li><strong>Trigonometry:</strong> Simple identities, Trigonometric equations, Properties of triangles, Solution of triangles, Height and distance, Inverse function.</li>
                                <li><strong>Probability and Statistics:</strong> Basic concepts of probability theory, Averages, Dependent and independent events, Frequency distributions, Measures of dispersions, Skewness and Kurtosis, Random variable and distribution functions, Mathematical expectations, Binomial, Poisson, Normal distributions, Curve fitting, Principle of least squares, Correlation and Regression.</li>
                                <li><strong>Arithmetic:</strong> Ratios and proportions, Problems on time-work, Distance-speed, Percentage, etc.</li>
                                <li><strong>Basic Set Theory and Functions:</strong> Set, relations and mappings.</li>
                                <li><strong>Mensuration:</strong> Areas (triangles and quadrilaterals), Area and circumference of circles, Volumes and surface areas of simple solids such as cubes, spheres, cylinders, and cones.</li>
                            </ul>
                        </SyllabusSection>

                        <SyllabusSection
                            title="2. Logical / Abstract Reasoning"
                            description="Objective: To measure how quickly and logically you can think."
                        >
                            <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                <li><strong>Content:</strong> This section will cover logical situations and questions based on the facts given in the passage.</li>
                                <li><strong>Focus:</strong> This test shall check the problem-solving capability of the candidate.</li>
                            </ul>
                        </SyllabusSection>

                        <SyllabusSection
                            title="3. English Comprehension and Verbal Ability"
                            description="Objective: To test the candidate's general understanding of the English language."
                        >
                            <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                <li><strong>Content:</strong> Questions on Basic English grammar, Vocabulary, Comprehension, Synonyms, Antonyms, Sentence correction, Word & phrases, Jumbled paragraphs.</li>
                            </ul>
                        </SyllabusSection>

                        <SyllabusSection
                            title="4. Computer Concepts"
                        >
                            <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                <li><strong>Computer Basics:</strong> Organization of a computer, Central Processing Unit (CPU), Structure of instructions in CPU, Input / output devices, Computer memory, Memory organization, Back-up devices.</li>
                                <li><strong>Data Representation:</strong> Representation of characters, integers, and fractions. Binary and hexadecimal representations.</li>
                                <li><strong>Binary Arithmetic:</strong> Addition, subtraction, division, multiplication, signed arithmetic and two's complement arithmetic.</li>
                                <li><strong>Floating Point:</strong> Representation of numbers, normalized floating point representation.</li>
                                <li><strong>Boolean Algebra:</strong> Truth tables, Venn diagrams.</li>
                                <li><strong>Computer Architecture:</strong> Basics of Digital Logic, Block structure of computers, Communication between processor and I/O devices, Interrupts.</li>
                                <li><strong>Computer Language:</strong> Fundamentals of Data & File Structures and high-level language, Computer Programming in C, Advanced concepts in programming.</li>
                                <li><strong>Operating System Basics</strong></li>
                            </ul>
                        </SyllabusSection>
                    </div>
                </section>

                {/* Marking Scheme */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">Marking Scheme</h2>
                    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-900 font-semibold">
                                <tr>
                                    <th className="px-6 py-4">Section</th>
                                    <th className="px-6 py-4">No of Questions</th>
                                    <th className="px-6 py-4">Marks per Question</th>
                                    <th className="px-6 py-4">Maximum Marks</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-slate-900">Mathematics & Statistics</td>
                                    <td className="px-6 py-4">30</td>
                                    <td className="px-6 py-4">2</td>
                                    <td className="px-6 py-4">60</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-slate-900">Logical / Abstract Reasoning</td>
                                    <td className="px-6 py-4">30</td>
                                    <td className="px-6 py-4">2</td>
                                    <td className="px-6 py-4">60</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-slate-900">English Comprehension and Verbal Ability</td>
                                    <td className="px-6 py-4">20</td>
                                    <td className="px-6 py-4">2</td>
                                    <td className="px-6 py-4">40</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-slate-900">Computer Concepts</td>
                                    <td className="px-6 py-4">20</td>
                                    <td className="px-6 py-4">2</td>
                                    <td className="px-6 py-4">40</td>
                                </tr>
                                <tr className="bg-indigo-50 font-bold text-indigo-900">
                                    <td className="px-6 py-4">Total</td>
                                    <td className="px-6 py-4">100</td>
                                    <td className="px-6 py-4">-</td>
                                    <td className="px-6 py-4">200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

const OverviewCard = ({ label, value, highlight = false }) => (
    <div className={`p-4 rounded-xl border ${highlight ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'} shadow-sm`}>
        <p className="text-sm text-slate-500 mb-1">{label}</p>
        <p className={`text-lg font-semibold ${highlight ? 'text-green-700' : 'text-slate-900'}`}>{value}</p>
    </div>
);

const SyllabusSection = ({ title, description, children }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-indigo-600 mb-2">{title}</h3>
        {description && <p className="text-slate-600 mb-4 italic">{description}</p>}
        <div className="mt-4">
            {children}
        </div>
    </div>
);

export default Syllabus;
