import { ClipboardList } from 'lucide-react';

export const questionBankStrategy = {
  id: 'question-bank-strategy',
  title: 'Question Bank & Strategy',
  icon: ClipboardList,
  description: 'Interactive Master Tutor: Complete 50-Question Bank & Strategic Guide for MAH MCA CET 2026.',
  color: 'from-slate-500 to-zinc-500',
  topics: [
    // --- SECTION 1: EXECUTIVE SUMMARY ---
    {
      title: '1. Executive Summary',
      content: `
        <h3>1.1 Strategic Overview</h3>
        <p>The MAH MCA CET 2026 is a speed-based exam. Your goal is not just to solve, but to solve <strong>fast</strong>.</p>
        
        <div class="bg-yellow-100 border-l-4 border-yellow-600 p-4 my-4 rounded-r">
          <h4 class="text-yellow-800 font-bold m-0">⚠️ CRITICAL STRATEGY: NO NEGATIVE MARKING</h4>
          <p class="text-gray-800 mt-2">Attempt <strong>EVERY SINGLE QUESTION</strong>. If you are unsure, use the "Option Elimination" method or make an educated guess. Leaving a question blank is a wasted opportunity.</p>
        </div>

        <h3>1.2 Scoring Dynamics & Weightage</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-800">
          <li><strong>Total Marks:</strong> 200 (Math: 60 Marks)</li>
          <li><strong>Questions:</strong> 30 Questions (2 Marks each)</li>
          <li><strong>Time:</strong> < 1 minute per question (Speed is Key!)</li>
        </ul>

        <h4 class="mt-6 mb-2 text-indigo-900">High-Yield Topics (Focus Here First)</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse bg-white/80 rounded-lg">
            <thead>
              <tr class="border-b border-gray-300 text-indigo-800">
                <th class="p-3">Topic</th>
                <th class="p-3">Weightage</th>
                <th class="p-3">Key Concepts</th>
              </tr>
            </thead>
            <tbody class="text-sm text-gray-800">
              <tr class="border-b border-gray-200">
                <td class="p-3 font-bold text-gray-800">Algebra</td>
                <td class="p-3">20-25%</td>
                <td class="p-3">Quadratics, AP/GP, Logs</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="p-3 font-bold text-gray-800">Coordinate Geometry</td>
                <td class="p-3">15-20%</td>
                <td class="p-3">Lines, Circles, Conics</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="p-3 font-bold text-gray-800">Calculus</td>
                <td class="p-3">15-20%</td>
                <td class="p-3">Limits, Derivatives, Integration</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },

    // --- SECTION 2: ALGEBRA ---
    {
      title: '2. Algebra',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Algebra</h3>
          <div class="overflow-x-auto bg-gray-100 rounded-lg p-4 border border-gray-300">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-gray-300 text-indigo-800">
                  <th class="p-3">Concept</th>
                  <th class="p-3">Formula / Rule</th>
                </tr>
              </thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Quadratic Roots</td><td class="p-3">Sum $(\\alpha+\\beta) = -b/a$ <br> Product $(\\alpha\\beta) = c/a$</td></tr>
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Equation from Roots</td><td class="p-3">$x^2 - (\\text{Sum})x + (\\text{Product}) = 0$</td></tr>
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">AP Term</td><td class="p-3">$T_n = a + (n-1)d$</td></tr>
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Logarithms</td><td class="p-3">$\\log_a(mn) = \\log_a m + \\log_a n$</td></tr>
                <tr><td class="p-3 font-bold">Combinations</td><td class="p-3">$^nC_r = \\frac{n!}{r!(n-r)!}$</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-800">🧠 Practice Quiz (Q1 - Q10)</h3>
        <div class="space-y-6">
          
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q1. Roots Relationship</h4>
            <p class="mb-4 text-gray-800">If the roots of the quadratic equation $x^2 - px + q = 0$ differ by unity (1), which of the following relations holds true?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $p^2 = 4q + 1$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $p^2 = 4q - 1$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">Formula: $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta$. Substitute 1, p, q to get $1 = p^2 - 4q$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q2. Progression Properties</h4>
            <p class="mb-4 text-gray-800">If $a, b, c$ are in AP, then $\\frac{1}{bc}, \\frac{1}{ca}, \\frac{1}{ab}$ are in:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) AP</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) GP</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">Multiply sequence by $abc$. It becomes $a, b, c$ which is in AP.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q3. Logarithmic Digits</h4>
            <p class="mb-4 text-gray-800">If $\\log_{10} 2 = 0.3010$, what is the number of digits in $2^{64}$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) 20</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">D) 21</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">$64 \\times 0.3010 = 19.264$. Digits = Characteristic + 1 = 19 + 1 = 20.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q4. Binomial Coefficient</h4>
            <p class="mb-4 text-gray-800">The coefficient of $x^5$ in $(1 + x^2)^5 (1 + x)^4$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 40</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) 60</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Pairs making $x^5$: $(5x^2)(4x^3) = 20x^5$ and $(10x^4)(4x) = 40x^5$. Total 60.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q5. Combinatorics</h4>
            <p class="mb-4 text-gray-800">Ways to form a committee of 5 from 6 men and 4 women with <strong>at least 2 women</strong>?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 180</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 186</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">Sum of cases: (2W,3M) + (3W,2M) + (4W,1M) = $120 + 60 + 6 = 186$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q6. Matrix Algebra</h4>
            <p class="mb-4 text-gray-800">If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, then $A^2 - 5A - 2I$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) I</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 0 (Zero Matrix)</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">Cayley-Hamilton Theorem: Characteristic eq is $\\lambda^2 - 5\\lambda - 2 = 0$. So matrix expression is 0.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q7. Complex Numbers</h4>
            <p class="mb-4 text-gray-800">Value of $i^{257}$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) i</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) -1</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">$257 \\div 4$ gives remainder 1. So $i^1 = i$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q8. Cubic Equations</h4>
            <p class="mb-4 text-gray-800">If roots of $x^3 - 3x^2 + x + 1 = 0$ are $a-b, a, a+b$, then $a$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 1</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) -1</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">Sum of roots = $3a = -(-3)/1 = 3$. Thus $a=1$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q9. Sequence Summation</h4>
            <p class="mb-4 text-gray-800">Sum of $1 + 3 + 5 + \\dots + (2n-1)$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $n(n+1)$</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) $n^2$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Sum of first $n$ odd numbers is always $n^2$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q10. Inequalities</h4>
            <p class="mb-4 text-gray-800">Solution set for $|x - 2| \\le 3$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $[-1, 5]$</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $(-1, 5)$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">$-3 \\le x - 2 \\le 3$. Add 2 to all: $-1 \\le x \\le 5$.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },

    // --- SECTION 3: COORDINATE GEOMETRY ---
    {
      title: '3. Coordinate Geometry',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Coordinate Geometry</h3>
          <div class="overflow-x-auto bg-gray-100 rounded-lg p-4 border border-gray-300">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-gray-300 text-indigo-800">
                  <th class="p-3">Concept</th>
                  <th class="p-3">Formula / Rule</th>
                </tr>
              </thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Line Equation</td><td class="p-3">$y = mx + c$</td></tr>
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Distance (Parallel)</td><td class="p-3">$|\\frac{c_1-c_2}{\\sqrt{a^2+b^2}}|$</td></tr>
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Circle</td><td class="p-3">Center $(-g, -f)$, Radius $\\sqrt{g^2+f^2-c}$</td></tr>
                <tr><td class="p-3 font-bold">Eccentricity ($e$)</td><td class="p-3">Parabola($e=1$), Ellipse($e<1$), Hyperbola($e>1$)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-800">🧠 Practice Quiz (Q11 - Q18)</h3>
        <div class="space-y-6">
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q11. Perpendicular Slope</h4>
            <p class="mb-4 text-gray-800">Slope of line perpendicular to line through $(3, -2)$ and $(4, 2)$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 4</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">D) -1/4</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [D]</p>
                <p class="text-gray-800">Slope $m_1 = 4$. Perpendicular $m_2 = -1/m_1 = -1/4$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q12. Circle Tangency</h4>
            <p class="mb-4 text-gray-800">Value of $k$ for which $3x - 4y + k = 0$ is tangent to $x^2 + y^2 = 25$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $\\pm 15$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) $\\pm 25$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Dist from center (0,0) must equal radius (5). $|k|/5 = 5 \\implies |k| = 25$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q13. Area of Triangle</h4>
            <p class="mb-4 text-gray-800">Area of triangle with vertices $(1, 2), (-4, -3), (4, 1)$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 7</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) 10</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Using determinant formula: $0.5 \\times |-4 + 4 + 20| = 10$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q14. Pair of Lines</h4>
            <p class="mb-4 text-gray-800">Angle between lines $x^2 - 5xy + 6y^2 = 0$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $45^\\circ$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) $\\tan^{-1}(1/7)$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Use $\\tan \\theta = 2\\sqrt{h^2-ab}/(a+b)$. Result is $1/7$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q15. Parabola Focus</h4>
            <p class="mb-4 text-gray-800">The focus of the parabola $y^2 = -8x$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $(2, 0)$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $(-2, 0)$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">$4a = 8 \\implies a = 2$. Opens leftward, so focus is $(-2, 0)$.</p>
              </div>
            </details>
          </div>

           <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q16. Direction Cosines</h4>
            <p class="mb-4 text-gray-800">Value of $\\sin^2 \\alpha + \\sin^2 \\beta + \\sin^2 \\gamma$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 1</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 2</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">Derived from $\\cos^2 \\alpha + \\cos^2 \\beta + \\cos^2 \\gamma = 1$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q17. Ellipse Properties</h4>
            <p class="mb-4 text-gray-800">Eccentricity of $9x^2 + 25y^2 = 225$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 3/5</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 4/5</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">$e = \\sqrt{1 - 9/25} = 4/5$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q18. Line Intercepts</h4>
            <p class="mb-4 text-gray-800">Find the x-intercept of $3x + 4y = 12$.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 4</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">D) 6</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">Set $y=0$, then $3x=12 \\implies x=4$.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },

    // --- SECTION 4: CALCULUS ---
    {
      title: '4. Calculus',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Calculus</h3>
          <div class="overflow-x-auto bg-gray-100 rounded-lg p-4 border border-gray-300">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-gray-300 text-indigo-800">
                  <th class="p-3">Concept</th>
                  <th class="p-3">Formula / Rule</th>
                </tr>
              </thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Standard Limit</td><td class="p-3">$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$</td></tr>
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">L'Hopital's</td><td class="p-3">If $0/0$, derivate num/denom.</td></tr>
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Product Rule</td><td class="p-3">$(uv)' = uv' + vu'$</td></tr>
                <tr><td class="p-3 font-bold">Integration Parts</td><td class="p-3">$\\int u dv = uv - \\int v du$</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-800">🧠 Practice Quiz (Q19 - Q26)</h3>

        <div class="space-y-6">
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q19. Limits (L'Hopital)</h4>
            <p class="mb-4 text-gray-800">Evaluate $\\lim_{x \\to 0} \\frac{e^x - e^{-x}}{\\sin x}$</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 1</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) 2</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Differentiating gives $\\frac{e^x + e^{-x}}{\\cos x}$. At $0$, this is $2/1 = 2$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q20. Implicit Differentiation</h4>
            <p class="mb-4 text-gray-800">If $\\sqrt{x} + \\sqrt{y} = \\sqrt{a}$, then $dy/dx$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $\\sqrt{x/y}$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">D) $-\\sqrt{y/x}$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [D]</p>
                <p class="text-gray-800">Differentiate term by term: $\\frac{1}{2\\sqrt{x}} + \\frac{1}{2\\sqrt{y}}y' = 0$. Solve for $y'$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q21. Logarithmic Diff</h4>
            <p class="mb-4 text-gray-800">If $y = x^x$, then $\\frac{dy}{dx}$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $x^x \\log x$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $x^x (1 + \\log x)$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">$\\ln y = x \\ln x$. Differentiating: $y' = y(1 + \\ln x)$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q22. Definite Integration</h4>
            <p class="mb-4 text-gray-800">$\\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $\\pi/2$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) $\\pi/4$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Standard property result for this form is always UpperLimit / 2.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q23. Tangents</h4>
            <p class="mb-4 text-gray-800">Slope of tangent to $y = x^2 - 4x$ where it crosses y-axis?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) -4</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) 0</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">Crosses y-axis at $x=0$. $y' = 2x - 4$. At $x=0$, slope is -4.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q24. Integration Substitution</h4>
            <p class="mb-4 text-gray-800">$\\int \\frac{2x}{1+x^2} dx$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $\\tan^{-1} x$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $\\log(1+x^2)$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">Numerator is derivative of denominator. $\\int du/u = \\ln|u|$.</p>
              </div>
            </details>
          </div>

           <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q25. Chain Rule</h4>
            <p class="mb-4 text-gray-800">If $y = \\sin(x^2)$, find $dy/dx$.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $2x \\sin(x^2)$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) $2x \\cos(x^2)$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Outer $\\sin \\to \\cos$. Inner $x^2 \\to 2x$. Multiply them.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q26. Continuity</h4>
            <p class="mb-4 text-gray-800">If $f(x) = \\frac{x^2 - 1}{x - 1}$ for $x \\neq 1$ is continuous at $x=1$, find $f(1)$.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 1</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 2</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">Limit as $x \\to 1$ of $(x+1)$ is 2.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },

    // --- SECTION 5: VECTOR ALGEBRA ---
    {
      title: '5. Vector Algebra',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Vectors</h3>
          <div class="overflow-x-auto bg-gray-100 rounded-lg p-4 border border-gray-300">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-gray-300 text-indigo-800"><th class="p-3">Concept</th><th class="p-3">Formula</th></tr>
              </thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Dot Product</td><td class="p-3">$\\vec{a} \\cdot \\vec{b} = |a||b|\\cos\\theta$</td></tr>
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Cross Product</td><td class="p-3">$\\vec{a} \\times \\vec{b} = |a||b|\\sin\\theta \\hat{n}$</td></tr>
                <tr><td class="p-3 font-bold">Projection</td><td class="p-3">$\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-800">🧠 Practice Quiz (Q27 - Q30)</h3>
        <div class="space-y-6">
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q27. Angle Between Vectors</h4>
            <p class="mb-4 text-gray-800">If $|\\vec{a} + \\vec{b}| = |\\vec{a} - \\vec{b}|$, what is the angle?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $45^\\circ$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) $90^\\circ$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Square both sides implies $\\vec{a} \\cdot \\vec{b} = 0$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q28. Projection</h4>
            <p class="mb-4 text-gray-800">Projection of $\\vec{i} - 2\\vec{j} + \\vec{k}$ on $4\\vec{i} - 4\\vec{j} + 7\\vec{k}$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 19/9</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 10/9</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">Dot prod=19, Mag=9. Result 19/9.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q29. Coplanarity</h4>
            <p class="mb-4 text-gray-800">Scalar triple product $[\\vec{a} \\vec{b} \\vec{c}]$ of coplanar vectors is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 1</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) 0</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Volume is zero if vectors are on same plane.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q30. Unit Vectors</h4>
            <p class="mb-4 text-gray-800">If $\\hat{a}, \\hat{b}$ are unit vectors, $|\\hat{a} - \\hat{b}|$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $2\\cos(\\theta/2)$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $2\\sin(\\theta/2)$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">Expand $|a-b|^2 = 2 - 2\\cos\\theta = 4\\sin^2(\\theta/2)$.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },

    // --- SECTION 6: TRIGONOMETRY ---
    {
      title: '6. Trigonometry',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Trigonometry</h3>
          <div class="overflow-x-auto bg-gray-100 rounded-lg p-4 border border-gray-300">
            <table class="w-full text-left border-collapse">
              <thead><tr class="border-b border-gray-300 text-indigo-800"><th class="p-3">Concept</th><th class="p-3">Formula</th></tr></thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Inverse Sum</td><td class="p-3">$\\sin^{-1}x + \\cos^{-1}x = \\pi/2$</td></tr>
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Sine Rule</td><td class="p-3">$a/\\sin A = 2R$</td></tr>
                <tr><td class="p-3 font-bold">Cosine Rule</td><td class="p-3">$a^2 = b^2+c^2-2bc\\cos A$</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-800">🧠 Practice Quiz (Q31 - Q34)</h3>
        <div class="space-y-6">
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q31. Inverse Functions</h4>
            <p class="mb-4 text-gray-800">Value of $\\sin(\\cot^{-1} x)$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) x</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) $(1+x^2)^{-1/2}$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Triangle method: Opp=1, Adj=x, Hyp=$\\sqrt{1+x^2}$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q32. Trig Equations</h4>
            <p class="mb-4 text-gray-800">If $\\tan A = 1/2$ and $\\tan B = 1/3$, then $A+B$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $\\pi/3$</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $\\pi/4$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">$\\tan(A+B) = (0.5 + 0.33) / (1 - 0.166) = 1$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q33. Heights & Distances</h4>
            <p class="mb-4 text-gray-800">Shadow is $\\sqrt{3}$ times height. Angle of elevation?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $30^\\circ$</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $45^\\circ$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">$\\tan \\theta = h / h\\sqrt{3} = 1/\\sqrt{3}$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q34. General Solution</h4>
            <p class="mb-4 text-gray-800">General solution of $\\sin x = 1/2$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $n\\pi + (-1)^n(\\pi/6)$</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) $n\\pi \\pm \\pi/6$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">General formula for sine.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },

    // --- SECTION 7: PROBABILITY ---
    {
      title: '7. Probability & Stats',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Probability</h3>
          <div class="overflow-x-auto bg-gray-100 rounded-lg p-4 border border-gray-300">
            <table class="w-full text-left border-collapse">
              <thead><tr class="border-b border-gray-300 text-indigo-800"><th class="p-3">Concept</th><th class="p-3">Formula</th></tr></thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Probability</td><td class="p-3">$P(E) = n(E)/n(S)$</td></tr>
                <tr class="border-b border-gray-200"><td class="p-3 font-bold">Binomial</td><td class="p-3">$^nC_k p^k q^{n-k}$</td></tr>
                <tr><td class="p-3 font-bold">Variance</td><td class="p-3">$\\sigma^2 = npq$</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-800">🧠 Practice Quiz (Q35 - Q38)</h3>
        <div class="space-y-6">
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q35. Probability (Dice)</h4>
            <p class="mb-4 text-gray-800">3 numbers chosen from 1-20. Probability they are consecutive?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $3/190$</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $1/190$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">18 consecutive sets / 1140 total combos = 3/190.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q36. Binomial Dist</h4>
            <p class="mb-4 text-gray-800">If Mean=4, Variance=3, find n.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 12</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 16</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">$q = 3/4, p = 1/4$. $n(1/4)=4 \\implies n=16$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q37. Conditional</h4>
            <p class="mb-4 text-gray-800">If $P(A)=2/3, P(B)=5/8, P(\\text{only } A)=1/6$, find $P(\\text{only } B)$.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 1/8</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 1/6</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">Intersection is 1/2. $P(\\text{only } B) = 5/8 - 4/8 = 1/8$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q38. Correlation</h4>
            <p class="mb-4 text-gray-800">If $r=0.6, \\text{Cov}=24, Var(x)=16$, find $\\sigma_y$.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 8</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 10</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">$0.6 = 24 / (4 \\times \\sigma_y) \\implies \\sigma_y = 10$.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },

    // --- SECTION 8: ARITHMETIC ---
    {
      title: '8. Arithmetic',
      content: `
        <h3 class="text-xl font-bold mb-4 text-gray-800">🧠 Practice Quiz (Q39 - Q42)</h3>
        <div class="space-y-6">
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q39. Time and Work</h4>
            <p class="mb-4 text-gray-800">A(20 days), B(30 days). Work together 5 days, B leaves. A finishes in?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 10</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 11.66</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">Work done 5/12. Remaining 7/12. Time = (7/12)/(1/20).</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q40. Profit and Loss</h4>
            <p class="mb-4 text-gray-800">A sells at 20% profit. If bought 20% less and sold 5 less, gains 25%. Find CP.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 25</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 30</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">Equation: $1.25(0.8x) = 1.2x - 5$. Solving gives $x=25$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q41. Ratios</h4>
            <p class="mb-4 text-gray-800">Ratio A:B is 3:2. Subtract 60 from A, add 60 to B, ratio is 18:17. Find A.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 420</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 440</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">Cross multiply $(3x-60)/(2x+60) = 18/17$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q42. CI vs SI</h4>
            <p class="mb-4 text-gray-800">Diff between CI and SI for 2 yrs at 10% is 200. Find Sum.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 20,000</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 25,000</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">Diff $= P(R/100)^2$. $200 = P(0.01)$. $P=20000$.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },

    // --- SECTION 9: SETS & FUNCTIONS ---
    {
      title: '9. Sets & Functions',
      content: `
        <h3 class="text-xl font-bold mb-4 text-gray-800">🧠 Practice Quiz (Q43 - Q45)</h3>
        <div class="space-y-6">
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q43. Set Cardinality</h4>
            <p class="mb-4 text-gray-800">If $A \\subseteq B$ and $B \\subseteq C$, then $A \\cup B \\cup C$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $n(A)$</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) $n(C)$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">The union of a set and its superset is the superset. C contains all.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q44. Number of Relations</h4>
            <p class="mb-4 text-gray-800">Relations from set A(m) to set B(n)?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $2^{m+n}$</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $2^{mn}$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">Total subsets of Cartesian product $A \\times B$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q45. Functions</h4>
            <p class="mb-4 text-gray-800">$f: R \\to R, f(x) = x^3$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) Onto but not one-one</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">C) Bijective</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800">Cubic functions cover all real Y values and pass horizontal line test.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },

    // --- SECTION 10: DIFFERENTIAL EQ ---
    {
      title: '10. Differential Eq',
      content: `
        <h3 class="text-xl font-bold mb-4 text-gray-800">🧠 Practice Quiz (Q46 - Q48)</h3>
        <div class="space-y-6">
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q46. Order and Degree</h4>
            <p class="mb-4 text-gray-800">Order/Degree of $y'' = [1 + (y')^2]^{3/2}$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 2, 3</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 2, 2</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800">Square both sides to remove fractional power: $(y'')^2 = [\\dots]^3$. Degree is 2.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q47. Solution of DE</h4>
            <p class="mb-4 text-gray-800">$dy/dx = e^{x-y} + x^2 e^{-y}$ solution?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) $e^y = e^x + x^3/3 + C$</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) $e^y = e^x + x^3 + C$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">Multiply by $e^y$ to separate variables.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q48. Particular Solution</h4>
            <p class="mb-4 text-gray-800">$dy/dx = (x-y)^2$, $y(1)=1$.</p>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: $C = -2$</p>
                <p class="text-gray-800">Sub $t = x-y$. Solve integral, apply initial condition.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },

    // --- SECTION 11: MENSURATION ---
    {
      title: '11. Mensuration',
      content: `
        <h3 class="text-xl font-bold mb-4 text-gray-800">🧠 Practice Quiz (Q49 - Q50)</h3>
        <div class="space-y-6">
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q49. Cylinder Volume</h4>
            <p class="mb-4 text-gray-800">Vol=4312. CSA is 1/3 of TSA. Find CSA.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 616</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 528</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">Relation implies $r=2h$. Solve for h using Volume, then find CSA.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q50. Ratio of Volumes</h4>
            <p class="mb-4 text-gray-800">Cone, Hemisphere, Cylinder have equal base and height. Ratio?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">A) 1:2:3</div>
               <div class="p-3 bg-gray-100 rounded border border-gray-200 hover:border-indigo-400 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium transition-all">B) 1:3:2</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800">Use $h=r$ for hemisphere. $1/3 : 2/3 : 1$.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },

    // --- SECTION 12 & 13: MOCK & CONCLUSION ---
    {
      title: 'Mock & Conclusion',
      content: `
         <h3 class="text-xl font-bold mb-4 text-indigo-900">12. Quick Mock (Micro-Set)</h3>
         <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md mb-6">
           <ul class="list-disc pl-5 space-y-2 text-gray-800">
             <li><strong>Sets:</strong> $(A \\cup B)' = A' \\cap B'$ (De Morgan's)</li>
             <li><strong>Calculus:</strong> $\\frac{d}{dx}(\\sin x^\\circ) = \\frac{\\pi}{180}\\cos x^\\circ$</li>
             <li><strong>Coord:</strong> Dist between $3x+4y=10$ and $20$ is 2.</li>
             <li><strong>Prob:</strong> Sum 7 on two dice = $1/6$.</li>
           </ul>
         </div>
         
         <h3 class="text-xl font-bold mb-4 text-indigo-900">13. Final Strategy</h3>
         <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r border-gray-200">
           <p class="text-gray-800"><strong>Speed over Perfection:</strong> Find the easiest 20 questions first. Use option elimination for Trig and Integration. Memorize the cheat sheets provided in previous tabs.</p>
         </div>
      `
    }
  ]
};