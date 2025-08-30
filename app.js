let userXP = 0;
let badges = [];

// Handle threat report submission
document.getElementById("threatReportForm").addEventListener("submit", (e) => {
  e.preventDefault();
  
  userXP += 50; // reward points
  document.getElementById("xpPoints").textContent = userXP;

  // Update progress bar
  let progress = Math.min(userXP / 5, 100); // scale XP to %
  document.getElementById("xpProgress").style.width = progress + "%";

  // Unlock badges
  if (userXP >= 100 && !badges.includes("Storm Watcher")) {
    badges.push("Storm Watcher");
    addBadge("🌪 Storm Watcher");
  }
  if (userXP >= 200 && !badges.includes("Community Hero")) {
    badges.push("Community Hero");
    addBadge("🛡 Community Hero");
  }

  // Show success
  alert("✅ Report submitted! You earned 50 XP.");
});

// Add badge to UI
function addBadge(label) {
  const badgeGrid = document.getElementById("badgeGrid");
  const badge = document.createElement("div");
  badge.classList.add("badge");
  badge.textContent = label;
  badgeGrid.appendChild(badge);
}