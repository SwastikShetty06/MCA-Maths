import { Cpu } from 'lucide-react';

export const computerConceptsStrategy = {
    id: 'computer-concepts-strategy',
    title: 'Computer Concepts & Strategy',
    icon: Cpu,
    description: 'Interactive Master Tutor: Complete 26-Question Bank & Strategic Guide for MAH MCA CET 2026.',
    color: 'from-blue-500 to-cyan-500',
    topics: [
        // --- SECTION 1: EXECUTIVE INTELLIGENCE ---
        {
            title: '1. Executive Strategy',
            content: `
        <h3 class="text-xl font-bold text-indigo-900 mb-2">1.1 The Strategic Lever</h3>
        <p class="text-gray-900 mb-4">
          Computer Concepts offers the highest <strong>"Return on Time Invested" (ROTI)</strong>. Unlike Math, which requires calculation, these questions are often "know it or you don't." Successful candidates use this section to bank marks rapidly (10-15 minutes) to buy time for Logical Reasoning.
        </p>
        
        <div class="bg-yellow-100 border-l-4 border-yellow-600 p-4 my-4 rounded-r shadow-sm">
          <h4 class="text-yellow-800 font-bold m-0">⚠️ 2026 EXAM TREND</h4>
          <p class="text-gray-800 mt-2">The trend is shifting from <em>definitions</em> to <em>application</em>. Don't just memorize what a pointer is; know how to predict its output in a C program.</p>
        </div>

        <h3 class="text-xl font-bold text-indigo-900 mb-2">1.2 Weightage Analysis</h3>
        <p class="text-gray-800 mb-4">Based on 2020–2024 cycles, here is where you should focus your energy:</p>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse bg-white/60 rounded-lg border border-gray-300 shadow-sm">
            <thead>
              <tr class="border-b-2 border-gray-300 text-indigo-900 bg-gray-100/50">
                <th class="p-3">Domain</th>
                <th class="p-3">Weightage (Est.)</th>
                <th class="p-3">Strategic Focus</th>
              </tr>
            </thead>
            <tbody class="text-sm text-gray-800">
              <tr class="border-b border-gray-200 hover:bg-white/80">
                <td class="p-3 font-bold">C Programming</td>
                <td class="p-3">5-7 Qs</td>
                <td class="p-3">Output Prediction, Pointers</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-white/80">
                <td class="p-3 font-bold">Data Representation</td>
                <td class="p-3">5-6 Qs</td>
                <td class="p-3">Base Conversions (Hex/Binary)</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-white/80">
                <td class="p-3 font-bold">Operating Systems</td>
                <td class="p-3">3-5 Qs</td>
                <td class="p-3">Scheduling, Deadlocks</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-white/80">
                <td class="p-3 font-bold">Architecture</td>
                <td class="p-3">2-4 Qs</td>
                <td class="p-3">Memory Hierarchy, CPU Buses</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
        },

        // --- SECTION 2: COMPUTER ARCHITECTURE ---
        {
            title: '2. Computer Architecture',
            content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">🏗️ Theory: The Von Neumann Model</h3>
          <p class="text-gray-800 mb-4">You must understand the flow of data through the CPU. The <strong>System Bus</strong> connects the CPU, Memory, and I/O. 

[Image of CPU System Bus Architecture]
</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-white/60 p-4 rounded-lg border border-gray-300 shadow-sm">
               <h4 class="font-bold text-indigo-800">Memory Hierarchy</h4>
               <p class="text-gray-800 text-sm">Registers > Cache (SRAM) > RAM (DRAM) > Disk. <br/><strong>Rule:</strong> As you go down, speed decreases, cost decreases, but capacity increases.</p>
               

[Image of Computer Memory Hierarchy Pyramid]

            </div>
             <div class="bg-white/60 p-4 rounded-lg border border-gray-300 shadow-sm">
               <h4 class="font-bold text-indigo-800">The Instruction Cycle</h4>
               <p class="text-gray-800 text-sm">Fetch -> Decode -> Execute -> Store. <br/>Controlled by the <strong>Program Counter (PC)</strong>.</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-900">🧠 Practice Quiz (Q1 - Q6)</h3>
        <div class="space-y-6">
          
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q1. Program Counter</h4>
            <p class="mb-4 text-gray-900">Which register holds the memory address of the <strong>next</strong> instruction to be executed?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) Instruction Register (IR)</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) Program Counter (PC)</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> The PC acts as a pointer. It holds the address of the <em>next</em> step. The IR holds the <em>current</em> instruction being executed. Don't confuse the two.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q2. Execution Terminology</h4>
            <p class="mb-4 text-gray-900">The time required to fetch, decode, and execute an instruction is collectively known as:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) Clock Cycle</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) Instruction Cycle</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> A single Instruction Cycle often takes multiple Clock Cycles. "Seek Time" is for hard disks.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q3. Memory Volatility</h4>
            <p class="mb-4 text-gray-900">Which of the following is classified as "Non-Volatile"?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) SRAM</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">C) ROM</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> ROM retains data without power. SRAM and DRAM (RAM) lose data when power is cut (Volatile).</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q4. The Nerve Center</h4>
            <p class="mb-4 text-gray-900">Which component acts as the "Nerve Center," directing other units?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) ALU</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) Control Unit (CU)</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Analogy:</strong> The ALU is the musician; the Control Unit is the conductor. The CU generates the timing signals.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q5. DMA</h4>
            <p class="mb-4 text-gray-900">Direct Memory Access (DMA) is used to:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) Increase ALU speed</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) Allow I/O to access memory without CPU</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> DMA frees up the CPU from managing mundane data transfers (like Disk to RAM), improving overall system performance.</p>
              </div>
            </details>
          </div>

           <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q6. System Bus</h4>
            <p class="mb-4 text-gray-900">Which system bus is <strong>bidirectional</strong>?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) Address Bus</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">C) Data Bus</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> Data must flow IN (read) and OUT (write) of the CPU. The Address bus is unidirectional (CPU -> Memory).</p>
              </div>
            </details>
          </div>
        </div>
      `
        },

        // --- SECTION 3: DATA REPRESENTATION ---
        {
            title: '3. Data Representation',
            content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">🔢 Theory: Logic & Numbers</h3>
          <p class="text-gray-800 mb-4">Accuracy is key here. A single bit flip makes the whole answer wrong. Review your logic gates:</p>
          

[Image of Logic Gates Symbols]

          <div class="bg-white/60 p-4 rounded-lg border border-gray-300 mt-4 shadow-sm">
             <h4 class="font-bold text-indigo-800">Universal Gates</h4>
             <p class="text-gray-800 text-sm"><strong>NAND</strong> and <strong>NOR</strong> are universal. You can build ANY other gate (AND, OR, NOT) using just these.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-900">🧠 Practice Quiz (Q7 - Q12)</h3>
        <div class="space-y-6">
          
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q7. Binary Conversion</h4>
            <p class="mb-4 text-gray-900">Binary equivalent of decimal 14?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) 1100</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) 1110</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Calc:</strong> $8+4+2+0 = 14$.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q8. Hex Conversion</h4>
            <p class="mb-4 text-gray-900">Hex equivalent of decimal 431?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) 1AF</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) 1BF</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> $431 \\div 16 = 26$ rem 15 (F). $26 \\div 16 = 1$ rem 10 (A). $1 \\div 16 = 0$ rem 1. Result: 1AF.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q9. Logic Gates</h4>
            <p class="mb-4 text-gray-900">Which is a "Universal Gate"?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) XOR</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">C) NAND</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> NAND and NOR are the only universal gates.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q10. Hex to Octal</h4>
            <p class="mb-4 text-gray-900">Octal equivalent of (F3B1)$_{16}$?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) 171661</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) 172101</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800"><strong>Strategy:</strong> Convert Hex -> Binary -> Group by 3 -> Octal. Do NOT convert to decimal first (too slow).</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q11. 2's Complement</h4>
            <p class="mb-4 text-gray-900">Decimal value of 8-bit signed number 1111 1010?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) -6</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">C) 250</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> MSB is 1 (Negative). Invert bits (0000 0101) add 1 (0000 0110 -> 6). Result is -6.</p>
              </div>
            </details>
          </div>

           <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q12. Boolean Algebra</h4>
            <p class="mb-4 text-gray-900">Simplify $Y = (A + B)(A + C)$</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) $A + BC$</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">D) $A + B + C$</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800"><strong>Distributive Law:</strong> $AA + AC + AB + BC = A(1+C+B) + BC = A + BC$.</p>
              </div>
            </details>
          </div>
        </div>
      `
        },

        // --- SECTION 4: OPERATING SYSTEMS ---
        {
            title: '4. Operating Systems',
            content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">⚙️ Theory: Managing Resources</h3>
          <p class="text-gray-800 mb-4">The OS manages the CPU (Scheduling) and avoids gridlock (Deadlock).</p>
           

[Image of Process State Transition Diagram]

           <div class="bg-white/60 p-4 rounded-lg border border-gray-300 mt-4 shadow-sm">
             <h4 class="font-bold text-indigo-800">Coffman Conditions (Deadlock)</h4>
             <ul class="list-disc pl-5 text-gray-800 text-sm">
               <li>Mutual Exclusion</li>
               <li>Hold and Wait</li>
               <li>No Preemption</li>
               <li>Circular Wait</li>
             </ul>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-900">🧠 Practice Quiz (Q13 - Q17)</h3>
        <div class="space-y-6">
          
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q13. Scheduling</h4>
            <p class="mb-4 text-gray-900">Which algorithm is provably optimal for minimizing average waiting time?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) Round Robin</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">C) Shortest Job First (SJF)</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> SJF ensures short tasks don't get stuck behind long ones.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q14. Round Robin Edge Case</h4>
            <p class="mb-4 text-gray-900">If Round Robin Time Quantum is infinite, it degenerates into:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) FCFS</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">C) Priority</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> If the quantum never expires, the process runs to completion in arrival order (First Come First Serve).</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q15. Deadlock Prevention</h4>
            <p class="mb-4 text-gray-900">Which condition is <strong>NOT</strong> required for Deadlock?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) Mutual Exclusion</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">C) Preemption</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800"><strong>Trick Question:</strong> The requirement is <strong>NO</strong> Preemption. If Preemption exists, Deadlock cannot occur. Thus, "Preemption" is the correct answer for what is NOT required.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q16. Thrashing</h4>
            <p class="mb-4 text-gray-900">"Thrashing" occurs when:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) CPU utilization is high</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) System spends more time paging than executing</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> Occurs when RAM is full and the OS is constantly swapping data to the Disk.</p>
              </div>
            </details>
          </div>

           <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q17. Scheduling Concept</h4>
            <p class="mb-4 text-gray-900">Scheduler assigns priority proportional to waiting time, re-evaluating every T units. This is equivalent to:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) Round Robin</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">C) SJF</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> The "re-evaluation every T" acts as a time quantum. The process waiting longest runs, then its priority drops, mimicking the circular queue of Round Robin.</p>
              </div>
            </details>
          </div>
        </div>
      `
        },

        // --- SECTION 5: C PROGRAMMING ---
        {
            title: '5. C Programming',
            content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">💻 Dry Run Training</h3>
          <p class="text-gray-800 mb-4">This module requires "Mental Compilation". Visualize memory addresses.</p>
          
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-900">🧠 Practice Quiz (Q18 - Q23)</h3>
        <div class="space-y-6">
          
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q18. Pointer Operator Precedence</h4>
            <div class="bg-gray-100 p-3 rounded mb-4 font-mono text-gray-900 text-sm border border-gray-300">
              int i = 10;<br>
              int *p = &i;<br>
              printf("%d", *p++);
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) 10</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) 11</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> Postfix <code>++</code> happens <em>after</em> the value is used. 10 is printed, THEN pointer p increments.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q19. Integer Arithmetic</h4>
            <div class="bg-gray-100 p-3 rounded mb-4 font-mono text-gray-900 text-sm border border-gray-300">
              printf("%d", 9 / 4);
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) 2.25</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) 2</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> Integer division truncates the decimal. 2.25 becomes 2.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q20. Assignment vs Comparison</h4>
            <div class="bg-gray-100 p-3 rounded mb-4 font-mono text-gray-900 text-sm border border-gray-300">
              int x = 1;<br>
              if (x == 1) printf("True");
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) True</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) False</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> Basic equality check. If it was <code>if(x=1)</code>, it would still print True (assignment evaluates to value).</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q21. Pointer Arithmetic</h4>
            <div class="bg-gray-100 p-3 rounded mb-4 font-mono text-gray-900 text-sm border border-gray-300">
               int arr[] = {10, 20, 30};<br>
               int *ptr = arr;<br>
               ptr++;<br>
               printf("%d", *ptr);
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) 11</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">C) 20</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [C]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> <code>ptr++</code> moves the pointer to the next integer in the array (index 1), which is 20.</p>
              </div>
            </details>
          </div>

           <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q22. Function Pointer</h4>
            <p class="mb-4 text-gray-900">Which creates a pointer to a function?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-mono font-medium">A) int *func();</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-mono font-medium">B) int (*func)();</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> Brackets around <code>(*func)</code> bind the pointer to the variable name, not the return type.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q23. sizeof(void)</h4>
            <p class="mb-4 text-gray-900">In C, <code>sizeof(void)</code> is:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) 0</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">D) Undefined / 1 (GCC)</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [D]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> Technically undefined in standard C, but often 1 in GCC. Choose "Undefined" if available.</p>
              </div>
            </details>
          </div>
        </div>
      `
        },

        // --- SECTION 6: MISCELLANEOUS ---
        {
            title: '6. Miscellaneous',
            content: `
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-indigo-900 mb-4">🌐 Internet & Systems</h3>
          

[Image of OSI Model Layers]

          <p class="text-gray-800 mt-4">Understanding the 7 layers of the OSI model is mandatory. Also, know the difference between System Software (OS) and Application Software (Word).</p>
        </div>

        <h3 class="text-xl font-bold mb-4 text-gray-900">🧠 Practice Quiz (Q24 - Q26)</h3>
        <div class="space-y-6">
          
          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q24. OSI Routing</h4>
            <p class="mb-4 text-gray-900">Which layer is responsible for "Routing"?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) Data Link</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) Network Layer</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> Layer 3 (Network) handles logical addressing (IP) and routing.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q25. Software Types</h4>
            <p class="mb-4 text-gray-900">Which is System Software?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) MS Word</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">B) Linux</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [B]</p>
                <p class="text-gray-800"><strong>Analysis:</strong> Linux is an OS (System Software). Word is an Application.</p>
              </div>
            </details>
          </div>

          <div class="bg-white/80 p-6 rounded-xl border border-gray-300 shadow-md">
            <h4 class="font-bold text-lg mb-2 text-indigo-900">Q26. Acronyms</h4>
            <p class="mb-4 text-gray-900">Full form of URL?</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm">
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">A) Uniform Resource Locator</div>
              <div class="p-3 bg-gray-100 rounded border border-gray-300 text-gray-800 font-medium">C) Universal Resource Locator</div>
            </div>
            <details class="group">
              <summary class="cursor-pointer font-bold text-indigo-700 flex items-center gap-2 select-none p-2 hover:bg-gray-100 rounded transition-colors"><span>👁️ Show Solution</span></summary>
              <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r shadow-inner">
                <p class="font-bold text-green-900 mb-2">✅ Correct Answer: [A]</p>
                <p class="text-gray-800"><strong>Tip:</strong> Don't get confused by "Universal". USB is Universal; URL is Uniform.</p>
              </div>
            </details>
          </div>
        </div>
      `
        },

        // --- SECTION 7: STRATEGY ---
        {
            title: '7. Final Strategy',
            content: `
        <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r border-gray-300">
           <h3 class="text-xl font-bold text-indigo-900 mb-4">The Path to 2026</h3>
           <p class="text-gray-800 mb-2"><strong>1. Prioritize C Outputs:</strong> This is the "High Variance" topic. Dedicate 40% of your prep here.</p>
           <p class="text-gray-800 mb-2"><strong>2. Muscle Memory for Conversions:</strong> Hex to Binary should be instant. Don't waste time deriving formulas.</p>
           <p class="text-gray-800"><strong>3. Understand "Why":</strong> Knowing <em>why</em> preemption prevents deadlock is better than just memorizing the list.</p>
         </div>
      `
        }
    ]
};
