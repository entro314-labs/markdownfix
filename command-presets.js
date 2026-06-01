/**
 * Shared command option presets.
 *
 * Keep command semantics aligned across CLI, LSP, and editor integrations.
 */

const DEFAULT_WRAP_WIDTH = 88

export function createAutoformatOptions(options = {}) {
  return {
    nlp: false,
    firstLineTitle: true,
    detectLabels: true,
    semanticBreaks: false,
    smartQuotes: false,
    smartEllipsis: false,
    wrapWidth: DEFAULT_WRAP_WIDTH,
    customRules: [],
    ...options,
  }
}

export function createDraftOptions(options = {}) {
  return {
    nlp: true,
    firstLineTitle: true,
    smartTitleDetection: true,
    normalizeHeadings: true,
    detectLabels: true,
    detectFolders: true,
    detectLists: true,
    reflowParagraphs: true,
    correctCommonTypos: true,
    headerLevel: 3,
    fixPronouns: true,
    ensurePunctuation: true,
    ...options,
  }
}
