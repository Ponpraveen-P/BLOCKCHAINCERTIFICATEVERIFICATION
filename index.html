// -------------------------------------------------------------
// SecurCert - Frontend Application Logic & Local Blockchain Simulation
// BlockCert - Frontend Application Logic & Local Blockchain Simulation
// -------------------------------------------------------------
// LocalStorage Database Keys
const DB_CERTS_KEY = 'securcert_registry_certs';
const DB_LEDGER_KEY = 'securcert_registry_ledger';
const WALLET_KEY = 'securcert_wallet_address';
const AUTH_KEY = 'blockcert_admin_session';
const THEME_KEY = 'blockcert_theme_mode';
// Global State
let dbCerts = [];
let dbLedger = [];
let connectedWallet = null;
let currentTab = 'verify';
let currentVerifyTab = 'file-upload';
let activeIssuedCert = null; // Stores currently generated cert details for PDF generation
let loadedFileBuffer = null; // Stored buffer of uploaded PDF file
let currentVerifyTab = 'file-upload';
// Default Mock Data if registry is empty
// Default Mock Data
const MOCK_ISSUER_CONTRACT = '0x82C7fF21132e0Db9d4791Fa2924376Ac172F1A3b';
// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadDatabase();
    initNavigation();
    initTheme();
    initRouting();
    initHamburgerMenu();
    initWallet();
    initVerifyTabs();
    initDragAndDrop();
    initFormHandlers();
    initCollapsible();
    initDashboardControllers();
    
    // Initial UI sync
    updateLedgerStats();
    renderLedgerExplorer();
    renderRecentCertificatesTable();
    renderManageCertificatesTable();
    renderDashboardBlockchainExplorer();
    embedVerificationInDashboard();
});
// -------------------------------------------------------------
    if (certsRaw) {
        dbCerts = JSON.parse(certsRaw);
    } else {
        // Seed database with a sample certificate for PONVEL S
        const sampleCert = {
            certificateId: 'CERT-2026-4829',
            studentName: 'Ponvel S',
            registerNumber: '21CS094',
            department: 'Computer Science',
            course: 'Blockchain & Smart Contract Engineering',
            grade: 'A+',
            institution: 'SecurCert Academy',
            completionDate: '2026-07-15',
            issueDate: '2026-07-16',
            authority: 'Program Coordinator',
            certificateHash: '4a0f44bd1337b587a8b41ee33e8b4bb6840742f9e4e6d328328120ee4cf57fbd',
            blockchainTxHash: '0x32f1837dbe1b2c457199cd68cbbe62cfa02237eb8971fce88bc277bf8238c92a',
            blockHeight: 48290,
            timestamp: '2026-07-16 11:24:15',
            issuerWallet: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
        };
        dbCerts.push(sampleCert);
        // Seed database with sample certificates
        dbCerts = [
            {
                certificateId: 'CERT-2026-4829',
                studentName: 'Ponvel S',
                studentEmail: 'ponvel@academy.org',
                registerNumber: '21CS094',
                department: 'Computer Science',
                course: 'Blockchain & Smart Contract Engineering',
                grade: 'A+',
                institution: 'BlockCert Academy',
                completionDate: '2026-07-15',
                issueDate: '2026-07-16',
                authority: 'Program Coordinator',
                description: 'Graduated with high distinction in advanced cryptography and solidity programming.',
                certificateHash: '4a0f44bd1337b587a8b41ee33e8b4bb6840742f9e4e6d328328120ee4cf57fbd',
                blockchainTxHash: '0x32f1837dbe1b2c457199cd68cbbe62cfa02237eb8971fce88bc277bf8238c92a',
                blockHeight: 48290,
                timestamp: '2026-07-16 11:24:15',
                issuerWallet: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
            },
            {
                certificateId: 'CERT-2026-9281',
                studentName: 'Jane Doe',
                studentEmail: 'jane.doe@example.com',
                registerNumber: '21CS012',
                department: 'Information Technology',
                course: 'Decentralized Applications Development',
                grade: 'A',
                institution: 'BlockCert Academy',
                completionDate: '2026-07-10',
                issueDate: '2026-07-12',
                authority: 'Department Head',
                description: 'Demonstrated outstanding aptitude in web3 frontend designs and dApp integrations.',
                certificateHash: '7b80a42f56784d0b1a03e390c58742f9e4e6d328328120ee4cf57fbd304ef28a',
                blockchainTxHash: '0x7a22cdbc0f30c681cf42a032de971fce88bc277bf8238c92ab1837dbe1b2c457',
                blockHeight: 48289,
                timestamp: '2026-07-12 09:41:02',
                issuerWallet: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
            }
        ];
        localStorage.setItem(DB_CERTS_KEY, JSON.stringify(dbCerts));
    }
    if (ledgerRaw) {
        dbLedger = JSON.parse(ledgerRaw);
    } else {
        // Seed ledger table matches the sample cert
        const sampleBlock = {
            blockHeight: 48290,
            timestamp: '2026-07-16 11:24:15',
            blockchainTxHash: '0x32f1837dbe1b2c457199cd68cbbe62cfa02237eb8971fce88bc277bf8238c92a',
            certificateId: 'CERT-2026-4829',
            certificateHash: '4a0f44bd1337b587a8b41ee33e8b4bb6840742f9e4e6d328328120ee4cf57fbd',
            issuerWallet: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
        };
        dbLedger.push(sampleBlock);
        // Seed ledger matching the sample certificates
        dbLedger = [
            {
                blockHeight: 48290,
                timestamp: '2026-07-16 11:24:15',
                blockchainTxHash: '0x32f1837dbe1b2c457199cd68cbbe62cfa02237eb8971fce88bc277bf8238c92a',
                certificateId: 'CERT-2026-4829',
                certificateHash: '4a0f44bd1337b587a8b41ee33e8b4bb6840742f9e4e6d328328120ee4cf57fbd',
                issuerWallet: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
                previousHash: '5e0f77bd1337b587a8b41ee33e8b4bb6840742f9e4e6d328328120ee4cf57fc1',
                nonce: 82194
            },
            {
                blockHeight: 48289,
                timestamp: '2026-07-12 09:41:02',
                blockchainTxHash: '0x7a22cdbc0f30c681cf42a032de971fce88bc277bf8238c92ab1837dbe1b2c457',
                certificateId: 'CERT-2026-9281',
                certificateHash: '7b80a42f56784d0b1a03e390c58742f9e4e6d328328120ee4cf57fbd304ef28a',
                issuerWallet: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
                previousHash: '9a8d7a6e5d4c3b2a1a098d7a6e5d4c3b2a1a098d7a6e5d4c3b2a1a098d7a6e5d',
                nonce: 49204
            }
        ];
        localStorage.setItem(DB_LEDGER_KEY, JSON.stringify(dbLedger));
    }
    
    // Sync public stats counters
    syncPublicStatsCounters();
}
function syncPublicStatsCounters() {
    const issuedEl = document.getElementById('stat-certs-issued');
    const verifiedEl = document.getElementById('stat-certs-verified');
    const instEl = document.getElementById('stat-institutions');
    if (issuedEl) issuedEl.textContent = dbCerts.length;
    if (verifiedEl) {
        // Mock verified queries count (total items + random count for presentation)
        verifiedEl.textContent = dbCerts.length * 7 + 128;
    }
    if (instEl) {
        const uniqueInsts = [...new Set(dbCerts.map(c => c.institution))];
        instEl.textContent = Math.max(uniqueInsts.length, 1);
    }
}
// SHA-256 hash helper using browser native Web Crypto API
async function calculateSHA256(text) {
    const msgUint8 = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
// -------------------------------------------------------------
// 2. Navigation & UI Controls
// 2. Routing, Navigation & Hamburger Menu
// -------------------------------------------------------------
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');
function initRouting() {
    // Listen to hash changes
    window.addEventListener('hashchange', handleHashRouting);
    // Initial route run
    handleHashRouting();
}
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            navButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
            
            currentTab = targetTab;
            
            // Re-render Explorer when visiting it
            if (currentTab === 'explorer') {
                renderLedgerExplorer();
                updateLedgerStats();
function handleHashRouting() {
    const hash = window.location.hash || '#/home';
    const publicHeader = document.querySelector('.public-header');
    const publicFooter = document.querySelector('.public-footer');
    const dashboardLayout = document.getElementById('view-dashboard');
    const appMain = document.querySelector('.app-main');
    // Close mobile nav drawer if open
    const publicNav = document.getElementById('public-nav-menu');
    const hamburgerBtn = document.getElementById('menu-toggle-btn');
    if (publicNav && publicNav.classList.contains('mobile-active')) {
        publicNav.classList.remove('mobile-active');
        hamburgerBtn.classList.remove('open');
    }
    // Hide all view-sections
    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.remove('active-view');
    });
    if (hash.startsWith('#/dashboard')) {
        // Session Guard check
        const hasSession = localStorage.getItem(AUTH_KEY);
        if (!hasSession) {
            window.location.hash = '#/login';
            return;
        }
        // Hide public layout, show dashboard layout
        if (publicHeader) publicHeader.style.display = 'none';
        if (publicFooter) publicFooter.style.display = 'none';
        if (appMain) appMain.style.padding = '0'; // Clean margin for full dashboard layout
        if (dashboardLayout) dashboardLayout.style.display = 'flex';
        // Retrieve sub-panel from URL hash e.g. #/dashboard/issue -> issue
        const parts = hash.split('/');
        const subPanel = parts[2] || 'stats';
        // Toggle sub-panels in Dashboard
        document.querySelectorAll('.db-panel').forEach(panel => {
            panel.classList.remove('active-panel');
        });
        
        const activePanel = document.getElementById(`panel-${subPanel}`);
        if (activePanel) {
            activePanel.classList.add('active-panel');
        }
        // Title update based on panel
        const titleEl = document.getElementById('db-panel-title');
        if (titleEl) {
            const titlesMap = {
                'stats': 'Dashboard Overview',
                'issue': 'Issue Cryptographic Certificate',
                'manage': 'Manage Certificate Records',
                'verify': 'Verify Document Integrity',
                'explorer': 'Distributed Ledger Explorer',
                'settings': 'System Settings'
            };
            titleEl.textContent = titlesMap[subPanel] || 'Dashboard';
        }
        // Update sidebar links active class
        document.querySelectorAll('.sidebar-link').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === hash || (subPanel === 'stats' && href === '#/dashboard/stats')) {
                link.classList.add('active');
            }
        });
    });
}
function initVerifyTabs() {
    const vTabButtons = document.querySelectorAll('.v-tab-btn');
    const vTabContents = document.querySelectorAll('.vtab-content');
        // Trigger updates depending on panel
        if (subPanel === 'stats') {
            updateLedgerStats();
            renderRecentCertificatesTable();
        } else if (subPanel === 'manage') {
            renderManageCertificatesTable();
            populateManageFilters();
        } else if (subPanel === 'explorer') {
            renderDashboardBlockchainExplorer();
        }
    } else {
        // Public routing
        if (dashboardLayout) dashboardLayout.style.display = 'none';
        if (publicHeader) publicHeader.style.display = 'block';
        if (publicFooter) publicFooter.style.display = 'block';
        if (appMain) appMain.style.padding = ''; // Reset core spacing
    vTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetVTab = btn.getAttribute('data-vtab');
            
            vTabButtons.forEach(b => b.classList.remove('active'));
            vTabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`vtab-${targetVTab}`).classList.add('active');
            
            currentVerifyTab = targetVTab;
        let targetView = 'view-home';
        if (hash === '#/verify') {
            targetView = 'view-verify';
        } else if (hash === '#/login') {
            targetView = 'view-login';
            // Auto redirect to dashboard if logged in already
            if (localStorage.getItem(AUTH_KEY)) {
                window.location.hash = '#/dashboard/stats';
                return;
            }
        }
        const viewEl = document.getElementById(targetView);
        if (viewEl) {
            viewEl.classList.add('active-view');
        }
        // Set active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    });
        // Scroll navigation mapping for landing sections
        if (hash === '#/about') {
            document.getElementById('view-home').classList.add('active-view');
            const target = document.getElementById('about-section');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === '#/how-it-works') {
            document.getElementById('view-home').classList.add('active-view');
            const target = document.getElementById('how-it-works-section');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
function initCollapsible() {
    const header = document.querySelector('.collapsible-header');
    const container = document.querySelector('.collapsible-section');
    if (header && container) {
        header.addEventListener('click', () => {
            container.classList.toggle('open');
function initHamburgerMenu() {
    const hamburgerBtn = document.getElementById('menu-toggle-btn');
    const publicNav = document.getElementById('public-nav-menu');
    if (hamburgerBtn && publicNav) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburgerBtn.classList.toggle('open');
            publicNav.classList.toggle('mobile-active');
        });
        // Close drawer clicking anywhere else
        document.addEventListener('click', () => {
            if (publicNav.classList.contains('mobile-active')) {
                publicNav.classList.remove('mobile-active');
                hamburgerBtn.classList.remove('open');
            }
        });
    }
}
    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = btn.getAttribute('data-target');
            const textToCopy = document.getElementById(targetId).textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fa-solid fa-check" style="color: var(--success)"></i>';
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 1500);
// -------------------------------------------------------------
// 3. Theme Toggle (Light / Dark Mode System)
// -------------------------------------------------------------
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    setTheme(savedTheme);
    const publicThemeBtn = document.getElementById('theme-toggle-btn');
    const dbThemeBtn = document.getElementById('db-theme-toggle');
    [publicThemeBtn, dbThemeBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                setTheme(newTheme);
            });
        });
        }
    });
}
function setTheme(theme) {
    const publicThemeBtn = document.getElementById('theme-toggle-btn');
    const dbThemeBtn = document.getElementById('db-theme-toggle');
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        localStorage.setItem(THEME_KEY, 'light');
        [publicThemeBtn, dbThemeBtn].forEach(btn => {
            if (btn) btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        });
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem(THEME_KEY, 'dark');
        [publicThemeBtn, dbThemeBtn].forEach(btn => {
            if (btn) btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        });
    }
}
// -------------------------------------------------------------
// 3. Web3 / Wallet Connection Simulation
// 4. Admin Auth Controllers
// -------------------------------------------------------------
function initWallet() {
    const walletBtn = document.getElementById('connect-wallet-btn');
    
    // Update button text on load
    if (connectedWallet) {
        setWalletConnectedUI(connectedWallet);
function initFormHandlers() {
    // Admin Login form submit
    const loginForm = document.getElementById('admin-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('login-username').value.trim();
            const passwordInput = document.getElementById('login-password').value.trim();
            const errorAlert = document.getElementById('login-error-msg');
            // Demo credentials: admin / admin123
            if (usernameInput === 'admin' && passwordInput === 'admin123') {
                errorAlert.style.display = 'none';
                localStorage.setItem(AUTH_KEY, Date.now().toString());
                
                // Clear login inputs
                loginForm.reset();
                
                // Redirect to dashboard overview
                window.location.hash = '#/dashboard/stats';
            } else {
                errorAlert.style.display = 'block';
            }
        });
    }
    walletBtn.addEventListener('click', async () => {
        if (connectedWallet) {
            // Disconnect wallet
            connectedWallet = null;
            localStorage.removeItem(WALLET_KEY);
            walletBtn.classList.remove('connected');
            walletBtn.querySelector('span').textContent = 'Connect Wallet';
            walletBtn.querySelector('i').className = 'fa-solid fa-wallet';
        } else {
            // Connect simulation
            walletBtn.querySelector('span').textContent = 'Connecting...';
    // Password visibility toggle
    const pwdToggle = document.getElementById('password-toggle');
    const pwdInput = document.getElementById('login-password');
    if (pwdToggle && pwdInput) {
        pwdToggle.addEventListener('click', () => {
            const isPassword = pwdInput.getAttribute('type') === 'password';
            pwdInput.setAttribute('type', isPassword ? 'text' : 'password');
            pwdToggle.innerHTML = isPassword ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>';
        });
    }
    // Admin Logout buttons
    const logoutBtn = document.getElementById('admin-logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem(AUTH_KEY);
            window.location.hash = '#/home';
        });
    }
    // Verify Submit Query Click
    const verifySubmit = document.getElementById('verify-submit-btn');
    if (verifySubmit) {
        verifySubmit.addEventListener('click', performVerification);
    }
    // Issue New Form Submit
    const issueForm = document.getElementById('issue-form');
    if (issueForm) {
        issueForm.addEventListener('submit', handleCertificateIssuance);
    }
    // PDF Download Button
    const downloadPdf = document.getElementById('download-pdf-btn');
    if (downloadPdf) {
        downloadPdf.addEventListener('click', generateAndDownloadPDF);
    }
    // Purge simulated chain records
    const clearLedger = document.getElementById('clear-ledger-btn');
    if (clearLedger) {
        clearLedger.addEventListener('click', handleLedgerReset);
    }
    // Test Verify shortcut button on Issue Preview
    const testVerifyBtn = document.getElementById('direct-verify-btn');
    if (testVerifyBtn) {
        testVerifyBtn.addEventListener('click', () => {
            if (!activeIssuedCert) return;
            
            // Check if actual MetaMask exists
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    connectedWallet = accounts[0];
                    localStorage.setItem(WALLET_KEY, connectedWallet);
                    setWalletConnectedUI(connectedWallet);
                } catch (err) {
                    console.error('Wallet connection declined, using simulated address.', err);
                    simulateWalletConnection();
                }
            } else {
                setTimeout(() => {
                    simulateWalletConnection();
                }, 800);
            // Fill Search input details in the verification panel
            const manualIdInput = document.getElementById('manual-cert-id');
            const manualHashInput = document.getElementById('manual-cert-hash');
            // Set hash or verify ID
            window.location.hash = '#/verify';
            
            // Switch subtab to manual search ID
            document.querySelector('[data-vtab="manual-hash"]').click();
            if (manualIdInput) manualIdInput.value = activeIssuedCert.certificateId;
            if (manualHashInput) manualHashInput.value = '';
            // Trigger verify query
            performVerification();
        });
    }
    // Check if query param exists in url e.g. ?verifyId=CERT-2026-4829
    const urlParams = new URLSearchParams(window.location.search);
    const verifyIdParam = urlParams.get('verifyId');
    if (verifyIdParam) {
        window.location.hash = '#/verify';
        document.querySelector('[data-vtab="manual-hash"]').click();
        const manId = document.getElementById('manual-cert-id');
        if (manId) manId.value = verifyIdParam;
        performVerification();
    }
}
// -------------------------------------------------------------
// 5. Admin Dashboard Controls
// -------------------------------------------------------------
function initDashboardControllers() {
    // Sidebar toggle (on mobile screens)
    const sidebarToggle = document.getElementById('db-sidebar-toggle');
    const sidebar = document.getElementById('dashboard-sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('collapsed');
        });
        // Close sidebar clicking outside on mobile screens
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 992 && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('collapsed');
            }
        }
        });
    }
    // Dashboard Statistics filters / search
    const recentSearch = document.getElementById('recent-search-input');
    const recentFilter = document.getElementById('recent-filter-grade');
    if (recentSearch) recentSearch.addEventListener('input', renderRecentCertificatesTable);
    if (recentFilter) recentFilter.addEventListener('change', renderRecentCertificatesTable);
    // Manage tab filters / search
    const manageSearch = document.getElementById('manage-search-input');
    const manageGrade = document.getElementById('manage-filter-grade');
    const manageInst = document.getElementById('manage-filter-institution');
    if (manageSearch) manageSearch.addEventListener('input', renderManageCertificatesTable);
    if (manageGrade) manageGrade.addEventListener('change', renderManageCertificatesTable);
    if (manageInst) manageInst.addEventListener('change', renderManageCertificatesTable);
    // Mock settings saving trigger
    const saveSettings = document.getElementById('save-settings-btn');
    if (saveSettings) {
        saveSettings.addEventListener('click', () => {
            alert('System configurations saved successfully!');
        });
    }
}
// Renders the stats panels inside dashboard
function updateLedgerStats() {
    const total = dbCerts.length;
    const blocks = dbLedger.length;
    // Render stats widgets
    const dbTotalEl = document.getElementById('db-stat-total');
    const dbVerifiedEl = document.getElementById('db-stat-verified');
    const dbPendingEl = document.getElementById('db-stat-pending');
    const dbBlocksEl = document.getElementById('db-stat-blocks');
    if (dbTotalEl) dbTotalEl.textContent = total;
    if (dbVerifiedEl) dbVerifiedEl.textContent = total; // All issued are verified
    if (dbPendingEl) dbPendingEl.textContent = 0;
    if (dbBlocksEl) dbBlocksEl.textContent = blocks;
    // Sync explorer statistics as well
    const expTotal = document.getElementById('explorer-total-certs');
    const expHeight = document.getElementById('explorer-block-height');
    
    if (expTotal) expTotal.textContent = total;
    if (expHeight) {
        const height = blocks > 0 ? dbLedger[0].blockHeight : 48290;
        expHeight.textContent = `#${height}`;
    }
    // Sync public stats counters
    syncPublicStatsCounters();
}
// Renders the small recent table in dashboard overview
function renderRecentCertificatesTable() {
    const tbody = document.getElementById('recent-certs-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const searchVal = (document.getElementById('recent-search-input')?.value || '').toLowerCase();
    const gradeVal = document.getElementById('recent-filter-grade')?.value || '';
    // Filter certificates array
    const filtered = dbCerts.filter(c => {
        const matchesSearch = c.studentName.toLowerCase().includes(searchVal) ||
                             c.certificateId.toLowerCase().includes(searchVal) ||
                             c.course.toLowerCase().includes(searchVal);
        const matchesGrade = gradeVal === '' || c.grade === gradeVal;
        return matchesSearch && matchesGrade;
    });
    // Pick top 5 most recent
    const recentList = filtered.slice(0, 5);
    if (recentList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center">No certificates found matching criteria.</td></tr>';
        return;
    }
    recentList.forEach(cert => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong class="highlight">${cert.certificateId}</strong></td>
            <td>${cert.studentName}</td>
            <td>${cert.course}</td>
            <td>${cert.institution}</td>
            <td>${cert.issueDate}</td>
            <td><span class="badge-role" style="background: rgba(16, 185, 129, 0.1); color: var(--success);">✓ Secure</span></td>
            <td>
                <div class="row-actions">
                    <button class="icon-btn-action" title="Verify Certificate" onclick="directVerifyDashboard('${cert.certificateId}')"><i class="fa-solid fa-square-check"></i></button>
                    <button class="icon-btn-action text-red" title="Delete Record" style="color: var(--error);" onclick="directDeleteDashboard('${cert.certificateId}')"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
function simulateWalletConnection() {
    connectedWallet = '0x' + Array.from({length: 40}, () => Math.floor(Math.random()*16).toString(16)).join('');
    localStorage.setItem(WALLET_KEY, connectedWallet);
    setWalletConnectedUI(connectedWallet);
// Renders the comprehensive list in Manage Certificates view
function renderManageCertificatesTable() {
    const tbody = document.getElementById('manage-certs-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    const searchVal = (document.getElementById('manage-search-input')?.value || '').toLowerCase();
    const gradeVal = document.getElementById('manage-filter-grade')?.value || '';
    const instVal = document.getElementById('manage-filter-institution')?.value || '';
    const filtered = dbCerts.filter(c => {
        const matchesSearch = c.studentName.toLowerCase().includes(searchVal) ||
                             c.certificateId.toLowerCase().includes(searchVal) ||
                             c.course.toLowerCase().includes(searchVal);
        const matchesGrade = gradeVal === '' || c.grade === gradeVal;
        const matchesInst = instVal === '' || c.institution === instVal;
        return matchesSearch && matchesGrade && matchesInst;
    });
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center">No certificates registered in index.</td></tr>';
        return;
    }
    filtered.forEach(cert => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong class="highlight">${cert.certificateId}</strong></td>
            <td>${cert.studentName}</td>
            <td>${cert.course}</td>
            <td>${cert.institution}</td>
            <td>${cert.issueDate}</td>
            <td><span class="badge-role" style="background: rgba(6, 182, 212, 0.15); color: var(--accent);">Mined Block #${cert.blockHeight}</span></td>
            <td>
                <div class="row-actions flex gap-2">
                    <button class="icon-btn-action" title="View details" onclick="directVerifyDashboard('${cert.certificateId}')"><i class="fa-solid fa-eye"></i></button>
                    <button class="icon-btn-action" title="Verify Cryptography" onclick="directVerifyDashboard('${cert.certificateId}')"><i class="fa-solid fa-square-check"></i></button>
                    <button class="icon-btn-action" style="color: var(--error);" title="Delete Permanently" onclick="directDeleteDashboard('${cert.certificateId}')"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
function setWalletConnectedUI(address) {
    const walletBtn = document.getElementById('connect-wallet-btn');
    const truncatedAddress = address.slice(0, 6) + '...' + address.slice(-4);
    walletBtn.classList.add('connected');
    walletBtn.querySelector('span').textContent = truncatedAddress;
    walletBtn.querySelector('i').className = 'fa-solid fa-link';
function populateManageFilters() {
    const instSelect = document.getElementById('manage-filter-institution');
    if (!instSelect) return;
    // Save previous value
    const prevVal = instSelect.value;
    
    // Get unique institutions list
    const insts = [...new Set(dbCerts.map(c => c.institution))];
    
    instSelect.innerHTML = '<option value="">All Institutions</option>';
    insts.forEach(inst => {
        const opt = document.createElement('option');
        opt.value = inst;
        opt.textContent = inst;
        instSelect.appendChild(opt);
    });
    // Restore selected value
    if (prevVal && insts.includes(prevVal)) {
        instSelect.value = prevVal;
    }
}
// Global hook methods for table triggers
window.directVerifyDashboard = function(certId) {
    // Navigate to dashboard verify panel
    window.location.hash = '#/dashboard/verify';
    
    // Autofill embedded verify panel ID and query
    const targetInput = document.getElementById('dashboard-verify-cert-id');
    if (targetInput) {
        targetInput.value = certId;
        // Trigger the query
        const queryBtn = document.getElementById('dashboard-verify-submit-btn');
        if (queryBtn) queryBtn.click();
    }
};
window.directDeleteDashboard = function(certId) {
    if (confirm(`CRITICAL ACTION: Are you sure you want to permanently delete certificate "${certId}"? This will prune ledger data for this record.`)) {
        // Prune from certs
        dbCerts = dbCerts.filter(c => c.certificateId !== certId);
        localStorage.setItem(DB_CERTS_KEY, JSON.stringify(dbCerts));
        // Prune from ledger blocks list
        dbLedger = dbLedger.filter(b => b.certificateId !== certId);
        localStorage.setItem(DB_LEDGER_KEY, JSON.stringify(dbLedger));
        // Re-sync and render
        updateLedgerStats();
        renderRecentCertificatesTable();
        renderManageCertificatesTable();
        renderDashboardBlockchainExplorer();
    }
};
// Clones verification template elements inside dashboard view
function embedVerificationInDashboard() {
    const target = document.getElementById('embedded-verify-target');
    if (!target) return;
    // Build sub forms
    target.innerHTML = `
        <div class="verify-grid" style="grid-template-columns: 1fr; max-width: 700px; margin: 0 auto;">
            <div class="card glass-card p-6" style="border: 1px solid rgba(255, 255, 255, 0.05); background: rgba(15, 23, 42, 0.4);">
                <div class="input-group">
                    <label for="dashboard-verify-cert-id">Search Certificate by ID</label>
                    <div class="input-with-icon">
                        <i class="fa-solid fa-hashtag"></i>
                        <input type="text" id="dashboard-verify-cert-id" placeholder="e.g. CERT-2026-4829">
                    </div>
                </div>
                <button id="dashboard-verify-submit-btn" class="btn btn-gradient w-full mt-4">
                    <i class="fa-solid fa-circle-nodes"></i> Query Immutable Ledger
                </button>
            </div>
            
            <div class="card glass-card p-6 mt-6" id="dashboard-verify-results" style="display: none; border: 1px solid rgba(255, 255, 255, 0.05);">
                <!-- Result placeholder -->
                <div id="db-result-success" style="display: none;">
                    <div class="badge-header verified">
                        <div class="status-icon"><i class="fa-solid fa-circle-check"></i></div>
                        <div>
                            <span class="status-tag">✓ Verified & Validated</span>
                            <h4 id="db-res-name">Ponvel S</h4>
                        </div>
                    </div>
                    <div class="result-details mt-4">
                        <div class="detail-row"><span class="label">Certificate ID</span><span class="value highlight" id="db-res-id">CERT-X</span></div>
                        <div class="detail-row"><span class="label">Course Completed</span><span class="value" id="db-res-course">Course Title</span></div>
                        <div class="detail-row"><span class="label">Grade</span><span class="value" id="db-res-grade">A+</span></div>
                        <div class="detail-row"><span class="label">Issue Date</span><span class="value" id="db-res-date">2026-07-18</span></div>
                        <div class="detail-row"><span class="label">Institution</span><span class="value" id="db-res-inst">BlockCert Academy</span></div>
                        <div class="detail-row"><span class="label">SHA-256 Hash</span><span class="value text-accent" id="db-res-hash">0x...</span></div>
                        <div class="detail-row"><span class="label">Transaction ID</span><span class="value" id="db-res-tx">0x...</span></div>
                    </div>
                </div>
                
                <div id="db-result-error" style="display: none; color: var(--error);">
                    <div class="badge-header unverified">
                        <div class="status-icon"><i class="fa-solid fa-circle-xmark"></i></div>
                        <div>
                            <span class="status-tag">✗ Invalid Certificate</span>
                            <h4>Ledger Record Missing</h4>
                        </div>
                    </div>
                    <p class="mt-4" id="db-res-error-text">No cryptographic record mapped to this ID on the network ledger.</p>
                </div>
            </div>
        </div>
    `;
    // Hook listeners
    document.getElementById('dashboard-verify-submit-btn').addEventListener('click', () => {
        const certId = document.getElementById('dashboard-verify-cert-id').value.trim();
        const resultsBox = document.getElementById('dashboard-verify-results');
        const successBox = document.getElementById('db-result-success');
        const errorBox = document.getElementById('db-result-error');
        if (!certId) {
            alert('Please enter a Certificate ID.');
            return;
        }
        resultsBox.style.display = 'block';
        
        const matched = dbCerts.find(c => c.certificateId.toLowerCase() === certId.toLowerCase());
        if (matched) {
            successBox.style.display = 'block';
            errorBox.style.display = 'none';
            document.getElementById('db-res-name').textContent = matched.studentName;
            document.getElementById('db-res-id').textContent = matched.certificateId;
            document.getElementById('db-res-course').textContent = matched.course;
            document.getElementById('db-res-grade').textContent = matched.grade;
            document.getElementById('db-res-date').textContent = matched.completionDate;
            document.getElementById('db-res-inst').textContent = matched.institution;
            document.getElementById('db-res-hash').textContent = matched.certificateHash;
            document.getElementById('db-res-tx').textContent = matched.blockchainTxHash;
        } else {
            successBox.style.display = 'none';
            errorBox.style.display = 'block';
            document.getElementById('db-res-error-text').textContent = `No block verified on ledger for Certificate ID "${certId}".`;
        }
    });
}
// -------------------------------------------------------------
// 4. Drag & Drop File Verification API
// 6. Drag & Drop File Verification API
// -------------------------------------------------------------
function initDragAndDrop() {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('cert-file-input');
    const infoBar = document.getElementById('file-info-bar');
    const nameLabel = document.getElementById('file-name-label');
    const clearBtn = document.getElementById('clear-file-btn');
    if (!dropZone) return;
    // Drag-over hover effects
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
        infoBar.style.display = 'none';
        dropZone.style.display = 'block';
        resetVerificationResults();
        loadedFileBuffer = null;
    });
}
let loadedFileBuffer = null;
function handleSelectedFile(file) {
    if (file.type !== 'application/pdf') {
        alert('Invalid file format. Please upload a PDF certificate.');
    reader.readAsArrayBuffer(file);
}
function initVerifyTabs() {
    const vTabButtons = document.querySelectorAll('.v-tab-btn');
    const vTabContents = document.querySelectorAll('.vtab-content');
    vTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetVTab = btn.getAttribute('data-vtab');
            
            vTabButtons.forEach(b => b.classList.remove('active'));
            vTabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const targetEl = document.getElementById(`vtab-${targetVTab}`);
            if (targetEl) targetEl.classList.add('active');
            
            currentVerifyTab = targetVTab;
        });
    });
}
function initCollapsible() {
    const header = document.querySelector('.collapsible-header');
    const container = document.querySelector('.collapsible-section');
    if (header && container) {
        header.addEventListener('click', () => {
            container.classList.toggle('open');
        });
    }
    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = btn.getAttribute('data-target');
            const textToCopy = document.getElementById(targetId).textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fa-solid fa-check" style="color: var(--success)"></i>';
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 1500);
            });
        });
    });
}
// -------------------------------------------------------------
// 5. Verification Logic (Queries Ledger)
// 7. Verification Logic (Queries Ledger)
// -------------------------------------------------------------
async function performVerification() {
    const placeholder = document.getElementById('result-placeholder');
    const loader = document.getElementById('result-loader');
    const successBox = document.getElementById('result-success');
    const errorBox = document.getElementById('result-error');
    if (!placeholder) return;
    // Show loading spinner
    placeholder.style.display = 'none';
    successBox.style.display = 'none';
    document.getElementById('res-course').textContent = cert.course;
    document.getElementById('res-grade').textContent = cert.grade;
    document.getElementById('res-date').textContent = cert.completionDate;
    document.getElementById('res-authority').textContent = `${cert.authority} • ${cert.institution}`;
    document.getElementById('res-institution').textContent = cert.institution;
    document.getElementById('res-authority').textContent = cert.authority;
    
    document.getElementById('res-sha-hash').textContent = cert.certificateHash;
    document.getElementById('res-tx-hash').textContent = cert.blockchainTxHash;
    document.getElementById('res-block-info').textContent = `Block #${cert.blockHeight} • Registered on ${cert.timestamp}`;
}
function showVerificationError(message) {
    document.getElementById('result-error').style.display = 'block';
    document.getElementById('error-message-text').textContent = message;
}
function resetVerificationResults() {
    document.getElementById('result-placeholder').style.display = 'block';
    const rPlaceholder = document.getElementById('result-placeholder');
    if (!rPlaceholder) return;
    
    rPlaceholder.style.display = 'block';
    document.getElementById('result-loader').style.display = 'none';
    document.getElementById('result-success').style.display = 'none';
    document.getElementById('result-error').style.display = 'none';
}
// -------------------------------------------------------------
// 6. Issuance & Signing Portal Logic
// 8. Issuance & Signing Portal Logic
// -------------------------------------------------------------
async function handleCertificateIssuance(e) {
    e.preventDefault();
    const name = document.getElementById('student-name').value.trim();
    const email = document.getElementById('student-email').value.trim();
    const regNo = document.getElementById('register-number').value.trim();
    const inst = document.getElementById('institution').value.trim();
    const dept = document.getElementById('department').value.trim();
    const course = document.getElementById('course-title').value.trim();
    const grade = document.getElementById('grade-value').value;
    const date = document.getElementById('completion-date').value;
    const date = document.getElementById('completion-date').value; // completion date
    const auth = document.getElementById('issuance-authority').value.trim();
    const desc = document.getElementById('cert-description').value.trim() || 'Certificate registry entry';
    const customId = document.getElementById('custom-cert-id').value.trim();
    // 1. Generate unique Cert ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const year = new Date(date).getFullYear() || new Date().getFullYear();
    const certId = `CERT-${year}-${randomSuffix}`;
    // 1. Generate unique Cert ID if not provided
    let certId = customId;
    if (!certId) {
        const randomSuffix = Math.floor(1000 + Math.random() * 9000);
        const year = new Date(date).getFullYear() || new Date().getFullYear();
        certId = `CERT-${year}-${randomSuffix}`;
    }
    // 2. Hash construction
    // 2. Hash construction (Preserving exact signature mapping format)
    const issueDateStr = new Date().toISOString().split('T')[0];
    const dataPayload = `${certId}|${regNo}|${name}|${dept}|${course}|${inst}|${date}|${issueDateStr}|${grade}`;
    const certHash = await calculateSHA256(dataPayload);
    // 3. Create simulated Blockchain Block Transaction
    const txHash = '0x' + Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join('');
    const blockNum = dbLedger.length ? dbLedger[0].blockHeight + 1 : 48291;
    const prevBlock = dbLedger.length ? dbLedger[0] : null;
    const prevHash = prevBlock ? prevBlock.certificateHash : '9a8d7a6e5d4c3b2a1a098d7a6e5d4c3b2a1a098d7a6e5d4c3b2a1a098d7a6e5d';
    const blockNum = prevBlock ? prevBlock.blockHeight + 1 : 48291;
    const timestampStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const issuerAddress = connectedWallet || '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'; // Fallback admin wallet
    const nonce = Math.floor(10000 + Math.random() * 90000);
    const newCert = {
        certificateId: certId,
        studentName: name,
        studentEmail: email,
        registerNumber: regNo,
        department: dept,
        course: course,
        grade: grade,
        institution: inst,
        completionDate: date,
        issueDate: issueDateStr,
        authority: auth,
        description: desc,
        certificateHash: certHash,
        blockchainTxHash: txHash,
        blockHeight: blockNum,
        blockchainTxHash: txHash,
        certificateId: certId,
        certificateHash: certHash,
        issuerWallet: issuerAddress
        issuerWallet: issuerAddress,
        previousHash: prevHash,
        nonce: nonce
    };
    dbLedger.unshift(newBlock);
    localStorage.setItem(DB_LEDGER_KEY, JSON.stringify(dbLedger));
    document.getElementById('mock-preview-grade').textContent = grade;
    document.getElementById('mock-preview-date').textContent = date;
    // Update success metrics fields
    document.getElementById('metric-cert-id').textContent = certId;
    document.getElementById('metric-cert-hash').textContent = certHash.slice(0, 24) + '...';
    document.getElementById('metric-tx-id').textContent = `Block #${blockNum} | Tx ${txHash.slice(0, 16)}...`;
    // Generate Verification URL for QR code
    // Points to current window path or general verify lookup
    const qrTargetUrl = `${window.location.origin}${window.location.pathname}?verifyId=${certId}`;
    
    // Clear old QR code
    const qrContainer = document.getElementById('preview-qr-code');
    qrContainer.innerHTML = '';
    
    // Render dynamic QR code in preview panel
    new QRCode(qrContainer, {
        text: qrTargetUrl,
        width: 80,
        height: 80,
        colorDark: "#0f172a",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    if (qrContainer) {
        qrContainer.innerHTML = '';
        
        // Render dynamic QR code in preview panel
        new QRCode(qrContainer, {
            text: qrTargetUrl,
            width: 80,
            height: 80,
            colorDark: "#0b0f19",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
    // Toggle Preview display states
    document.getElementById('preview-placeholder').style.display = 'none';
    document.getElementById('preview-success').style.display = 'block';
    // Clear form inputs
    document.getElementById('issue-form').reset();
    // Sync Stats
    // Sync Stats & Refresh tables
    updateLedgerStats();
    renderRecentCertificatesTable();
    renderManageCertificatesTable();
    renderDashboardBlockchainExplorer();
}
// -------------------------------------------------------------
// 7. Client-Side PDF Generation & Downloads via PDF-Lib
// 9. Client-Side PDF Generation & Downloads via PDF-Lib
// -------------------------------------------------------------
async function generateAndDownloadPDF() {
    if (!activeIssuedCert) return;
        });
        // 4. Embed QR Code Image
        // Get canvas generated by QRCodeJS
        const qrCanvas = document.getElementById('preview-qr-code').querySelector('canvas');
        if (qrCanvas) {
            const qrDataUrl = qrCanvas.toDataURL('image/png');
            color: PDFLib.rgb(0.4, 0.4, 0.4)
        });
        page.drawText(`Verify authenticity at SecurCert portal`, {
        page.drawText(`Verify authenticity at BlockCert registry portal`, {
            x: width - 210,
            y: 50,
            size: 7,
            font: fontRegular,
            color: PDFLib.rgb(0.5, 0.5, 0.5)
        });
        // 5. Inject Cryptographic metadata into PDF properties
        // This is critical, it allows client-side parsing and verification!
        // Format keywords: certificateId, studentName, course, grade, completionDate, signatureHash
        const metaKeywords = `${cert.certificateId}, ${cert.studentName}, ${cert.course}, ${cert.grade}, ${cert.completionDate}, ${cert.certificateHash}`;
        pdfDoc.setKeywords([metaKeywords]);
        pdfDoc.setProducer('SecurCert Decentralized Proof Engine v1.0');
        pdfDoc.setProducer('BlockCert Decentralized Proof Ledger v1.0');
        pdfDoc.setTitle(`Academic Certificate - ${cert.studentName}`);
        // 6. Serialize and Trigger browser save download
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `securcert-${cert.certificateId}.pdf`;
        link.download = `blockcert-${cert.certificateId}.pdf`;
        link.click();
        
        // Clean URL ref
        setTimeout(() => URL.revokeObjectURL(link.href), 100);
    } catch (err) {
        console.error('PDF generation failure:', err);
        alert('Failed to generate PDF document. See developer console for logs.');
    }
}
// -------------------------------------------------------------
// 8. Blockchain Explorer Views & Stats rendering
// 10. Web3 / Wallet Connection Simulation
// -------------------------------------------------------------
function updateLedgerStats() {
    document.getElementById('explorer-total-certs').textContent = dbCerts.length;
function initWallet() {
    const walletBtn = document.getElementById('connect-wallet-btn');
    if (!walletBtn) return;
    
    const blockHeight = dbLedger.length ? dbLedger[0].blockHeight : 48290;
    document.getElementById('explorer-block-height').textContent = `#${blockHeight}`;
    // Update button text on load
    if (connectedWallet) {
        setWalletConnectedUI(connectedWallet);
    }
    walletBtn.addEventListener('click', async () => {
        if (connectedWallet) {
            // Disconnect wallet
            connectedWallet = null;
            localStorage.removeItem(WALLET_KEY);
            walletBtn.classList.remove('connected');
            walletBtn.querySelector('span').textContent = 'Connect Wallet';
            walletBtn.querySelector('i').className = 'fa-solid fa-wallet';
        } else {
            // Connect simulation
            walletBtn.querySelector('span').textContent = 'Connecting...';
            
            // Check if actual MetaMask exists
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    connectedWallet = accounts[0];
                    localStorage.setItem(WALLET_KEY, connectedWallet);
                    setWalletConnectedUI(connectedWallet);
                } catch (err) {
                    console.error('Wallet connection declined, using simulated address.', err);
                    simulateWalletConnection();
                }
            } else {
                setTimeout(() => {
                    simulateWalletConnection();
                }, 800);
            }
        }
    });
}
function renderLedgerExplorer() {
function simulateWalletConnection() {
    connectedWallet = '0x' + Array.from({length: 40}, () => Math.floor(Math.random()*16).toString(16)).join('');
    localStorage.setItem(WALLET_KEY, connectedWallet);
    setWalletConnectedUI(connectedWallet);
}
function setWalletConnectedUI(address) {
    const walletBtn = document.getElementById('connect-wallet-btn');
    if (!walletBtn) return;
    
    const truncatedAddress = address.slice(0, 6) + '...' + address.slice(-4);
    walletBtn.classList.add('connected');
    walletBtn.querySelector('span').textContent = truncatedAddress;
    walletBtn.querySelector('i').className = 'fa-solid fa-link';
}
// -------------------------------------------------------------
// 11. Blockchain Explorer Nodes Timeline
// -------------------------------------------------------------
function renderDashboardBlockchainExplorer() {
    const tableBody = document.getElementById('explorer-table-body');
    const timelineContainer = document.getElementById('timeline-chain-nodes');
    
    if (!tableBody || !timelineContainer) return;
    tableBody.innerHTML = '';
    timelineContainer.innerHTML = '';
    if (!dbLedger.length) {
        tableBody.innerHTML = `
            <tr class="empty-row">
                <td colspan="6">No block transactions found. Issue a certificate to register data on the chain.</td>
                <td colspan="6" class="text-center">No block transactions found. Issue a certificate to register data.</td>
            </tr>`;
        timelineContainer.innerHTML = `
            <div class="empty-chain-state p-6 text-center text-muted">
                <i class="fa-solid fa-network-wired" style="font-size: 2rem; margin-bottom: 8px;"></i>
                <p>Simulated Blockchain is empty. Mined nodes will display here sequentially.</p>
            </div>`;
        return;
    }
    // Render nodes timeline cards (reversed for timeline: oldest left to newest right)
    const reversedLedger = [...dbLedger].reverse();
    reversedLedger.forEach((block, idx) => {
        // Block node element
        const node = document.createElement('div');
        node.className = 'blockchain-node-card card glass-card';
        node.innerHTML = `
            <div class="node-header">
                <span class="block-height">Block #${block.blockHeight}</span>
                <span class="status-indicator active">Mined</span>
            </div>
            <div class="node-body">
                <div class="node-meta"><strong>Timestamp:</strong> <span>${block.timestamp}</span></div>
                <div class="node-meta"><strong>Tx Hash:</strong> <span class="hash-clip" title="${block.blockchainTxHash}">${block.blockchainTxHash.slice(0, 14)}...</span></div>
                <div class="node-meta"><strong>ID Map:</strong> <span class="highlight">${block.certificateId}</span></div>
                <div class="node-meta"><strong>Hash Signature:</strong> <span class="hash-clip" title="${block.certificateHash}">${block.certificateHash.slice(0, 14)}...</span></div>
                <div class="node-meta"><strong>Nonce:</strong> <span>${block.nonce}</span></div>
            </div>
        `;
        timelineContainer.appendChild(node);
        // Add visual link arrow if not the last item
        if (idx < reversedLedger.length - 1) {
            const link = document.createElement('div');
            link.className = 'chain-link-arrow';
            link.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
            timelineContainer.appendChild(link);
        }
    });
    // Render Explorer tabular details (latest blocks first)
    dbLedger.forEach(block => {
        const tr = document.createElement('tr');
        
        // Truncate hashes for clean visual display
        const truncTx = block.blockchainTxHash.substring(0, 10) + '...' + block.blockchainTxHash.slice(-6);
        const truncTx = block.blockchainTxHash.substring(0, 12) + '...' + block.blockchainTxHash.slice(-6);
        const truncProof = block.certificateHash.substring(0, 16) + '...';
        const truncWallet = block.issuerWallet.substring(0, 8) + '...' + block.issuerWallet.slice(-4);
        tr.innerHTML = `
            <td><span class="block-num">#${block.blockHeight}</span></td>
            <td>${block.timestamp}</td>
            <td><a href="#" class="tx-hash-link" title="${block.blockchainTxHash}">${truncTx}</a></td>
            <td><a href="#/dashboard/explorer" class="tx-hash-link" title="${block.blockchainTxHash}">${truncTx}</a></td>
            <td><span class="highlight" style="font-family: monospace; font-weight:600;">${block.certificateId}</span></td>
            <td><span class="proof-hash" title="${block.certificateHash}">${truncProof}</span></td>
            <td><span class="wallet-addr" title="${block.issuerWallet}" style="font-family: monospace;">${truncWallet}</span></td>
        dbCerts = [];
        dbLedger = [];
        loadDatabase();
        
        // Refresh views
        updateLedgerStats();
        renderLedgerExplorer();
        renderRecentCertificatesTable();
        renderManageCertificatesTable();
        renderDashboardBlockchainExplorer();
        resetVerificationResults();
        
        // Return preview back to default placeholder
        document.getElementById('preview-success').style.display = 'none';
        document.getElementById('preview-placeholder').style.display = 'flex';
        const ps = document.getElementById('preview-success');
        const ph = document.getElementById('preview-placeholder');
        if (ps) ps.style.display = 'none';
        if (ph) ph.style.display = 'flex';
        activeIssuedCert = null;
    }
}
// -------------------------------------------------------------
// 9. Attach Form Handlers & Query Params Action
// -------------------------------------------------------------
function initFormHandlers() {
    // Verify Submit Query Click
    document.getElementById('verify-submit-btn').addEventListener('click', performVerification);
    // Issue New Form Submit
    document.getElementById('issue-form').addEventListener('submit', handleCertificateIssuance);
    // PDF Download Button
    document.getElementById('download-pdf-btn').addEventListener('click', generateAndDownloadPDF);
    // Purge simulated chain records
    document.getElementById('clear-ledger-btn').addEventListener('click', handleLedgerReset);
    // Test Verify shortcut button on Issue Preview
    document.getElementById('direct-verify-btn').addEventListener('click', () => {
        if (!activeIssuedCert) return;
        // Switch back to Verify Tab
        document.querySelector('[data-tab="verify"]').click();
        
        // Switch subtab to manual search ID
        document.querySelector('[data-vtab="manual-hash"]').click();
        // Fill Search input details
        document.getElementById('manual-cert-id').value = activeIssuedCert.certificateId;
        document.getElementById('manual-cert-hash').value = '';
        // Trigger verify query
        performVerification();
    });
    // Check if query param exists in url e.g. ?verifyId=CERT-2026-4829
    const urlParams = new URLSearchParams(window.location.search);
    const verifyIdParam = urlParams.get('verifyId');
    if (verifyIdParam) {
        // Direct route verify
        document.querySelector('[data-tab="verify"]').click();
        document.querySelector('[data-vtab="manual-hash"]').click();
        document.getElementById('manual-cert-id').value = verifyIdParam;
        performVerification();
    }
}
