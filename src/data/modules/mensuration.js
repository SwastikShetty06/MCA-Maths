import { Sigma } from 'lucide-react';

export const mensuration = {
    id: 'mensuration',
    title: 'Mensuration',
    icon: Sigma,
    description: 'Areas and perimeters of 2D shapes, and volumes and surface areas of 3D solids.',
    color: 'from-rose-500 to-pink-500',
    topics: [
        {
            title: 'Areas and Volumes',
            content: `
        <p>Calculating areas, volumes, and surface areas of geometric figures.</p>
        <div class="formula-card">
          <h4>Formulas</h4>
          <ul>
              <li><strong>Triangle Area:</strong> $$ \\frac{1}{2} \\times \\text{base} \\times \\text{height} $$</li>
              <li><strong>Circle:</strong> Area = $\\pi r^2$, Circumference = $2\\pi r$</li>
              <li><strong>Cylinder:</strong> Vol = $\\pi r^2 h$, CSA = $2\\pi r h$</li>
              <li><strong>Cone:</strong> Vol = $\\frac{1}{3}\\pi r^2 h$, CSA = $\\pi r l$</li>
              <li><strong>Sphere:</strong> Volume = $\\frac{4}{3} \\pi r^3$, Surface Area = $4\\pi r^2$</li>
          </ul>
        </div>
        <div class="example-card">
          <h4>Volume Conservation</h4>
          <p><strong>Problem:</strong> Block (66x49x12) melted to form a sphere. Find radius.</p>
          <p><strong>Equation:</strong> $$ 66 \\times 49 \\times 12 = \\frac{4}{3} \\times \\frac{22}{7} \\times r^3 $$</p>
          <p><strong>Result:</strong> $r \\approx 21$</p>
        </div>
      `
        }
    ]
};
