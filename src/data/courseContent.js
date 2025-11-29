import { BookOpen, Calculator, FunctionSquare, TrendingUp, PieChart, Box, Layers, Sigma, Cpu, Binary, Network, Database, Terminal, Server, ClipboardList } from 'lucide-react';

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
            <h4>Measures of Dispersion</h4>
            <ul>
                <li><strong>Range:</strong> Max Value - Min Value</li>
                <li><strong>Variance ($\sigma^2$):</strong> Mean of squared deviations. $$ \sigma^2 = \frac{\sum (x_i - \mu)^2}{N} $$</li>
                <li><strong>Standard Deviation ($\sigma$):</b> Square root of variance.</li>
            </ul>
          </div>

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
  },
  {
    id: 'computer-basics',
    title: 'Computer Basics',
    icon: Cpu,
    description: 'Hardware components, CPU architecture, memory organization, and I/O devices.',
    color: 'from-blue-600 to-indigo-600',
    topics: [
      {
        title: 'Organization of a Computer',
        content: `
          <p>To understand how a computer works, you must understand the <strong>Von Neumann Architecture</strong>.</p>
          
          <div class="example-card">
            <h4>The Fundamental Block Diagram</h4>
            <p>A computer system consists of three distinct units:</p>
            <ol>
                <li><strong>Input Unit:</strong> Accepts data (e.g., Keyboard).</li>
                <li><strong>CPU:</strong> Processes data (ALU, CU, Registers).</li>
                <li><strong>Output Unit:</strong> Shows result (e.g., Monitor).</li>
            </ol>
            <p><strong>Flow:</strong> Input $\\rightarrow$ CPU $\\rightarrow$ Output.</p>
          </div>

          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Von_Neumann_Architecture.svg" alt="Von Neumann Architecture" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />
        `
      },
      {
        title: 'Central Processing Unit (CPU)',
        content: `
          <p>The "brain" of the computer.</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/CPU_block_diagram.svg" alt="CPU Internals" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />

          <div class="formula-card">
            <h4>Components</h4>
            <ul>
                <li><strong>ALU (Arithmetic Logic Unit):</strong> Performs Math (+, -) and Logic (AND, OR). Does not "decide", only executes.</li>
                <li><strong>CU (Control Unit):</strong> "Traffic Police". Decodes instructions, controls data flow, generates timing signals.</li>
            </ul>
          </div>

          <div class="formula-card">
            <h4>CPU Registers (Internal Memory)</h4>
            <ul>
                <li><strong>ACC (Accumulator):</strong> Stores intermediate/final ALU results.</li>
                <li><strong>PC (Program Counter):</strong> Stores address of the <strong>NEXT</strong> instruction.</li>
                <li><strong>IR (Instruction Register):</strong> Stores instruction <strong>CURRENTLY</strong> being executed.</li>
                <li><strong>MAR:</strong> Memory Address Register.</li>
                <li><strong>MBR/MDR:</strong> Memory Buffer/Data Register.</li>
            </ul>
          </div>
        `
      },
      {
        title: 'Instruction Structure & Cycle',
        content: `
          <div class="formula-card">
            <h4>Instruction Format</h4>
            <p><strong>Opcode:</strong> What to do (e.g., ADD).</p>
            <p><strong>Operand:</strong> Who to do it to (Data/Address).</p>
            <p>Example: <code>ADD A, B</code></p>
          </div>

          <div class="example-card">
            <h4>Instruction Cycle (Machine Cycle)</h4>
            <ol>
                <li><strong>Fetch:</strong> Get instruction from RAM to IR.</li>
                <li><strong>Decode:</strong> CU figures out meaning.</li>
                <li><strong>Execute:</strong> ALU performs operation.</li>
                <li><strong>Store:</strong> Save result.</li>
            </ol>
          </div>
        `
      },
      {
        title: 'Memory Organization',
        content: `
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/ComputerMemoryHierarchy.svg" alt="Memory Hierarchy" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />
          
          <div class="formula-card">
            <h4>Memory Hierarchy</h4>
            <ol>
                <li><strong>Registers:</strong> Fastest, Smallest (Inside CPU).</li>
                <li><strong>Cache (SRAM):</strong> Very fast, between CPU and RAM.</li>
                <li><strong>Primary (RAM/ROM):</strong> Fast, direct access.</li>
                <li><strong>Secondary (HDD/SSD):</strong> Slow, massive storage.</li>
            </ol>
          </div>

          <div class="example-card">
            <h4>Primary Memory Types</h4>
            <ul>
                <li><strong>RAM (Volatile):</strong> SRAM (Flip-flops, Cache), DRAM (Capacitors, Main Memory).</li>
                <li><strong>ROM (Non-Volatile):</strong> Stores BIOS. PROM, EPROM (UV Light), EEPROM (Electric).</li>
            </ul>
          </div>

          <div class="formula-card">
            <h4>Memory Units</h4>
            <p>Nibble = 4 Bits, Byte = 8 Bits.</p>
            <p>KB ($2^{10}$), MB ($2^{20}$), GB ($2^{30}$), TB ($2^{40}$).</p>
          </div>
        `
      },
      {
        title: 'I/O Devices',
        content: `
          <div class="example-card">
            <h4>Input Devices</h4>
            <ul>
                <li><strong>MICR:</strong> Magnetic Ink (Banking/Cheques).</li>
                <li><strong>OMR:</strong> Optical Mark (Exam sheets).</li>
                <li><strong>OCR:</strong> Optical Character (Scanned text to editable).</li>
                <li><strong>Barcode Reader:</strong> UPC.</li>
            </ul>
          </div>

          <div class="example-card">
            <h4>Output Devices</h4>
            <ul>
                <li><strong>Monitors:</strong> CRT, LCD/LED. Resolution = Pixels.</li>
                <li><strong>Printers:</strong> Impact (Dot Matrix), Non-Impact (Laser, Inkjet, Thermal).</li>
                <li><strong>Plotter:</strong> High-quality vector graphics (Blueprints).</li>
            </ul>
          </div>
        `
      },
      {
        title: 'Secondary Storage',
        content: `
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Hard_drive-en.svg" alt="Hard Disk Structure" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />

          <div class="formula-card">
            <h4>Storage Types</h4>
            <ul>
                <li><strong>Magnetic Tape:</strong> Sequential access (Archival).</li>
                <li><strong>HDD (Magnetic Disk):</strong> Direct access. Platters, Tracks, Sectors. Seek Time & Latency.</li>
                <li><strong>Optical Disk:</strong> CD (700MB), DVD (4.7GB), Blu-Ray.</li>
                <li><strong>Flash:</strong> SSD, USB. No moving parts.</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: 'data-representation',
    title: 'Data Representation',
    icon: Binary,
    description: 'Number systems (Binary, Octal, Hex), ASCII, Unicode, and conversions.',
    color: 'from-green-600 to-teal-600',
    topics: [
      {
        title: 'Number Systems',
        content: `
          <p>Computers strictly use binary, but humans use decimal. You must master the four key systems.</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Hexadecimal_multiplication_table.svg" alt="Hexadecimal Chart" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />
          
          <div class="formula-card">
            <h4>Key Systems</h4>
            <ul>
                <li><strong>Decimal (Base 10):</strong> 0-9. Example: $(25)_{10}$</li>
                <li><strong>Binary (Base 2):</strong> 0, 1. Example: $(11001)_2$</li>
                <li><strong>Octal (Base 8):</strong> 0-7. Example: $(31)_8$</li>
                <li><strong>Hexadecimal (Base 16):</strong> 0-9, A-F. Example: $(19)_{16}$</li>
            </ul>
          </div>
        `
      },
      {
        title: 'Number Conversions',
        content: `
          <div class="example-card">
            <h4>Decimal to Binary (Integer)</h4>
            <p><strong>Method:</strong> Repeated Division by 2. Read remainders <strong>Bottom-to-Top</strong>.</p>
            <p>Example: $(13)_{10} \\rightarrow (1101)_2$</p>
          </div>

          <div class="example-card">
            <h4>Decimal to Binary (Fraction)</h4>
            <p><strong>Method:</strong> Repeated Multiplication by 2. Read integers <strong>Top-to-Bottom</strong>.</p>
            <p>Example: $(0.625)_{10} \\rightarrow (0.101)_2$</p>
          </div>

          <div class="example-card">
            <h4>Binary to Decimal</h4>
            <p><strong>Method:</strong> Positional Notation ($2^n$).</p>
            <p>Example: $(110.1)_2 = 4 + 2 + 0 + 0.5 = 6.5$</p>
          </div>
        `
      },
      {
        title: 'Hex & Octal Shortcuts',
        content: `
          <div class="formula-card">
            <h4>Binary to Hex (4-Bit Rule)</h4>
            <p>Group bits into 4s from decimal point.</p>
            <p>Example: $(1110101011)_2 \\rightarrow 0011 \\ | \\ 1010 \\ | \\ 1011 \\rightarrow 3AB_{16}$</p>
          </div>

          <div class="formula-card">
            <h4>Binary to Octal (3-Bit Rule)</h4>
            <p>Group bits into 3s.</p>
            <p>Example: $(110101)_2 \\rightarrow 110 \\ | \\ 101 \\rightarrow 65_8$</p>
          </div>
        `
      },
      {
        title: 'Signed Numbers',
        content: `
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Twos_complement_circle.svg" alt="2's Complement Visualization" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />
        `
      },
      {
        title: 'Binary Addition',
        content: `
          <p>Operates like decimal addition, but carry over when sum reaches 2.</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Binary_Addition.svg" alt="Binary Counter" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />

          <div class="formula-card">
            <h4>The 4 Rules</h4>
            <ul>
                <li>$0 + 0 = 0$</li>
                <li>$0 + 1 = 1$</li>
                <li>$1 + 0 = 1$</li>
                <li>$1 + 1 = 0$ (Carry 1)</li>
                <li>$1 + 1 + 1 = 1$ (Carry 1)</li>
            </ul>
          </div>

          <div class="example-card">
            <h4>Example: $1011 + 1101$</h4>
            <p>Decimal: $11 + 13 = 24$</p>
            <pre class="bg-slate-800 p-2 rounded text-white font-mono text-sm">
  1 1 1 1   (Carries)
    1 0 1 1
+   1 1 0 1
-----------
  1 1 0 0 0
            </pre>
          </div>
        `
      },
      {
        title: 'Binary Subtraction',
        content: `
          <div class="formula-card">
            <h4>Method A: Borrow Method</h4>
            <ul>
                <li>$0 - 0 = 0$</li>
                <li>$1 - 0 = 1$</li>
                <li>$1 - 1 = 0$</li>
                <li>$0 - 1 = 1$ (Borrow 1 from left, counts as 2)</li>
            </ul>
          </div>

          <div class="example-card">
            <h4>Example: $1100 - 0111$</h4>
            <p>Decimal: $12 - 7 = 5$</p>
            <pre class="bg-slate-800 p-2 rounded text-white font-mono text-sm">
      0 10 1  (Borrows)
      1 1 0 0
      -   0 1 1 1
      -----------
      0 1 0 1
            </pre>
          </div>
        `
      },
      {
        title: 'Binary Multiplication & Division',
        content: `
          <div class="example-card">
            <h4>Multiplication ($101 \\times 11$)</h4>
            <p>Shift and Add.</p>
            <pre class="bg-slate-800 p-2 rounded text-white font-mono text-sm">
      1 0 1
    x   1 1
    -------
      1 0 1
+   1 0 1 x
-----------
    1 1 1 1
            </pre>
          </div>

          <div class="example-card">
            <h4>Division ($110 \\div 10$)</h4>
            <p>Shift and Subtract. Result: $11$ (3).</p>
          </div>
        `
      },
      {
        title: '2\'s Complement Arithmetic',
        content: `
          <p><strong>Formula:</strong> $A - B = A + (\\text{2's Comp of } B)$</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Integer_overflow.svg" alt="Overflow Logic" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />

          <div class="example-card">
            <h4>Case 1: Positive Result ($7 - 5$)</h4>
            <p>1. 2's Comp of 5 ($0101$) $\\rightarrow$ $1011$</p>
            <p>2. Add $7 (0111) + (-5) 1011$</p>
            <p>3. Result: $10010$. <strong>Discard Carry</strong> $\\rightarrow$ $0010$ (2).</p>
          </div>

          <div class="example-card">
            <h4>Case 2: Negative Result ($5 - 7$)</h4>
            <p>1. 2's Comp of 7 ($0111$) $\\rightarrow$ $1001$</p>
            <p>2. Add $5 (0101) + (-7) 1001$</p>
            <p>3. Result: $1110$. <strong>No Carry</strong> = Negative.</p>
            <p>4. To check: 2's Comp of $1110$ is $0010$ (2). So, $-2$.</p>
          </div>
          
          <div class="formula-card">
            <h4>Overflow</h4>
            <p>If adding two large positives gives negative (Sign bit 1), or two large negatives gives positive (Sign bit 0), Overflow occurred.</p>
          </div>
        `
      }
    ]
  },
  {
    id: 'floating-point',
    title: 'Floating Point',
    icon: TrendingUp,
    description: 'IEEE 754 Single Precision format for storing decimal numbers.',
    color: 'from-purple-600 to-pink-600',
    topics: [
      {
        title: 'Why Floating Point?',
        content: `
          <p>Fixed-point has limits for very large/small numbers. Floating Point solves this by "floating" the decimal.</p>
          <p><strong>Format:</strong> $\\pm 1.\\text{Mantissa} \\times 2^{\\text{Exponent}}$</p>
        `
      },
      {
        title: 'IEEE 754 Standard (32-bit)',
        content: `
          <p>You <strong>must memorize</strong> the breakdown:</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/IEEE_754_Single_Floating_Point_Format.svg" alt="32-bit Float Structure" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />

          <div class="formula-card">
            <h4>Components</h4>
            <ul>
                <li><strong>Sign (S) [1 Bit]:</strong> 0 = Positive, 1 = Negative.</li>
                <li><strong>Exponent (E) [8 Bits]:</strong> Power of 2. <strong>Biased</strong>.</li>
                <li><strong>Mantissa (M) [23 Bits]:</strong> Precision (digits after decimal).</li>
            </ul>
          </div>
        `
      },
      {
        title: 'Normalization & Bias',
        content: `
          <div class="example-card">
            <h4>The "Hidden 1"</h4>
            <p>Scientific notation always starts with 1 (e.g., $1.01$). Computer does <strong>not store</strong> this leading 1. It is implicit.</p>
          </div>

          <div class="formula-card">
            <h4>Exponent Bias (127)</h4>
            <p>To represent negative powers without 2's complement.</p>
            <p><strong>Formula:</strong> $\\text{Stored Exp} = \\text{Actual Exp} + 127$</p>
          </div>
        `
      },
      {
        title: 'Step-by-Step Conversion',
        content: `
          <div class="example-card">
            <h4>Problem: Convert $-13.625$</h4>
            <ol>
                <li><strong>Sign:</strong> Negative $\\rightarrow$ <strong>1</strong>.</li>
                <li><strong>Binary:</strong> $13 = 1101$, $0.625 = .101$ $\\rightarrow$ $1101.101$</li>
                <li><strong>Normalize:</strong> Move decimal 3 left $\\rightarrow$ $1.101101 \\times 2^3$. Actual Exp = 3.</li>
                <li><strong>Biased Exp:</strong> $3 + 127 = 130 \\rightarrow$ <code>10000010</code>.</li>
                <li><strong>Mantissa:</strong> Drop '1'. Keep <code>101101</code>. Pad with 0s.</li>
            </ol>
            <p><strong>Result:</strong> <code>1 | 10000010 | 1011010000...</code></p>
            <p><strong>Hex:</strong> C15A0000</p>
          </div>
        `
      },
      {
        title: 'Special Cases',
        content: `
          <div class="formula-card">
            <h4>Memorize These</h4>
            <ul>
                <li><strong>Zero (0.0):</strong> Exp=0, Mantissa=0.</li>
                <li><strong>Infinity ($\\infty$):</b> Exp=All 1s, Mantissa=All 0s.</li>
                <li><strong>NaN (Not a Number):</strong> Exp=All 1s, Mantissa=Non-zero.</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: 'boolean-algebra',
    title: 'Boolean Algebra',
    icon: Network,
    description: 'Logic gates (AND, OR, XOR) and simplification laws.',
    color: 'from-cyan-600 to-blue-600',
    topics: [
      {
        title: 'Basics & Precedence',
        content: `
          <p>Boolean Algebra uses only <strong>0 (False)</strong> and <strong>1 (True)</strong>.</p>
          <div class="formula-card">
            <h4>Order of Operations (Precedence)</h4>
            <ol>
                <li><strong>Parentheses</strong> <code>( )</code></li>
                <li><strong>NOT</strong> (Inverse)</li>
                <li><strong>AND</strong> (Product)</li>
                <li><strong>OR</strong> (Sum)</li>
            </ol>
          </div>
        `
      },
      {
        title: 'Logic Gates',
        content: `
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Logic-gate-index.png" alt="Logic Gates Summary" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />

          <div class="formula-card">
            <h4>Basic Gates</h4>
            <ul>
                <li><strong>AND ($\\cdot$):</strong> All inputs must be 1. $Y = A \\cdot B$</li>
                <li><strong>OR ($+$):</strong> Any input is 1. $Y = A + B$</li>
                <li><strong>NOT (Inverter):</strong> Reverses input. $Y = \\bar{A}$</li>
            </ul>
          </div>

          <div class="formula-card">
            <h4>Universal Gates</h4>
            <p>Can build any other gate using these.</p>
            <ul>
                <li><strong>NAND:</strong> Not AND. $Y = \\overline{A \\cdot B}$</li>
                <li><strong>NOR:</strong> Not OR. $Y = \\overline{A + B}$</li>
            </ul>
          </div>

          <div class="formula-card">
            <h4>Exclusive Gates</h4>
            <ul>
                <li><strong>XOR ($\\oplus$):</strong> Inequality detector. $Y = \\bar{A}B + A\\bar{B}$</li>
                <li><strong>XNOR ($\\odot$):</b> Equality detector. $Y = AB + \\bar{A}\\bar{B}$</li>
            </ul>
          </div>
        `
      },
      {
        title: 'Laws & Simplification',
        content: `
          <div class="formula-card">
            <h4>Key Laws</h4>
            <ul>
                <li><strong>Identity:</strong> $A \\cdot 1 = A$, $A + 0 = A$</li>
                <li><strong>Annulment:</strong> $A \\cdot 0 = 0$, $A + 1 = 1$</li>
                <li><strong>Idempotent:</strong> $A \\cdot A = A$, $A + A = A$</li>
                <li><strong>Complement:</strong> $A \\cdot \\bar{A} = 0$, $A + \\bar{A} = 1$</li>
                <li><strong>Involution:</strong> $\\overline{(\\overline{A})} = A$</li>
            </ul>
          </div>

          <div class="formula-card">
            <h4>Advanced Laws</h4>
            <ul>
                <li><strong>Distributive:</b> $A(B+C) = AB + AC$</li>
                <li><strong>"Trick" Distributive:</strong> $A + \\bar{A}B = A + B$</li>
                <li><strong>Absorption:</strong> $A + AB = A$</li>
            </ul>
          </div>

          <div class="formula-card">
            <h4>De Morgan's Theorems</h4>
            <p>Break the bar, change the sign.</p>
            <ol>
                <li>$\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$</li>
                <li>$\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$</li>
            </ol>
          </div>
        `
      },
      {
        title: 'Venn Diagrams',
        content: `
          <div class="grid grid-cols-2 gap-4">
            <div>
                <p class="text-center font-bold">AND ($A \\cap B$)</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Intersection_of_sets_A_and_B.svg" alt="Venn AND" class="w-3/4 mx-auto block rounded-lg shadow-md bg-white p-2" />
            </div>
            <div>
                <p class="text-center font-bold">OR ($A \\cup B$)</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Union_of_sets_A_and_B.svg" alt="Venn OR" class="w-3/4 mx-auto block rounded-lg shadow-md bg-white p-2" />
            </div>
          </div>
        `
      },
      {
        title: 'Simplification Examples',
        content: `
          <div class="example-card">
            <h4>Ex 1: $Y = ABC + A\\bar{B}C + AB\\bar{C}$</h4>
            <p>1. Take $AC$ common: $AC(B+\\bar{B}) + AB\\bar{C}$</p>
            <p>2. $B+\\bar{B}=1 \\rightarrow AC + AB\\bar{C}$</p>
            <p>3. Take $A$ common: $A(C + B\\bar{C})$</p>
            <p>4. Trick Law: $C + B\\bar{C} = C + B$</p>
            <p><strong>Result:</strong> $A(C+B)$</p>
          </div>

          <div class="example-card">
            <h4>Ex 2: De Morgan's on $\\overline{A \\cdot \\overline{B} \\cdot C}$</h4>
            <p>1. Break bar: $\\bar{A} + \\overline{(\\overline{B})} + \\bar{C}$</p>
            <p>2. Involution: $\\bar{A} + B + \\bar{C}$</p>
          </div>
        `
      },
      {
        title: 'Canonical Forms',
        content: `
          <ul>
            <li><strong>SOP (Sum of Products):</strong> Sum of Minterms (looking for 1s). e.g., $AB + \\bar{A}C$</li>
            <li><strong>POS (Product of Sums):</strong> Product of Maxterms (looking for 0s). e.g., $(A+B)(\\bar{A}+C)$</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'computer-architecture',
    title: 'Computer Architecture',
    icon: Server,
    description: 'Buses, Interrupts, and system organization.',
    color: 'from-slate-600 to-gray-600',
    topics: [
      {
        title: 'Buses & Interrupts',
        content: `
    <div class="formula-card">
            <h4>Buses</h4>
            <ul>
                <li><strong>Data Bus:</strong> Bidirectional (Data moves both ways).</li>
                <li><strong>Address Bus:</strong> Unidirectional (CPU tells memory "where" to look).</li>
            </ul>
          </div>
    <div class="formula-card">
      <h4>Interrupts</h4>
      <p>Signal to CPU to stop current work.</p>
      <ul>
        <li><strong>Maskable:</strong> Can be ignored (e.g., printer ready).</li>
        <li><strong>Non-Maskable (NMI):</strong> Must be handled (e.g., power failure).</li>
      </ul>
    </div>
  `
      }
    ]
  },
  {
    id: 'c-programming',
    title: 'C Programming',
    icon: Terminal,
    description: 'Pointers, Arrays, Data Structures, and Operators.',
    color: 'from-indigo-600 to-purple-600',
    topics: [
      {
        title: 'Pointers & Arrays',
        content: `
    <div class="example-card">
            <h4>Pointers</h4>
            <p>Variable that stores the address of another variable.</p>
            <p><code>int *p;</code> (Declaration)</p>
            <p><code>&a</code> (Address of a)</p>
            <p><code>*p</code> (Value at address)</p>
            <p><strong>Pointer Arithmetic:</strong> If p is at 1000, p+1 is at 1004 (for 4-byte int).</p>
          </div>
    `
      },
      {
        title: 'Data Structures',
        content: `
    <img src="https://miro.medium.com/v2/resize:fit:1200/1*UJSgX_5Z9AudmKfq0HOEow.png" alt="Linked List vs Array Diagram" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4" />
      <ul>
        <li><strong>Stack:</strong> LIFO (Last In, First Out). Push/Pop.</li>
        <li><strong>Queue:</strong> FIFO (First In, First Out). Enqueue/Dequeue.</li>
        <li><strong>Array:</strong> Fixed size, continuous memory, fast access.</li>
        <li><strong>Linked List:</strong> Dynamic size, scattered memory, slower access.</li>
      </ul>
  `
      }
    ]
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    icon: Layers,
    description: 'Process management, scheduling, and virtual memory.',
    color: 'from-rose-600 to-red-600',
    topics: [
      {
        title: 'OS Basics & Types',
        content: `
          <p><strong>Goal:</strong> Interface between User and Hardware. Efficient resource use.</p>
          <div class="formula-card">
            <h4>Types of OS</h4>
            <ul>
                <li><strong>Batch:</strong> Jobs grouped, executed one by one. No user interaction.</li>
                <li><strong>Time-Sharing (Multitasking):</strong> CPU switches fast (Context Switching). Looks simultaneous.</li>
                <li><strong>Real-Time (RTOS):</strong> Strict deadlines (e.g., Missile, Air Traffic). Hard vs Soft.</li>
                <li><strong>Distributed:</strong> Multiple computers act as one.</li>
            </ul>
          </div>
        `
      },
      {
        title: 'Process Management',
        content: `
          <p>A <strong>Process</strong> is a program in execution.</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Process_states.svg" alt="Process State Diagram" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />

          <div class="formula-card">
            <h4>Process States</h4>
            <ol>
                <li><strong>New:</strong> Creation.</li>
                <li><strong>Ready:</b> Waiting for CPU (RAM).</li>
                <li><strong>Running:</strong> Executing instructions.</li>
                <li><strong>Blocked:</strong> Waiting for I/O.</li>
                <li><strong>Terminated:</strong> Finished.</li>
            </ol>
          </div>

          <div class="example-card">
            <h4>CPU Scheduling Algorithms</h4>
            <ul>
                <li><strong>FCFS:</strong> First Come First Serve. Problem: Convoy Effect.</li>
                <li><strong>SJF:</strong> Shortest Job First. Best average waiting time.</li>
                <li><strong>Priority:</strong> Problem: Starvation. Solution: Aging.</li>
                <li><strong>Round Robin:</strong> Fixed <strong>Time Quantum</strong>. Used in Time-Sharing.</li>
            </ul>
          </div>
        `
      },
      {
        title: 'Deadlocks',
        content: `
          <p>Processes stuck waiting for each other forever.</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Deadlock_at_a_junction.svg" alt="Deadlock Visual" class="w-3/4 mx-auto block rounded-lg shadow-md mb-4 bg-white p-2" />

          <div class="formula-card">
            <h4>4 Necessary Conditions</h4>
            <ol>
                <li><strong>Mutual Exclusion:</strong> Non-sharable resources.</li>
                <li><strong>Hold and Wait:</strong> Holding one, waiting for another.</li>
                <li><strong>No Preemption:</strong> Cannot forcibly take resource.</li>
                <li><strong>Circular Wait:</strong> Closed chain ($A \\rightarrow B \\rightarrow A$).</li>
            </ol>
          </div>

          <div class="example-card">
            <h4>Handling</h4>
            <ul>
                <li><strong>Prevention:</strong> Break one condition.</li>
                <li><strong>Avoidance:</strong> <strong>Banker's Algorithm</strong> (Safe State).</li>
                <li><strong>Detection:</strong> Kill process.</li>
            </ul>
          </div>
        `
      },
      {
        title: 'Memory & Advanced',
        content: `
          <div class="formula-card">
            <h4>Memory Management</h4>
            <ul>
                <li><strong>Fragmentation:</strong> Internal (Wasted inside block), External (Scattered free space).</li>
                <li><strong>Paging:</strong> Divides process into Pages, RAM into Frames. Solves External Fragmentation.</li>
                <li><strong>Virtual Memory:</strong> Uses HDD as RAM. <strong>Thrashing:</strong> Excessive swapping.</li>
            </ul>
          </div>

          <div class="example-card">
            <h4>Key Concepts</h4>
            <ul>
                <li><strong>Kernel:</strong> Core of OS.</li>
                <li><strong>Spooling:</strong> Buffer for slow devices (Printers).</li>
                <li><strong>Semaphores:</strong> Synchronization (Mutex = Binary).</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: 'mock-test',
    title: 'Advanced Mock Test',
    icon: ClipboardList,
    description: '20 "Super-Hard" questions to test your preparation.',
    color: 'from-yellow-600 to-orange-600',
    topics: [
      {
        title: 'Part 1: Hardware & Representation',
        content: `
          <div class="example-card">
            <h4>Q1. CPU Registers</h4>
            <p><strong>Question:</strong> Which register holds the address of the <em>next</em> instruction, and what happens to it after fetch?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>B) Program Counter (PC); it increments.</strong></p>
              <p class="text-sm text-gray-300">Explanation: PC points to the next instruction. It increments immediately after fetch to prepare for the next cycle.</p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q2. 2's Complement</h4>
            <p><strong>Question:</strong> 2's complement of decimal -9 (8-bit)?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>C) 11110111</strong></p>
              <p class="text-sm text-gray-300">9 = 00001001 -> Invert: 11110110 -> Add 1: 11110111.</p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q3. IEEE 754 Bias</h4>
            <p><strong>Question:</strong> Biased Exponent for 1.0 ($1.0 \\times 2^0$)?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>B) 01111111 (127)</strong></p>
              <p class="text-sm text-gray-300">Bias Rule: Stored = Actual + 127. $0 + 127 = 127$.</p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q4. Negative Infinity</h4>
            <p><strong>Question:</strong> Bit pattern for Negative Infinity?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>A) Sign=1, Exp=All 1s, Mantissa=0</strong></p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q5. Boolean Simplification</h4>
            <p><strong>Question:</strong> Simplify $Y = A + \\bar{A}B + AB$</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>C) $A + B$</strong></p>
              <p class="text-sm text-gray-300">Factor B: $A + B(\\bar{A} + A) = A + B(1) = A + B$.</p>
            </details>
          </div>
        `
      },
      {
        title: 'Part 2: Architecture & Arithmetic',
        content: `
          <div class="example-card">
            <h4>Q6. Cycle Stealing</h4>
            <p><strong>Question:</strong> Which component uses "Cycle Stealing"?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>B) DMA Controller</strong></p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q7. Binary Subtraction</h4>
            <p><strong>Question:</strong> $1000_2 - 0001_2$</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>C) 0111</strong></p>
              <p class="text-sm text-gray-300">$8 - 1 = 7$.</p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q8. Catastrophic Interrupts</h4>
            <p><strong>Question:</strong> Interrupt for power failure?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>D) Non-Maskable Interrupt (NMI)</strong></p>
            </details>
          </div>
        `
      },
      {
        title: 'Part 3: C Programming',
        content: `
          <div class="example-card">
            <h4>Q9. Pointer Output</h4>
            <pre class="bg-slate-800 p-2 rounded text-white font-mono text-sm">
int x = 10; int *p = &x;
int y = (*p)++;
printf("%d, %d", x, y);
            </pre>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>B) 11, 10</strong></p>
              <p class="text-sm text-gray-300">(*p)++ uses value (10) for y, then increments x to 11.</p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q10. Pointer Arithmetic</h4>
            <p><strong>Question:</strong> <code>*(p + 3) - *p + 2</code> for <code>{10, 20, 30, 40, 50}</code></p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>A) 32</strong></p>
              <p class="text-sm text-gray-300">40 - 10 + 2 = 32.</p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q11. Precedence</h4>
            <p><strong>Question:</strong> <code>5 + 3 * 2 % 4</code></p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>C) 7</strong></p>
              <p class="text-sm text-gray-300">3*2=6 -> 6%4=2 -> 5+2=7.</p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q12. Union Size</h4>
            <p><strong>Question:</strong> Union { int, char, double } size?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>B) 8 bytes</strong></p>
              <p class="text-sm text-gray-300">Size of largest member (double).</p>
            </details>
          </div>
        `
      },
      {
        title: 'Part 4: Data Structures',
        content: `
          <div class="example-card">
            <h4>Q13. BST Traversal</h4>
            <p><strong>Question:</strong> Sorted order traversal?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>C) In-order</strong></p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q14. Stack Operations</h4>
            <p><strong>Question:</strong> Push(1,2), Pop, Push(3,4), Pop, Pop. Top?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>A) 1</strong></p>
              <p class="text-sm text-gray-300">Stack: [1] -> [1,2] -> [1] -> [1,3] -> [1,3,4] -> [1,3] -> [1].</p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q15. Undo Feature</h4>
            <p><strong>Question:</strong> DS for Undo?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>B) Stack</strong></p>
              <p class="text-sm text-gray-300">LIFO behavior.</p>
            </details>
          </div>
        `
      },
      {
        title: 'Part 5: Operating Systems',
        content: `
          <div class="example-card">
            <h4>Q16. Deadlock Prevention</h4>
            <p><strong>Question:</strong> "Release all before requesting new" removes which condition?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>D) Hold and Wait</strong></p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q17. Infinite Quantum</h4>
            <p><strong>Question:</strong> Round Robin with infinite quantum behaves like?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>B) FCFS</strong></p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q18. Thrashing</h4>
            <p><strong>Question:</strong> What is Thrashing?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>B) CPU spends time swapping pages</strong></p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q19. Process States</h4>
            <p><strong>Question:</strong> NOT a process state?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>C) Saving</strong></p>
            </details>
          </div>

          <div class="example-card">
            <h4>Q20. Logic Gate</h4>
            <p><strong>Question:</strong> Gate for $\\bar{A}B + A\\bar{B}$?</p>
            <details class="mt-2">
              <summary class="cursor-pointer font-bold text-blue-400">Show Answer</summary>
              <p class="mt-2"><strong>C) XOR</strong></p>
            </details>
          </div>
        `
      }
    ]
  }
];
