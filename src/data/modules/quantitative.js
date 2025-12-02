import { Calculator } from 'lucide-react';

export const quantitative = {
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
};
