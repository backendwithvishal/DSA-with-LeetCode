# Implementation Plan: Nested Folder Structure

## Overview

Implement a Node.js script (`scripts/restructure.js`) that migrates the `src/` directory from a flat per-category layout to a two-level hierarchy. The script runs in four phases: Discovery → Validation → Execution → Documentation. Implementation proceeds function-by-function, with property-based tests (fast-check) placed close to each component.

## Tasks

- [ ] 1. Set up project scaffolding and install dependencies
  - Create `scripts/` directory and empty `scripts/restructure.js` entry point
  - Add `fast-check` as a dev dependency (`npm install --save-dev fast-check`)
  - Create `scripts/restructure.test.js` as the test file (use Node's built-in `node:test` runner or Jest if already present — check `package.json` first)
  - Confirm the test runner can execute `scripts/restructure.test.js` with a passing smoke test
  - _Requirements: 1.1, 2.1_

- [ ] 2. Implement the Discovery Phase (`discoverAlgorithms`)
  - [ ] 2.1 Implement `discoverAlgorithms(srcDir)`
    - Read each folder in `CATEGORY_FOLDERS` under `srcDir`
    - Collect only `.js` files found **directly** at the category root (not inside subfolders)
    - Return a `Map<categoryName, AlgorithmFile[]>` with all five fields populated per the `AlgorithmFile` shape
    - Skip missing category folders with a console warning (idempotency / partial repos)
    - _Requirements: 1.1, 1.2, 1.3_

  - [ ]* 2.2 Write property test for `discoverAlgorithms` — Property 2: Subfolder Naming
    - **Property 2: Subfolder naming matches original base name**
    - Generate random valid kebab-case base names; assert `targetDir` ends with `/<baseName>` and `targetPath` ends with `/<baseName>/<baseName>.js`
    - Tag: `// Feature: nested-folder-structure, Property 2: subfolder naming matches original base name`
    - **Validates: Requirements 2.1, 2.2, 2.3**

- [ ] 3. Implement the Validation Phase (`validateNoConflicts`)
  - [ ] 3.1 Implement `validateNoConflicts(algorithms)`
    - For each planned `targetDir`, check whether a directory with that name already exists on disk
    - Collect **all** conflicts before returning — do not halt on the first one
    - Return `{ ok: boolean, conflicts: string[] }`
    - _Requirements: 2.4_

  - [ ]* 3.2 Write property test for `validateNoConflicts` — Property 3: Conflict Detection
    - **Property 3: Conflict detection halts without changes**
    - Generate filesystem states where one or more target directories already exist; assert `ok === false` and all conflicting paths are listed; assert no filesystem mutations occurred
    - Tag: `// Feature: nested-folder-structure, Property 3: conflict detection halts without changes`
    - **Validates: Requirements 2.4**

- [ ] 4. Checkpoint — Ensure discovery and validation tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Implement the Execution Phase (`moveFile`)
  - [ ] 5.1 Implement `moveFile(originalPath, targetPath)`
    - Read source content into memory
    - Create destination directory (`fs.mkdirSync` with `recursive: true`)
    - Write content to destination
    - Read back destination content and compare byte-for-byte with original
    - On mismatch: delete destination, return `{ ok: false, error }`
    - On match: delete source, return `{ ok: true }`
    - _Requirements: 6.1, 6.2, 6.3_

  - [ ]* 5.2 Write property test for `moveFile` — Property 7: Content Preservation
    - **Property 7: File content preservation**
    - Generate random file contents (arbitrary strings/buffers); run `moveFile` against a temp directory; assert destination content equals original content and source no longer exists
    - Tag: `// Feature: nested-folder-structure, Property 7: file content preservation`
    - **Validates: Requirements 6.1, 6.2**

  - [ ]* 5.3 Write property test for `moveFile` — Property 1: File Move Round-Trip
    - **Property 1: File move round-trip**
    - Generate random category names and algorithm base names; assert file exists at nested path after move and does NOT exist at the original flat path
    - Tag: `// Feature: nested-folder-structure, Property 1: file move round-trip`
    - **Validates: Requirements 1.1, 1.2, 1.4**

- [ ] 6. Implement the Documentation Phase — per-operation README (`generateOperationReadme`, `parseLcData`)
  - [ ] 6.1 Implement `parseLcData(rootReadmePath)`
    - Parse `src/README.md` to extract LeetCode numbers and problem titles keyed by algorithm base name
    - Return `Map<baseName, LcEntry>`
    - If the file cannot be parsed, log a warning and return an empty map (proceed with placeholders)
    - _Requirements: 3.3, 3.4_

  - [ ] 6.2 Write unit test for `parseLcData`
    - Given the actual `src/README.md`, verify that known LC numbers are extracted correctly for at least three algorithms
    - _Requirements: 3.3_

  - [ ] 6.3 Implement `generateOperationReadme(algorithmFile, lcData)`
    - Produce a Markdown string with all required sections: problem title, LeetCode number and link, problem description summary, approach description, time and space complexity
    - Use `lcData` for LC number/link; insert `<!-- LC number unknown -->` placeholder when absent
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [ ]* 6.4 Write property test for `generateOperationReadme` — Property 4: README Completeness
    - **Property 4: Every operation subfolder has a complete README**
    - Generate random `AlgorithmFile` entries with and without LC data; assert every generated README string contains all five required section headings
    - Tag: `// Feature: nested-folder-structure, Property 4: every operation subfolder has a complete README`
    - **Validates: Requirements 3.1, 3.2**

- [ ] 7. Implement the Documentation Phase — category index (`generateCategoryIndex`)
  - [ ] 7.1 Implement `generateCategoryIndex(categoryName, algorithms)`
    - Accept a sorted list of `AlgorithmFile[]` and produce a category-level `README.md` string
    - List every operation alphabetically with its LeetCode number
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [ ]* 7.2 Write property test for `generateCategoryIndex` — Property 5: Category Index Ordering
    - **Property 5: Category index is complete and alphabetically ordered**
    - Generate random lists of algorithm base names (unsorted); assert the generated index lists all names and they appear in alphabetical order
    - Tag: `// Feature: nested-folder-structure, Property 5: category index is complete and alphabetically ordered`
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4**

- [ ] 8. Implement the Documentation Phase — root README (`updateRootReadme`)
  - [ ] 8.1 Implement `updateRootReadme(srcDir, allAlgorithms, lcData)`
    - Rewrite the folder structure section and quick-reference table in `src/README.md` to reflect the new two-level hierarchy
    - Preserve all other existing content
    - Ensure no flat-level `.js` paths remain in the updated content
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [ ]* 8.2 Write property test for `updateRootReadme` — Property 6: Root README Accuracy
    - **Property 6: Root README completeness and accuracy**
    - Generate random sets of categories and algorithms; assert the updated README contains every category and algorithm name, and contains no flat-level `<category>/<algorithm>.js` path patterns
    - Tag: `// Feature: nested-folder-structure, Property 6: root README completeness and accuracy`
    - **Validates: Requirements 5.1, 5.2, 5.3, 5.4**

- [ ] 9. Checkpoint — Ensure all documentation-phase tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 10. Wire all phases together in `restructure.js`
  - [ ] 10.1 Implement the main orchestration function
    - Parse `--dry-run` flag from `process.argv`
    - Call phases in order: `parseLcData` → `discoverAlgorithms` → `validateNoConflicts` → (if ok) execute moves → generate documentation
    - In dry-run mode: print all planned operations to stdout without touching the filesystem
    - Collect and report all errors; exit with non-zero code on any error
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 2.4, 6.1, 6.2, 6.3_

  - [ ] 10.2 Integrate `moveFile` loop with documentation generation
    - For each `AlgorithmFile`: call `moveFile`, then `generateOperationReadme`, write the README to `targetDir/README.md`
    - After all files in a category are processed, call `generateCategoryIndex` and write `<category>/README.md`
    - After all categories, call `updateRootReadme` and write `src/README.md`
    - _Requirements: 1.1, 3.1, 4.1, 5.1_

  - [ ]* 10.3 Write integration test for the full script
    - Copy the actual `src/` directory to a temp directory; run the full orchestration against it
    - Assert: all `.js` files are at nested paths, no `.js` files remain at flat category level, every operation subfolder has a `README.md`, every category folder has a `README.md`, `src/README.md` is updated
    - _Requirements: 1.4, 3.1, 4.1, 5.1, 6.1_

- [ ] 11. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Property tests use fast-check with a minimum of 100 iterations per property
- The `--dry-run` flag must be supported throughout; no filesystem writes occur in dry-run mode
- All file moves are atomic per-file: verify content before deleting the source
- The script is idempotent: if a target file already exists with correct content, skip silently
