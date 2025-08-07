#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Package information interface
 */
interface PackageInfo {
  name?: string;
  version?: string;
  description?: string;
}

/**
 * CLI execution result
 */
interface CliResult {
  success: boolean;
  message: string;
  packageName: string;
}

/**
 * Reads package information from the project's package.json.
 * @returns The package name, or 'unknown-package' if not found
 */
function getPackageNameFromPackageJson(): string {
  try {
    const packageJsonPath = resolve(process.cwd(), 'package.json');
    const packageJson: PackageInfo = JSON.parse(
      readFileSync(packageJsonPath, 'utf8'),
    );
    return packageJson.name || 'unknown-package';
  } catch {
    return 'unknown-package';
  }
}

/**
 * Main CLI function - replace this with your actual CLI logic.
 * This function is designed to be easily testable and can be imported
 * by other modules or executed directly from the command line.
 * @param packageName - Optional package name override for testing
 * @returns CLI execution result
 */
export function runCli(packageName?: string): CliResult {
  const resolvedPackageName = packageName || getPackageNameFromPackageJson();

  // Replace this section with your actual CLI logic
  const result: CliResult = {
    success: true,
    message: `Welcome to ${resolvedPackageName}! The CLI is ready to use.`,
    packageName: resolvedPackageName,
  };

  return result;
}

/**
 * CLI entry point when run directly
 * v8 ignore next 6
 */
if (import.meta.url === `file://${process.argv[1]}`) {
  const result = runCli();
  console.log(result.message);
  process.exit(result.success ? 0 : 1);
}
