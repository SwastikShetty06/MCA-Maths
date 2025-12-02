import { ClipboardList } from 'lucide-react';

export const mockTest = {
    id: 'mock-test',
    title: 'Advanced Mock Test',
    icon: ClipboardList,
    description: '20 "Super-Hard" questions to test your preparation.',
    color: 'from-yellow-600 to-orange-600',
    topics: [
        {
            title: 'Part 1: Hardware & Representation',
            content: `
        <div class="example-card">
          <h4>Q1. CPU Registers</h4>
          <p><strong>Question:</strong> Which register holds the address of the <em>next</em> instruction, and what happens to it after fetch?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>B) Program Counter (PC); it increments.</strong></p>
            <p class="text-sm text-gray-300">Explanation: PC points to the next instruction. It increments immediately after fetch to prepare for the next cycle.</p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q2. 2's Complement</h4>
          <p><strong>Question:</strong> 2's complement of decimal -9 (8-bit)?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>C) 11110111</strong></p>
            <p class="text-sm text-gray-300">9 = 00001001 -> Invert: 11110110 -> Add 1: 11110111.</p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q3. IEEE 754 Bias</h4>
          <p><strong>Question:</strong> Biased Exponent for 1.0 ($1.0 \\times 2^0$)?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>B) 01111111 (127)</strong></p>
            <p class="text-sm text-gray-300">Bias Rule: Stored = Actual + 127. $0 + 127 = 127$.</p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q4. Negative Infinity</h4>
          <p><strong>Question:</strong> Bit pattern for Negative Infinity?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>A) Sign=1, Exp=All 1s, Mantissa=0</strong></p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q5. Boolean Simplification</h4>
          <p><strong>Question:</strong> Simplify $Y = A + \\bar{A}B + AB$</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>C) $A + B$</strong></p>
            <p class="text-sm text-gray-300">Factor B: $A + B(\\bar{A} + A) = A + B(1) = A + B$.</p>
          </details>
        </div>
      `
        },
        {
            title: 'Part 2: Architecture & Arithmetic',
            content: `
        <div class="example-card">
          <h4>Q6. Cycle Stealing</h4>
          <p><strong>Question:</strong> Which component uses "Cycle Stealing"?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>B) DMA Controller</strong></p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q7. Binary Subtraction</h4>
          <p><strong>Question:</strong> $1000_2 - 0001_2$</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>C) 0111</strong></p>
            <p class="text-sm text-gray-300">$8 - 1 = 7$.</p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q8. Catastrophic Interrupts</h4>
          <p><strong>Question:</strong> Interrupt for power failure?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>D) Non-Maskable Interrupt (NMI)</strong></p>
          </details>
        </div>
      `
        },
        {
            title: 'Part 3: C Programming',
            content: `
        <div class="example-card">
          <h4>Q9. Pointer Output</h4>
          <pre class="bg-slate-800 p-2 rounded text-white font-mono text-sm">
int x = 10; int *p = &x;
int y = (*p)++;
printf("%d, %d", x, y);
          </pre>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>B) 11, 10</strong></p>
            <p class="text-sm text-gray-300">(*p)++ uses value (10) for y, then increments x to 11.</p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q10. Pointer Arithmetic</h4>
          <p><strong>Question:</strong> <code>*(p + 3) - *p + 2</code> for <code>{10, 20, 30, 40, 50}</code></p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>A) 32</strong></p>
            <p class="text-sm text-gray-300">40 - 10 + 2 = 32.</p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q11. Precedence</h4>
          <p><strong>Question:</strong> <code>5 + 3 * 2 % 4</code></p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>C) 7</strong></p>
            <p class="text-sm text-gray-300">3*2=6 -> 6%4=2 -> 5+2=7.</p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q12. Union Size</h4>
          <p><strong>Question:</strong> Union { int, char, double } size?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>B) 8 bytes</strong></p>
            <p class="text-sm text-gray-300">Size of largest member (double).</p>
          </details>
        </div>
      `
        },
        {
            title: 'Part 4: Data Structures',
            content: `
        <div class="example-card">
          <h4>Q13. BST Traversal</h4>
          <p><strong>Question:</strong> Sorted order traversal?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>C) In-order</strong></p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q14. Stack Operations</h4>
          <p><strong>Question:</strong> Push(1,2), Pop, Push(3,4), Pop, Pop. Top?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>A) 1</strong></p>
            <p class="text-sm text-gray-300">Stack: [1] -> [1,2] -> [1] -> [1,3] -> [1,3,4] -> [1,3] -> [1].</p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q15. Undo Feature</h4>
          <p><strong>Question:</strong> DS for Undo?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>B) Stack</strong></p>
            <p class="text-sm text-gray-300">LIFO behavior.</p>
          </details>
        </div>
      `
        },
        {
            title: 'Part 5: Operating Systems',
            content: `
        <div class="example-card">
          <h4>Q16. Deadlock Prevention</h4>
          <p><strong>Question:</strong> "Release all before requesting new" removes which condition?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>D) Hold and Wait</strong></p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q17. Infinite Quantum</h4>
          <p><strong>Question:</strong> Round Robin with infinite quantum behaves like?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>B) FCFS</strong></p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q18. Thrashing</h4>
          <p><strong>Question:</strong> What is Thrashing?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>B) CPU spends time swapping pages</strong></p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q19. Process States</h4>
          <p><strong>Question:</strong> NOT a process state?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>C) Saving</strong></p>
          </details>
        </div>

        <div class="example-card">
          <h4>Q20. Logic Gate</h4>
          <p><strong>Question:</strong> Gate for $\\bar{A}B + A\\bar{B}$?</p>
          <details class="mt-2">
            <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
            <p class="mt-2"><strong>C) XOR</strong></p>
          </details>
        </div>
      `
        }
    ]
};
