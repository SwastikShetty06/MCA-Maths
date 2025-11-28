import React, { useState } from 'react';
import { Circle } from 'lucide-react';

const TrigVisualizer = () => {
    const [angle, setAngle] = useState(45); // Degrees

    // Convert to radians for calculation
    const radians = (angle * Math.PI) / 180;
    const cx = 100;
    const cy = 100;
    const r = 80;

    // Calculate point on circle
    // SVG coordinate system: y increases downwards
    const px = cx + r * Math.cos(radians);
    const py = cy - r * Math.sin(radians);

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 my-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    <Circle size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Interactive Unit Circle</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Angle (θ): {angle}°</label>
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={angle}
                            onChange={(e) => setAngle(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between p-3 bg-red-50 rounded-lg border border-red-100 text-red-900">
                            <span className="font-medium">sin({angle}°)</span>
                            <span className="font-bold font-mono">{Math.sin(radians).toFixed(4)}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-blue-50 rounded-lg border border-blue-100 text-blue-900">
                            <span className="font-medium">cos({angle}°)</span>
                            <span className="font-bold font-mono">{Math.cos(radians).toFixed(4)}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-emerald-900">
                            <span className="font-medium">tan({angle}°)</span>
                            <span className="font-bold font-mono">{Math.abs(Math.tan(radians)) > 100 ? '∞' : Math.tan(radians).toFixed(4)}</span>
                        </div>
                    </div>
                </div>

                <div className="border border-slate-200 rounded-lg bg-white relative overflow-hidden h-64 flex items-center justify-center">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        {/* Grid */}
                        <defs>
                            <pattern id="grid-trig" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-trig)" />

                        {/* Axes */}
                        <line x1="10" y1="100" x2="190" y2="100" stroke="#cbd5e1" strokeWidth="1" />
                        <line x1="100" y1="10" x2="100" y2="190" stroke="#cbd5e1" strokeWidth="1" />

                        {/* Unit Circle */}
                        <circle cx="100" cy="100" r={r} fill="none" stroke="#94a3b8" strokeWidth="1.5" />

                        {/* Triangle Lines */}
                        {/* Cosine Line (Blue) */}
                        <line x1="100" y1="100" x2={px} y2="100" stroke="#3b82f6" strokeWidth="2" />
                        {/* Sine Line (Red) */}
                        <line x1={px} y1="100" x2={px} y2={py} stroke="#ef4444" strokeWidth="2" />
                        {/* Hypotenuse (Radius) */}
                        <line x1="100" y1="100" x2={px} y2={py} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 2" />

                        {/* Point */}
                        <circle cx={px} cy={py} r="4" fill="#f97316" stroke="white" strokeWidth="2" />

                        {/* Angle Arc (simplified) */}
                        <path d={`M 120 100 A 20 20 0 0 0 ${100 + 20 * Math.cos(radians)} ${100 - 20 * Math.sin(radians)}`} fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TrigVisualizer;
