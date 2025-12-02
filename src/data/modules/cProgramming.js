import { Terminal } from 'lucide-react';

export const cProgramming = {
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
};
