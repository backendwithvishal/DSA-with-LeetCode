# Requirements Document

## Introduction

This feature restructures the existing JavaScript DSA practice project from a flat per-category layout into a hierarchical, modular folder structure. Currently, each category folder (e.g., `linked-list/`, `sliding-window/`) holds all algorithm files directly at the same level. The goal is to give every individual algorithm or operation its own dedicated subfolder, keeping code isolated, self-contained, and easy to navigate. The restructuring applies uniformly across all existing category folders and must preserve all existing code without modification.

## Glossary

- **Category_Folder**: A top-level folder inside `src/` that groups algorithms by technique (e.g., `linked-list`, `sliding-window`, `two-pointers`).
- **Operation_Subfolder**: A dedicated subfolder inside a Category_Folder that contains all files related to a single algorithm or operation (e.g., `linked-list/reverse-k-group/`).
- **Code_File**: A JavaScript (`.js`) source file implementing a single algorithm, placed inside its Operation_Subfolder.
- **README_File**: A Markdown (`.md`) documentation file placed inside an Operation_Subfolder describing the algorithm, its LeetCode reference, approach, and complexity.
- **Category_Index**: A `README.md` file placed at the root of a Category_Folder listing all Operation_Subfolders it contains.
- **Project_Root_README**: The top-level `src/README.md` file that documents the overall folder structure and quick-reference table.
- **Restructurer**: The process or tooling responsible for performing the migration.
- **Naming_Convention**: The kebab-case, lowercase naming standard applied to all folder and file names.

---

## Requirements

### Requirement 1: One Operation Per Subfolder

**User Story:** As a developer, I want each algorithm to live in its own subfolder, so that I can navigate directly to a specific operation without scanning a flat list of files.

#### Acceptance Criteria

1. THE Restructurer SHALL create one Operation_Subfolder per algorithm inside the corresponding Category_Folder.
2. WHEN an algorithm file exists at `src/<category>/<algorithm>.js`, THE Restructurer SHALL move it to `src/<category>/<algorithm>/<algorithm>.js`.
3. THE Restructurer SHALL apply this transformation to every algorithm file across all Category_Folders: `linked-list`, `sliding-window`, `two-pointers`, `stack-queue`, `binary-search`, `expand-from-center`, `prefix-sum`, and `arrays`.
4. WHEN the restructuring is complete, THE Restructurer SHALL ensure no algorithm `.js` files remain directly inside a Category_Folder (i.e., all `.js` files reside inside an Operation_Subfolder).

---

### Requirement 2: Consistent Naming Conventions

**User Story:** As a developer, I want all folder and file names to follow a consistent naming convention, so that the project is predictable and easy to search.

#### Acceptance Criteria

1. THE Restructurer SHALL name every Operation_Subfolder using kebab-case, matching the base name of the original algorithm file (e.g., `reverse-k-group.js` → folder `reverse-k-group/`).
2. THE Restructurer SHALL name the Code_File inside each Operation_Subfolder identically to the Operation_Subfolder name with a `.js` extension (e.g., `reverse-k-group/reverse-k-group.js`).
3. THE Restructurer SHALL preserve the original file name casing and spelling exactly; no renaming of algorithm identifiers is permitted during restructuring.
4. IF an Operation_Subfolder name would conflict with an existing folder name, THEN THE Restructurer SHALL report the conflict and halt without making changes.

---

### Requirement 3: Per-Operation README Documentation

**User Story:** As a developer, I want a README inside each operation subfolder, so that I can understand the algorithm's purpose, approach, and complexity without opening the code file.

#### Acceptance Criteria

1. THE Restructurer SHALL create a `README.md` file inside every Operation_Subfolder.
2. WHEN creating a README_File, THE Restructurer SHALL include the following sections: problem title, LeetCode problem number and link, problem description summary, approach description, and time and space complexity.
3. WHEN the LeetCode problem number is known from the existing codebase or `src/README.md`, THE Restructurer SHALL populate it in the README_File.
4. IF the LeetCode problem number cannot be determined, THEN THE Restructurer SHALL insert a placeholder (`<!-- LC number unknown -->`) in the README_File.

---

### Requirement 4: Category-Level Index README

**User Story:** As a developer, I want a README at the root of each category folder, so that I can see all operations in that category at a glance.

#### Acceptance Criteria

1. THE Restructurer SHALL create or update a `README.md` file at the root of every Category_Folder.
2. THE Category_Index SHALL list every Operation_Subfolder within that Category_Folder, including the algorithm name and its LeetCode problem number.
3. WHEN a new Operation_Subfolder is added to a Category_Folder, THE Category_Index SHALL include an entry for it.
4. THE Category_Index SHALL present entries in alphabetical order by Operation_Subfolder name.

---

### Requirement 5: Updated Project Root README

**User Story:** As a developer, I want the top-level `src/README.md` to reflect the new hierarchical structure, so that the project overview stays accurate after restructuring.

#### Acceptance Criteria

1. THE Restructurer SHALL update `src/README.md` to reflect the new two-level folder hierarchy (Category_Folder → Operation_Subfolder → Code_File).
2. THE Project_Root_README SHALL list every Category_Folder and, under each, every Operation_Subfolder with its algorithm name and LeetCode reference.
3. WHEN the restructuring is complete, THE Project_Root_README SHALL not reference any algorithm file paths that no longer exist at the flat category level.
4. THE Project_Root_README SHALL preserve the existing Quick Reference table, updating file paths where necessary.

---

### Requirement 6: Code File Integrity

**User Story:** As a developer, I want the code inside each file to remain unchanged after restructuring, so that no existing solutions are broken.

#### Acceptance Criteria

1. THE Restructurer SHALL preserve the exact byte-for-byte content of every Code_File during the move operation.
2. WHEN a Code_File is moved to its Operation_Subfolder, THE Restructurer SHALL verify that the file content after the move is identical to the content before the move.
3. IF a content mismatch is detected after a move, THEN THE Restructurer SHALL restore the original file and report an error.
4. THE Restructurer SHALL not modify any import paths or internal references within Code_Files, as all existing files are self-contained and have no cross-file imports.

---

### Requirement 7: Hierarchical Extensibility

**User Story:** As a developer, I want the folder structure to support future additions, so that new algorithms can be added without disrupting the existing layout.

#### Acceptance Criteria

1. THE Restructurer SHALL produce a folder structure where adding a new algorithm requires only creating a new Operation_Subfolder inside the appropriate Category_Folder.
2. WHERE a new algorithm category is introduced, THE Restructurer SHALL require only the creation of a new Category_Folder following the same pattern.
3. THE Restructurer SHALL not introduce any hard-coded file lists or registry files that must be manually updated when new algorithms are added.
