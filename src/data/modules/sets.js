import { Box } from 'lucide-react';

export const sets = {
    id: 'sets',
    title: 'Sets, Relations, Functions',
    icon: Box,
    description: 'The study of sets, relations, and functions forms the bedrock of modern mathematics. Proficiency in this module is prerequisite for mastering Probability, Calculus, and Algebra[cite: 3438, 3439, 3440].',
    color: 'from-teal-500 to-cyan-500',
    topics: [
        {
            title: 'Set Theory: Concepts and Operations',
            content: `
                <h3>Definition and Representation</h3>
                <p>A <strong>Set</strong> is formally defined as a well-defined collection of distinct objects, where the order of elements has no significance. The objects are called elements or members[cite: 3443, 3444].</p>
                
                <h4>Representation Types:</h4>
                <ul>
                    <li><strong>Roster (Tabular) Form:</strong> Elements are listed explicitly within curly braces. 
                        <br/>Example: $V = \\{a, e, i, o, u\\}$[cite: 3445].
                    </li>
                    <li><strong>Set-Builder Form:</strong> Elements are defined by a characterizing property $P(x)$. 
                        <br/>Example: $A = \\{x : x \\in \\mathbb{N}, 3 < x < 7\\}$[cite: 3446].
                    </li>
                </ul>

                <h4>Types of Sets:</h4>
                <p>Finite, Infinite, Empty (\\$\\emptyset\\$), Singleton, Equal, Equivalent, Subset ($A \\subseteq B$), and <strong>Power Set</strong>.</p>
            `
        },
        {
            title: 'Set Operations and Inclusion-Exclusion Principle',
            content: `
                <h3>Formulas (Inclusion-Exclusion Principle)</h3>
                <ul>
                    <li><strong>Union of two sets:</strong>
                        $$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$
                    </li>
                    <li><strong>Disjoint Sets:</strong> If $A$ and $B$ are disjoint (non-overlapping), then $n(A \\cap B) = 0$.
                        $$n(A \\cup B) = n(A) + n(B)$$
                    </li>
                    <li><strong>Difference of Sets:</strong>
                        $$n(A - B) = n(A) - n(A \\cap B)$$
                    </li>
                </ul>

                <h3>Solved Problem: Set Operations</h3>
                <p><strong>Problem:</strong> Given $U=\\{a..f\\}, A=\\{a,b,c\\}, B=\\{c,d,e,f\\}, C=\\{c,d,e\\}$. Find $(A \\cap B) \\cup (A \\cap C)$ and $(A - B)'$.</p>
                <p><strong>Solution (Part 1):</strong>
                    <ol>
                        <li>Calculate the intersections: $A \\cap B = \\{c\\}$ and $A \\cap C = \\{c\\}$.</li>
                        <li>Calculate the union: $(A \\cap B) \\cup (A \\cap C) = \\{c\\} \\cup \\{c\\}$.</li>
                        <li>Result: $\\{c\\}$.
                    </ol>
                </p>
                <p><strong>Solution (Part 2):</strong>
                    <ol>
                        <li>Calculate the difference: $A - B = \\{a, b\\}$ (elements in A not in B).</li>
                        <li>Calculate the complement $(A - B)'$: The complement of $\\{a, b\\}$ with respect to the universal set $U=\\{a..f\\}$ is $\\{c, d, e, f\\}$.</li>
                        <li>Result: $\\{c, d, e, f\\}$.
                    </ol>
                </p>
            `
        },
        {
            title: 'Relations and Types of Functions',
            content: `
                <h3>Relations</h3>
                <p>A <strong>Relation</strong> is any subset of the Cartesian product $A \\times B$.</p>
                <h4>Properties of Relations:</h4>
                <ul>
                    <li><strong>Reflexive:</strong> $(a, a) \\in R$ for all $a \\in A$.</li>
                    <li><strong>Symmetric:</strong> If $(a, b) \\in R$, then $(b, a) \\in R$.</li>
                    <li><strong>Transitive:</strong> If $(a, b) \\in R$ and $(b, c) \\in R$, then $(a, c) \\in R$.</li>
                    <li><strong>Equivalence Relation:</strong> A relation that is Reflexive, Symmetric, and Transitive.</li>
                </ul>

                <h3>Functions (Mappings)</h3>
                <p>A function is a relation where every element in the Domain has a unique image in the Codomain.</p>
                <h4>Types of Functions:</h4>
                <ul>
                    <li><strong>One-to-One (Injective):</strong> Distinct elements have distinct images.</li>
                    <li><strong>Onto (Surjective):</strong> The Range of the function is equal to its Codomain.</li>
                    <li><strong>Bijective:</strong> A function that is both One-to-One and Onto.</li>
                </ul>
                            `
        }
    ]
};
