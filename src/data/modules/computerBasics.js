import { Cpu } from 'lucide-react';

export const computerBasics = {
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
};
