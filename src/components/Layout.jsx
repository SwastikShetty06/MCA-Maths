import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, GraduationCap, BookOpen } from 'lucide-react';
import { courseContent } from '../data/courseContent';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    // Group modules for the sidebar
    const coreMath = courseContent.filter(m => ['algebra', 'coordinate-geometry', 'trigonometry', 'differential-equations'].includes(m.id));
    const appliedMath = courseContent.filter(m => ['probability', 'sets', 'quantitative', 'mensuration'].includes(m.id));
    const computerConcepts = courseContent.filter(m => ['computer-basics', 'data-representation', 'binary-arithmetic', 'floating-point', 'boolean-algebra', 'computer-architecture', 'c-programming', 'operating-systems', 'mock-test'].includes(m.id));

    return (
        <div className="flex h-screen bg-white text-slate-900 font-sans">
            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-slate-50 border-r border-slate-200 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 flex flex-col`}
            >
                <div className="p-6 border-b border-slate-200">
                    <div className="flex items-center gap-2 text-indigo-600">
                        <GraduationCap size={28} />
                        <div>
                            <h1 className="text-xl font-bold leading-none">Math Tutor</h1>
                            <p className="text-xs text-slate-500 font-medium mt-1">Comprehensive Learning Suite</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-6">
                    <div>
                        <NavLink
                            to="/syllabus"
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-lg text-sm font-medium transition-colors mb-4 ${isActive
                                    ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`
                            }
                        >
                            <div className="flex items-center gap-2">
                                <BookOpen size={18} />
                                <span>Syllabus & Marking</span>
                            </div>
                        </NavLink>

                        <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Core Mathematics</h3>
                        <div className="space-y-1">
                            {coreMath.map((module) => (
                                <NavLink
                                    key={module.id}
                                    to={`/topic/${module.id}`}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                            ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                        }`
                                    }
                                >
                                    {module.title}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Applied & Discrete</h3>
                        <div className="space-y-1">
                            {appliedMath.map((module) => (
                                <NavLink
                                    key={module.id}
                                    to={`/topic/${module.id}`}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                            ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                        }`
                                    }
                                >
                                    {module.title}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Computer Concepts</h3>
                        <div className="space-y-1">
                            {computerConcepts.map((module) => (
                                <NavLink
                                    key={module.id}
                                    to={`/topic/${module.id}`}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                            ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                        }`
                                    }
                                >
                                    {module.title}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </nav>

                <div className="p-4 border-t border-slate-200">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                            US
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-700">User</p>
                            <p className="text-xs text-slate-500">Student</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-20 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
                <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 lg:hidden">
                    <button onClick={toggleSidebar} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                        <Menu size={24} />
                    </button>
                    <span className="font-bold text-slate-700">Math Tutor</span>
                    <div className="w-8"></div> {/* Spacer */}
                </header>

                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
