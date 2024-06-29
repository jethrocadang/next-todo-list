import { addDays, format, isAfter, isBefore } from "date-fns";
import { Task } from "@/lib/types";

const startDate = new Date(); // Today's date
const endDate = addDays(startDate, 7); // 7 days from today

const tasks: Task[] = [];

let currentDate = addDays(startDate, -1); // Start from yesterday

// Sample realistic data for task titles, descriptions, and tags
const realisticData = {
  titles: [
    "Update website content",
    "Fix login authentication",
    "Create API documentation",
    "Refactor database queries",
    "Implement search functionality",
    "Optimize frontend performance",
    "Deploy application to production",
    "Design user interface for mobile",
    "Setup monitoring and alerts",
    "Integrate payment gateway",
    "Write unit tests for backend",
    "Plan sprint goals and tasks",
    "Review code quality",
    "Handle user feedback",
    "Generate monthly reports",
    "Backup and restore data",
    "Secure data encryption",
    "Collaborate with team on new feature",
    "Prepare demo for stakeholders",
    "Resolve customer support tickets",
  ],
  descriptions: [
    "Update the content on the homepage and about page.",
    "Fix issues with login authentication using OAuth.",
    "Create comprehensive documentation for the API endpoints.",
    "Optimize database queries for better performance.",
    "Implement search functionality using Elasticsearch.",
    "Improve frontend loading times and resource usage.",
    "Deploy the latest changes to the production server.",
    "Design a responsive user interface for mobile devices.",
    "Setup monitoring tools and configure alerts.",
    "Integrate Stripe for handling payment transactions.",
    "Write unit tests for critical backend functionalities.",
    "Plan and prioritize sprint goals and individual tasks.",
    "Review codebase for adherence to coding standards.",
    "Gather and analyze user feedback for product improvements.",
    "Generate monthly performance and analytics reports.",
    "Implement automated backup and restore procedures.",
    "Ensure data security through encryption standards.",
    "Collaborate with team members on implementing new features.",
    "Prepare and deliver a demo of new features to stakeholders.",
    "Resolve customer issues and provide support via tickets.",
  ],
  tags: [
    ["Frontend", "UI"],
    ["Backend", "API"],
    ["Database", "Performance"],
    ["Deployment", "DevOps"],
    ["Security", "Encryption"],
    ["Payments", "Integration"],
    ["Testing", "Quality Assurance"],
    ["Documentation", "Reports"],
    ["Support", "Customer Service"],
    ["Collaboration", "Teamwork"],
  ],
};

// Function to generate random tags from the realisticData tags array
function generateRandomTags(): string[] {
  const randomIndex = Math.floor(Math.random() * realisticData.tags.length);
  return realisticData.tags[randomIndex];
}

// Generate tasks for each day within the date range
while (currentDate <= endDate) {
  const tasksForDay = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // Random number of tasks between 5 and 10

  for (let i = 0; i < tasksForDay; i++) {
    if (currentDate >= startDate && currentDate <= endDate) {
      const taskDate = format(currentDate, "yyyy-MM-dd"); // Format date as yyyy-MM-dd

      const randomTitleIndex = Math.floor(Math.random() * realisticData.titles.length);
      const randomDescriptionIndex = Math.floor(Math.random() * realisticData.descriptions.length);
      const randomTags = generateRandomTags();

      const newTask: Task = {
        id: `${format(currentDate, "yyyyMMdd")}-${i + 1}`, // Unique ID based on date and index
        title: realisticData.titles[randomTitleIndex],
        description: realisticData.descriptions[randomDescriptionIndex],
        tags: randomTags,
        status: "Pending", // Initial status (example)
        priority: "medium", // Priority (example)
        date: taskDate, // Task date
      };

      tasks.push(newTask); // Add task to tasks array
    }
  }

  currentDate = addDays(currentDate, 1); // Move to the next day
}

export default tasks;
