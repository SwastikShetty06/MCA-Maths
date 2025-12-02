import { FunctionSquare } from 'lucide-react';

export const differentialEquations = {
    id: 'differential-equations',
    title: 'Differential Equations',
    icon: FunctionSquare,
    description: 'First-order linear DEs, homogeneous linear DEs, and nonhomogeneous linear DEs.',
    color: 'from-green-500 to-emerald-500',
    topics: [
        {
            title: 'First-Order Linear DE',
            content: `
        <p>A first-order differential equation involves the first derivative ($y'$). A solution $f(t)$ satisfies the equation.</p>
        
        <div class="formula-card">
          <h4>Solving First-Order Linear Equations</h4>
          <p>Standard Form: $y' + a(x)y = f(x)$</p>
          <p class="math">Integrating Factor $$ u(x) = \\exp\\left(\\int a(x)dx\\right) $$</p>
          <p class="description">This factor is used to find the general solution.</p>
        </div>

        <div class="example-card">
          <h4>Application</h4>
          <p>Finding the differential equation for a family of curves, such as circles with centers on the x-axis that pass through the origin.</p>
        </div>
      `
        },
        {
            title: 'Linear DE with Constant Coefficients',
            content: `
        <p>These equations have the form $y^{(n)} + a_1y^{(n-1)} + \\cdots + a_ny = F(x)$.</p>
        
        <h3>1. Homogeneous Linear DEs</h3>
        <p>Where $F(x) = 0$. Describes natural motion.</p>
        <div class="formula-card">
          <h4>Auxiliary Polynomial</h4>
          <p class="math">$$ P(r) = r^n + a_1r^{n-1} + \\cdots + a_n = 0 $$</p>
          <p>If $r$ is a root, then $y(x) = e^{rx}$ is a solution.</p>
        </div>
        <div class="example-card">
          <h4>Example</h4>
          <p>General solution to $y' - ay = 0$ is $y(x) = ce^{ax}$.</p>
        </div>

        <h3>2. Nonhomogeneous Solutions</h3>
        <p>Where $F(x) \\neq 0$. Includes external force.</p>
        <p>General Solution: $y(x) = y_c(x) + y_p(x)$</p>
        
        <div class="example-card">
          <h4>Method of Undetermined Coefficients</h4>
          <p><strong>Example:</strong> Solve $(D + 1)(D - 1)y = 16e^{3x}$</p>
          <p><strong>Homogeneous Solution ($y_c$):</strong> $c_1e^x + c_2e^{-x}$</p>
          <p><strong>Particular Solution ($y_p$):</strong> Found using annihilator $D-3$.</p>
        </div>
      `
        }
    ]
};
