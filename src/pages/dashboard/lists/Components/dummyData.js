// File: src/data/dummyData.js
import Img from "../../../../asset/Images/list/Rectangle.png";
const dummyData = [
  {
    imageUrl: Img,
    subtitle: "Technology",
    title: "Internet of Things",
    tags: ["A+", "B"],
    actionText: "See Details",
    status: "Good", // New field added
  },
  {
    imageUrl: Img,
    subtitle: "Development",
    title: "DevOps",
    tags: ["A+", "B"],
    actionText: "Learn More",
    status: "Bad",
  },
  {
    imageUrl: Img,
    subtitle: "Strategy",
    title: "Digital Transformation",
    tags: ["A+", "B"],
    actionText: "Explore",
    status: "Need Action",
  },
  {
    imageUrl: Img,
    subtitle: "Analysis",
    title: "Business Intelligence",
    tags: ["A+", "B"],
    actionText: "View More",
    status: "Inspection",
  },
  // Extend these entries to make up 20 total, cycling through the specified statuses
  ...new Array(16).fill(null).map((_, index) => ({
    imageUrl: Img,
    subtitle: "Category " + ((index % 4) + 1),
    title: "Topic " + (index + 5), // Adjusted for unique titles
    tags: ["A+", "B"],
    actionText: ["See Details", "Learn More", "Explore", "View More"][
      index % 4
    ],
    status: ["Good", "Bad", "Need Attention", "Inspection"][index % 4], // Cycles through 4 statuses
  })),
];

export default dummyData;
