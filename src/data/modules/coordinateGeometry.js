import { TrendingUp } from 'lucide-react';

export const coordinateGeometry = {
    id: 'coordinate-geometry',
    title: 'Coordinate Geometry',
    icon: TrendingUp,
    description: 'Rectangular Cartesian coordinates, equations of lines, circles, and conic sections.',
    color: 'from-purple-500 to-pink-500',
    topics: [
        {
            title: 'Core Components',
            content: `
        <p>The fundamental requirements include understanding coordinates, lines, distance, and circles.</p>
        
        <div class="formula-card">
          <h4>Circle Equation</h4>
          <p class="math">$$ (x - h)^2 + (y - k)^2 = r^2 $$</p>
          <p class="description">Circle with center $(h, k)$ and radius $r$.</p>
        </div>
      `
        },
        {
            title: 'Straight Lines',
            content: `
        <p>Fundamental concepts of lines in a 2D plane.</p>
        
        <div class="formula-card">
          <h4>Basic Formulas</h4>
          <ul>
              <li><strong>Distance Formula:</strong> $$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$</li>
              <li><strong>Mid-point:</strong> $$ M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right) $$</li>
              <li><strong>Slope ($m$):</strong> $$ m = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan \\theta $$</li>
          </ul>
        </div>

        <div class="formula-card">
          <h4>Equations of a Line</h4>
          <ul>
              <li><strong>Slope-Intercept:</strong> $y = mx + c$</li>
              <li><strong>Point-Slope:</strong> $y - y_1 = m(x - x_1)$</li>
              <li><strong>Two-Point:</strong> $\\frac{y - y_1}{x - x_1} = \\frac{y_2 - y_1}{x_2 - x_1}$</li>
              <li><strong>General Form:</strong> $Ax + By + C = 0$</li>
          </ul>
        </div>

        <div class="formula-card">
          <h4>Pair of Straight Lines</h4>
          <p class="math">$$ ax^2 + 2hxy + by^2 = 0 $$</p>
          <p class="description">Represents a pair of lines passing through the origin.</p>
          <p>Angle between lines: $\\tan \\theta = \\left| \\frac{2\\sqrt{h^2 - ab}}{a+b} \\right|$</p>
        </div>
      `
        },
        {
            title: 'Conic Sections',
            content: `
        <p>Conic sections are curves produced when a plane intersects a right circular cone. They are defined by their <strong>eccentricity ($e$)</strong>.</p>
        
        <div class="formula-card">
          <h4>Standard Formulas & Eccentricity</h4>
          <ul>
              <li><strong>Ellipse ($0 < e < 1$):</strong> $$ \\frac{(x-a)^2}{h^2} + \\frac{(y-b)^2}{k^2} = 1 $$</li>
              <li><strong>Parabola ($e = 1$):</strong> $$ (y-b)^2 = 4p(x-a) $$</li>
              <li><strong>Hyperbola ($e > 1$):</strong> $$ \\frac{(x-a)^2}{h^2} - \\frac{(y-b)^2}{k^2} = 1 $$</li>
              <li><strong>Circle ($e = 0$):</strong> $$ x^2 + y^2 = r^2 $$</li>
          </ul>
        </div>

        <div class="example-card">
          <h4>Example: Ellipse</h4>
          <p><strong>Equation:</strong> $16x^2 + 5y^2 = 400$</p>
          <p><strong>Task:</strong> Find the length of the major axis.</p>
          <p><strong>Solution:</strong> For an ellipse, the length of the major axis is $2h$.</p>
        </div>
      `
        },
        {
            title: 'Geometric Transformations',
            content: `
        <p>The study includes moving or altering geometric figures:</p>
        <ul>
          <li><strong>Translation:</strong> Shifting a figure.</li>
          <li><strong>Rotation:</strong> Turning a figure around a point.</li>
          <li><strong>Scaling:</strong> Changing the size of a figure.</li>
        </ul>
      `
        }
    ]
};
