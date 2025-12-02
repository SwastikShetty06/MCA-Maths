import { Network } from 'lucide-react';

export const booleanAlgebra = {
    id: 'boolean-algebra',
    title: 'Boolean Algebra',
    icon: Network,
    description: 'Logic gates (AND, OR, XOR) and simplification laws.',
    color: 'from-cyan-600 to-blue-600',
    topics: [
        {
            title: 'Basics & Precedence',
            content: `
        <p>Boolean Algebra uses only <strong>0 (False)</strong> and <strong>1 (True)</strong>.</p>
        <div class="formula-card">
          <h4>Order of Operations (Precedence)</h4>
          <ol>
              <li><strong>Parentheses</strong> <code>( )</code></li>
              <li><strong>NOT</strong> (Inverse)</li>
              <li><strong>AND</strong> (Product)</li>
              <li><strong>OR</strong> (Sum)</li>
          </ol>
        </div>
      `
        },
        {
            title: 'Logic Gates',
            content: `
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Logic-gate-index.png" alt="Logic Gates Summary" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />

        <div class="formula-card">
          <h4>Basic Gates</h4>
          <ul>
              <li><strong>AND ($\\cdot$):</strong> All inputs must be 1. $Y = A \\cdot B$</li>
              <li><strong>OR ($+$):</strong> Any input is 1. $Y = A + B$</li>
              <li><strong>NOT (Inverter):</strong> Reverses input. $Y = \\bar{A}$</li>
          </ul>
        </div>

        <div class="formula-card">
          <h4>Universal Gates</h4>
          <p>Can build any other gate using these.</p>
          <ul>
              <li><strong>NAND:</strong> Not AND. $Y = \\overline{A \\cdot B}$</li>
              <li><strong>NOR:</strong> Not OR. $Y = \\overline{A + B}$</li>
          </ul>
        </div>

        <div class="formula-card">
          <h4>Exclusive Gates</h4>
          <ul>
              <li><strong>XOR ($\\oplus$):</strong> Inequality detector. $Y = \\bar{A}B + A\\bar{B}$</li>
              <li><strong>XNOR ($\\odot$):</b> Equality detector. $Y = AB + \\bar{A}\\bar{B}$</li>
          </ul>
        </div>
      `
        },
        {
            title: 'Laws & Simplification',
            content: `
        <div class="formula-card">
          <h4>Key Laws</h4>
          <ul>
              <li><strong>Identity:</strong> $A \\cdot 1 = A$, $A + 0 = A$</li>
              <li><strong>Annulment:</strong> $A \\cdot 0 = 0$, $A + 1 = 1$</li>
              <li><strong>Idempotent:</strong> $A \\cdot A = A$, $A + A = A$</li>
              <li><strong>Complement:</strong> $A \\cdot \\bar{A} = 0$, $A + \\bar{A} = 1$</li>
              <li><strong>Involution:</strong> $\\overline{(\\overline{A})} = A$</li>
          </ul>
        </div>

        <div class="formula-card">
          <h4>Advanced Laws</h4>
          <ul>
              <li><strong>Distributive:</b> $A(B+C) = AB + AC$</li>
              <li><strong>"Trick" Distributive:</strong> $A + \\bar{A}B = A + B$</li>
              <li><strong>Absorption:</strong> $A + AB = A$</li>
          </ul>
        </div>

        <div class="formula-card">
          <h4>De Morgan's Theorems</h4>
          <p>Break the bar, change the sign.</p>
          <ol>
              <li>$\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$</li>
              <li>$\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$</li>
          </ol>
        </div>
      `
        },
        {
            title: 'Venn Diagrams',
            content: `
        <div class="grid grid-cols-2 gap-4">
          <div>
              <p class="text-center font-bold">AND ($A \\cap B$)</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Intersection_of_sets_A_and_B.svg" alt="Venn AND" class="w-3/4 mx-auto block rounded-lg shadow-md bg-white p-2" />
          </div>
          <div>
              <p class="text-center font-bold">OR ($A \\cup B$)</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Union_of_sets_A_and_B.svg" alt="Venn OR" class="w-3/4 mx-auto block rounded-lg shadow-md bg-white p-2" />
          </div>
        </div>
      `
        },
        {
            title: 'Simplification Examples',
            content: `
        <div class="example-card">
          <h4>Ex 1: $Y = ABC + A\\bar{B}C + AB\\bar{C}$</h4>
          <p>1. Take $AC$ common: $AC(B+\\bar{B}) + AB\\bar{C}$</p>
          <p>2. $B+\\bar{B}=1 \\rightarrow AC + AB\\bar{C}$</p>
          <p>3. Take $A$ common: $A(C + B\\bar{C})$</p>
          <p>4. Trick Law: $C + B\\bar{C} = C + B$</p>
          <p><strong>Result:</strong> $A(C+B)$</p>
        </div>

        <div class="example-card">
          <h4>Ex 2: De Morgan's on $\\overline{A \\cdot \\overline{B} \\cdot C}$</h4>
          <p>1. Break bar: $\\bar{A} + \\overline{(\\overline{B})} + \\bar{C}$</p>
          <p>2. Involution: $\\bar{A} + B + \\bar{C}$</p>
        </div>
      `
        },
        {
            title: 'Canonical Forms',
            content: `
        <ul>
          <li><strong>SOP (Sum of Products):</strong> Sum of Minterms (looking for 1s). e.g., $AB + \\bar{A}C$</li>
          <li><strong>POS (Product of Sums):</strong> Product of Maxterms (looking for 0s). e.g., $(A+B)(\\bar{A}+C)$</li>
        </ul>
      `
        }
    ]
};
