Run the full lint suite, auto-fix everything possible, and manually fix anything that remains.

## Steps

1. Run `npm run lint 2>&1` and capture the full output.

2. If there are fixable violations, run `npm run lint -- --fix 2>&1` to apply auto-fixes, then run `npm run lint 2>&1` again to get the remaining issues.

3. For any errors that ESLint cannot auto-fix, read the offending file(s) and fix them manually using the Edit tool. Common issues:
   - `no-unused-vars` — remove the unused import or variable
   - `react-hooks/rules-of-hooks` — move the hook call to the top level of the component
   - `react-hooks/exhaustive-deps` — add missing dependencies to the useEffect/useCallback/useMemo array
   - `react-refresh/only-export-components` — move non-component exports to a separate file

4. Run `npm run lint 2>&1` a final time to confirm zero errors and zero warnings.

5. Report a short summary: how many issues were auto-fixed, how many were manually fixed, and confirmation that lint is now clean.

## Rules

- Fix every error. Do not suppress rules with `// eslint-disable` comments unless the suppression is genuinely correct (e.g. a known false positive) — in that case add a one-line comment explaining why.
- Do not change logic while fixing lint. Lint fixes should be surgical.
- If a fix requires understanding broader context (e.g. a hook dependency that could change behaviour), flag it to the user rather than guessing.
