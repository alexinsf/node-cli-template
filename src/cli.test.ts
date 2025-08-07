import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { runCli } from './cli';
import { readFileSync } from 'node:fs';

vi.mock('node:fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('node:fs')>();
  return {
    ...actual,
    readFileSync: vi.fn(),
  };
});

describe('CLI', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return success result when package name is explicitly provided', () => {
    const testPackageName = 'my-awesome-cli';
    const result = runCli(testPackageName);

    expect(vi.mocked(readFileSync)).not.toHaveBeenCalled();
    expect(result.success).toBe(true);
    expect(result.packageName).toBe(testPackageName);
    expect(result.message).toBe(
      `Welcome to ${testPackageName}! The CLI is ready to use.`,
    );
  });

  it('should return success result when package name is read from package.json', () => {
    const dynamicPackageName = 'my-dynamic-package';
    vi.mocked(readFileSync).mockReturnValueOnce(
      JSON.stringify({ name: dynamicPackageName, version: '1.0.0' }),
    );

    const result = runCli();

    expect(vi.mocked(readFileSync)).toHaveBeenCalledTimes(1);
    expect(result.success).toBe(true);
    expect(result.packageName).toBe(dynamicPackageName);
    expect(result.message).toBe(
      `Welcome to ${dynamicPackageName}! The CLI is ready to use.`,
    );
  });

  it('should handle package.json read errors gracefully', () => {
    vi.mocked(readFileSync).mockImplementationOnce(() => {
      throw new Error('File not found');
    });

    const result = runCli();

    expect(vi.mocked(readFileSync)).toHaveBeenCalledTimes(1);
    expect(result.success).toBe(true);
    expect(result.packageName).toBe('unknown-package');
    expect(result.message).toBe(
      'Welcome to unknown-package! The CLI is ready to use.',
    );
  });

  it('should handle package.json without name field', () => {
    vi.mocked(readFileSync).mockReturnValueOnce(
      JSON.stringify({ version: '1.0.0' }),
    );

    const result = runCli();

    expect(result.success).toBe(true);
    expect(result.packageName).toBe('unknown-package');
    expect(result.message).toBe(
      'Welcome to unknown-package! The CLI is ready to use.',
    );
  });
});
