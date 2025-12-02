import { TrendingUp } from 'lucide-react';

export const floatingPoint = {
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
};
