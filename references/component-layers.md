# Component Layer Design

This document describes the four-layer model used throughout this repository,
and maps each layer to Storybook story roles, test strategies, and WAI-ARIA
responsibilities.

## The Four Layers

```
┌─────────────────────────────────────────────────────────────────────┐
│  4. Default UI          e.g. DefaultTimer, DefaultStopwatch          │
│     (opinionated default built on top of Provider + Primitive)       │
├─────────────────────────────────────────────────────────────────────┤
│  3. State Provider / Context                                         │
│     e.g. TimerContextProvider, StopwatchContextProvider,             │
│          WaveBoxProvider, MeasureStyleContext                         │
├─────────────────────────────────────────────────────────────────────┤
│  2. Auto wrapper         e.g. AutoZoomer, AutoDekamoji, AutoMeasure  │
│     (measures the parent element, then delegates to the Primitive)   │
├─────────────────────────────────────────────────────────────────────┤
│  1. Sized Primitive      e.g. SizedZoomer, SizedDekamoji, MeasureBase│
│     (pure, stateless, requires explicit dimensions)                  │
└─────────────────────────────────────────────────────────────────────┘
```

### Layer 1 — Sized Primitive

Pure rendering components with no internal state or side effects.
They receive explicit dimensions (and optional style props) and produce
deterministic output.

- **Naming**: `Sized*`, `*Base`
- **Examples**: `SizedZoomer`, `SizedDekamoji`, `MeasureBase`, `TabUIBase`

### Layer 2 — Auto Wrapper

Wrap a Sized Primitive with a `useMeasure` hook that injects container
dimensions automatically. Consumers do not need to know the size.

- **Naming**: `Auto*`
- **Examples**: `AutoZoomer`, `AutoDekamoji`, `AutoMeasure`

### Layer 3 — State Provider / Context

Owns mutable state and exposes it through React Context so any descendant
can read or control it without prop drilling.

- **Naming**: `*ContextProvider`, `*Context`, `*StyleContext`
- **Examples**: `StopwatchContextProvider`, `TimerContextProvider`,
  `WaveBoxProvider`, `MeasureStyleContext`, `ZoomerContext`

### Layer 4 — Default UI

A ready-to-use component that wires together a Provider and a Primitive (or
Auto Wrapper) with an opinionated, replaceable presentation layer. Consumers
can swap in their own UI by using the lower layers directly.

- **Naming**: `Default*`
- **Examples**: `DefaultStopwatch`, `DefaultTimer`

---

## Storybook Story Roles

Each layer has a corresponding Storybook story file and title path.

| Layer | Story file | Title path example |
|---|---|---|
| Sized Primitive | `Primitive.stories.tsx` | `Layout Primitives/*/Primitive` |
| Auto Wrapper | `Auto.stories.tsx` | `Layout Primitives/*/Auto` |
| Context / Provider | `Context.stories.tsx` or `Provider.stories.tsx` | `Layout Primitives/*/Context` |
| Default UI | `Default.stories.tsx` | `Default UIs/*/Default` |
| State composition | `Composition.stories.tsx` | `State Providers/*/Composition` |
| Overview (docs) | `Introduction.mdx` | `*/Overview` |

The `Introduction.mdx` for each package references the **Auto** or
**Composition** story as the hero canvas, and links to lower layers in the
Layers section.

---

## Test Strategy by Layer

### Layer 1 — Sized Primitive

| Test type | Rationale |
|---|---|
| **Snapshot** (`toMatchSnapshot`) | Pure render — cheapest regression guard |
| **BDD** (Given props → Then output) | Verify that dimensions and props surface correctly |
| **Boundary values** | width=0, height=0; maximum values; single character |
| **ARIA** | Confirm static `role` / `aria-label` attributes |
| Screenshot VRT | Useful when the output is visual (e.g. `MeasureBase`) |

### Layer 2 — Auto Wrapper

| Test type | Rationale |
|---|---|
| **"Renders without crashing"** | jsdom has no real layout engine; measured size is always 0 |
| **Screenshot VRT** (browser) | The only reliable way to verify measurement + render |
| Snapshot | Limited value (size always 0), skip unless checking DOM structure |

### Layer 3 — State Provider / Context

| Test type | Rationale |
|---|---|
| **BDD** (Given initial / When action / Then new state) | Core value: state transitions |
| **Snapshot** | Verify context shape stays stable across refactors |
| **Boundary values** | elapsed=0, toggle during running, reset mid-count |
| Screenshot VRT | Not applicable (no visual output) |

### Layer 4 — Default UI

| Test type | Rationale |
|---|---|
| **BDD** (Given props / When click / Then callback) | Primary: interaction contract |
| **Snapshot** | Regression prevention |
| **Screenshot VRT** (browser) | Visual appearance verification |
| ARIA | Confirm `role`, `aria-live`, `aria-atomic`, `aria-selected` |

---

## WAI-ARIA Roles by Layer

Accessibility attributes are assigned as close to the **rendering layer** as
possible.

### Layer 1 — Sized Primitive

| Component | ARIA |
|---|---|
| `MeasureBase` | `<svg role="img" aria-label="{W}x{H}">` + `<title>` |
| `TabUIBase` | Wraps TabBar with `role="tablist"`, wraps ContentBox with `role="tabpanel"` |

`TabButtonContext` exposes `aria-selected` so **consumer** `TabButton`
implementations can apply `role="tab" aria-selected={ariaSelected}`.
The `role="tab"` is hardcoded in the consumer (not dynamic) so that static
linters (Biome `useAriaPropsSupportedByRole`) can validate it.

### Layer 3 — State Provider / Context

No direct rendering → no ARIA. Context values (`aria-selected` in
`TabButtonContext`) are passed down as data to be applied at render time.

### Layer 4 — Default UI

| Component | ARIA |
|---|---|
| `DefaultTimer` | `<span role="timer" aria-live="off" aria-atomic="true">` |
| `DefaultStopwatch` | `<span role="timer" aria-live="off" aria-atomic="true">` |

`aria-live="off"` is intentional: timers update every second and should not
interrupt screen-reader speech on every tick. Users can navigate to the timer
element when they want to read the current value.

---

## Example: Full Composition

```tsx
// Layer 3: Provider owns state
<StopwatchContextProvider>
  {/* Layer 3: Context distributes state */}
  <StopwatchContext.Consumer>
    {(ctx) => (
      // Layer 4: Default UI renders it
      <DefaultStopwatch {...ctx} />
      //   └─ <span role="timer" aria-live="off">…</span>
      //   └─ <button>Start / Stop</button>
      //   └─ <button>Reset</button>
    )}
  </StopwatchContext.Consumer>
</StopwatchContextProvider>
```

To replace the Default UI while keeping the same provider:

```tsx
<StopwatchContextProvider>
  <StopwatchContext.Consumer>
    {({ elapsedTime, toggle, reset }) => (
      <MyCustomStopwatchUI
        elapsed={elapsedTime}
        onToggle={toggle}
        onReset={reset}
      />
    )}
  </StopwatchContext.Consumer>
</StopwatchContextProvider>
```
