import { Calculator } from 'lucide-react';

export const algebra = {
    id: 'algebra',
    title: 'Algebra',
    icon: Calculator,
    description: 'Fundamental operations, quadratic equations, indices, logarithms, progressions, binomial theorem, and permutations.',
    color: 'from-blue-500 to-cyan-500',
    topics: [
        {
            title: 'Fundamental Operations',
            content: `
        <h3>Expansion and Factorization</h3>
        <p>This area establishes the basic rules for working with algebraic expressions and polynomials. It involves reversing the process of multiplication (expansion) to find factors (factorization).</p>
        
        <div class="formula-card">
          <h4>Binomial Squared</h4>
          <p class="math">$$ (a+b)^2 = a^2 + 2ab + b^2 $$</p>
          <p class="description">Expansion of a binomial squared.</p>
        </div>

        <div class="formula-card">
          <h4>Difference of Squares</h4>
          <p class="math">$$ a^2 - b^2 = (a-b)(a+b) $$</p>
        </div>
      `
        },
        {
            title: 'Quadratic Equations',
            content: `
        <p>Quadratic equations are polynomial equations of the second degree, usually expressed as $ax^2 + bx + c = 0$.</p>
        
        <div class="example-card">
          <h4>Example & Solution</h4>
          <p><strong>Solve:</strong> $x^2 + 4x + 3 = 0$</p>
          <p><strong>Method:</strong> Factor the expression to find the roots.</p>
          <p class="math">$$ (x+1)(x+3) = 0 $$</p>
          <p><strong>Result:</strong> Solutions are $x = -1$ and $x = -3$.</p>
        </div>
      `
        },
        {
            title: 'Indices and Logarithms',
            content: `
        <p>This topic involves properties of exponents (indices) and the logarithmic series. Logarithms are the inverse of exponentiation.</p>
        
        <div class="formula-card">
          <h4>Logarithmic Properties</h4>
          <ul>
              <li>$$ \\log_b(xy) = \\log_b(x) + \\log_b(y) $$</li>
              <li>$$ \\log_b(x/y) = \\log_b(x) - \\log_b(y) $$</li>
              <li>$$ \\log_b(x^k) = k \\cdot \\log_b(x) $$</li>
          </ul>
        </div>

        <div class="example-card">
          <h4>Practice Equations</h4>
          <ul>
              <li>$$ \\log_4(x^2 - 2x) = \\log_4(5x - 12) $$</li>
              <li>$$ \\log(6x) - \\log(4 - x) = \\log(3) $$</li>
              <li>$$ \\ln(x) + \\ln(x + 3) = \\ln(20 - 5x) $$</li>
          </ul>
        </div>
      `
        },
        {
            title: 'Progressions',
            content: `
        <p>Progressions involve sequences of numbers following a defined pattern.</p>
        <ul>
          <li><strong>A.P. (Arithmetic Progression):</strong> Constant difference between terms.</li>
          <li><strong>G.P. (Geometric Progression):</strong> Constant ratio between terms.</li>
          <li><strong>H.P. (Harmonic Progression):</strong> Reciprocals of terms form an A.P.</li>
        </ul>
        
        <div class="example-card">
          <h4>Example (A.P.)</h4>
          <p><strong>Problem:</strong> The sum of the first 5 terms of an A.P. is 65, and the ratio of the 8th term to the 15th term is 4:7.</p>
          <p><strong>Analysis:</strong></p>
          <p>Sum of 5 terms: $a + 2d = 13$</p>
          <p>Ratio condition: $3a = 7d$</p>
          <p><strong>Solution:</strong> Solving these yields $d = 3$ and $a = 7$.</p>
          <p><strong>Series:</strong> 7, 10, 13, 16, 19</p>
        </div>
      `
        },
        {
            title: 'Permutations and Combinations',
            content: `
        <p>This field of combinatorics deals with counting arrangements and selections.</p>
        <ul>
          <li><strong>Permutation:</strong> The arrangement of objects in a specific order (order matters).</li>
          <li><strong>Combination:</strong> The selection of objects where order does not matter.</li>
        </ul>

        <div class="formula-card">
          <h4>Permutation Formula</h4>
          <p class="math">$$ P(n, k) = \\frac{n!}{(n-k)!} $$</p>
          <p class="description">Number of k-permutations of n distinct elements.</p>
        </div>

        <div class="example-card">
          <h4>Example Application</h4>
          <p><strong>Problem:</strong> Find the number of distinct five-digit numbers divisible by 3 that can be made without repetition, using digits 0, 1, 2, 3, 4, 5.</p>
          <p><strong>Answer:</strong> 216</p>
        </div>
      `
        },
        {
            title: 'Binomial Theorem',
            content: `
        <p>The Binomial Theorem describes the algebraic expansion of powers of a binomial.</p>
        
        <div class="formula-card">
          <h4>Expansion Formula</h4>
          <p class="math">$$ (x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k $$</p>
          <p class="description">Where $\\binom{n}{k}$ is the binomial coefficient.</p>
        </div>

        <div class="example-card">
          <h4>Properties</h4>
          <ul>
              <li>Total number of terms in the expansion is $n + 1$.</li>
              <li>Sum of indices of $x$ and $y$ in each term is $n$.</li>
              <li>Sum of binomial coefficients is $2^n$.</li>
          </ul>
        </div>
      `
        }
    ]
};
