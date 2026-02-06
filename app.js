document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.scroll);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const bubbleContainer = document.getElementById("bubbleContainer");
const overlay = document.getElementById("overlay");
const infoCard = document.getElementById("infoCard");

if (bubbleContainer && overlay && infoCard) {
  const skills = [
    {
      name: "Java",
      icon: "JAVA",
      category: "Backend Language",
      level: 95,
      description:
        "Enterprise-grade applications with Spring Boot, Hibernate, and microservices. Built scalable warehouse and payment systems.",
      projects: ["Warehouse Management System", "Payment Processing API", "Inventory Tracking Platform"],
      size: 140,
      color: "rgba(229, 111, 45, 0.18)",
      position: { x: 10, y: 18 },
    },
    {
      name: "Go",
      icon: "GO",
      category: "Backend Language",
      level: 85,
      description:
        "High-performance services using goroutines and channels. Focus on low-latency and concurrency.",
      projects: ["Realtime Analytics Engine", "Distributed Cache", "API Gateway"],
      size: 130,
      color: "rgba(246, 177, 139, 0.25)",
      position: { x: 70, y: 12 },
    },
    {
      name: ".NET",
      icon: ".NET",
      category: "Backend Framework",
      level: 80,
      description:
        "Modern .NET Core applications with Blazor and Entity Framework. Enterprise-grade delivery.",
      projects: ["CRM Dashboard", "Blazor Web Apps", "Azure Functions"],
      size: 120,
      color: "rgba(184, 77, 19, 0.18)",
      position: { x: 35, y: 58 },
    },
    {
      name: "Spring",
      icon: "SPR",
      category: "Backend Framework",
      level: 90,
      description:
        "Spring Boot, Security, and Data JPA. Production REST APIs with AOP and DI best practices.",
      projects: ["Multi-tenant SaaS", "OAuth2 Auth Server", "Event-driven Architecture"],
      size: 125,
      color: "rgba(229, 111, 45, 0.2)",
      position: { x: 62, y: 68 },
    },
    {
      name: "React",
      icon: "RE",
      category: "Frontend Framework",
      level: 88,
      description:
        "Modern React with hooks, state management, and UX polish. Dashboard and data viz focus.",
      projects: ["Admin Dashboards", "E-commerce Platform", "Data Visualization Tools"],
      size: 135,
      color: "rgba(246, 177, 139, 0.22)",
      position: { x: 45, y: 32 },
    },
    {
      name: "PostgreSQL",
      icon: "PG",
      category: "Database",
      level: 85,
      description:
        "Query optimization, indexing strategy, and schema design. Experience with replication and tuning.",
      projects: ["Multi-currency DB", "Analytics Warehouse", "User Management System"],
      size: 115,
      color: "rgba(184, 77, 19, 0.15)",
      position: { x: 20, y: 45 },
    },
    {
      name: "Docker",
      icon: "DOC",
      category: "DevOps",
      level: 82,
      description:
        "Containerization, compose workflows, and reproducible dev environments.",
      projects: ["Microservices Deployment", "CI/CD Pipelines", "Dev Environments"],
      size: 110,
      color: "rgba(229, 111, 45, 0.18)",
      position: { x: 76, y: 44 },
    },
    {
      name: "Redis",
      icon: "RD",
      category: "Caching & Queue",
      level: 78,
      description:
        "Caching strategies, pub/sub, and session management for performance.",
      projects: ["Session Store", "Realtime Leaderboards", "Message Queue System"],
      size: 105,
      color: "rgba(246, 177, 139, 0.2)",
      position: { x: 52, y: 78 },
    },
  ];

  skills.forEach((skill, index) => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.width = `${skill.size}px`;
    bubble.style.height = `${skill.size}px`;
    bubble.style.background = skill.color;
    bubble.style.left = `${skill.position.x}%`;
    bubble.style.top = `${skill.position.y}%`;
    bubble.style.animationDelay = `${index * 0.2}s`;

    bubble.innerHTML = `
      <div class="bubble-icon">${skill.icon}</div>
      <div class="bubble-name">${skill.name}</div>
      <div class="bubble-level">${skill.level}%</div>
    `;

    bubble.addEventListener("click", () => showSkillInfo(skill, bubble));
    bubbleContainer.appendChild(bubble);
  });

  function showSkillInfo(skill, bubbleElement) {
    bubbleElement.classList.add("clicked");
    setTimeout(() => bubbleElement.classList.remove("clicked"), 600);

    infoCard.innerHTML = `
      <div class="info-card-header">
        <div class="info-card-icon">${skill.icon}</div>
        <div>
          <div class="info-card-name">${skill.name}</div>
          <div class="info-card-category">${skill.category}</div>
        </div>
        <button class="close-btn" aria-label="Close">×</button>
      </div>
      <div class="info-section">
        <div class="info-label">Proficiency</div>
        <div class="skill-bar">
          <div class="skill-fill" style="width: 0%;" data-width="${skill.level}%"></div>
        </div>
      </div>
      <div class="info-section">
        <div class="info-label">About</div>
        <div class="info-content">${skill.description}</div>
      </div>
      <div class="info-section">
        <div class="info-label">Featured Projects</div>
        <ul class="project-list">
          ${skill.projects.map((project) => `<li>${project}</li>`).join("")}
        </ul>
      </div>
    `;

    overlay.classList.add("show");
    infoCard.classList.add("show");

    setTimeout(() => {
      const skillFill = infoCard.querySelector(".skill-fill");
      if (skillFill) skillFill.style.width = skillFill.dataset.width;
    }, 100);

    const closeBtn = infoCard.querySelector(".close-btn");
    if (closeBtn) closeBtn.addEventListener("click", closeCard);
  }

  function closeCard() {
    overlay.classList.remove("show");
    infoCard.classList.remove("show");
  }

  overlay.addEventListener("click", closeCard);
  infoCard.addEventListener("click", (event) => event.stopPropagation());
}
