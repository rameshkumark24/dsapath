// src/data/sqlRoadmap.ts

export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  leetcodeUrl: string;
  isEssential: boolean;
}

export interface Module {
  id: string;
  title: string;
  problems: Problem[];
}

export const sqlRoadmapData: Module[] = [
  {
    id: "sql-phase-1",
    title: "Phase 1: SQL Basics",
    problems: [
      { id: "sql-595", title: "595. Big Countries", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/big-countries/", isEssential: false },
      { id: "sql-175", title: "175. Combine Two Tables", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/combine-two-tables/", isEssential: true },
      { id: "sql-183", title: "183. Customers Who Never Order", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/customers-who-never-order/", isEssential: true },
      { id: "sql-607", title: "607. Sales Person", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/sales-person/", isEssential: false },
      { id: "sql-1068", title: "1068. Product Sales Analysis I", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/product-sales-analysis-i/", isEssential: false },
    ]
  },
  {
    id: "sql-phase-2",
    title: "Phase 2: Group By + Aggregation",
    problems: [
      { id: "sql-182", title: "182. Duplicate Emails", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/duplicate-emails/", isEssential: true },
      { id: "sql-1693", title: "1693. Daily Leads and Partners", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/daily-leads-and-partners/", isEssential: false },
      { id: "sql-1050", title: "1050. Actors & Directors (>=3 times)", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/", isEssential: false },
      { id: "sql-586", title: "586. Customer Placing Largest Orders", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/", isEssential: false },
      { id: "sql-511", title: "511. Game Play Analysis I", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/game-play-analysis-i/", isEssential: false },
      { id: "sql-1141", title: "1141. User Activity (30 Days)", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/user-activity-for-the-past-30-days-i/", isEssential: false },
    ]
  },
  {
    id: "sql-phase-3",
    title: "Phase 3: Joins (Core Zone)",
    problems: [
      { id: "sql-181", title: "181. Employees > Managers", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/employees-earning-more-than-their-managers/", isEssential: true },
      { id: "sql-197", title: "197. Rising Temperature", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/rising-temperature/", isEssential: true },
      { id: "sql-570", title: "570. Managers with >=5 Reports", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/", isEssential: false },
    ]
  },
  {
    id: "sql-phase-4",
    title: "Phase 4: Top N / Ranking",
    problems: [
      { id: "sql-176", title: "176. Second Highest Salary", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/second-highest-salary/", isEssential: true },
      { id: "sql-177", title: "177. Nth Highest Salary", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/nth-highest-salary/", isEssential: true },
      { id: "sql-178", title: "178. Rank Scores", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/rank-scores/", isEssential: true },
      { id: "sql-185", title: "185. Department Top 3 Salaries", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/department-top-three-salaries/", isEssential: true },
      { id: "sql-1321", title: "1321. Restaurant Growth", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/restaurant-growth/", isEssential: false },
    ]
  },
  {
    id: "sql-phase-5",
    title: "Phase 5 & 6: Windows, Self-Joins & Patterns",
    problems: [
      { id: "sql-180", title: "180. Consecutive Numbers", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/consecutive-numbers/", isEssential: true },
      { id: "sql-178-rev", title: "178. Rank Scores (Revision)", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/rank-scores/", isEssential: false },
      { id: "sql-185-rev", title: "185. Department Top 3 Salaries (Revision)", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/department-top-three-salaries/", isEssential: false },
      { id: "sql-181-rev", title: "181. Employees > Managers (Revision)", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/employees-earning-more-than-their-managers/", isEssential: false },
      { id: "sql-197-rev", title: "197. Rising Temperature (Revision)", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/rising-temperature/", isEssential: false },
    ]
  },
  {
    id: "sql-phase-7",
    title: "Phase 7: Case + Logic Building",
    problems: [
      { id: "sql-608", title: "608. Tree Node", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/tree-node/", isEssential: false },
      { id: "sql-626", title: "626. Exchange Seats", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/exchange-seats/", isEssential: true },
      { id: "sql-1204", title: "1204. Last Person Fit in Elevator", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/last-person-to-fit-in-the-bus/", isEssential: false },
      { id: "sql-1212", title: "1212. Team Scores", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/team-scores-in-football-tournament/", isEssential: false },
      { id: "sql-1179", title: "1179. Reformat Department Table", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/reformat-department-table/", isEssential: false },
    ]
  },
  {
    id: "sql-phase-8",
    title: "Phase 8: Real Business SQL",
    problems: [
      { id: "sql-1084", title: "1084. Sales Analysis III", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/sales-analysis-iii/", isEssential: false },
      { id: "sql-1270", title: "1270. All People Report to Manager", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/all-people-report-to-the-given-manager/", isEssential: false },
      { id: "sql-1280", title: "1280. Students and Examinations", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/students-and-examinations/", isEssential: false },
    ]
  },
  {
    id: "sql-interview-prep",
    title: "🔥 Must-Do Interview Queries (TCS, Zoho, Amazon)",
    problems: [
      { id: "sql-int-1", title: "Find & Delete Duplicate Records", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/delete-duplicate-emails/", isEssential: true },
      { id: "sql-int-2", title: "Find Nth Highest Salary", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/nth-highest-salary/", isEssential: true },
      { id: "sql-int-3", title: "Employees Without Manager / Same Dept", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/employees-with-missing-information/", isEssential: true },
      { id: "sql-int-4", title: "Dept-wise Highest & Average Salary", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/department-highest-salary/", isEssential: true },
      { id: "sql-int-5", title: "Top 3 Salaries per Department", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/department-top-three-salaries/", isEssential: true },
      { id: "sql-int-6", title: "Swap Rows (Exchange Seats)", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/exchange-seats/", isEssential: true },
    ]
  }
];
