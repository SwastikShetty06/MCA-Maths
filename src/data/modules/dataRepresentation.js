import { Binary } from 'lucide-react';

export const dataRepresentation = {
    id: 'data-representation',
    title: 'Data Representation',
    icon: Binary,
    description: 'Number systems (Binary, Octal, Hex), ASCII, Unicode, and conversions.',
    color: 'from-green-600 to-teal-600',
    topics: [
        {
            title: 'Number Systems',
            content: `
        <p>Computers strictly use binary, but humans use decimal. You must master the four key systems.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Hexadecimal_multiplication_table.svg" alt="Hexadecimal Chart" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />
        
        <div class="formula-card">
          <h4>Key Systems</h4>
          <ul>
              <li><strong>Decimal (Base 10):</strong> 0-9. Example: $(25)_{10}$</li>
              <li><strong>Binary (Base 2):</strong> 0, 1. Example: $(11001)_2$</li>
              <li><strong>Octal (Base 8):</strong> 0-7. Example: $(31)_8$</li>
              <li><strong>Hexadecimal (Base 16):</strong> 0-9, A-F. Example: $(19)_{16}$</li>
          </ul>
        </div>
      `
        },
        {
            title: 'Number Conversions',
            content: `
        <div class="example-card">
          <h4>Decimal to Binary (Integer)</h4>
          <p><strong>Method:</strong> Repeated Division by 2. Read remainders <strong>Bottom-to-Top</strong>.</p>
          <p>Example: $(13)_{10} \\rightarrow (1101)_2$</p>
        </div>

        <div class="example-card">
          <h4>Decimal to Binary (Fraction)</h4>
          <p><strong>Method:</strong> Repeated Multiplication by 2. Read integers <strong>Top-to-Bottom</strong>.</p>
          <p>Example: $(0.625)_{10} \\rightarrow (0.101)_2$</p>
        </div>

        <div class="example-card">
          <h4>Binary to Decimal</h4>
          <p><strong>Method:</strong> Positional Notation ($2^n$).</p>
          <p>Example: $(110.1)_2 = 4 + 2 + 0 + 0.5 = 6.5$</p>
        </div>
      `
        },
        {
            title: 'Hex & Octal Shortcuts',
            content: `
        <div class="formula-card">
          <h4>Binary to Hex (4-Bit Rule)</h4>
          <p>Group bits into 4s from decimal point.</p>
          <p>Example: $(1110101011)_2 \\rightarrow 0011 \\ | \\ 1010 \\ | \\ 1011 \\rightarrow 3AB_{16}$</p>
        </div>

        <div class="formula-card">
          <h4>Binary to Octal (3-Bit Rule)</h4>
          <p>Group bits into 3s.</p>
          <p>Example: $(110101)_2 \\rightarrow 110 \\ | \\ 101 \\rightarrow 65_8$</p>
        </div>
      `
        },
        {
            title: 'Signed Numbers',
            content: `
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Twos_complement_circle.svg" alt="2's Complement Visualization" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />
      `
        },
        {
            title: 'Binary Addition',
            content: `
        <p>Operates like decimal addition, but carry over when sum reaches 2.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Binary_Addition.svg" alt="Binary Counter" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />

        <div class="formula-card">
          <h4>The 4 Rules</h4>
          <ul>
              <li>$0 + 0 = 0$</li>
              <li>$0 + 1 = 1$</li>
              <li>$1 + 0 = 1$</li>
              <li>$1 + 1 = 0$ (Carry 1)</li>
              <li>$1 + 1 + 1 = 1$ (Carry 1)</li>
          </ul>
        </div>

        <div class="example-card">
          <h4>Example: $1011 + 1101$</h4>
          <p>Decimal: $11 + 13 = 24$</p>
          <pre class="bg-slate-800 p-2 rounded text-white font-mono text-sm">
  1 1 1 1   (Carries)
    1 0 1 1
+   1 1 0 1
-----------
  1 1 0 0 0
          </pre>
        </div>
      `
        },
        {
            title: 'Binary Subtraction',
            content: `
        <div class="formula-card">
          <h4>Method A: Borrow Method</h4>
          <ul>
              <li>$0 - 0 = 0$</li>
              <li>$1 - 0 = 1$</li>
              <li>$1 - 1 = 0$</li>
              <li>$0 - 1 = 1$ (Borrow 1 from left, counts as 2)</li>
          </ul>
        </div>

        <div class="example-card">
          <h4>Example: $1100 - 0111$</h4>
          <p>Decimal: $12 - 7 = 5$</p>
          <pre class="bg-slate-800 p-2 rounded text-white font-mono text-sm">
      0 10 1  (Borrows)
      1 1 0 0
      -   0 1 1 1
      -----------
      0 1 0 1
          </pre>
        </div>
      `
        },
        {
            title: 'Binary Multiplication & Division',
            content: `
        <div class="example-card">
          <h4>Multiplication ($101 \\times 11$)</h4>
          <p>Shift and Add.</p>
          <pre class="bg-slate-800 p-2 rounded text-white font-mono text-sm">
      1 0 1
    x   1 1
    -------
      1 0 1
+   1 0 1 x
-----------
    1 1 1 1
          </pre>
        </div>

        <div class="example-card">
          <h4>Division ($110 \\div 10$)</h4>
          <p>Shift and Subtract. Result: $11$ (3).</p>
        </div>
      `
        },
        {
            title: '2\'s Complement Arithmetic',
            content: `
        <p><strong>Formula:</strong> $A - B = A + (\\text{2's Comp of } B)$</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Integer_overflow.svg" alt="Overflow Logic" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />

        <div class="example-card">
          <h4>Case 1: Positive Result ($7 - 5$)</h4>
          <p>1. 2's Comp of 5 ($0101$) $\\rightarrow$ $1011$</p>
          <p>2. Add $7 (0111) + (-5) 1011$</p>
          <p>3. Result: $10010$. <strong>Discard Carry</strong> $\\rightarrow$ $0010$ (2).</p>
        </div>

        <div class="example-card">
          <h4>Case 2: Negative Result ($5 - 7$)</h4>
          <p>1. 2's Comp of 7 ($0111$) $\\rightarrow$ $1001$</p>
          <p>2. Add $5 (0101) + (-7) 1001$</p>
          <p>3. Result: $1110$. <strong>No Carry</strong> = Negative.</p>
          <p>4. To check: 2's Comp of $1110$ is $0010$ (2). So, $-2$.</p>
        </div>
        
        <div class="formula-card">
          <h4>Overflow</h4>
          <p>If adding two large positives gives negative (Sign bit 1), or two large negatives gives positive (Sign bit 0), Overflow occurred.</p>
        </div>
      `
        }
    ]
};
