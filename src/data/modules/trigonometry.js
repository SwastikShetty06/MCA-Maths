import { Layers } from 'lucide-react';

export const trigonometry = {
    id: 'trigonometry',
    title: 'Trigonometry',
    icon: Layers,
    description: 'Identities, compound angles, properties of triangles, heights & distances.',
    color: 'from-orange-500 to-red-500',
    topics: [
        {
            title: 'Identities & Compound Angles',
            content: `
                <div class="formula-card">
                    <h4>Fundamental Identities</h4>
                    <p>$\\sin^2 \\theta + \\cos^2 \\theta = 1$; [cite_start]$1 + \\tan^2 \\theta = \\sec^2 \\theta$[cite: 263, 264].</p>
                    [cite_start]<p>$\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$[cite: 268].</p>
                    [cite_start]<p>$\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$[cite: 269].</p>
                    [cite_start]<p>$\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$[cite: 270].</p>
                </div>
                <div class="formula-card">
                    <h4>Double Angle</h4>
                    [cite_start]<p>$\\sin 2A = 2\\sin A \\cos A$[cite: 272].</p>
                    [cite_start]<p>$\\cos 2A = \\cos^2 A - \\sin^2 A = 1 - 2\\sin^2 A$[cite: 273].</p>
                </div>
            `
        },
        {
            title: 'Properties of Triangles',
            content: `
                <div class="formula-card">
                    <h4>Rules</h4>
                    [cite_start]<p><strong>Sine Rule:</strong> $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$[cite: 277].</p>
                    [cite_start]<p><strong>Cosine Rule:</strong> $c^2 = a^2 + b^2 - 2ab \\cos C$[cite: 278].</p>
                    [cite_start]<p><strong>Area:</strong> $\\frac{1}{2}ab \\sin C = \\sqrt{s(s-a)(s-b)(s-c)}$[cite: 279].</p>
                </div>
            `
        },
        {
            title: 'Inverse Functions & Equations',
            content: `
                <ul>
                    [cite_start]<li>$\\sin^{-1} x$: Range $[-\\pi/2, \\pi/2]$[cite: 283].</li>
                    [cite_start]<li>$\\cos^{-1} x$: Range $[0, \\pi]$[cite: 284].</li>
                    [cite_start]<li>$\\tan^{-1} x$: Range $(-\\pi/2, \\pi/2)$[cite: 285].</li>
                </ul>
                <div class="example-card">
                    <h4>Example: Solving Equation</h4>
                    <p>Solve $\\sin 2x - \\sin x = 0$ for $0 \\le x \\le 2\\pi$.</p>
                    <p>$2\\sin x \\cos x - \\sin x = 0 \\implies \\sin x(2\\cos x - 1) = 0$.</p>
                    [cite_start]<p>Roots: $0, \\pi, 2\\pi, \\pi/3, 5\\pi/3$ [cite: 288-294].</p>
                </div>
            `
        }
    ]
};
