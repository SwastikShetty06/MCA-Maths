import React, { useState } from 'react';
import { Layers } from 'lucide-react';

const SetVisualizer = () => {
    const [activeSet, setActiveSet] = useState('union'); // union, intersection, differenceA, differenceB

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 my-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                    <Layers size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Interactive Venn Diagram</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <p className="text-sm text-slate-600">Select an operation to visualize the set region.</p>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setActiveSet('union')}
                            className={`p-3 rounded-lg border text-sm font-bold transition-all ${activeSet === 'union' ? 'bg-teal-50 border-teal-500 text-teal-700' : 'border-slate-200 hover:bg-slate-50'}`}
                        >
                            Union (A ∪ B)
                        </button>
                        <button
                            onClick={() => setActiveSet('intersection')}
                            className={`p-3 rounded-lg border text-sm font-bold transition-all ${activeSet === 'intersection' ? 'bg-teal-50 border-teal-500 text-teal-700' : 'border-slate-200 hover:bg-slate-50'}`}
                        >
                            Intersection (A ∩ B)
                        </button>
                        <button
                            onClick={() => setActiveSet('differenceA')}
                            className={`p-3 rounded-lg border text-sm font-bold transition-all ${activeSet === 'differenceA' ? 'bg-teal-50 border-teal-500 text-teal-700' : 'border-slate-200 hover:bg-slate-50'}`}
                        >
                            Difference (A - B)
                        </button>
                        <button
                            onClick={() => setActiveSet('differenceB')}
                            className={`p-3 rounded-lg border text-sm font-bold transition-all ${activeSet === 'differenceB' ? 'bg-teal-50 border-teal-500 text-teal-700' : 'border-slate-200 hover:bg-slate-50'}`}
                        >
                            Difference (B - A)
                        </button>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm">
                        {activeSet === 'union' && <p><strong>Union:</strong> Contains all elements that are in Set A, Set B, or both.</p>}
                        {activeSet === 'intersection' && <p><strong>Intersection:</strong> Contains only elements that are in BOTH Set A and Set B.</p>}
                        {activeSet === 'differenceA' && <p><strong>Difference (A - B):</strong> Contains elements that are in Set A but NOT in Set B.</p>}
                        {activeSet === 'differenceB' && <p><strong>Difference (B - A):</strong> Contains elements that are in Set B but NOT in Set A.</p>}
                    </div>
                </div>

                <div className="border border-slate-200 rounded-lg bg-white relative overflow-hidden h-64 flex items-center justify-center">
                    <svg viewBox="0 0 200 150" className="w-full h-full">
                        {/* Set A Circle */}
                        <circle cx="70" cy="75" r="50" fill={
                            activeSet === 'union' || activeSet === 'differenceA' || activeSet === 'intersection'
                                ? 'rgba(20, 184, 166, 0.2)' : 'none'
                        } stroke="#0d9488" strokeWidth="2" />

                        {/* Set B Circle */}
                        <circle cx="130" cy="75" r="50" fill={
                            activeSet === 'union' || activeSet === 'differenceB' || activeSet === 'intersection'
                                ? 'rgba(20, 184, 166, 0.2)' : 'none'
                        } stroke="#0d9488" strokeWidth="2" />

                        {/* Overlays for specific logic to "fix" the fill visual */}
                        {/* Intersection Highlight */}
                        {activeSet === 'intersection' && (
                            <path d="M 130 75 A 50 50 0 0 0 96.5 33.5 A 50 50 0 0 0 96.5 116.5 A 50 50 0 0 0 130 75" fill="#14b8a6" opacity="0.5" />
                        )}
                        {/* Difference A Highlight (Mask B out) - simplified visual trick */}
                        {activeSet === 'differenceA' && (
                            <circle cx="130" cy="75" r="48" fill="white" />
                        )}
                        {/* Difference B Highlight (Mask A out) */}
                        {activeSet === 'differenceB' && (
                            <circle cx="70" cy="75" r="48" fill="white" />
                        )}

                        <text x="50" y="75" className="text-xs font-bold fill-slate-700">A</text>
                        <text x="145" y="75" className="text-xs font-bold fill-slate-700">B</text>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SetVisualizer;
