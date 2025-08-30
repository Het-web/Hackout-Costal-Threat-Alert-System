// Application Data
const appData = {
  "threats": [
    {
      "id": 1,
      "type": "Storm Surge",
      "severity": "Critical",
      "location": "Mumbai Coast",
      "coordinates": [19.0760, 72.8777],
      "description": "Predicted 3.2m storm surge approaching coastline",
      "aiExplanation": "AI models detected unusual barometric pressure drop (45mb in 6 hours) combined with sustained winds >85 km/h from Southwest. Historical patterns indicate 87% probability of significant storm surge within 4-6 hours.",
      "recommendedAction": "Immediate evacuation of low-lying areas within 2km of coastline",
      "affectedPopulation": 15000,
      "timestamp": "2025-08-30T10:15:00Z",
      "status": "Active"
    },
    {
      "id": 2,
      "type": "Coastal Erosion",
      "severity": "High",
      "location": "Goa Beaches",
      "coordinates": [15.2993, 74.1240],
      "description": "Accelerated erosion detected at multiple beach segments",
      "aiExplanation": "Satellite imagery analysis shows 2.3m average shoreline retreat over past 72 hours. Combined with tidal patterns and recent storms, erosion rate is 340% above seasonal average.",
      "recommendedAction": "Restrict access to affected beach areas, deploy emergency sand barriers",
      "affectedPopulation": 2500,
      "timestamp": "2025-08-30T08:30:00Z",
      "status": "Active"
    },
    {
      "id": 3,
      "type": "Oil Spill",
      "severity": "Medium",
      "location": "Chennai Port",
      "coordinates": [13.0827, 80.2707],
      "description": "Small petroleum discharge detected near port facilities",
      "aiExplanation": "Water quality sensors detected hydrocarbon levels 8x above normal threshold. Wind and current models predict southward movement along 12km of coastline over next 18 hours.",
      "recommendedAction": "Deploy containment booms, alert fishing communities to avoid area",
      "affectedPopulation": 800,
      "timestamp": "2025-08-30T09:45:00Z",
      "status": "Monitoring"
    }
  ],
  "communityReports": [
    {
      "id": 1,
      "reporterName": "Raj Kumar",
      "reporterType": "Fisherman",
      "location": "Versova Beach, Mumbai",
      "coordinates": [19.1368, 72.8228],
      "threatType": "Oil Spill",
      "description": "Dark patches visible in water near fishing boats, strong petroleum smell",
      "priority": "High",
      "timestamp": "2025-08-30T10:30:00Z",
      "photos": ["oil_spill_1.jpg", "oil_spill_2.jpg"],
      "status": "Verified",
      "verificationNote": "Confirmed by satellite data analysis"
    },
    {
      "id": 2,
      "reporterName": "Meera Patel",
      "reporterType": "Coastal Resident",
      "location": "Juhu Beach, Mumbai",
      "coordinates": [19.1075, 72.8263],
      "threatType": "Unusual Tides",
      "description": "Water levels much higher than normal high tide, flooding walkway",
      "priority": "Critical",
      "timestamp": "2025-08-30T11:00:00Z",
      "photos": ["high_tide_1.jpg"],
      "status": "Under Investigation",
      "verificationNote": "Field team dispatched for verification"
    },
    {
      "id": 3,
      "reporterName": "Vikram Singh",
      "reporterType": "Tourist",
      "location": "Calangute Beach, Goa",
      "coordinates": [15.5430, 73.7551],
      "threatType": "Coastal Erosion",
      "description": "Large section of beach disappeared overnight, trees falling into water",
      "priority": "High",
      "timestamp": "2025-08-30T07:15:00Z",
      "photos": ["erosion_1.jpg", "erosion_2.jpg", "erosion_3.jpg"],
      "status": "Verified",
      "verificationNote": "Matches satellite erosion data"
    }
  ],
  "shelters": [
    {
      "id": 1,
      "name": "Mumbai Municipal School #47",
      "location": "Bandra West",
      "coordinates": [19.0596, 72.8295],
      "capacity": 500,
      "currentOccupancy": 120,
      "facilities": ["Medical Aid", "Food", "Water", "Generators"],
      "contact": "+91-9876543210",
      "status": "Open"
    },
    {
      "id": 2,
      "name": "Coastal Community Center",
      "location": "Versova",
      "coordinates": [19.1368, 72.8228],
      "capacity": 300,
      "currentOccupancy": 45,
      "facilities": ["Food", "Water", "Basic Medical"],
      "contact": "+91-9876543211",
      "status": "Open"
    },
    {
      "id": 3,
      "name": "St. Xavier's High School",
      "location": "Goa - Panaji",
      "coordinates": [15.4909, 73.8278],
      "capacity": 800,
      "currentOccupancy": 0,
      "facilities": ["Medical Aid", "Food", "Water", "Communication"],
      "contact": "+91-9876543212",
      "status": "On Standby"
    }
  ],
  "evacuationRoutes": [
    {
      "id": 1,
      "name": "Mumbai Coastal Route A",
      "startPoint": [19.0760, 72.8777],
      "endPoint": [19.0596, 72.8295],
      "description": "Primary evacuation route from Mumbai coast to Bandra shelter",
      "estimatedTime": "25 minutes",
      "status": "Clear",
      "alternativeRoute": "Route B via Western Express Highway"
    },
    {
      "id": 2,
      "name": "Goa Beach Route",
      "startPoint": [15.5430, 73.7551],
      "endPoint": [15.4909, 73.8278],
      "description": "Evacuation route from Calangute to Panaji shelter",
      "estimatedTime": "35 minutes",
      "status": "Congested",
      "alternativeRoute": "Route via NH66"
    }
  ],
  "sensorData": [
    {
      "location": "Mumbai",
      "seaLevel": 2.3,
      "waveHeight": 4.2,
      "windSpeed": 45,
      "temperature": 28,
      "humidity": 78,
      "lastUpdated": "2025-08-30T11:15:00Z"
    },
    {
      "location": "Goa",
      "seaLevel": 1.8,
      "waveHeight": 2.1,
      "windSpeed": 22,
      "temperature": 32,
      "humidity": 65,
      "lastUpdated": "2025-08-30T11:14:00Z"
    },
    {
      "location": "Chennai",
      "seaLevel": 1.5,
      "waveHeight": 1.8,
      "windSpeed": 18,
      "temperature": 35,
      "humidity": 72,
      "lastUpdated": "2025-08-30T11:13:00Z"
    }
  ],
  "languages": [
    {
      "code": "en",
      "name": "English",
      "flag": "🇺🇸"
    },
    {
      "code": "hi",
      "name": "हिंदी",
      "flag": "🇮🇳"
    },
    {
      "code": "ta",
      "name": "தமிழ்",
      "flag": "🇮🇳"
    },
    {
      "code": "mr",
      "name": "मराठी",
      "flag": "🇮🇳"
    }
  ]
};

// Global state
let currentLanguage = 'en';
let currentSection = 'dashboard';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  loadDashboardData();
  initializeReportForm();
  loadAlertsData();
  loadEvacuationData();
  loadAuthorityData();
  initializeLanguageSelector();
  initializeVoiceAlerts();
  initializeModals();
  
  // Start real-time updates
  setInterval(updateRealTimeData, 30000); // Update every 30 seconds
});

// Navigation functionality - Fixed
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = this.getAttribute('data-section');
      
      if (targetSection && document.getElementById(targetSection)) {
        // Update active nav link
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        // Update active section
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(targetSection).classList.add('active');
        
        currentSection = targetSection;
        
        // Load section-specific data if needed
        if (targetSection === 'alerts') {
          loadAlertsData();
        } else if (targetSection === 'evacuation') {
          loadEvacuationData();
        } else if (targetSection === 'authority') {
          loadAuthorityData();
        }
      }
    });
  });

  // Handle emergency button
  document.querySelector('.emergency-btn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('🚨 EMERGENCY ALERT 🚨\n\nCoastal Emergency Hotline: 1800-123-COAST\nLocal Emergency: 108\n\nImmediate evacuation advised for Mumbai coastal areas!');
  });
}

// Dashboard data loading
function loadDashboardData() {
  updateStatistics();
  loadSensorData();
  loadRecentReports();
}

function updateStatistics() {
  const activeThreats = appData.threats.filter(t => t.status === 'Active').length;
  const evacuated = appData.shelters.reduce((sum, shelter) => sum + shelter.currentOccupancy, 0);
  const sheltersOpen = appData.shelters.filter(s => s.status === 'Open').length;
  
  document.getElementById('activeThreats').textContent = activeThreats;
  document.getElementById('communityReports').textContent = appData.communityReports.length;
  document.getElementById('evacuated').textContent = evacuated;
  document.getElementById('sheltersOpen').textContent = sheltersOpen;
}

function loadSensorData() {
  const container = document.getElementById('sensorData');
  container.innerHTML = '';
  
  appData.sensorData.forEach(sensor => {
    const sensorItem = document.createElement('div');
    sensorItem.className = 'sensor-item';
    
    sensorItem.innerHTML = `
      <div class="sensor-location">${sensor.location}</div>
      <div class="sensor-data">
        <div>Sea Level: ${sensor.seaLevel}m</div>
        <div>Wave Height: ${sensor.waveHeight}m</div>
        <div>Wind: ${sensor.windSpeed} km/h</div>
        <div>Temp: ${sensor.temperature}°C</div>
      </div>
    `;
    
    container.appendChild(sensorItem);
  });
}

function loadRecentReports() {
  const container = document.getElementById('recentReports');
  container.innerHTML = '';
  
  const recentReports = appData.communityReports.slice(0, 3);
  
  recentReports.forEach(report => {
    const reportItem = document.createElement('div');
    reportItem.className = 'report-item';
    
    const timeAgo = getTimeAgo(new Date(report.timestamp));
    
    reportItem.innerHTML = `
      <div class="report-header">
        <div class="report-type">${report.threatType}</div>
        <div class="report-time">${timeAgo}</div>
      </div>
      <div class="report-location">📍 ${report.location}</div>
    `;
    
    container.appendChild(reportItem);
  });
}

// Report form functionality - Fixed
function initializeReportForm() {
  const form = document.getElementById('threatReportForm');
  const locationBtn = document.getElementById('getLocation');
  
  locationBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (navigator.geolocation) {
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Getting Location...';
      
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const coords = `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`;
          document.getElementById('coordinates').textContent = coords;
          locationBtn.innerHTML = '<i class="fas fa-check"></i> Location Found';
          locationBtn.style.background = 'var(--color-success)';
        },
        function(error) {
          document.getElementById('coordinates').textContent = 'Location access denied';
          locationBtn.innerHTML = '<i class="fas fa-times"></i> Location Failed';
          locationBtn.style.background = 'var(--color-error)';
        }
      );
    } else {
      document.getElementById('coordinates').textContent = 'Geolocation not supported';
      locationBtn.innerHTML = '<i class="fas fa-times"></i> Not Supported';
    }
  });
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const reportId = `CT-2025-${String(Date.now()).slice(-3)}`;
    document.getElementById('reportId').textContent = reportId;
    
    // Show success modal
    showModal('successModal');
    
    // Reset form
    form.reset();
    document.getElementById('coordinates').textContent = '';
    locationBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i> Get GPS Coordinates';
    locationBtn.style.background = '';
  });
}

// Alerts data loading - Fixed
function loadAlertsData() {
  const container = document.getElementById('alertsList');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.threats.forEach(threat => {
    const alertCard = document.createElement('div');
    alertCard.className = `alert-card ${threat.severity.toLowerCase()}`;
    
    const timeAgo = getTimeAgo(new Date(threat.timestamp));
    
    alertCard.innerHTML = `
      <div class="alert-header">
        <div class="alert-title">
          <div class="alert-type">${threat.type}</div>
          <div class="alert-severity ${threat.severity.toLowerCase()}">
            <i class="fas fa-exclamation-triangle"></i>
            ${threat.severity}
          </div>
        </div>
        <div class="alert-time">${timeAgo}</div>
      </div>
      <div class="alert-body">
        <div class="alert-location">
          <i class="fas fa-map-marker-alt"></i>
          ${threat.location}
        </div>
        <div class="alert-description">${threat.description}</div>
        <div class="alert-actions">
          <button class="btn btn--outline btn--sm" onclick="toggleExplanation(${threat.id})">
            <i class="fas fa-brain"></i> Why this alert?
          </button>
          <button class="btn btn--primary btn--sm" onclick="showThreatDetails(${threat.id})">
            <i class="fas fa-external-link-alt"></i> View Details
          </button>
        </div>
        <div id="explanation-${threat.id}" class="ai-explanation hidden">
          <h4><i class="fas fa-robot"></i> AI Analysis</h4>
          <p>${threat.aiExplanation}</p>
          <p><strong>Recommended Action:</strong> ${threat.recommendedAction}</p>
          <p><strong>Affected Population:</strong> ~${threat.affectedPopulation.toLocaleString()} people</p>
        </div>
      </div>
    `;
    
    container.appendChild(alertCard);
  });
}

// Evacuation data loading - Fixed
function loadEvacuationData() {
  loadSheltersList();
  loadRoutesList();
}

function loadSheltersList() {
  const container = document.getElementById('sheltersList');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.shelters.forEach(shelter => {
    const shelterItem = document.createElement('div');
    shelterItem.className = 'shelter-item';
    
    const occupancyRate = (shelter.currentOccupancy / shelter.capacity) * 100;
    
    shelterItem.innerHTML = `
      <div class="shelter-name">${shelter.name}</div>
      <div class="shelter-details">
        <div>📍 ${shelter.location}</div>
        <div>📞 ${shelter.contact}</div>
        <div>🏥 ${shelter.facilities.join(', ')}</div>
        <div class="shelter-capacity">
          <span>Capacity: ${shelter.currentOccupancy}/${shelter.capacity}</span>
          <span class="status status--${shelter.status === 'Open' ? 'success' : 'info'}">${shelter.status}</span>
        </div>
        <div class="capacity-bar">
          <div class="capacity-fill" style="width: ${occupancyRate}%"></div>
        </div>
      </div>
    `;
    
    container.appendChild(shelterItem);
  });
}

function loadRoutesList() {
  const container = document.getElementById('routesList');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.evacuationRoutes.forEach(route => {
    const routeItem = document.createElement('div');
    routeItem.className = 'route-item';
    
    routeItem.innerHTML = `
      <div class="shelter-name">${route.name}</div>
      <div class="route-details">
        <div>⏱️ ${route.estimatedTime}</div>
        <div>📍 ${route.description}</div>
        <div class="shelter-capacity">
          <span>Status: ${route.status}</span>
          <span class="status status--${route.status === 'Clear' ? 'success' : 'warning'}">${route.status}</span>
        </div>
      </div>
    `;
    
    container.appendChild(routeItem);
  });
}

// Authority panel data loading - Fixed
function loadAuthorityData() {
  loadAuthorityThreats();
  loadAuthorityReports();
  initializeNewAlertForm();
}

function loadAuthorityThreats() {
  const container = document.getElementById('authorityThreats');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.threats.forEach(threat => {
    const threatItem = document.createElement('div');
    threatItem.className = 'authority-threat-item';
    
    threatItem.innerHTML = `
      <div class="threat-info">
        <div class="threat-type">${threat.type}</div>
        <div class="threat-location">${threat.location}</div>
      </div>
      <div class="alert-severity ${threat.severity.toLowerCase()}">
        ${threat.severity}
      </div>
    `;
    
    container.appendChild(threatItem);
  });
}

function loadAuthorityReports() {
  const container = document.getElementById('authorityReports');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.communityReports.forEach(report => {
    const reportItem = document.createElement('div');
    reportItem.className = 'authority-report-item';
    
    reportItem.innerHTML = `
      <div class="threat-info">
        <div class="threat-type">${report.threatType}</div>
        <div class="threat-location">${report.location} - ${report.reporterName}</div>
      </div>
      <div class="status status--${report.status === 'Verified' ? 'success' : 'warning'}">
        ${report.status}
      </div>
    `;
    
    container.appendChild(reportItem);
  });
}

function initializeNewAlertForm() {
  const form = document.getElementById('newAlertForm');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ New alert issued successfully!\n\nAlert has been broadcast to all coastal monitoring stations.');
    form.reset();
  });
}

// Language selector - Fixed
function initializeLanguageSelector() {
  const selector = document.getElementById('languageSelect');
  if (!selector) return;
  
  selector.addEventListener('change', function() {
    currentLanguage = this.value;
    const selectedOption = this.options[this.selectedIndex];
    const flag = selectedOption.getAttribute('data-flag');
    console.log(`Language changed to: ${currentLanguage} ${flag}`);
  });
}

// Voice alerts - Fixed
function initializeVoiceAlerts() {
  const voiceBtn = document.getElementById('voiceAlertBtn');
  if (!voiceBtn) return;
  
  voiceBtn.addEventListener('click', function() {
    const alertText = 'Critical storm surge alert for Mumbai coast. Immediate evacuation recommended for low-lying areas within 2 kilometers of coastline.';
    
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(alertText);
      utterance.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
      utterance.rate = 0.9;
      utterance.volume = 1.0;
      
      this.innerHTML = '<i class="fas fa-pause"></i> Playing...';
      
      utterance.onend = () => {
        this.innerHTML = '<i class="fas fa-volume-up"></i> Play Voice Alert';
      };
      
      speechSynthesis.speak(utterance);
    } else {
      alert('🔊 Voice Alert:\n\n' + alertText);
    }
  });
}

// Modal functionality - Fixed
function initializeModals() {
  // Close modal when clicking backdrop
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });

  // Close modal when clicking X button
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-close')) {
      closeModal();
    }
  });
}

// Utility functions
function toggleExplanation(threatId) {
  const explanation = document.getElementById(`explanation-${threatId}`);
  if (explanation) {
    explanation.classList.toggle('hidden');
    
    // Update button text
    const button = event.target.closest('button');
    if (button) {
      const isHidden = explanation.classList.contains('hidden');
      button.innerHTML = isHidden 
        ? '<i class="fas fa-brain"></i> Why this alert?' 
        : '<i class="fas fa-brain"></i> Hide explanation';
    }
  }
}

function showThreatDetails(threatId) {
  const threat = appData.threats.find(t => t.id === threatId);
  if (threat) {
    alert(`🚨 ${threat.type} Details\n\nLocation: ${threat.location}\nSeverity: ${threat.severity}\nDescription: ${threat.description}\n\nRecommended Action: ${threat.recommendedAction}\n\nAffected Population: ~${threat.affectedPopulation.toLocaleString()} people`);
  }
}

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeModal() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => modal.classList.add('hidden'));
}

function getTimeAgo(date) {
  const now = new Date();
  const diffInMinutes = Math.floor((now - date) / (1000 * 60));
  
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInMinutes < 1440) {
    return `${Math.floor(diffInMinutes / 60)} hours ago`;
  } else {
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  }
}

// Real-time data updates
function updateRealTimeData() {
  // Simulate sensor data updates with realistic coastal values
  appData.sensorData.forEach(sensor => {
    // Add some realistic variability to sensor readings
    sensor.seaLevel = Math.max(0, sensor.seaLevel + (Math.random() - 0.5) * 0.1);
    sensor.waveHeight = Math.max(0, sensor.waveHeight + (Math.random() - 0.5) * 0.2);
    sensor.windSpeed = Math.max(0, sensor.windSpeed + Math.floor((Math.random() - 0.5) * 5));
    sensor.temperature = Math.max(15, Math.min(45, sensor.temperature + (Math.random() - 0.5) * 2));
    sensor.lastUpdated = new Date().toISOString();
  });
  
  // Update displays only if on dashboard
  if (currentSection === 'dashboard') {
    loadSensorData();
    updateStatistics();
  }
}