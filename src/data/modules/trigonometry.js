import { Layers } from 'lucide-react';

export const trigonometry = {
    id: 'trigonometry',
    title: 'Trigonometry',
    icon: Layers,
    description: 'Identities, equations, properties of triangles, height and distance, and inverse functions.',
    color: 'from-orange-500 to-red-500',
    topics: [
        {
            title: 'Fundamental Identities',
            content: `
        <p>Trigonometry relies on relationships between the sides of a right-angled triangle.</p>
        
        <div class="formula-card">
          <h4>Reciprocal & Pythagorean Identities</h4>
          <p class="math">$$ \\sin^2\\theta + \\cos^2\\theta = 1 $$</p>
          <p class="math">$$ 1 + \\tan^2\\theta = \\sec^2\\theta $$</p>
          <p>$\\sec A = 1/\\cos A$, $\\cot A = 1/\\tan A$</p>
        </div>

        <div class="formula-card">
          <h4>Addition/Subtraction Formulas</h4>
          <p class="math">$$ \\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B $$</p>
          <p class="math">$$ \\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B $$</p>
        </div>
      `
        },
        {
            title: 'Applications',
            content: `
        <div class="formula-card">
          <h4>Area of Triangle</h4>
          <p class="math">$$ \\text{Area} = \\frac{1}{2} ab \\sin C $$</p>
          <p class="description">Using two sides and the included angle.</p>
        </div>
        <p><strong>Trigonometric Equations:</strong> Equations containing one or more trigonometric ratios of unknown angles.</p>
      `
        },
        {
            title: 'Advanced Trigonometry',
            content: `
        <div class="formula-card">
          <h4>Solution of Triangles</h4>
          <p><strong>Sine Rule:</strong> $$ \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} $$</p>
          <p><strong>Cosine Rule:</strong> $$ c^2 = a^2 + b^2 - 2ab \\cos C $$</p>
        </div>

        <div class="formula-card">
          <h4>Inverse Trigonometric Functions</h4>
          <ul>
              <li>$\\sin^{-1} x$: Domain $[-1, 1]$, Range $[-\\pi/2, \\pi/2]$</li>
              <li>$\\cos^{-1} x$: Domain $[-1, 1]$, Range $[0, \\pi]$</li>
              <li>$\\tan^{-1} x$: Domain $\\mathbb{R}$, Range $(-\\pi/2, \\pi/2)$</li>
          </ul>
        </div>

        <div class="example-card">
          <h4>Heights and Distances</h4>
          <p><strong>Angle of Elevation:</strong> Angle above the horizontal line of sight.</p>
          <p><strong>Angle of Depression:</strong> Angle below the horizontal line of sight.</p>
          <p>Used to calculate heights of towers, mountains, etc., using trigonometric ratios.</p>
        </div>
      `
        }
    ]
};
