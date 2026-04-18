// src/data/roadmap.ts

export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  leetcodeUrl: string;
  affiliateLink?: string;
  isEssential?: boolean;  // 🔥 High-yield must-do problems
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
      { id: "two-sum", title: "Two Sum", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/two-sum/", affiliateLink: "https://amazon.in/dp/0984782869", isEssential: true },
      { id: "contains-duplicate", title: "Contains Duplicate", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/" },
      { id: "valid-anagram", title: "Valid Anagram", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/valid-anagram/" },
      { id: "majority-element", title: "Majority Element", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/majority-element/" },
      { id: "single-number", title: "Single Number", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/single-number/" },
      { id: "cyclically-rotate-array", title: "Cyclically Rotate an Array by One", difficulty: "Easy", leetcodeUrl: "https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1" },
      { id: "remove-duplicates-sorted-array", title: "Remove Duplicates from Sorted Array", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
      { id: "move-zeroes", title: "Move Zeroes", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/move-zeroes/" },
      { id: "missing-number", title: "Missing Number", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/missing-number/" },
      { id: "maximum-subarray", title: "Maximum Subarray", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/", isEssential: true },
      { id: "best-time-to-buy-and-sell-stock", title: "Best Time to Buy and Sell Stock", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", affiliateLink: "https://example.com/affiliate/keyboard", isEssential: true },
      { id: "squares-of-a-sorted-array", title: "Squares of a Sorted Array", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/squares-of-a-sorted-array/" },
      { id: "monotonic-array", title: "Monotonic Array", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/monotonic-array/" },
      { id: "third-maximum-number", title: "Third Maximum Number", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/third-maximum-number/" },
      { id: "check-if-array-is-sorted-and-rotated", title: "Check if Array Is Sorted and Rotated", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/" },
      { id: "value-equal-to-index", title: "Value Equal to Index", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1" },
      { id: "equilibrium-index-of-array", title: "Equilibrium Index of Array", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/equilibrium-index-of-an-array/1" },
      { id: "longest-subarray-with-zero-sum", title: "Longest Subarray with Zero Sum", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1" },
      { id: "group-anagrams", title: "Group Anagrams", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/group-anagrams/" },
      { id: "subarray-sum-equals-k", title: "Subarray Sum Equals K", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      { id: "contiguous-array", title: "Contiguous Array", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/contiguous-array/" },
      { id: "product-of-array-except-self", title: "Product of Array Except Self", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/product-of-array-except-self/" },
      { id: "k-diff-pairs-in-an-array", title: "K-diff Pairs in an Array", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/k-diff-pairs-in-an-array/" },
      { id: "sort-colors", title: "Sort Colors", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/sort-colors/" },
      { id: "find-all-duplicates-in-an-array", title: "Find All Duplicates in an Array", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
      { id: "frequency-of-the-most-frequent-element", title: "Frequency of the Most Frequent Element", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/" },
      { id: "merge-intervals", title: "Merge Intervals", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/merge-intervals/", isEssential: true },
      { id: "insert-interval", title: "Insert Interval", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/insert-interval/" },
      { id: "meeting-rooms", title: "Meeting Rooms", difficulty: "Medium", leetcodeUrl: "https://leetcode.ca/all/252.html" },
      { id: "meeting-rooms-ii", title: "Meeting Rooms II", difficulty: "Medium", leetcodeUrl: "https://leetcode.ca/all/253.html" },
      { id: "minimize-maximum-pair-sum", title: "Minimize Maximum Pair Sum in Array", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/" },
      { id: "gas-station", title: "Gas Station", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/gas-station/" },
      { id: "spiral-matrix", title: "Spiral Matrix", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/spiral-matrix/" },
      { id: "partition-labels", title: "Partition Labels", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/partition-labels/" },
      { id: "reorder-data-in-log-files", title: "Reorder Data in Log Files", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/reorder-data-in-log-files/" },
      { id: "search-in-rotated-sorted-array", title: "Search in Rotated Sorted Array", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
      { id: "find-first-and-last-position", title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
      { id: "kth-largest-element-in-an-array", title: "Kth Largest Element in an Array", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
      { id: "search-a-2d-matrix-ii", title: "Search a 2D Matrix II", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/search-a-2d-matrix-ii/" },
      { id: "triplet-sum-in-array", title: "Triplet Sum in Array", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1" },
      { id: "3sum", title: "3Sum", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/3sum/" },
      { id: "find-all-duplicates", title: "Find All Duplicates", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
      { id: "longest-mountain-in-array", title: "Longest Mountain in Array", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/longest-mountain-in-array/" },
      { id: "3sum-closest", title: "3Sum Closest", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/3sum-closest/" },
      { id: "remove-all-adjacent-duplicates", title: "Remove All Adjacent Duplicates", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/" },
      { id: "first-missing-positive", title: "First Missing Positive", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/first-missing-positive/" },
      { id: "median-of-two-sorted-arrays", title: "Median of Two Sorted Arrays", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
      { id: "4sum", title: "4Sum", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/4sum/" },
      { id: "longest-consecutive-sequence", title: "Longest Consecutive Sequence", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/longest-consecutive-sequence/" },
      { id: "candy", title: "Candy", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/candy/" },
      { id: "trapping-rain-water", title: "Trapping Rain Water", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/trapping-rain-water/", isEssential: true },
      { id: "jump-game-ii", title: "Jump Game II", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/jump-game-ii/" },
      { id: "length-of-unsorted-subarray", title: "Length of Unsorted Subarray", difficulty: "Hard", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/length-of-unsorted-subarray3022/1" },
      { id: "count-of-smaller-numbers-after-self", title: "Count of Smaller Numbers After Self", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" }
    ]
  },
  {
    id: "two-pointers",
    title: "Two Pointers",
    problems: [
      { id: "reverse-string", title: "Reverse String", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/reverse-string/" },
      { id: "valid-palindrome", title: "Valid Palindrome", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/", isEssential: true },
      { id: "two-sum-ii", title: "Two Sum II (Input Sorted)", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
      { id: "container-with-most-water", title: "Container With Most Water", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/", isEssential: true }
    ]
  },
  {
    id: "sliding-window",
    title: "Sliding Window",
    problems: [
      { id: "count-distinct-elements-in-window", title: "Count Distinct Elements in Window K", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/count-distinct-elements-in-every-window/1" },
      { id: "minimum-size-subarray-sum", title: "Minimum Size Subarray Sum", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
      { id: "find-all-anagrams", title: "Find All Anagrams in a String", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
      { id: "longest-repeating-character-replacement", title: "Longest Repeating Character Replacement", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/", isEssential: true },
      { id: "permutation-in-string", title: "Permutation in String", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/permutation-in-string/" },
      { id: "sliding-window-maximum", title: "Sliding Window Maximum", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/sliding-window-maximum/", isEssential: true }
    ]
  },
  {
    id: "strings-and-math",
    title: "Strings & Math",
    problems: [
      { id: "reverse-integer", title: "Reverse Integer", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/reverse-integer/" },
      { id: "palindrome-number", title: "Palindrome Number", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/palindrome-number/" },
      { id: "is-subsequence", title: "Is Subsequence", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/is-subsequence/" },
      { id: "palindrome-string-gfg", title: "Palindrome String", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/palindrome-string0817/1" },
      { id: "ransom-note", title: "Ransom Note", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/ransom-note/" },
      { id: "first-unique-character", title: "First Unique Character in a String", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
      { id: "string-compression", title: "String Compression", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/string-compression/" },
      { id: "string-task", title: "String Task", difficulty: "Easy", leetcodeUrl: "https://codeforces.com/problemset/problem/118/A" },
      { id: "longest-palindrome", title: "Longest Palindrome", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/longest-palindrome/" },
      { id: "gcd-of-two-numbers", title: "GCD of Two Numbers", difficulty: "Easy", leetcodeUrl: "https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1" },
      { id: "armstrong-numbers", title: "Armstrong Numbers", difficulty: "Easy", leetcodeUrl: "https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1" },
      { id: "print-all-divisors", title: "Print all Divisors", difficulty: "Easy", leetcodeUrl: "https://www.naukri.com/code360/problem-details/print-all-divisors-of-a-number_1164188" },
      { id: "string-to-integer", title: "String to Integer (atoi)", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/string-to-integer-atoi/" },
      { id: "pow-x-n", title: "Pow(x, n)", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/powx-n/" },
      { id: "reverse-words", title: "Reverse Words in a String", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/reverse-words-in-a-string/" },
      { id: "longest-substring-without-repeating", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { id: "longest-palindromic-substring", title: "Longest Palindromic Substring", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/longest-palindromic-substring/" },
      { id: "restore-ip-addresses", title: "Restore IP Addresses", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/restore-ip-addresses/" },
      { id: "shifting-letters", title: "Shifting Letters", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/shifting-letters/" },
      { id: "basic-calculator-ii", title: "Basic Calculator II", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/basic-calculator-ii/" },
      { id: "search-pattern-kmp", title: "Search Pattern (KMP)", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/search-pattern-kmp-algorithm-1587115621/1" },
      { id: "find-common-characters", title: "Find Common Characters", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/find-common-characters/" },
      { id: "minimum-window-substring", title: "Minimum Window Substring", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/minimum-window-substring/" },
      { id: "interleaving-string", title: "Interleaving String", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/interleaving-string/" },
      { id: "palindrome-partitioning-ii", title: "Palindrome Partitioning II", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/palindrome-partitioning-ii/" },
      { id: "text-justification", title: "Text Justification", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/text-justification/" },
      { id: "integer-to-english-words", title: "Integer to English Words", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/integer-to-english-words/" },
      { id: "determining-dna-health", title: "Determining DNA Health", difficulty: "Hard", leetcodeUrl: "https://www.hackerrank.com/challenges/determining-dna-health/problem" }
    ]
  },
  {
    id: "stack-and-queue",
    title: "Stack & Queue",
    problems: [
      { id: "valid-parentheses", title: "Valid Parentheses", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/" },
      { id: "min-stack", title: "Min Stack", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/min-stack/" },
      { id: "implement-queue-using-stacks", title: "Implement Queue using Stacks", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/implement-queue-using-stacks/" },
      { id: "implement-stack-using-queues", title: "Implement Stack using Queues", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/implement-stack-using-queues/" },
      { id: "next-greater-element", title: "Next Greater Element", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/next-greater-element-i/" },
      { id: "daily-temperatures", title: "Daily Temperatures", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/daily-temperatures/" },
      { id: "evaluate-rpn", title: "Evaluate Reverse Polish Notation", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
      { id: "buildings-receiving-sunlight", title: "Buildings Receiving Sunlight", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/buildings-receiving-sunlight3032/1" },
      { id: "sort-a-stack", title: "Sort a Stack", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/sort-a-stack/1" },
      { id: "asteroid-collision", title: "Asteroid Collision", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/asteroid-collision/" },
      { id: "decode-string", title: "Decode String", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/decode-string/" },
      { id: "simplify-path", title: "Simplify Path", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/simplify-path/" },
      { id: "next-greater-element-ii", title: "Next Greater Element II", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/next-greater-element-ii/" },
      { id: "car-fleet", title: "Car Fleet", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/car-fleet/" },
      { id: "132-pattern", title: "132 Pattern", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/132-pattern/" },
      { id: "rotting-oranges", title: "Rotting Oranges", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/rotting-oranges/" },
      { id: "largest-rectangle-in-histogram", title: "Largest Rectangle in Histogram", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
      { id: "longest-valid-parentheses", title: "Longest Valid Parentheses", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/longest-valid-parentheses/" }
    ]
  },
  {
    id: "linked-list",
    title: "Linked List",
    problems: [
      { id: "reverse-linked-list", title: "Reverse Linked List", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/" },
      { id: "middle-of-linked-list", title: "Middle of the Linked List", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/middle-of-the-linked-list/" },
      { id: "merge-two-sorted-lists", title: "Merge Two Sorted Lists", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { id: "remove-duplicates-sorted-list", title: "Remove Duplicates from Sorted List", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/" },
      { id: "linked-list-cycle", title: "Linked List Cycle", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/" },
      { id: "intersection-of-two-linked-lists", title: "Intersection of Two Linked Lists", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
      { id: "happy-number", title: "Happy Number", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/happy-number/" },
      { id: "remove-nth-node", title: "Remove Nth Node From End", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
      { id: "reverse-linked-list-ii", title: "Reverse Linked List II", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list-ii/" },
      { id: "add-two-numbers", title: "Add Two Numbers", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/add-two-numbers/" },
      { id: "palindrome-linked-list", title: "Palindrome Linked List", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/palindrome-linked-list/" },
      { id: "reorder-list", title: "Reorder List", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/reorder-list/" },
      { id: "swap-nodes-in-pairs", title: "Swap Nodes in Pairs", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/swap-nodes-in-pairs/" },
      { id: "rotate-list", title: "Rotate List", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/rotate-list/" },
      { id: "partition-list", title: "Partition List", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/partition-list/" },
      { id: "delete-middle-node", title: "Delete the Middle Node", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/" },
      { id: "design-linked-list", title: "Design Linked List", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/design-linked-list/" },
      { id: "reverse-nodes-in-k-group", title: "Reverse Nodes in k-Group", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
      { id: "merge-k-sorted-lists", title: "Merge k Sorted Lists", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/merge-k-sorted-lists/" },
      { id: "copy-list-with-random-pointer", title: "Copy List with Random Pointer", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
      { id: "lru-cache", title: "LRU Cache", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/lru-cache/" }
    ]
  },
  {
    id: "binary-search",
    title: "Binary Search",
    problems: [
      { id: "binary-search", title: "Binary Search", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/binary-search/" },
      { id: "search-insert-position", title: "Search Insert Position", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/search-insert-position/" },
      { id: "sqrtx", title: "Sqrt(x)", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/sqrtx/" },
      { id: "first-bad-version", title: "First Bad Version", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/first-bad-version/" },
      { id: "find-first-and-last-position-bs", title: "Find First and Last Position", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
      { id: "find-peak-element", title: "Find Peak Element", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/find-peak-element/" },
      { id: "find-minimum-in-rotated", title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", isEssential: true },
      { id: "search-in-rotated-bs", title: "Search in Rotated Sorted Array", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/", isEssential: true },
      { id: "search-a-2d-matrix", title: "Search a 2D Matrix", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/search-a-2d-matrix/" },
      { id: "search-a-2d-matrix-ii-bs", title: "Search a 2D Matrix II", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/search-a-2d-matrix-ii/" },
      { id: "koko-eating-bananas", title: "Koko Eating Bananas", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/koko-eating-bananas/", isEssential: true },
      { id: "time-based-key-value-store", title: "Time Based Key-Value Store", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/time-based-key-value-store/" },
      { id: "median-of-two-sorted-arrays-bs", title: "Median of Two Sorted Arrays", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/median-of-two-sorted-arrays/" }
    ]
  },
  {
    id: "sorting",
    title: "Sorting",
    problems: [
      { id: "bubble-sort", title: "Bubble Sort", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/bubble-sort/1" },
      { id: "selection-sort", title: "Selection Sort", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/selection-sort/1" },
      { id: "insertion-sort", title: "Insertion Sort", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/insertion-sort/1" },
      { id: "merge-sort", title: "Merge Sort", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/sort-an-array/" },
      { id: "quick-sort", title: "Quick Sort", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/sort-an-array/" },
      { id: "heap-sort", title: "Heap Sort", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/sort-an-array/" },
      { id: "inversion-of-array", title: "Inversion of Array", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1" },
      { id: "radix-sort", title: "Radix Sort", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/maximum-gap/" }
    ]
  },
  {
    id: "trees-and-trie",
    title: "Trees & Trie",
    problems: [
      { id: "maximum-depth-of-binary-tree", title: "Maximum Depth of Binary Tree", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
      { id: "factorial", title: "Factorial", difficulty: "Easy", leetcodeUrl: "https://www.geeksforgeeks.org/problems/factorial5739/1" },
      { id: "valid-palindrome-recursion", title: "Valid Palindrome", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/" },
      { id: "same-tree", title: "Same Tree", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/same-tree/" },
      { id: "invert-binary-tree", title: "Invert Binary Tree", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/invert-binary-tree/" },
      { id: "symmetric-tree", title: "Symmetric Tree", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/symmetric-tree/" },
      { id: "binary-tree-inorder", title: "Binary Tree Inorder Traversal", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
      { id: "binary-tree-preorder", title: "Binary Tree Preorder Traversal", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
      { id: "binary-tree-postorder", title: "Binary Tree Postorder Traversal", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
      { id: "binary-tree-level-order", title: "Binary Tree Level Order Traversal", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
      { id: "binary-tree-zigzag", title: "Binary Tree Zigzag Level Order Traversal", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
      { id: "balanced-binary-tree", title: "Balanced Binary Tree", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/balanced-binary-tree/" },
      { id: "subtree-of-another-tree", title: "Subtree of Another Tree", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/subtree-of-another-tree/" },
      { id: "diameter-of-binary-tree", title: "Diameter of Binary Tree", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/diameter-of-binary-tree/" },
      { id: "count-good-nodes", title: "Count Good Nodes in Binary Tree", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
      { id: "sum-root-to-leaf", title: "Sum Root to Leaf Numbers", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/sum-root-to-leaf-numbers/" },
      { id: "validate-bst", title: "Validate Binary Search Tree", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/validate-binary-search-tree/" },
      { id: "search-in-bst", title: "Search in a BST", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
      { id: "insert-into-bst", title: "Insert into a BST", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/insert-into-a-binary-search-tree/" },
      { id: "convert-sorted-array-to-bst", title: "Convert Sorted Array to BST", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" },
      { id: "kth-smallest-in-bst", title: "Kth Smallest Element in a BST", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
      { id: "lca-of-bst", title: "Lowest Common Ancestor of BST", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
      { id: "inorder-successor-in-bst", title: "Inorder Successor in BST", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/inorder-successor-in-bst/1" },
      { id: "closest-neighbor-in-bst", title: "Closest Neighbor in BST", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/find-the-closest-element-in-bst/1" },
      { id: "bst-iterator", title: "BST Iterator", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/binary-search-tree-iterator/" },
      { id: "construct-from-preorder-inorder", title: "Construct from Preorder & Inorder", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
      { id: "construct-from-inorder-postorder", title: "Construct from Inorder & Postorder", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" },
      { id: "flatten-binary-tree", title: "Flatten Binary Tree to Linked List", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" },
      { id: "lca-of-binary-tree", title: "Lowest Common Ancestor of Binary Tree", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
      { id: "nodes-at-given-distance", title: "Nodes at Given Distance", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/nodes-at-given-distance-in-binary-tree/1" },
      { id: "populating-next-right", title: "Populating Next Right Pointers", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/" },
      { id: "binary-tree-maximum-path-sum", title: "Binary Tree Maximum Path Sum", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
      { id: "boundary-of-binary-tree", title: "Boundary of Binary Tree", difficulty: "Medium", leetcodeUrl: "https://leetcode.ca/all/545.html" },
      { id: "serialize-deserialize", title: "Serialize and Deserialize Binary Tree", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
      { id: "construct-quad-tree", title: "Construct Quad Tree", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/construct-quad-tree/" },
      { id: "leaf-similar-trees", title: "Leaf Similar Trees", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/leaf-similar-trees/" },
      { id: "binary-tree-to-dll", title: "Binary Tree to DLL", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1" },
      { id: "implement-trie", title: "Implement Trie (Prefix Tree)", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
      { id: "construct-trie", title: "Construct Trie from Scratch", difficulty: "Hard", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/trie-insert-and-search0651/1" },
      { id: "shortest-unique-prefix", title: "Shortest Unique Prefix", difficulty: "Hard", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/shortest-unique-prefix-for-every-word/1" },
      { id: "phone-directory", title: "Phone Directory", difficulty: "Hard", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/phone-directory4628/1" },
      { id: "design-add-search-words", title: "Design Add and Search Words", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
      { id: "search-suggestions-system", title: "Search Suggestions System", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/search-suggestions-system/" },
      { id: "word-search-ii", title: "Word Search II", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/word-search-ii/" },
      { id: "replace-words", title: "Replace Words", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/replace-words/" },
      { id: "stream-of-characters", title: "Stream of Characters", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/stream-of-characters/" },
      { id: "word-break", title: "Word Break", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/word-break/" }
    ]
  },
  {
    id: "heaps-priority-queue",
    title: "Heaps / Priority Queue",
    problems: [
      { id: "kth-largest-element-heap", title: "Kth Largest Element in an Array", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
      { id: "top-k-frequent-elements", title: "Top K Frequent Elements", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/top-k-frequent-elements/" },
      { id: "k-closest-points-to-origin", title: "K Closest Points to Origin", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/k-closest-points-to-origin/" },
      { id: "operations-on-binary-min-heap", title: "Operations on Binary Min Heap", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/operations-on-binary-min-heap/1" },
      { id: "find-median-from-data-stream", title: "Find Median from Data Stream", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/find-median-from-data-stream/" },
      { id: "nearly-sorted", title: "Nearly Sorted", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/nearly-sorted-1587115620/1" },
      { id: "minimum-platforms", title: "Minimum Platforms", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1" },
      { id: "merge-k-sorted-arrays", title: "Merge K Sorted Arrays", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1" }
    ]
  },
  {
    id: "backtracking",
    title: "Backtracking",
    problems: [
      { id: "subsets", title: "Subsets", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/subsets/" },
      { id: "permutations", title: "Permutations", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/permutations/" },
      { id: "letter-combinations", title: "Letter Combinations of a Phone Number", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
      { id: "generate-parentheses", title: "Generate Parentheses", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/generate-parentheses/" },
      { id: "combination-sum", title: "Combination Sum", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/combination-sum/" },
      { id: "word-search", title: "Word Search", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/word-search/" },
      { id: "n-queens", title: "N-Queens", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/n-queens/" },
      { id: "n-queens-ii", title: "N-Queens II", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/n-queens-ii/" },
      { id: "sudoku-solver", title: "Sudoku Solver", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/sudoku-solver/" },
      { id: "word-squares", title: "Word Squares", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/word-squares/" }
    ]
  },
  {
    id: "graphs",
    title: "Graphs - BFS / DFS",
    problems: [
      { id: "flood-fill", title: "Flood Fill", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/flood-fill/" },
      { id: "number-of-islands", title: "Number of Islands", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/number-of-islands/", isEssential: true },
      { id: "max-area-of-island", title: "Max Area of Island", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/max-area-of-island/" },
      { id: "rotting-oranges-graph", title: "Rotting Oranges", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/rotting-oranges/" },
      { id: "01-matrix", title: "01 Matrix", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/01-matrix/" },
      { id: "surrounded-regions", title: "Surrounded Regions", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/surrounded-regions/" },
      { id: "pacific-atlantic-water-flow", title: "Pacific Atlantic Water Flow", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
      { id: "steps-by-knight", title: "Steps by Knight", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/steps-by-knight5927/1" },
      { id: "clone-graph", title: "Clone Graph", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/clone-graph/" },
      { id: "is-graph-bipartite", title: "Is Graph Bipartite?", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/is-graph-bipartite/" },
      { id: "detect-cycle-in-directed-graph", title: "Detect Cycle in Directed Graph", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1" },
      { id: "course-schedule", title: "Course Schedule", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/course-schedule/", isEssential: true },
      { id: "course-schedule-ii", title: "Course Schedule II", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/course-schedule-ii/" },
      { id: "topological-sort", title: "Topological Sort", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/topological-sort/1" },
      { id: "word-ladder", title: "Word Ladder", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/word-ladder/" },
      { id: "shortest-path-in-grid", title: "Shortest Path in Grid with Obstacles Elimination", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/" },
      { id: "path-with-maximum-probability", title: "Path with Maximum Probability", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/path-with-maximum-probability/" },
      { id: "cheapest-flights-within-k-stops", title: "Cheapest Flights Within K Stops", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
      { id: "dijkstra-algorithm", title: "Dijkstra Algorithm", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1" },
      { id: "accounts-merge", title: "Accounts Merge", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/accounts-merge/" },
      { id: "reconstruct-itinerary", title: "Reconstruct Itinerary", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/reconstruct-itinerary/" },
      { id: "critical-connections-in-network", title: "Critical Connections in a Network", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/critical-connections-in-a-network/" },
      { id: "word-search-ii-graph", title: "Word Search II", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/word-search-ii/" },
      { id: "codeforces-999e", title: "Codeforces 999E", difficulty: "Hard", leetcodeUrl: "https://codeforces.com/problemset/problem/999/E" }
    ]
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    problems: [
      { id: "climbing-stairs", title: "Climbing Stairs", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/climbing-stairs/", isEssential: true },
      { id: "min-cost-climbing-stairs", title: "Min Cost Climbing Stairs", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
      { id: "maximum-subarray-dp", title: "Maximum Subarray", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/" },
      { id: "house-robber", title: "House Robber", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/house-robber/", isEssential: true },
      { id: "house-robber-ii", title: "House Robber II", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/house-robber-ii/" },
      { id: "maximum-product-subarray", title: "Maximum Product Subarray", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/maximum-product-subarray/", isEssential: true },
      { id: "decode-ways", title: "Decode Ways", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/decode-ways/" },
      { id: "coin-change", title: "Coin Change", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/coin-change/", isEssential: true },
      { id: "coin-change-ii", title: "Coin Change II", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/coin-change-ii/" },
      { id: "min-coin", title: "Min Coin", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/min-coin5549/1" },
      { id: "word-break-dp", title: "Word Break", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/word-break/" },
      { id: "longest-increasing-subsequence", title: "Longest Increasing Subsequence", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/longest-increasing-subsequence/", isEssential: true },
      { id: "printing-lis", title: "Printing LIS", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1" },
      { id: "maximum-sum-increasing-subsequence", title: "Maximum Sum Increasing Subsequence", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1" },
      { id: "longest-string-chain", title: "Longest String Chain", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/longest-string-chain/" },
      { id: "unique-paths", title: "Unique Paths", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/unique-paths/" },
      { id: "unique-paths-ii", title: "Unique Paths II", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/unique-paths-ii/" },
      { id: "gold-mine-problem", title: "Gold Mine Problem", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/gold-mine-problem2608/1" },
      { id: "longest-common-subsequence", title: "Longest Common Subsequence", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/longest-common-subsequence/" },
      { id: "edit-distance", title: "Edit Distance", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/edit-distance/" },
      { id: "palindromic-substrings", title: "Palindromic Substrings", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/palindromic-substrings/" },
      { id: "longest-palindromic-substring-dp", title: "Longest Palindromic Substring", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/longest-palindromic-substring/" },
      { id: "palindrome-partitioning-ii-dp", title: "Palindrome Partitioning II", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/palindrome-partitioning-ii/" },
      { id: "word-break-ii", title: "Word Break II", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/word-break-ii/" },
      { id: "01-knapsack", title: "0/1 Knapsack", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1" },
      { id: "partition-equal-subset-sum", title: "Partition Equal Subset Sum", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { id: "ones-and-zeroes", title: "Ones and Zeroes", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/ones-and-zeroes/" },
      { id: "burst-balloons", title: "Burst Balloons", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/burst-balloons/" },
      { id: "matrix-chain-multiplication", title: "Matrix Chain Multiplication", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1" },
      { id: "minimum-cost-tree", title: "Minimum Cost Tree from Leaf Values", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/" },
      { id: "strange-printer", title: "Strange Printer", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/strange-printer/" },
      { id: "egg-dropping", title: "Egg Dropping", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/super-egg-drop/" },
      { id: "minimum-job-difficulty", title: "Minimum Job Difficulty", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/" },
      { id: "best-time-to-buy-and-sell-stock-iv", title: "Best Time to Buy and Sell Stock IV", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/" },
      { id: "maximum-height-by-stacking-cuboids", title: "Maximum Height by Stacking Cuboids", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/maximum-height-by-stacking-cuboids/" },
      { id: "boolean-parenthesization", title: "Boolean Parenthesization", difficulty: "Hard", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/boolean-parenthesization5610/1" },
      { id: "largest-subsquare", title: "Largest Subsquare", difficulty: "Hard", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/largest-subsquare-surrounded-by-x0558/1" }
    ]
  },
  {
    id: "bit-manipulation-math",
    title: "Bit Manipulation & Math",
    problems: [
      { id: "single-number-bit", title: "Single Number", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/single-number/" },
      { id: "number-of-1-bits", title: "Number of 1 Bits", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/number-of-1-bits/" },
      { id: "count-set-bits", title: "Count Set Bits in an Integer", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/count-set-bits-in-an-integer1146/1" },
      { id: "non-repeating-numbers", title: "Non-Repeating Numbers", difficulty: "Easy", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1" },
      { id: "add-binary", title: "Add Binary", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/add-binary/" },
      { id: "add-strings", title: "Add Strings", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/add-strings/" },
      { id: "copy-set-bits", title: "Copy Set Bits in a Range", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/copy-set-bits-in-range0623/1" },
      { id: "subsets-bitmasking", title: "Subsets (Bitmasking Approach)", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/subsets/" },
      { id: "single-number-ii", title: "Single Number II", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/single-number-ii/" },
      { id: "pow-x-n-math", title: "Pow(x, n)", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/powx-n/" },
      { id: "count-primes", title: "Count Primes", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/count-primes/" },
      { id: "rectangle-area", title: "Rectangle Area", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/rectangle-area/" },
      { id: "power-set", title: "Power Set (Recursive + Bitmask)", difficulty: "Medium", leetcodeUrl: "https://practice.geeksforgeeks.org/problems/power-set4302/1" }
    ]
  },
  {
    id: "design-data-structure",
    title: "Design Data Structure",
    problems: [
      { id: "design-circular-queue", title: "Design Circular Queue", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/design-circular-queue/" },
      { id: "design-tic-tac-toe", title: "Design Tic-Tac-Toe", difficulty: "Easy", leetcodeUrl: "https://leetcode.ca/all/348.html" },
      { id: "design-hit-counter", title: "Design Hit Counter", difficulty: "Easy", leetcodeUrl: "https://leetcode.ca/all/362.html" },
      { id: "insert-delete-getrandom-o1", title: "Insert Delete GetRandom O(1)", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/insert-delete-getrandom-o1/" },
      { id: "analyze-user-website-visit-pattern", title: "Analyze User Website Visit Pattern", difficulty: "Medium", leetcodeUrl: "https://leetcode.ca/all/1152.html" },
      { id: "lfu-cache", title: "LFU Cache", difficulty: "Medium", leetcodeUrl: "https://leetcode.com/problems/lfu-cache/" },
      { id: "design-twitter", title: "Design Twitter", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/design-twitter/" }
    ]
  },
  {
    id: "misc-advanced",
    title: "Miscellaneous Advanced",
    problems: [
      { id: "verifying-alien-dictionary", title: "Verifying Alien Dictionary", difficulty: "Easy", leetcodeUrl: "https://leetcode.com/problems/verifying-an-alien-dictionary/" },
      { id: "read-n-characters-given-read4", title: "Read N Characters Given Read4", difficulty: "Medium", leetcodeUrl: "https://leetcode.ca/all/157.html" },
      { id: "binary-tree-vertical-order", title: "Binary Tree Vertical Order Traversal", difficulty: "Medium", leetcodeUrl: "https://leetcode.ca/all/314.html" },
      { id: "expression-add-operators", title: "Expression Add Operators", difficulty: "Hard", leetcodeUrl: "https://leetcode.com/problems/expression-add-operators/" }
    ]
  }
];