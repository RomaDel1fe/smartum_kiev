import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// eslint-plugin-react 7 does not yet support ESLint 10's rule-context API.
// Keep the rest of Next's linting active until the transitive plugin catches up.
const withoutLegacyReactRules = (config) => ({
  ...config,
  rules: Object.fromEntries(
    Object.entries(config.rules ?? {}).filter(([name]) => !name.startsWith("react/")),
  ),
});

export default defineConfig([
  ...nextVitals.map(withoutLegacyReactRules),
  ...nextTs,
  globalIgnores([".next/**", "next-env.d.ts"]),
]);
