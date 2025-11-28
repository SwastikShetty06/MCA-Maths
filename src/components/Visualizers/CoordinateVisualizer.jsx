import React, { useState } from 'react';
import { MousePointer2 } from 'lucide-react';

const CoordinateVisualizer = () => {
    const [p1, setP1] = useState({ x: 1, y: 0 });
    const [p2, setP2] = useState({ x: 8, y: 2 });

    const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    const midpoint = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
    const slope = p2.x !== p1.x ? (p2.y - p1.y) / (p2.x - p1.x) : 'Undefined';

    // Scale for SVG: 200x200 box, center 100,100, 1 unit = 15px
    const toSvg = (p) => ({
        x: 100 + p.x * 15,
        y: 100 - p.y * 15
    });

    const svgP1 = toSvg(p1);
    const svgP2 = toSvg(p2);

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 my-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                    <MousePointer2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Interactive Distance & Midpoint</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Point A (x1, y1)</h4>
                        <div className="flex gap-2">
                            <input
                                type="number"
                                value={p1.x}
                                onChange={(e) => setP1({ ...p1, x: Number(e.target.value) })}
                                className="w-full p-2 border border-slate-200 rounded-lg"
                            />
                            <input
                                type="number"
                                value={p1.y}
                                onChange={(e) => setP1({ ...p1, y: Number(e.target.value) })}
                                className="w-full p-2 border border-slate-200 rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Point B (x2, y2)</h4>
                        <div className="flex gap-2">
                            <input
                                type="number"
                                value={p2.x}
                                onChange={(e) => setP2({ ...p2, x: Number(e.target.value) })}
                                className="w-full p-2 border border-slate-200 rounded-lg"
                            />
                            <input
                                type="number"
                                value={p2.y}
                                onChange={(e) => setP2({ ...p2, y: Number(e.target.value) })}
                                className="w-full p-2 border border-slate-200 rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between p-2 bg-emerald-50 rounded text-emerald-900 text-sm">
                            <span>Distance:</span>
                            <span className="font-bold">{distance.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between p-2 bg-blue-50 rounded text-blue-900 text-sm">
                            <span>Midpoint:</span>
                            <span className="font-bold">({midpoint.x.toFixed(1)}, {midpoint.y.toFixed(1)})</span>
                        </div>
                        <div className="flex justify-between p-2 bg-purple-50 rounded text-purple-900 text-sm">
                            <span>Slope (m):</span>
                            <span className="font-bold">{typeof slope === 'number' ? slope.toFixed(2) : slope}</span>
                        </div>
                    </div>
                </div>

                <div className="border border-slate-200 rounded-lg bg-white relative overflow-hidden h-64 flex items-center justify-center">
                    <svg viewBox="0 0 200 200" className="w-full h-full absolute inset-0">
                        <defs>
                            <pattern id="grid-coord" width="15" height="15" patternUnits="userSpaceOnUse">
                                <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-coord)" />
                        <line x1="0" y1="100" x2="200" y2="100" stroke="#94a3b8" strokeWidth="1" />
                        <line x1="100" y1="0" x2="100" y2="200" stroke="#94a3b8" strokeWidth="1" />

                        {/* Line Segment */}
                        <line
                            x1={svgP1.x} y1={svgP1.y}
                            x2={svgP2.x} y2={svgP2.y}
                            stroke="#10b981"
                            strokeWidth="2"
                        />

                        {/* Points */}
                        <circle cx={svgP1.x} cy={svgP1.y} r="3" fill="red" />
                        <circle cx={svgP2.x} cy={svgP2.y} r="3" fill="red" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default CoordinateVisualizer;
