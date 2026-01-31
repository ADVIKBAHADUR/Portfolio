// Project data
const projectData = {
    superresolution: {
        title: "FPGA Super-Resolution CNN",
        type: "Hardware • FPGA • Computer Vision",
        github: "https://github.com/ADVIKBAHADUR/ULX3s-Superresolution-CNN",
        description: `Real-time super-resolution image processing system implemented on the ULX3S FPGA board. 
        This project takes low-resolution camera input and processes it through a custom neural network to output higher-resolution images.`,
        details: [
            "Custom neural network accelerator in Verilog",
            "OV7670 camera interface with SDRAM frame buffering",
            "Real-time image processing with VGA output",
            "Funded by Laidlaw Foundation and Radiona.org",
            "Technologies: SystemVerilog, Verilog, Python, FPGA"
        ],
        images: []
    },
    pedestrian: {
        title: "Pedestrian Crossing Detector",
        type: "Computer Vision • C++",
        github: "https://github.com/ADVIKBAHADUR/Pedestrian_Crossing_detector",
        description: `Traditional computer vision implementation using non-deep learning techniques to identify pedestrian crossings in images.`,
        details: [
            "Gaussian blur smoothing and binary thresholding",
            "Connected components analysis for region detection",
            "RANSAC algorithm for line extrapolation",
            "Filtering based on area, aspect ratio, and neighbouring features",
            "Technologies: C++, OpenCV, CMake"
        ],
        images: []
    },
    f1game: {
        title: "F1 Game Time",
        type: "Python • Game • Web Scraping",
        github: "https://github.com/ADVIKBAHADUR/F1_Game_Time",
        description: `Lights Out & Laugh Out - An F1 race prediction game where friends compete to be the least wrong about DNFs, team results, and driver performance.`,
        details: [
            "Real-time data scraping from f1-dash.com",
            "Live leaderboard with category scoring",
            "Desktop interface optimised for 1920x1200",
            "Automatic DNF detection and position tracking",
            "Technologies: Python, tkinter, web scraping"
        ],
        images: []
    },
    consensus: {
        title: "Distributed Consensus Protocol",
        type: "Distributed Systems • Python",
        github: "https://github.com/ADVIKBAHADUR/3D3_Consensus_Protocol",
        description: `Implementation of distributed consensus algorithms for networked systems. Built as a group project exploring fault-tolerant distributed computing.`,
        details: [
            "Multi-node consensus implementation",
            "Network communication protocols",
            "Fault tolerance mechanisms",
            "Collaborative development with 4 contributors",
            "Technologies: Python, networking"
        ],
        images: []
    },
    studysync: {
        title: "StudySync",
        type: "Productivity • Web App",
        github: "https://github.com/ADVIKBAHADUR/StudySync",
        description: `Semester task dashboard with Google Sheets integration. Visualise deadlines, track progress, and manage study goals with Gantt chart views.`,
        details: [
            "Google Sheets API integration",
            "Interactive Gantt chart visualisation",
            "Deadline tracking with toggle filters",
            "Responsive dashboard design",
            "Technologies: HTML, JavaScript, Google Apps Script"
        ],
        images: []
    },
    drone: {
        title: "Arduino Drone",
        type: "Embedded Systems • Hardware",
        github: "https://github.com/ADVIKBAHADUR/Arduino-Drone",
        description: `Custom-built quadcopter from scratch using Arduino, 3D-printed parts, and MultiWii flight control software. RF communication for remote control.`,
        details: [
            "Custom 3D-printed frame design",
            "MultiWii flight controller implementation",
            "RF24 wireless communication",
            "ESC calibration and motor control",
            "Technologies: C++, Arduino, Processing, RF communication"
        ],
        images: []
    },
    adaptive: {
        title: "Adaptive Network Systems",
        type: "Research • Complex Systems",
        github: "https://laidlawscholars.network/documents/research-reflection-32b00ac2-0467-45e1-9366-a55925a6006c",
        description: `Laidlaw Research Scholarship investigating control and stabilisation of complex networks using strategically placed adaptive nodes.`,
        details: [
            "Supervised by Prof. Harun Siljak",
            "Adaptive network control modelling",
            "Minimal intervention for maximum stability",
            "Published research reflections and poster",
            "Technologies: Python, network simulation, control theory"
        ],
        images: []
    },
    srmodel: {
        title: "Efficient Super-Resolution Model",
        type: "Machine Learning • Python",
        github: "https://github.com/ADVIKBAHADUR/Efficient-Teacher-Student-Distillative-Super-Resolution-Model",
        description: `Teacher-student knowledge distillation approach to create efficient super-resolution models for resource-constrained environments.`,
        details: [
            "Knowledge distillation from large teacher model",
            "Optimised student network for edge deployment",
            "Training pipeline with PyTorch",
            "ONNX model export capabilities",
            "Technologies: Python, PyTorch, ONNX"
        ],
        images: []
    }
};

// Open side panel with project details
function openSidePanel(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;

    const panel = document.getElementById('sidePanel');
    const content = document.getElementById('panelContent');

    let detailsHTML = project.details.map(detail => 
        `<li>${detail}</li>`
    ).join('');

    content.innerHTML = `
        <h2>${project.title}</h2>
        <p class="panel-type">${project.type}</p>
        <a href="${project.github}" target="_blank" rel="noopener" class="github-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
        </a>
        <div class="panel-section">
            <h3>About</h3>
            <p>${project.description}</p>
        </div>
        <div class="panel-section">
            <h3>Key Features</h3>
            <ul class="detail-list">
                ${detailsHTML}
            </ul>
        </div>
    `;

    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close side panel
function closeSidePanel() {
    const panel = document.getElementById('sidePanel');
    panel.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add click listeners to project bubbles
document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.project-bubble');
    bubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
            const projectKey = bubble.getAttribute('data-project');
            openSidePanel(projectKey);
        });
    });

    // Close panel when clicking outside
    document.getElementById('sidePanel').addEventListener('click', (e) => {
        if (e.target.id === 'sidePanel') {
            closeSidePanel();
        }
    });

    // Close panel on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSidePanel();
        }
    });
});
