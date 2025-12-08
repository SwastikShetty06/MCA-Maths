import { Box } from 'lucide-react';

export const sets = {
    id: 'sets',
    title: 'Sets, Relations, Functions',
    icon: Box,
    description: 'Set theory operations, relations, properties, and types of functions.',
    color: 'from-teal-500 to-cyan-500',
    topics: [
        {
            title: 'Set Theory: Concepts',
            content: `
                <p>A <strong>set</strong> is a well-defined collection of distinct objects.</p>
                
                <h4>Representation</h4>
                <ul>
                    <li><strong>Roster Form:</strong> Elements listed in curly braces, e.g., $V = \\{a, e, i, o, u\\}$.</li>
                    <li><strong>Set-Builder Form:</strong> Defined by a property, e.g., $A = \\{x : x \\in \\mathbb{N}, 3 < x < 10\\}$.</li>
                </ul>

                <h4>Types of Sets</h4>
                <ul>
                    <li><strong>Null/Empty Set ($\phi$):</strong> A set with no elements.</li>
                    <li><strong>Singleton Set:</strong> Contains exactly one element.</li>
                    <li><strong>Power Set ($P(A)$):</strong> The set of all subsets. If $|A| = n$, then $|P(A)| = 2^n$.</li>
                </ul>
            `
        },
        {
            title: 'Operations & Formulas',
            content: `
                <div class="formula-card">
                    <h4>Inclusion-Exclusion Principle</h4>
                    <p class="math">$$ n(A \\cup B) = n(A) + n(B) - n(A \\cap B) $$</p>
                    <p>For three sets:</p>
                    <p class="math">$$ n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(A \\cap C) + n(A \\cap B \\cap C) $$</p>
                    <p class="citation"></p>
                </div>

                <h4>Set Operations</h4>
                <ul>
                    <li><strong>Union ($A \\cup B$):</strong> Elements in A or B or both.</li>
                    <li><strong>Intersection ($A \\cap B$):</strong> Elements common to both.</li>
                    <li><strong>Difference ($A - B$):</strong> Elements in A but strictly not in B ($A \\cap B'$).</li>
                    <li><strong>Symmetric Difference ($A \\Delta B$):</strong> $(A - B) \\cup (B - A)$.</li>
                </ul>

                <h4>De Morgan's Laws</h4>
                <p>$(A \\cup B)' = A' \\cap B'$ and $(A \\cap B)' = A' \\cup B'$.</p>

                <div class="example-card">
                    <h4>Solved Example: Survey Data</h4>
                    <p><strong>Problem:</strong> In a survey of 100 students: 50 like Math (M), 45 like Physics (P), 40 like Chemistry (C). Intersections: $M \\cap P=15, P \\cap C=15, M \\cap C=10$, all three=5. Find how many like none.</p>
                    <p><strong>Solution:</strong> Using Inclusion-Exclusion:</p>
                    <p class="math">$$ n(M \\cup P \\cup C) = 50 + 45 + 40 - (15 + 15 + 10) + 5 = 100 $$</p>
                    <p>None = Total - Union = $100 - 100 = 0$.</p>
                </div>
            `
        },
        {
            title: 'Relations & Functions',
            content: `
                <h4>Relations</h4>
                <p>A subset of Cartesian product $A \\times B$. Types on set A:</p>
                <ul>
                    <li><strong>Reflexive:</strong> $(a, a) \\in R$ for all $a$.</li>
                    <li><strong>Symmetric:</strong> $(a, b) \\in R \\implies (b, a) \\in R$.</li>
                    <li><strong>Transitive:</strong> $(a, b) \\in R, (b, c) \\in R \\implies (a, c) \\in R$.</li>
                    <li><strong>Equivalence Relation:</strong> Reflexive, Symmetric, and Transitive.</li>
                </ul>

                <h4>Functions</h4>
                <ul>
                    <li><strong>One-to-One (Injective):</strong> Distinct inputs yield distinct outputs.</li>
                    <li><strong>Onto (Surjective):</strong> Range = Codomain.</li>
                    <li><strong>Bijective:</strong> Both One-to-One and Onto (Invertible).</li>
                </ul>

                <div class="example-card">
                    <h4>Example: Domain and Range</h4>
                    <p><strong>Function:</strong> $f(x) = \\frac{1}{\\sqrt{x^2 - 4}}$</p>
                    <p><strong>Domain:</strong> $x^2 - 4 > 0 \\implies x \\in (-\\infty, -2) \\cup (2, \\infty)$.</p>
                    <p><strong>Range:</strong> $(0, \\infty)$.</p>
                </div>
            `
        }
    ]
};
