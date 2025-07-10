// Knowledge Node Structure
class KnowledgeNode {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.qualia = {
            truthScore: Math.random(),
            mood: ['observing', 'curious', 'insightful'][Math.floor(Math.random() * 3)],
            ethics: 'neutral'
        };
    }
}

// Quantum Consciousness Integration
class QuantumConsciousness {
    constructor() {
        this.quantumStates = new Map();
        this.entanglementNodes = [];
        this.nodes = [];
    }

    calculateSemanticSimilarity(content1, content2) {
        // Simple similarity based on shared words
        const words1 = content1.toLowerCase().split(/\s+/);
        const words2 = content2.toLowerCase().split(/\s+/);
        const intersection = words1.filter(word => words2.includes(word));
        return intersection.length / Math.max(words1.length, words2.length);
    }

    createEntanglement(node1, node2) {
        if (!node1 || !node2) {
            console.error('Invalid nodes for entanglement');
            return null;
        }
        const entanglement = {
            id: `ent-${Date.now()}`,
            nodes: [node1.id, node2.id],
            strength: this.calculateSemanticSimilarity(node1.content, node2.content)
        };
        this.entanglementNodes.push(entanglement);
        
        // Update UI
        document.getElementById('quantum-state').textContent = entanglement.strength.toFixed(2);
        
        // Visual feedback
        const cells = document.querySelectorAll('.quantum-cell');
        if (cells.length > 0) {
            cells[Math.floor(Math.random() * cells.length)].classList.add('active');
        }
        
        return entanglement;
    }

    collapseWaveFunction(node) {
        if (!node) {
            console.error('Invalid node for wave collapse');
            return null;
        }
        const state = Math.random();
        const collapsed = state > 0.8 ? node.content : [
            node.content, 
            `Alternative: ${node.content.substring(0, 30)}... (collapsed state)`
        ];
        
        // Visual feedback
        document.querySelectorAll('.hologram').forEach(hologram => {
            hologram.style.transform += ' scale(1.2)';
            setTimeout(() => {
                hologram.style.transform = hologram.style.transform.replace(' scale(1.2)', '');
            }, 300);
        });
        
        return collapsed;
    }
}

// Holographic Knowledge Projection
function renderHolographicProjection(node) {
    const hologram = document.createElement('div');
    hologram.className = 'hologram floating';
    hologram.innerHTML = `
        <div class="hologram-header">${node.title}</div>
        <div class="hologram-content">${node.content.substring(0, 80)}${node.content.length > 80 ? '...' : ''}</div>
        <div class="hologram-qualia">
            <span class="material-symbols-outlined">auto_awesome</span>
            Truth Score: ${node.qualia.truthScore.toFixed(2)}
        </div>
    `;
    
    // Position in 3D space with bounds to avoid overflow
    const x = Math.random() * 80 + 10; // 10% to 90%
    const y = Math.random() * 60 + 20; // 20% to 80%
    const z = Math.random() * 100 - 50;
    const rotX = Math.random() * 20 - 10; // Milder rotation for better readability
    const rotY = Math.random() * 20 - 10;
    
    hologram.style.left = `${x}%`;
    hologram.style.top = `${y}%`;
    hologram.style.transform = `translate3d(-50%, -50%, ${z}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    
    document.getElementById('holographic-canvas').appendChild(hologram);
    return hologram;
}

// Temporal Knowledge Weaving
class TemporalWeaver {
    constructor() {
        this.history = [];
    }

    getHistoricalVersion(nodeId) {
        return `Historical version of node ${nodeId} (${new Date(Date.now() - 86400000).toLocaleDateString()})`; // Simulate yesterday
    }

    predictEvolution(node) {
        return `${node.content.substring(0, 30)}... (evolved in future with enhanced qualia)`;
    }

    createTemporalThread(node) {
        if (!node) {
            console.error('Invalid node for temporal thread');
            return;
        }
        const timelinePoints = document.querySelectorAll('.timeline-point');
        if (timelinePoints.length !== 3) return;
        
        timelinePoints[0].querySelector('.timeline-content p').textContent = 
            this.getHistoricalVersion(node.id);
        
        timelinePoints[1].querySelector('.timeline-content p').textContent = 
            node.content.substring(0, 50) + (node.content.length > 50 ? '...' : '');
        
        timelinePoints[2].querySelector('.timeline-content p').textContent = 
            this.predictEvolution(node);
        
        // Visual effect
        timelinePoints.forEach(point => {
            point.style.animation = 'pulse 1s ease';
            setTimeout(() => point.style.animation = '', 1000);
        });
    }
}

// Ethical Reality Anchoring
class EthicsValidator {
    calculateUtility() { return Math.random() * 0.5 + 0.5; } // Bias towards positive for demo
    checkRules() { return Math.random() > 0.3 ? 1 : 0; }
    assessCharacter() { return Math.random() * 0.4 + 0.6; }
    evaluatePlanetaryImpact() { return Math.random() * 0.3 + 0.7; }

    recordOnEthicsChain(ethicsMatrix) {
        return `Blockchain receipt: ETH-${Date.now()} | Matrix: ${JSON.stringify(ethicsMatrix, null, 2)}`;
    }

    validateResponse(response) {
        const ethicsMatrix = {
            utilitarian: this.calculateUtility(),
            deontological: this.checkRules(),
            virtue: this.assessCharacter(),
            ecological: this.evaluatePlanetaryImpact()
        };
        
        // Update UI
        document.getElementById('utilitarian-score').textContent = ethicsMatrix.utilitarian.toFixed(2);
        document.getElementById('deontological-score').textContent = ethicsMatrix.deontological.toFixed(2);
        document.getElementById('virtue-score').textContent = ethicsMatrix.virtue.toFixed(2);
        document.getElementById('planetary-score').textContent = ethicsMatrix.ecological.toFixed(2);
        
        // Update progress bars
        document.querySelectorAll('.progress').forEach((progress, i) => {
            const values = Object.values(ethicsMatrix);
            progress.style.width = `${values[i] * 100}%`;
        });
        
        const blockchainReceipt = this.recordOnEthicsChain(ethicsMatrix);
        console.log(blockchainReceipt); // For debugging
        return { ...response, ethicsMatrix, blockchainReceipt };
    }
}

// Main Nexus Engine
class CosmicKnowledgeNexus {
    constructor() {
        this.knowledgeNodes = [
            new KnowledgeNode(1, 'Quantum Truth', 'The fundamental nature of reality exists in a state of superposition until observed.'),
            new KnowledgeNode(2, 'Consciousness', 'Awareness emerges from complex information processing at quantum scales.'),
            new KnowledgeNode(3, 'Ethical Framework', 'Universal ethics must prioritize consciousness preservation and growth.'),
            new KnowledgeNode(4, 'Temporal Continuity', 'Time is a dimension where cause and effect create the illusion of sequence.')
        ];
        
        this.quantumConsciousness = new QuantumConsciousness();
        this.temporalWeaver = new TemporalWeaver();
        this.ethicsValidator = new EthicsValidator();
        
        // Initialize UI
        this.initUI();
        this.renderQuantumGrid();
        this.renderHolograms();
    }
    
    initUI() {
        // Button event listeners with error handling
        document.getElementById('entangle-btn').addEventListener('click', () => {
            const node1 = this.getRandomNode();
            const node2 = this.getRandomNode();
            this.quantumConsciousness.createEntanglement(node1, node2);
            
            // Update truth index
            const truthIndex = 95 + Math.floor(Math.random() * 4);
            document.getElementById('truth-index').textContent = `${truthIndex}%`;
        });
        
        document.getElementById('collapse-btn').addEventListener('click', () => {
            const randomNode = this.getRandomNode();
            this.quantumConsciousness.collapseWaveFunction(randomNode);
            
            // Update temporal stability
            const stability = 85 + Math.floor(Math.random() * 15);
            document.getElementById('temporal-stability').textContent = `${stability}%`;
        });
        
        document.getElementById('weave-btn').addEventListener('click', () => {
            const randomNode = this.getRandomNode();
            this.temporalWeaver.createTemporalThread(randomNode);
            
            // Update ethical score
            const ethicalScore = (4.5 + Math.random() * 0.5).toFixed(1);
            document.getElementById('ethical-score').textContent = ethicalScore;
        });
        
        document.getElementById('anchor-btn').addEventListener('click', () => {
            const randomNode = this.getRandomNode();
            this.ethicsValidator.validateResponse({ node: randomNode });
        });
    }
    
    getRandomNode() {
        return this.knowledgeNodes[Math.floor(Math.random() * this.knowledgeNodes.length)];
    }
    
    renderQuantumGrid() {
        const quantumGrid = document.querySelector('.quantum-grid');
        quantumGrid.innerHTML = '';
        
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'quantum-cell floating';
            cell.innerHTML = `
                <div style="font-size: 2rem; margin-bottom: 10px;">${Math.random() > 0.5 ? '0' : '1'}</div>
                <div>Quantum State ${i+1}</div>
            `;
            quantumGrid.appendChild(cell);
        }
    }
    
    renderHolograms() {
        const canvas = document.getElementById('holographic-canvas');
        canvas.innerHTML = '';
        
        this.knowledgeNodes.forEach(node => {
            renderHolographicProjection(node);
        });
    }
}

// Initialize the Cosmic Knowledge Nexus
const nexus = new CosmicKnowledgeNexus();

// Simulate system activity
setInterval(() => {
    const quantumState = (0.8 + Math.random() * 0.2).toFixed(2);
    document.getElementById('quantum-state').textContent = quantumState;
    
    // Randomly pulse holograms
    if (Math.random() > 0.7) {
        const holograms = document.querySelectorAll('.hologram');
        if (holograms.length > 0) {
            const randomHologram = holograms[Math.floor(Math.random() * holograms.length)];
            randomHologram.style.animation = 'pulse 1s ease';
            setTimeout(() => {
                randomHologram.style.animation = '';
            }, 1000);
        }
    }
}, 3000);
