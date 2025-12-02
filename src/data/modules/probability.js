import { PieChart } from 'lucide-react';

export const probability = {
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
};
