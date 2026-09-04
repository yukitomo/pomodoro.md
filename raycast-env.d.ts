/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Task Mode - Manual: manage tasks in Raycast. Daily Note: load from Obsidian daily notes. */
  "taskMode": "manual" | "dailynote",
  /** Daily Note Directory - Obsidian daily notes directory (required for Daily Note mode) */
  "dailyNotePath"?: string,
  /** Daily Note Filename - Path of today's note relative to the directory. YYYY, MM, DD are replaced with today's date (e.g. YYYY-MM-DD.md or YYYYMM/YYYY-MM-DD.md) */
  "dailyNoteFormat": string,
  /** Pomodoro Duration (Minutes) - Duration of one pomodoro in minutes */
  "pomoDuration": string,
  /** Break Duration (Minutes) - Duration of break in minutes */
  "breakDuration": string,
  /** Timetable Header - Section header for timetable in daily notes */
  "timetableHeader": string,
  /** Log Section Header - Section header for work log in daily notes */
  "logSectionHeader": string,
  /** Pomodoro Log Header - Sub-header for pomodoro log entries */
  "pomodoroLogHeader": string,
  /** Break Keywords - Comma-separated keywords to identify break blocks */
  "breakKeywords": string,
  /** Quick Start Task Name - Default task name for Quick Start command */
  "quickStartTask": string,
  /** Enable Logging - Write pomodoro log to Daily Note after each session */
  "enableLogging": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `start-timer` command */
  export type StartTimer = ExtensionPreferences & {}
  /** Preferences accessible in the `start-break` command */
  export type StartBreak = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-start` command */
  export type QuickStart = ExtensionPreferences & {}
  /** Preferences accessible in the `stop-timer` command */
  export type StopTimer = ExtensionPreferences & {}
  /** Preferences accessible in the `menu-bar` command */
  export type MenuBar = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `start-timer` command */
  export type StartTimer = {}
  /** Arguments passed to the `start-break` command */
  export type StartBreak = {}
  /** Arguments passed to the `quick-start` command */
  export type QuickStart = {}
  /** Arguments passed to the `stop-timer` command */
  export type StopTimer = {}
  /** Arguments passed to the `menu-bar` command */
  export type MenuBar = {}
}

