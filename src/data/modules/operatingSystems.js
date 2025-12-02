import { Layers } from 'lucide-react';

export const operatingSystems = {
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
};
