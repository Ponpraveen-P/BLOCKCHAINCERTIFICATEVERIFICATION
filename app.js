/* -------------------------------------------------------------
 * SecurCert - Premium Web3 Theme & Design Tokens
 * ------------------------------------------------------------- */
:root {
    /* Color Palette */
    --bg-base: #0b0f19;
    --bg-surface: rgba(17, 24, 39, 0.7);
    --bg-surface-hover: rgba(31, 41, 55, 0.8);
    
    --primary: #6366f1;       /* Indigo */
    --primary-glow: rgba(99, 102, 241, 0.3);
    --secondary: #a855f7;     /* Purple */
    --secondary-glow: rgba(168, 85, 247, 0.25);
    --accent: #06b6d4;        /* Cyan */
    --accent-glow: rgba(6, 182, 212, 0.25);
    
    --success: #10b981;       /* Emerald Green */
    --success-glow: rgba(16, 185, 129, 0.2);
    --error: #ef4444;         /* Red */
    --error-glow: rgba(239, 68, 68, 0.2);
    
    --text-primary: #f8fafc;  /* Ice White */
    --text-secondary: #94a3b8;/* Slate Gray */
    --text-muted: #64748b;    /* Dark Gray */
    
    --border-color: rgba(255, 255, 255, 0.08);
    --border-color-focus: rgba(99, 102, 241, 0.4);
    
    /* Layout Tokens */
    --font-sans: 'Inter', sans-serif;
    --font-heading: 'Outfit', sans-serif;
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --shadow-premium: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
    --glass-blur: blur(12px);
}
/* -------------------------------------------------------------
 * Reset & Base Setup
 * ------------------------------------------------------------- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: var(--bg-base);
    color: var(--text-primary);
    font-family: var(--font-sans);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
}
/* -------------------------------------------------------------
 * Background Glow Elements
 * ------------------------------------------------------------- */
.bg-glow {
    position: fixed;
    border-radius: 50%;
    filter: blur(140px);
    z-index: -1;
    pointer-events: none;
    opacity: 0.45;
}
.bg-glow-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
    top: -200px;
    left: -100px;
}
.bg-glow-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);
    bottom: -100px;
    right: -100px;
}
/* -------------------------------------------------------------
 * Layout Structure
 * ------------------------------------------------------------- */
.app-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
/* Header & Nav Styling */
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2rem;
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    margin-bottom: 2rem;
    box-shadow: var(--shadow-premium);
}
.logo-area {
    display: flex;
    align-items: center;
    gap: 12px;
}
.logo-icon {
    width: 42px;
    height: 42px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    color: var(--text-primary);
    box-shadow: 0 0 15px var(--primary-glow);
}
.logo-text h1 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.1;
    background: linear-gradient(135deg, #fff, var(--text-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.logo-text span {
    font-size: 0.75rem;
    color: var(--primary);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 600;
}
.app-nav {
    display: flex;
    gap: 8px;
}
.nav-btn {
    background: transparent;
    border: none;
    padding: 0.65rem 1.25rem;
    color: var(--text-secondary);
    font-family: var(--font-sans);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition-smooth);
}
.nav-btn:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.05);
}
.nav-btn.active {
    color: var(--text-primary);
    background: rgba(99, 102, 241, 0.15);
    border: 1px solid rgba(99, 102, 241, 0.3);
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.1);
}
.wallet-btn {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
    border: 1px solid var(--primary);
    color: var(--text-primary);
    padding: 0.6rem 1.2rem;
    border-radius: var(--radius-sm);
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition-smooth);
}
.wallet-btn:hover {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    box-shadow: 0 0 15px var(--primary-glow);
    transform: translateY(-1px);
}
.wallet-btn.connected {
    border-color: var(--success);
    background: rgba(16, 185, 129, 0.1);
}
.wallet-btn.connected:hover {
    background: rgba(16, 185, 129, 0.2);
    box-shadow: 0 0 15px var(--success-glow);
}
/* Workspace Main Layout */
.app-main {
    flex-grow: 1;
}
/* Tab Management Visibility */
.tab-content {
    display: none;
    animation: fadeIn 0.4s ease-out forwards;
}
.tab-content.active {
    display: block;
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
/* Hero Intro headers */
.hero-section {
    margin-bottom: 2rem;
    text-align: center;
}
.hero-section h2 {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #ffffff, #c7d2fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.hero-section p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}
/* -------------------------------------------------------------
 * Premium Cards & UI Elements
 * ------------------------------------------------------------- */
.card {
    border-radius: var(--radius-md);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-premium);
    overflow: hidden;
    transition: var(--transition-smooth);
}
.glass-card {
    background: var(--bg-surface);
    backdrop-filter: var(--glass-blur);
}
.glass-card:hover {
    border-color: rgba(255, 255, 255, 0.12);
    background: var(--bg-surface-hover);
}
.card-header {
    padding: 1.5rem 1.75rem;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    gap: 12px;
}
.card-header i {
    color: var(--primary);
    font-size: 1.25rem;
}
.card-header h3 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.02em;
}
/* Form Styles & Inputs */
.input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 1.25rem;
}
.input-group label {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
}
.input-with-icon {
    position: relative;
    display: flex;
    align-items: center;
}
.input-with-icon i {
    position: absolute;
    left: 14px;
    color: var(--text-muted);
    font-size: 0.95rem;
    transition: var(--transition-smooth);
}
.input-with-icon input,
.input-with-icon select {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.65rem;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 0.95rem;
    outline: none;
    transition: var(--transition-smooth);
}
.input-with-icon input:focus,
.input-with-icon select:focus {
    border-color: var(--primary);
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
    background: rgba(15, 23, 42, 0.8);
}
.input-with-icon input:focus + i,
.input-with-icon select:focus + i {
    color: var(--primary);
}
.divider {
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--text-muted);
    margin: 1.5rem 0;
    font-size: 0.8rem;
    font-weight: 700;
}
.divider::before,
.divider::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--border-color);
}
.divider span {
    padding: 0 10px;
    letter-spacing: 0.1em;
}
/* Button UI Components */
.btn {
    padding: 0.75rem 1.5rem;
    font-family: var(--font-sans);
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: var(--radius-sm);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    transition: var(--transition-smooth);
}
.btn-primary {
    background: var(--primary);
    color: #fff;
}
.btn-primary:hover {
    background: #4f46e5;
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
    transform: translateY(-1px);
}
.btn-secondary {
    background: rgba(255, 255, 255, 0.08);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
}
.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
}
.btn-gradient {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: #fff;
    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.2);
}
.btn-gradient:hover {
    box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4), 0 0 10px rgba(99, 102, 241, 0.3);
    transform: translateY(-1px);
}
.btn-text {
    background: none;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition-smooth);
}
.btn-text:hover {
    filter: brightness(1.2);
}
.w-full { width: 100%; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.gap-2 { gap: 8px; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.flex { display: flex; }
/* -------------------------------------------------------------
 * 1. Verification Portal Layout
 * ------------------------------------------------------------- */
.verify-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}
@media (max-width: 868px) {
    .verify-grid {
        grid-template-columns: 1fr;
    }
}
.verify-input-card {
    padding: 1.75rem;
}
.verify-tabs {
    display: flex;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 1.5rem;
    gap: 4px;
}
.v-tab-btn {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    padding: 0.6rem 1rem;
    color: var(--text-secondary);
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: var(--transition-smooth);
    display: flex;
    align-items: center;
    gap: 8px;
}
.v-tab-btn:hover {
    color: var(--text-primary);
}
.v-tab-btn.active {
    color: var(--primary);
    border-bottom-color: var(--primary);
}
.vtab-content {
    display: none;
}
.vtab-content.active {
    display: block;
}
/* File Upload drag area */
.drop-zone {
    border: 2px dashed rgba(255, 255, 255, 0.15);
    border-radius: var(--radius-md);
    padding: 2.5rem 1.5rem;
    text-align: center;
    background: rgba(15, 23, 42, 0.4);
    cursor: pointer;
    transition: var(--transition-smooth);
}
.drop-zone:hover, .drop-zone.dragover {
    border-color: var(--primary);
    background: rgba(99, 102, 241, 0.05);
}
.drop-zone-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cloud-icon {
    font-size: 2.75rem;
    color: var(--primary);
    margin-bottom: 1rem;
    animation: bounce 2s infinite;
}
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}
.drop-text-primary {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 4px;
}
.drop-text-secondary {
    color: var(--text-secondary);
    font-size: 0.85rem;
}
.file-hidden {
    display: none;
}
.file-info-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.2);
    padding: 0.65rem 1rem;
    border-radius: var(--radius-sm);
    margin-top: 1rem;
}
.file-info-bar i {
    color: var(--success);
}
#file-name-label {
    flex-grow: 1;
    font-size: 0.85rem;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#clear-file-btn {
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    transition: var(--transition-smooth);
}
#clear-file-btn:hover {
    color: var(--error);
}
/* Verification Result views */
.verify-result-card {
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 380px;
}
.result-placeholder {
    text-align: center;
    padding: 2rem;
}
.radar-scan {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
}
.radar-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(99, 102, 241, 0.2);
    border-radius: 50%;
}
.radar-circle::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-top-color: var(--primary);
    border-radius: 50%;
    animation: rotate 2.5s linear infinite;
}
@keyframes rotate {
    to { transform: rotate(360deg); }
}
.center-icon {
    font-size: 2.25rem;
    color: var(--primary);
    line-height: 80px;
}
.result-placeholder h4, .result-loader h4 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
}
.result-placeholder p, .result-loader p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    max-width: 320px;
    margin: 0 auto;
}
.result-loader {
    text-align: center;
    padding: 2rem;
}
.spinner {
    width: 48px;
    height: 48px;
    border: 3px solid rgba(255, 255, 255, 0.05);
    border-top-color: var(--primary);
    border-radius: 50%;
    animation: rotate 1s linear infinite;
    margin: 0 auto 1.5rem;
}
/* Result Success Design */
.badge-header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 1rem;
    border-radius: var(--radius-md);
    margin-bottom: 1.5rem;
}
.badge-header.verified {
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.25);
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.1);
}
.badge-header.verified .status-icon {
    background: var(--success);
    color: #fff;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
}
.badge-header.unverified {
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.25);
    box-shadow: 0 0 15px rgba(239, 68, 68, 0.1);
}
.badge-header.unverified .status-icon {
    background: var(--error);
    color: #fff;
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.4);
}
.status-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
}
.status-tag {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}
.badge-header.verified .status-tag { color: var(--success); }
.badge-header.unverified .status-tag { color: var(--error); }
.badge-header h4 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
}
.result-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.detail-row {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color);
}
.detail-row.text-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: none;
    padding: 0;
}
.detail-row.text-split > div {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color);
}
.detail-row.text-split > div:first-child {
    padding-right: 1.25rem;
}
.detail-row.text-split > div:last-child {
    padding-left: 1.25rem;
    border-left: 1px solid var(--border-color);
}
.detail-row .label {
    color: var(--text-secondary);
    font-size: 0.85rem;
}
.detail-row .value {
    font-weight: 600;
    font-size: 0.95rem;
}
.detail-row .value.highlight {
    color: var(--primary);
    font-family: monospace;
    letter-spacing: 0.02em;
}
/* Collapsible Cryptographic Signatures */
.collapsible-section {
    margin-top: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    overflow: hidden;
}
.collapsible-header {
    background: rgba(255, 255, 255, 0.02);
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: var(--transition-smooth);
}
.collapsible-header:hover {
    background: rgba(255, 255, 255, 0.05);
}
.collapsible-header i {
    transition: transform 0.3s ease;
}
.collapsible-section.open .collapsible-header i {
    transform: rotate(180deg);
}
.collapsible-content {
    max-height: 0;
    transition: max-height 0.3s ease-out;
    background: rgba(10, 15, 25, 0.4);
    padding: 0 1rem;
    overflow: hidden;
}
.collapsible-section.open .collapsible-content {
    max-height: 400px;
    padding: 0.75rem 1rem;
}
.hash-field {
    margin-bottom: 0.85rem;
}
.hash-field:last-child {
    margin-bottom: 0;
}
.hash-field-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 600;
    margin-bottom: 4px;
}
.copy-btn {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    font-size: 0.8rem;
    transition: var(--transition-smooth);
}
.copy-btn:hover {
    color: var(--primary);
}
.hash-value {
    display: block;
    font-family: monospace;
    font-size: 0.8rem;
    word-break: break-all;
    background: rgba(0, 0, 0, 0.2);
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    color: var(--text-secondary);
}
.hash-value.text-accent {
    color: var(--accent);
}
/* Result Error views styling */
.error-msg-box {
    background: rgba(239, 68, 68, 0.05);
    border-left: 3px solid var(--error);
    padding: 1rem;
    border-radius: 4px;
    font-size: 0.9rem;
    color: #fca5a5;
    margin-bottom: 1.25rem;
}
.error-tips h5 {
    font-size: 0.85rem;
    color: var(--text-primary);
    margin-bottom: 6px;
    font-weight: 600;
}
.error-tips ul {
    padding-left: 1.25rem;
    color: var(--text-secondary);
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 4px;
}
/* -------------------------------------------------------------
 * 2. Issuer Portal Layout
 * ------------------------------------------------------------- */
.issue-layout {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    gap: 1.5rem;
}
@media (max-width: 968px) {
    .issue-layout {
        grid-template-columns: 1fr;
    }
}
.issue-form-card, .issue-preview-card {
    padding: 1.75rem;
}
.form-row {
    display: flex;
    gap: 1.25rem;
}
@media (max-width: 580px) {
    .form-row {
        flex-direction: column;
        gap: 0;
    }
}
.form-row > .input-group {
    flex: 1;
}
.form-row > .input-group.flex-2 { flex: 2; }
.form-row > .input-group.flex-1 { flex: 1; }
/* Certificate Preview Frame */
.preview-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    padding: 2rem;
    min-height: 380px;
}
.preview-icon {
    font-size: 3.5rem;
    color: rgba(255, 255, 255, 0.05);
    margin-bottom: 1.5rem;
}
.preview-placeholder h4 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
}
.preview-placeholder p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    max-width: 320px;
}
.preview-success {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}
.success-alert {
    display: flex;
    gap: 12px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.2);
    padding: 1rem;
    border-radius: var(--radius-sm);
}
.success-alert i {
    color: var(--success);
    font-size: 1.25rem;
    margin-top: 2px;
}
.success-alert h5 {
    color: var(--text-primary);
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 2px;
}
.success-alert p {
    color: var(--text-secondary);
    font-size: 0.8rem;
}
/* Simulated Certificate Rendering inside UI */
.certificate-pdf-preview {
    background: #07090e;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    padding: 1rem;
}
.pdf-mock-frame {
    width: 100%;
    background: #ffffff;
    aspect-ratio: 1.414; /* A4 Landscape */
    padding: 4%;
    position: relative;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}
.mock-certificate {
    width: 100%;
    height: 100%;
    position: relative;
}
.mock-cert-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid #0f172a;
    pointer-events: none;
}
.mock-cert-border::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    border: 1px solid #d97706;
}
.mock-cert-inner {
    padding: 6% 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    color: #0f172a;
}
.mock-cert-title {
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-align: center;
    margin-bottom: 2%;
}
.mock-cert-sub {
    font-size: 0.65rem;
    color: #4b5563;
    letter-spacing: 0.1em;
    font-weight: 700;
    margin-bottom: 4%;
}
.mock-cert-text {
    font-size: 0.55rem;
    color: #6b7280;
    margin-bottom: 1%;
}
.mock-cert-name {
    font-family: var(--font-heading);
    font-size: 1.15rem;
    font-weight: 700;
    text-decoration: underline;
    margin-bottom: 2%;
    color: #0f172a;
}
.mock-cert-desc {
    font-size: 0.55rem;
    color: #6b7280;
}
.mock-cert-course {
    font-size: 0.8rem;
    font-weight: 700;
    color: #2563eb;
    margin-bottom: 3%;
    text-align: center;
}
.mock-cert-details {
    display: flex;
    gap: 20px;
    font-size: 0.55rem;
    color: #4b5563;
    font-weight: 600;
    margin-bottom: auto;
}
.mock-cert-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;
}
.mock-cert-sig {
    width: 120px;
    text-align: center;
}
.mock-cert-sig .line {
    border-top: 1px solid #9ca3af;
    margin-bottom: 4px;
}
.mock-cert-sig span {
    font-size: 0.45rem;
    font-weight: 700;
    color: #6b7280;
}
.mock-cert-qr {
    width: 48px;
    height: 48px;
}
#preview-qr-code img {
    width: 100%;
    height: 100%;
}
.preview-actions {
    display: flex;
    gap: 12px;
}
/* -------------------------------------------------------------
 * 3. Blockchain Explorer Layout
 * ------------------------------------------------------------- */
.stats-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25rem;
}
@media (max-width: 768px) {
    .stats-row {
        grid-template-columns: 1fr;
    }
}
.stat-card {
    padding: 1.5rem;
}
.stat-label {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
}
.stat-val {
    font-family: var(--font-heading);
    font-size: 1.85rem;
    font-weight: 700;
    margin-top: 6px;
    margin-bottom: 4px;
}
.stat-meta {
    font-size: 0.75rem;
    color: var(--text-muted);
}
/* Ledger Block Explorer Table styles */
.explorer-table-container {
    overflow-x: auto;
    background: rgba(15, 23, 42, 0.2);
}
.explorer-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-size: 0.9rem;
}
.explorer-table th, .explorer-table td {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--border-color);
}
.explorer-table th {
    font-family: var(--font-heading);
    font-weight: 600;
    color: var(--text-secondary);
    background: rgba(255, 255, 255, 0.02);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}
.explorer-table tr {
    transition: var(--transition-smooth);
}
.explorer-table tbody tr:hover {
    background: rgba(255, 255, 255, 0.02);
}
.explorer-table .empty-row {
    text-align: center;
    color: var(--text-muted);
}
.explorer-table .tx-hash-link {
    color: var(--primary);
    font-family: monospace;
    font-weight: 500;
}
.explorer-table .block-num {
    font-family: monospace;
    font-weight: 600;
    color: var(--accent);
}
.explorer-table .proof-hash {
    font-family: monospace;
    color: var(--text-secondary);
}
.text-red-400 { color: var(--error); }
.text-emerald-400 { color: var(--success); }
/* -------------------------------------------------------------
 * Footer Styling
 * ------------------------------------------------------------- */
.app-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding: 1.5rem 0;
    border-top: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 0.85rem;
}
@media (max-width: 580px) {
    .app-footer {
        flex-direction: column;
        gap: 12px;
        text-align: center;
    }
}
.footer-links {
    display: flex;
    gap: 20px;
}
.footer-links a {
    color: var(--text-muted);
    text-decoration: none;
    transition: var(--transition-smooth);
    display: flex;
    align-items: center;
    gap: 6px;
}
.footer-links a:hover {
    color: var(--text-secondary);
}
