import React, { useState } from 'react';
import { BarChart2 } from 'lucide-react';

const ProbVisualizer = () => {
    const [mean, setMean] = useState(0);
    const [stdDev, setStdDev] = useState(1);

    // Generate Normal Distribution Curve Points
    const generateCurve = () => {
        const points = [];
        // x range from -5 to 5
        for (let x = -5; x <= 5; x += 0.1) {
            // PDF formula: (1 / (σ * √(2π))) * e^(-0.5 * ((x - μ) / σ)^2)
            const exponent = -0.5 * Math.pow((x - mean) / stdDev, 2);
            const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);

            // Scale for SVG: 
            // x: map -5..5 to 0..200 => (x + 5) * 20
            // y: map 0..0.5 to 150..0 => 150 - (y * 300)
            points.push(`${(x + 5) * 20},${150 - y * 300}`);
        }
        return points.join(' ');
    };

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 my-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <BarChart2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Normal Distribution Visualizer</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Mean (μ): {mean}</label>
                        <input
                            type="range"
                            min="-2"
                            max="2"
                            step="0.1"
                            value={mean}
                            onChange={(e) => setMean(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Standard Deviation (σ): {stdDev}</label>
                        <input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.1"
                            value={stdDev}
                            onChange={(e) => setStdDev(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                    </div>

                    <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100 text-sm text-indigo-800">
                        <p>The <strong>Normal Distribution</strong> is defined by its mean (center) and standard deviation (spread). Adjust the sliders to see how they affect the curve shape.</p>
                    </div>
                </div>

                <div className="border border-slate-200 rounded-lg bg-white relative overflow-hidden h-64 flex items-center justify-center">
                    <svg viewBox="0 0 200 160" className="w-full h-full">
                        {/* Grid */}
                        <line x1="0" y1="150" x2="200" y2="150" stroke="#94a3b8" strokeWidth="1" />
                        <line x1="100" y1="0" x2="100" y2="160" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 2" />

                        {/* Curve */}
                        <polyline
                            fill="none"
                            stroke="#6366f1"
                            strokeWidth="2"
                            points={generateCurve()}
                        />

                        {/* Area fill (optional, simplified) */}
                        <polygon
                            fill="rgba(99, 102, 241, 0.1)"
                            points={`0,150 ${generateCurve()} 200,150`}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ProbVisualizer;
