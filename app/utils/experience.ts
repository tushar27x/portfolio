interface Experience {
  companyName: string,
  logoUrl: string,
  position: string,
  startDate: string,
  endDate: string,
  description: string,
  responsibilities: string[],
  skills: string[]
}

const experiences: Experience[] = [
  {
    companyName: "Salescode.ai",
    logoUrl: "/salescode.png",
    position: "Software Engineer",
    startDate: "Aug 2024",
    endDate: "Aug 2026",
    description:
      "Backend Engineer for SalesLens (KPI analytics & dashboard platform). Owned the KPI analytics service used by 50-60 clients end-to-end — from gathering requirements to production support — across Elasticsearch, Redis, Kafka and AWS.",
    responsibilities: [
      "Cut dashboard API latency from 700-800ms to under 200ms by building a runtime query aggregation API with Redis caching, replacing a static layout that re-aggregated 2 years of history on every request.",
      "Enabled real-time KPI breakdowns by user, location and division under 300ms with a pivot index strategy on Elasticsearch.",
      "Reduced an ETL pipeline's runtime by 90% (30-40 minutes to 3-5) by rebuilding how it consumed ML-generated recommendations from AWS S3.",
      "Eliminated batch delay in KPI reporting with an event-driven scheduler polling every 30 seconds and orchestrating in-memory KPI calculation.",
      "Automated multi-step KPI batch runs on Jenkins CI/CD, turning hand-started runs with no recovery path into scheduled, repeatable, recoverable ones.",
      "Onboarded and supported 50-60 clients across 3 product lines (SFA, eB2B, COE), translating business requirements into client-specific KPI logic.",
      "Won the Lead Performer Award (2025) for independently designing and delivering the platform's custom KPI computation logic.",
    ],
    skills: ["Java", "Netty", "Elasticsearch", "Redis", "Kafka", "AWS S3", "MySQL", "Jenkins", "REST APIs", "CI/CD"]
  },
];

export default experiences;
