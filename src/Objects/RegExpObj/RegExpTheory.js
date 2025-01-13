// A regular expression is a sequence of characters that forms a search pattern. Regular 
// expressions can be used to perform all types of text search and text replacement operations

// A regular expression can be a single character or a more complicated pattern.

// Syntax:

// /pattern/modifiers;

// Basic Syntax
// Literals: Plain characters match themselves.

// Example: cat matches the string "cat".
// Meta-characters: Characters with special meanings.

// .: Matches any single character except newline.
// ^: Matches the start of a string.
// $: Matches the end of a string.
// *: Matches 0 or more repetitions of the preceding element.
// +: Matches 1 or more repetitions of the preceding element.
// ?: Matches 0 or 1 repetition of the preceding element.
// |: Alternation (logical OR).
// Character Classes: Denoted by square brackets [ ], matches any one of the enclosed characters.

// [abc]: Matches "a", "b", or "c".
// [a-z]: Matches any lowercase letter.
// [^abc]: Matches any character except "a", "b", or "c".
// Quantifiers: Specify the number of occurrences.

// {n}: Exactly n occurrences.
// {n,}: n or more occurrences.
// {n,m}: Between n and m occurrences.
// Groups and Capturing: Parentheses ( ) create groups and capture the matched sub-patterns.

// (abc): Matches "abc" and captures it as a group.
// (?:abc): Matches "abc" without capturing.
// Common Use Cases
// Validation: Ensuring that strings adhere to specified patterns.

// Example: Validating email addresses, phone numbers, etc.
// Searching and Extracting: Finding and extracting substrings.

// Example: Extracting dates, URLs, or other specific patterns from text.
// Replacing: Substituting parts of a string with another string.

// Example: Censoring words, replacing tokens.
// Examples
// Email Validation: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

// This pattern matches a typical email address format.
// Phone Number Validation: ^\(\d{3}\) \d{3}-\d{4}$

// Matches phone numbers in the format (123) 456-7890.
// Date Extraction: \b\d{2}/\d{2}/\d{4}\b

// Matches dates in the format DD/MM/YYYY.
