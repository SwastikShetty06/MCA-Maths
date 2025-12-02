import { ClipboardList } from 'lucide-react';

export const questionBankStrategy = {
  id: 'question-bank-strategy',
  title: 'Question Bank & Strategy',
  icon: ClipboardList,
  description: 'Interactive Master Tutor: Comprehensive Question Bank and Strategic Preparation.',
  color: 'from-slate-500 to-zinc-500',
  topics: [
    {
      title: 'Executive Summary',
      content: `
        <h3>1.1 Strategic Overview</h3>
        <p>The MAH MCA CET 2026 is a speed-based exam. Your goal is not just to solve, but to solve <strong>fast</strong>.</p>
        
        <div class="bg-yellow-500/20 border-l-4 border-yellow-500 p-4 my-4 rounded-r">
          <h4 class="text-yellow-400 font-bold m-0">⚠️ CRITICAL STRATEGY: NO NEGATIVE MARKING</h4>
          <p class="text-gray-800 mt-2">Attempt <strong>EVERY SINGLE QUESTION</strong>. If you are unsure, use the "Option Elimination" method or make an educated guess. Leaving a question blank is a wasted opportunity.</p>
        </div>

        <h3>1.2 Scoring Dynamics & Weightage</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-500">
          <li><strong>Total Marks:</strong> 200 (Math: 60 Marks)</li>
          <li><strong>Questions:</strong> 30 Questions (2 Marks each)</li>
          <li><strong>Time:</strong> < 1 minute per question (Speed is Key!)</li>
        </ul>

        <h4 class="mt-6 mb-2 text-indigo-900">High-Yield Topics (Focus Here First)</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse bg-white/10 rounded-lg">
            <thead>
              <tr class="border-b border-white/20 text-indigo-700">
                <th class="p-3">Topic</th>
                <th class="p-3">Weightage</th>
                <th class="p-3">Key Concepts</th>
              </tr>
            </thead>
            <tbody class="text-sm text-gray-500">
              <tr class="border-b border-white/10">
                <td class="p-3 font-bold text-gray-500">Algebra</td>
                <td class="p-3">20-25%</td>
                <td class="p-3">Quadratics, AP/GP, Logs</td>
              </tr>
              <tr class="border-b border-white/10">
                <td class="p-3 font-bold text-gray-500">Coordinate Geometry</td>
                <td class="p-3">15-20%</td>
                <td class="p-3">Lines, Circles, Conics</td>
              </tr>
              <tr class="border-b border-white/10">
                <td class="p-3 font-bold text-gray-500">Calculus</td>
                <td class="p-3">15-20%</td>
                <td class="p-3">Limits, Derivatives, Integration</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: 'Algebra',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Algebra</h3>
          <div class="overflow-x-auto bg-black/40 rounded-lg p-4 border border-white/20">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-white/30 text-indigo-200">
                  <th class="p-3">Concept</th>
                  <th class="p-3">Formula / Rule</th>
                </tr>
              </thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Quadratic Roots</td>
                  <td class="p-3">Sum $(\\alpha+\\beta) = -b/a$ <br> Product $(\\alpha\\beta) = c/a$</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Equation from Roots</td>
                  <td class="p-3">$x^2 - (\\text{Sum})x + (\\text{Product}) = 0$</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">AP Term</td>
                  <td class="p-3">$T_n = a + (n-1)d$</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Logarithms</td>
                  <td class="p-3">$\\log_a(mn) = \\log_a m + \\log_a n$</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold">Combinations</td>
                  <td class="p-3">$^nC_r = \\frac{n!}{r!(n-r)!}$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-500">🧠 Practice Quiz</h3>

        <div class="space-y-6">
          <!-- Q1 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray">Q1. Roots Relationship</h4>
            <p class="mb-4 text-gray-800">If the roots of the quadratic equation $x^2 - px + q = 0$ differ by unity (1), which of the following relations holds true?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) $p^2 = 4q + 1$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) $p^2 = 4q - 1$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) $q^2 = 4p + 1$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) $q^2 = 4p - 1$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [A]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>Let roots be $\\alpha$ and $\\beta$. Given $|\\alpha - \\beta| = 1$.</li>
                  <li>Formula: $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta$.</li>
                  <li>Substitute values: $(1)^2 = p^2 - 4q$.</li>
                  <li>Rearrange: <strong>$p^2 = 4q + 1$</strong>.</li>
                </ol>
              </div>
            </details>
          </div>

          <!-- Q2 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray-500">Q2. Progression Properties</h4>
            <p class="mb-4 text-gray-800">If $a, b, c$ are in AP, then $\\frac{1}{bc}, \\frac{1}{ca}, \\frac{1}{ab}$ are in:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) AP</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) GP</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) HP</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) None</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [A]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li><strong>Shortcut:</strong> Multiply each term by $abc$.</li>
                  <li>Sequence becomes: $\\frac{abc}{bc}, \\frac{abc}{ca}, \\frac{abc}{ab} \\rightarrow a, b, c$.</li>
                  <li>Since $a, b, c$ are in AP, the result is in <strong>AP</strong>.</li>
                </ol>
              </div>
            </details>
          </div>

          <!-- Q3 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-black">Q3. Logarithmic Digits</h4>
            <p class="mb-4 text-gray-800">If $\\log_{10} 2 = 0.3010$, what is the number of digits in $2^{64}$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) 18</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) 19</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) 20</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) 21</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [C]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>Formula: Digits = $\\lfloor \\log_{10} N \\rfloor + 1$.</li>
                  <li>Calculate: $\\log_{10} 2^{64} = 64 \\times 0.3010 = 19.264$.</li>
                  <li>Characteristic is 19.</li>
                  <li>Digits = $19 + 1 = 20$.</li>
                </ol>
              </div>
            </details>
          </div>

          <!-- Q4 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray-500">Q4. Binomial Coefficient</h4>
            <p class="mb-4 text-gray-800">The coefficient of $x^5$ in $(1 + x^2)^5 (1 + x)^4$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) 40</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) 50</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) 60</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) 30</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [C]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>We need powers adding to 5.</li>
                  <li>Case 1: $(x^2)^1$ from first part, $(x)^3$ from second? No, need $x^2$ term from $(1+x^2)^5$. Terms are $1, 5x^2, 10x^4...$</li>
                  <li>Pair 1: $(5x^2)$ from first $\\times (4x^3)$ from second = $20x^5$.</li>
                  <li>Pair 2: $(10x^4)$ from first $\\times (4x)$ from second = $40x^5$.</li>
                  <li>Total = $20 + 40 = 60$.</li>
                </ol>
              </div>
            </details>
          </div>

          <!-- Q5 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray-500">Q5. Committee Formation</h4>
            <p class="mb-4 text-gray-800">Ways to form a committee of 5 from 6 men and 4 women with <strong>at least 2 women</strong>?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) 180</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) 186</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) 196</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) 252</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [B]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>Case 1 (2W, 3M): $^4C_2 \\times ^6C_3 = 6 \\times 20 = 120$</li>
                  <li>Case 2 (3W, 2M): $^4C_3 \\times ^6C_2 = 4 \\times 15 = 60$</li>
                  <li>Case 3 (4W, 1M): $^4C_4 \\times ^6C_1 = 1 \\times 6 = 6$</li>
                  <li>Total = $120 + 60 + 6 = 186$.</li>
                </ol>
              </div>
            </details>
          </div>
        </div>
      `
    },
    {
      title: 'Coordinate Geometry',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Coordinate Geometry</h3>
          <div class="overflow-x-auto bg-black/40 rounded-lg p-4 border border-white/20">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-white/30 text-indigo-200">
                  <th class="p-3">Concept</th>
                  <th class="p-3">Formula / Rule</th>
                </tr>
              </thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Line Equation</td>
                  <td class="p-3">$y = mx + c$</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Distance (Parallel Lines)</td>
                  <td class="p-3">$|\\frac{c_1-c_2}{\\sqrt{a^2+b^2}}|$</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Circle Center/Radius</td>
                  <td class="p-3">Center $(-g, -f)$, Radius $\\sqrt{g^2+f^2-c}$</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold">Eccentricity ($e$)</td>
                  <td class="p-3">Parabola ($e=1$), Ellipse ($e<1$), Hyperbola ($e>1$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-500">🧠 Practice Quiz</h3>

        <div class="space-y-6">
          <!-- Q11 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray-500">Q11. Perpendicular Slope</h4>
            <p class="mb-4 text-gray-800">Slope of line perpendicular to line passing through $(3, -2)$ and $(4, 2)$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) $1/4$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) $4$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) $-4$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) $-1/4$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [D]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>Slope $m_1 = \\frac{y_2-y_1}{x_2-x_1} = \\frac{2-(-2)}{4-3} = \\frac{4}{1} = 4$.</li>
                  <li>Perpendicular slope $m_2 = -1/m_1$.</li>
                  <li>Result: <strong>$-1/4$</strong>.</li>
                </ol>
              </div>
            </details>
          </div>

          <!-- Q12 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray-500">Q12. Circle Tangency</h4>
            <p class="mb-4 text-gray-800">Value of $k$ for which $3x - 4y + k = 0$ is tangent to $x^2 + y^2 = 25$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) $\\pm 15$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) $\\pm 20$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) $\\pm 25$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) $\\pm 5$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [C]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>Radius $r = \\sqrt{25} = 5$. Center $(0,0)$.</li>
                  <li>Perpendicular distance from center to line must equal radius.</li>
                  <li>$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2+B^2}} = \\frac{|k|}{\\sqrt{3^2+(-4)^2}} = \\frac{|k|}{5}$.</li>
                  <li>$\\frac{|k|}{5} = 5 \\implies |k| = 25 \\implies k = \\pm 25$.</li>
                </ol>
              </div>
            </details>
          </div>

          <!-- Q13 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray-500">Q13. Area of Triangle</h4>
            <p class="mb-4 text-gray-800">Area of triangle with vertices $(1, 2), (-4, -3), (4, 1)$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) 7</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) 20</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) 10</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) 14</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [C]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>Use Shoelace formula or determinant.</li>
                  <li>Area = $\\frac{1}{2} |x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|$</li>
                  <li>$= \\frac{1}{2} |1(-3-1) + (-4)(1-2) + 4(2-(-3))|$</li>
                  <li>$= \\frac{1}{2} |-4 + 4 + 20| = 10$.</li>
                </ol>
              </div>
            </details>
          </div>
        </div>
      `
    },
    {
      title: 'Calculus',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Calculus</h3>
          <div class="overflow-x-auto bg-black/40 rounded-lg p-4 border border-white/20">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-white/30 text-indigo-200">
                  <th class="p-3">Concept</th>
                  <th class="p-3">Formula / Rule</th>
                </tr>
              </thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Standard Limit</td>
                  <td class="p-3">$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">L'Hopital's Rule</td>
                  <td class="p-3">If $0/0$ or $\\infty/\\infty$, take derivative of num/denom.</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Product Rule</td>
                  <td class="p-3">$(uv)' = uv' + vu'$</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold">Integration by Parts</td>
                  <td class="p-3">$\\int u dv = uv - \\int v du$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-500">🧠 Practice Quiz</h3>

        <div class="space-y-6">
          <!-- Q19 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray-500">Q19. Limits (L'Hopital)</h4>
            <p class="mb-4 text-gray-800">Evaluate $\\lim_{x \\to 0} \\frac{e^x - e^{-x}}{\\sin x}$</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) 0</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) 1</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) 2</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) DNE</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [C]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>Check form: $e^0 - e^0 / \\sin 0 = 0/0$.</li>
                  <li>Apply L'Hopital's Rule (differentiate top and bottom).</li>
                  <li>$\\frac{e^x - (-e^{-x})}{\\cos x} = \\frac{e^x + e^{-x}}{\\cos x}$.</li>
                  <li>Substitute $x=0$: $\\frac{1+1}{1} = 2$.</li>
                </ol>
              </div>
            </details>
          </div>

          <!-- Q20 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray-500">Q20. Implicit Differentiation</h4>
            <p class="mb-4 text-gray-800">If $\\sqrt{x} + \\sqrt{y} = \\sqrt{a}$, then $dy/dx$ is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) $\\sqrt{x/y}$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) $-\\sqrt{x/y}$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) $\\sqrt{y/x}$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) $-\\sqrt{y/x}$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [D]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>Differentiate w.r.t $x$: $\\frac{1}{2\\sqrt{x}} + \\frac{1}{2\\sqrt{y}} \\frac{dy}{dx} = 0$.</li>
                  <li>$\\frac{1}{\\sqrt{y}} y' = -\\frac{1}{\\sqrt{x}}$.</li>
                  <li>$y' = -\\frac{\\sqrt{y}}{\\sqrt{x}} = -\\sqrt{y/x}$.</li>
                </ol>
              </div>
            </details>
          </div>
        </div>
      `
    },
    {
      title: 'Vector Algebra',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Vectors</h3>
          <div class="overflow-x-auto bg-black/40 rounded-lg p-4 border border-white/20">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-white/30 text-indigo-200">
                  <th class="p-3">Concept</th>
                  <th class="p-3">Formula / Rule</th>
                </tr>
              </thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Dot Product</td>
                  <td class="p-3">$\\vec{a} \\cdot \\vec{b} = |a||b|\\cos\\theta$ (0 if $\\perp$)</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Cross Product</td>
                  <td class="p-3">$\\vec{a} \\times \\vec{b} = |a||b|\\sin\\theta \\hat{n}$ (0 if $\\parallel$)</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold">Projection</td>
                  <td class="p-3">$\\vec{a}$ on $\\vec{b} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-500">🧠 Practice Quiz</h3>

        <div class="space-y-6">
          <!-- Q27 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray-500">Q27. Angle Between Vectors</h4>
            <p class="mb-4 text-gray-800">If $|\\vec{a} + \\vec{b}| = |\\vec{a} - \\vec{b}|$, what is the angle between $\\vec{a}$ and $\\vec{b}$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) $45^\\circ$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) $60^\\circ$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) $90^\\circ$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) $120^\\circ$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [C]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>Square both sides: $|\\vec{a} + \\vec{b}|^2 = |\\vec{a} - \\vec{b}|^2$.</li>
                  <li>$a^2 + b^2 + 2\\vec{a}\\cdot\\vec{b} = a^2 + b^2 - 2\\vec{a}\\cdot\\vec{b}$.</li>
                  <li>$4\\vec{a}\\cdot\\vec{b} = 0 \\implies \\vec{a}\\cdot\\vec{b} = 0$.</li>
                  <li>Dot product is 0, so angle is $90^\\circ$.</li>
                </ol>
              </div>
            </details>
          </div>
        </div>
      `
    },
    {
      title: 'Trigonometry',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Trigonometry</h3>
          <div class="overflow-x-auto bg-black/40 rounded-lg p-4 border border-white/20">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-white/30 text-indigo-200">
                  <th class="p-3">Concept</th>
                  <th class="p-3">Formula / Rule</th>
                </tr>
              </thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Inverse Sum</td>
                  <td class="p-3">$\\sin^{-1}x + \\cos^{-1}x = \\pi/2$</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Sine Rule</td>
                  <td class="p-3">$a/\\sin A = b/\\sin B = c/\\sin C = 2R$</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold">Cosine Rule</td>
                  <td class="p-3">$a^2 = b^2+c^2-2bc\\cos A$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-500">🧠 Practice Quiz</h3>

        <div class="space-y-6">
          <!-- Q31 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray-500">Q31. Inverse Functions</h4>
            <p class="mb-4 text-gray-800">Value of $\\sin(\\cot^{-1} x)$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) $\\sqrt{1+x^2}$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) $x$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) $(1+x^2)^{-1/2}$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) $1/x$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [C]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>Let $\\theta = \\cot^{-1} x$. So $\\cot \\theta = x/1$.</li>
                  <li>Draw triangle: Adj = $x$, Opp = $1$.</li>
                  <li>Hypotenuse = $\\sqrt{1+x^2}$.</li>
                  <li>We need $\\sin \\theta = \\text{Opp}/\\text{Hyp} = 1/\\sqrt{1+x^2}$.</li>
                </ol>
              </div>
            </details>
          </div>
        </div>
      `
    },
    {
      title: 'Probability & Statistics',
      content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">📐 Cheat Sheet: Prob & Stats</h3>
          <div class="overflow-x-auto bg-black/40 rounded-lg p-4 border border-white/20">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-white/30 text-indigo-200">
                  <th class="p-3">Concept</th>
                  <th class="p-3">Formula / Rule</th>
                </tr>
              </thead>
              <tbody class="text-gray-800">
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Probability</td>
                  <td class="p-3">$P(E) = n(E)/n(S)$</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="p-3 font-bold">Binomial Dist</td>
                  <td class="p-3">$P(X=k) = ^nC_k p^k q^{n-k}$</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold">Variance</td>
                  <td class="p-3">$\\sigma^2 = npq$ (for Binomial)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-500">🧠 Practice Quiz</h3>

        <div class="space-y-6">
          <!-- Q35 -->
          <div class="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
            <h4 class="font-bold text-lg mb-2 text-gray-500">Q35. Probability (Dice)</h4>
            <p class="mb-4 text-gray-800">3 numbers are chosen from 1-20. What is the probability they are consecutive?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">A) $3/190$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">B) $1/1140$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">C) $1/190$</div>
              <div class="p-3 bg-black/40 rounded border border-white/10 hover:border-indigo-400 hover:bg-black/60 cursor-pointer text-white font-medium transition-all">D) $3/1140$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-900 flex items-center gap-2 select-none p-2 hover:bg-white/10 rounded transition-colors">
                <span>👁️ Show Solution</span>
              </summary>
              <div class="mt-4 p-4 bg-green-900/40 border border-green-500/50 rounded-lg shadow-inner">
                <p class="font-bold text-green-300 mb-2">✅ Correct Answer: [A]</p>
                <p class="font-semibold text-gray-500 mb-2">Analysis:</p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-800">
                  <li>Total ways to choose 3 from 20: $^{20}C_3 = \\frac{20 \\times 19 \\times 18}{6} = 1140$.</li>
                  <li>Consecutive sets: (1,2,3), (2,3,4)... up to (18,19,20). Total 18 sets.</li>
                  <li>Prob = $18/1140 = 3/190$.</li>
                </ol>
              </div>
            </details>
          </div>
        </div>
      `
    }
  ]
};
