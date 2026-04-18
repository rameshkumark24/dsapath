// src/data/roadmap.ts

export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Problem {
    id: string;
    title: string;
    difficulty: Difficulty;
    leetcodeUrl: string;
    affiliateLink?: string;
}

export interface Module {
    id: string;
    title: string;
    problems: Problem[];
}

export const roadmapData: Module[] = [
    {
        id: "arrays-and-hashing",
        title: "Arrays & Hashing",
        problems: [
            {
                id: "contains-duplicate",
                title: "Contains Duplicate",
                difficulty: "Easy",
                leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/",
                affiliateLink: "https://example.com/affiliate/book-recommendation-1"
            },
            {
                id: "valid-anagram",
                title: "Valid Anagram",
                difficulty: "Easy",
                leetcodeUrl: "https://leetcode.com/problems/valid-anagram/"
                // affiliateLink is optional
            }
        ]
    },
    {
        id: "two-pointers",
        title: "Two Pointers",
        problems: [
            {
                id: "valid-palindrome",
                title: "Valid Palindrome",
                difficulty: "Easy",
                leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/"
            },
            {
                id: "two-sum-ii",
                title: "Two Sum II",
                difficulty: "Medium",
                leetcodeUrl: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
                affiliateLink: "https://example.com/affiliate/course-recommendation-1"
            }
        ]
    }
];
