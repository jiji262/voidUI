# @voidui/components changelog

All notable changes to the published library ship here. The format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) starting at 0.1.0.

## Unreleased

## 0.1.0

First publishable cut.

### Added

- 29 components across form, display, feedback, layout, and overlay categories: Accordion, Alert, Avatar, Badge, BasicCard, Breadcrumb, Button, Card, Checkbox, CommandDisplay, Dialog, IconButton, Input, Label, Login, Menu, Popover, ProductCard, Progress, Radio, Select, Slider, Sonner, Switch, Tab, Table, Text, Textarea, Toggle, ToggleGroup, Tooltip.
- 8 themes × light/dark token sets driven by `data-theme` + `data-mode` on `<html>`: neobrutal, swiss, editorial, stripe, hanko, terra, cyber, milktea.
- Bilingual CJK font stacks (Inter · JetBrains Mono · Fraunces · IBM Plex Mono · Noto Sans SC · Noto Serif SC) per theme.
- Dot-API back-compat aliases (`Alert.Title`, `Breadcrumb.List`, `Dialog.Content`, `Avatar.Image`, `Menu.Trigger`, `Popover.Content`, `Select.Item`, `Tooltip.Content`, `RadioGroup.Item`, `Accordion.Item`) alongside the flat named exports, so v1 call sites keep compiling.
- v1-legacy props on Checkbox / Radio / Tooltip / DialogHeader / DialogFooter accepted and ignored, so v1 preview callers type-check during migration.

### Package

- `@voidui/components` published as dual-format (ESM + CJS) with `.d.ts` / `.d.cts` emitted by tsup.
- Every bundle ships `"use client";` at the top so Next.js App Router consumers can import directly from server components.
- `sideEffects: false` for tree-shakeable consumption.
- `publint` green.
