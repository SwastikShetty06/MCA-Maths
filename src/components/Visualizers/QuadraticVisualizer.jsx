import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const QuadraticVisualizer = () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(-4);
    const [c, setC] = useState(3);
    const [roots, setRoots] = useState([]);

    useEffect(() => {
        const discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            const r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            setRoots([r1, r2]);
        } else if (discriminant === 0) {
            const r = -b / (2 * a);
            setRoots([r]);
        } else {
            setRoots([]);
        }
    }, [a, b, c]);

    // Generate points for the graph
    const generatePath = () => {
        const points = [];
        // Viewport range: x from -10 to 10
        for (let x = -10; x <= 10; x += 0.5) {
            const y = a * x * x + b * x + c;
            // Map to SVG coordinates (200x200 box, center at 100,100, scale 10px per unit)
            // x: 100 + x * 10
            // y: 100 - y * 10 (inverted y axis)
            points.push(`${100 + x * 15},${100 - y * 15}`);
        }
        return points.join(' ');
    };

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 my-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <RefreshCw size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Quadratic Solver & Visualizer</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 font-mono text-center text-lg">
                        {a}x² + {b}x + {c} = 0
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">a</label>
                            <input
                                type="number"
                                value={a}
                                onChange={(e) => setA(Number(e.target.value))}
                                className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">b</label>
                            <input
                                type="number"
                                value={b}
                                onChange={(e) => setB(Number(e.target.value))}
                                className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">c</label>
                            <input
                                type="number"
                                value={c}
                                onChange={(e) => setC(Number(e.target.value))}
                                className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>
                    </div>

                    <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                        <p className="text-sm font-medium text-indigo-800 mb-1">Discriminant (Δ): {b * b - 4 * a * c}</p>
                        <p className="font-bold text-indigo-900">
                            {roots.length === 2 ? `Two Real Roots: x = ${roots[0].toFixed(2)}, ${roots[1].toFixed(2)}` :
                                roots.length === 1 ? `One Real Root: x = ${roots[0].toFixed(2)}` :
                                    'No Real Roots'}
                        </p>
                    </div>
                </div>

                <div className="border border-slate-200 rounded-lg bg-slate-50 relative overflow-hidden h-64 flex items-center justify-center">
                    {/* Grid Lines */}
                    <svg viewBox="0 0 200 200" className="w-full h-full absolute inset-0 text-slate-200">
                        <defs>
                            <pattern id="grid" width="15" height="15" patternUnits="userSpaceOnUse">
                                <path d="M 15 0 L 0 0 0 15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        {/* Axes */}
                        <line x1="0" y1="100" x2="200" y2="100" stroke="#94a3b8" strokeWidth="1" />
                        <line x1="100" y1="0" x2="100" y2="200" stroke="#94a3b8" strokeWidth="1" />

                        {/* Parabola */}
                        <polyline
                            fill="none"
                            stroke="#6366f1"
                            strokeWidth="2"
                            points={generatePath()}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default QuadraticVisualizer;
