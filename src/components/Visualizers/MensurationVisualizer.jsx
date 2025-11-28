import React, { useState } from 'react';
import { Box } from 'lucide-react';

const MensurationVisualizer = () => {
    const [shape, setShape] = useState('cube'); // cube, cylinder, sphere
    const [dim1, setDim1] = useState(5); // side / radius
    const [dim2, setDim2] = useState(10); // height (if applicable)

    const calculate = () => {
        switch (shape) {
            case 'cube':
                return {
                    vol: Math.pow(dim1, 3),
                    sa: 6 * Math.pow(dim1, 2)
                };
            case 'cylinder':
                return {
                    vol: Math.PI * Math.pow(dim1, 2) * dim2,
                    sa: 2 * Math.PI * dim1 * (dim1 + dim2)
                };
            case 'sphere':
                return {
                    vol: (4 / 3) * Math.PI * Math.pow(dim1, 3),
                    sa: 4 * Math.PI * Math.pow(dim1, 2)
                };
            default: return { vol: 0, sa: 0 };
        }
    };

    const results = calculate();

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 my-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                    <Box size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">3D Shape Calculator</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="flex gap-2">
                        {['cube', 'cylinder', 'sphere'].map(s => (
                            <button
                                key={s}
                                onClick={() => setShape(s)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all ${shape === s ? 'bg-rose-500 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                                {shape === 'cube' ? 'Side Length (a)' : 'Radius (r)'}: {dim1}
                            </label>
                            <input
                                type="range" min="1" max="10" value={dim1}
                                onChange={(e) => setDim1(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
                            />
                        </div>

                        {shape === 'cylinder' && (
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                                    Height (h): {dim2}
                                </label>
                                <input
                                    type="range" min="1" max="10" value={dim2}
                                    onChange={(e) => setDim2(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
                                />
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                            <p className="text-xs text-slate-500 uppercase font-bold">Volume</p>
                            <p className="text-xl font-mono font-bold text-rose-600">{results.vol.toFixed(2)}</p>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                            <p className="text-xs text-slate-500 uppercase font-bold">Surface Area</p>
                            <p className="text-xl font-mono font-bold text-rose-600">{results.sa.toFixed(2)}</p>
                        </div>
                    </div>
                </div>

                <div className="border border-slate-200 rounded-lg bg-white relative overflow-hidden h-64 flex items-center justify-center perspective-500">
                    {/* Simple CSS 3D representations */}
                    {shape === 'cube' && (
                        <div className="w-24 h-24 bg-rose-500/20 border-2 border-rose-500 transform rotate-45 rotate-x-45 transition-all duration-500" style={{ transform: `scale(${dim1 / 5}) rotate3d(1, 1, 1, 45deg)` }}></div>
                    )}
                    {shape === 'sphere' && (
                        <div className="rounded-full bg-rose-500/20 border-2 border-rose-500 transition-all duration-500" style={{ width: dim1 * 20, height: dim1 * 20 }}></div>
                    )}
                    {shape === 'cylinder' && (
                        <div className="w-20 bg-rose-500/20 border-2 border-rose-500 transition-all duration-500 rounded-lg" style={{ width: dim1 * 15, height: dim2 * 15 }}></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MensurationVisualizer;
