import { Box } from 'lucide-react';

export const sets = {
    id: 'sets',
    title: 'Sets, Relations, Functions',
    icon: Box,
    description: 'Set theory operations, relations, properties, and types of functions.',
    color: 'from-teal-500 to-cyan-500',
    topics: [
        {
            title: 'Set Definitions',
            content: `
        <p>A Set is a collection of distinct objects where order has no significance.</p>
        
        <div class="example-card">
          <h4>Representation</h4>
          <p><strong>Roster Form:</strong> $A = \\{1996, 2000, 2004\\}$ (e.g., Leap years)</p>
          <p><strong>Set Builder Form:</strong> $S = \\{x : x \\text{ is an even prime number}\\}$</p>
        </div>

        <p><strong>Types:</strong> Finite, Infinite, Empty ($\\emptyset$), Singleton, Equal, Equivalent, Subset ($A \\subseteq B$), Power Set.</p>
      `
        },
        {
            title: 'Operations & Formulas',
            content: `
        <div class="formula-card">
          <h4>Inclusion-Exclusion Principle</h4>
          <p class="math">$$ n(A \\cup B) = n(A) + n(B) - n(A \\cap B) $$</p>
          <p>For disjoint sets: $n(A \\cup B) = n(A) + n(B)$</p>
          <p>Difference: $n(A - B) = n(A) - n(A \\cap B)$</p>
        </div>

        <div class="example-card">
          <h4>Example: Set Operations</h4>
          <p>Given $U=\\{a..f\\}, A=\\{a,b,c\\}, B=\\{c,d,e,f\\}, C=\\{c,d,e\\}$</p>
          <p><strong>Find $(A \\cap B) \\cup (A \\cap C)$:</strong></p>
          <p>$A \\cap B = \\{c\\}, A \\cap C = \\{c\\} \\to$ Result: $\\{c\\}$</p>
          <p><strong>Find $(A - B)'$:</strong></p>
          <p>$A - B = \\{a, b\\}$ (elements in A not in B)</p>
          <p>Complement = $\\{c, d, e, f\\}$ (elements in U not in $\\{a, b\\}$)</p>
        </div>
      `
        },
        {
            title: 'Relations & Functions',
            content: `
        <div class="formula-card">
          <h4>Relations</h4>
          <p>A subset of Cartesian product $A \times B$.</p>
          <ul>
              <li><strong>Reflexive:</strong> $(a, a) \in R$ for all $a \in A$.</li>
              <li><strong>Symmetric:</strong> If $(a, b) \in R$, then $(b, a) \in R$.</li>
              <li><strong>Transitive:</strong> If $(a, b) \in R$ and $(b, c) \in R$, then $(a, c) \in R$.</li>
              <li><strong>Equivalence Relation:</strong> Reflexive, Symmetric, and Transitive.</li>
          </ul>
        </div>

        <div class="formula-card">
          <h4>Functions (Mappings)</h4>
          <p>A relation where every element in Domain has a unique image in Codomain.</p>
          <ul>
              <li><strong>One-to-One (Injective):</strong> Distinct elements have distinct images.</li>
              <li><strong>Onto (Surjective):</strong> Range = Codomain.</li>
              <li><strong>Bijective:</strong> Both One-to-One and Onto.</li>
          </ul>
        </div>
      `
        }
    ]
};
