import { Server } from 'lucide-react';

export const computerArchitecture = {
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
};
