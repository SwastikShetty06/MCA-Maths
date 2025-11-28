import { BookOpen, Calculator, FunctionSquare, TrendingUp, PieChart, Box, Layers, Sigma } from 'lucide-react';

export const courseContent = [
  {
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
      }
    ]
  },
  {
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
  },
  {
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
  },
  {
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
      }
    ]
  },
  {
    id: 'probability',
    title: 'Probability & Statistics',
    icon: PieChart,
    description: 'Fundamental probability, descriptive statistics, theoretical distributions, and data analysis.',
    color: 'from-indigo-500 to-violet-500',
    topics: [
      {
        title: 'Core Statistical Concepts',
        content: `
          <p>Methods for summarizing and analyzing data sets, including Frequency Distributions and Measures of Dispersions.</p>
          
          <div class="formula-card">
            <h4>Measures of Shape</h4>
            <ul>
                <li><strong>Skewness:</strong> Asymmetry of distribution (Positive, Negative, Symmetrical).</li>
                <li><strong>Kurtosis:</strong> Degree to which data values cluster around the mean.</li>
            </ul>
          </div>

          <div class="example-card">
            <h4>Averages & Expectations</h4>
            <p>Example: Analyzing the relationship between averages of consecutive odd and even numbers to find specific values.</p>
          </div>
        `
      },
      {
        title: 'Probability & Distributions',
        content: `
          <p>Covers Basic Concepts, Dependent/Independent Events, and Theoretical Distributions.</p>
          
          <div class="formula-card">
            <h4>Theoretical Distributions</h4>
            <ul>
                <li>Binomial Distribution</li>
                <li>Poisson Distribution</li>
                <li>Normal Distribution</li>
            </ul>
          </div>
          <p>Also covers <strong>Correlation and Regression</strong> and <strong>Curve Fitting (Least Squares)</strong>.</p>
        `
      }
    ]
  },
  {
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
      }
    ]
  },
  {
    id: 'quantitative',
    title: 'Arithmetic (Quantitative Aptitude)',
    icon: Calculator,
    description: 'Ratios, percentages, time and work, distance, speed, and time.',
    color: 'from-yellow-500 to-orange-500',
    topics: [
      {
        title: 'Ratios and Proportions',
        content: `
          <p>Arithmetic includes solving quantitative aptitude problems like Ratios and Proportions.</p>
          <div class="example-card">
            <h4>Mixture Problem</h4>
            <p><strong>Problem:</strong> In a 13-liter mixture (Milk:Water = 3:2), 3 liters are replaced by milk. Find the new ratio.</p>
            <p><strong>Solution:</strong> After removing 3L, 10L remain (6L Milk, 4L Water). Add 3L Milk -> 9L Milk, 4L Water.</p>
            <p><strong>Result:</strong> 9:4</p>
          </div>
        `
      },
      {
        title: 'Time, Speed, Percentage',
        content: `
          <div class="example-card">
            <h4>Profit & Loss</h4>
            <p><strong>Problem:</strong> Profit selling at 998 = Loss selling at 864. Find CP.</p>
            <p><strong>Equation:</strong> $998 - CP = CP - 864 \\Rightarrow 2CP = 1862 \\Rightarrow CP = 931$.</p>
          </div>
          <div class="example-card">
            <h4>Boats & Streams</h4>
            <p><strong>Concept:</strong> Downstream speed = $u+v$, Upstream = $u-v$.</p>
            <p><strong>Example:</strong> Distance downstream is 50% more than upstream in same time.</p>
          </div>
        `
      }
    ]
  },
  {
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
                <li><strong>Sphere:</strong> Volume = $\\frac{4}{3} \\pi r^3$</li>
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
  }
];
