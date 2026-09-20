# ADR 0001: Monorepo with independent applications

- Status: Accepted
- Date: 2026-09-19

## Decision

Keep the public website, admin panel and API in one repository as independent workspace applications. Share only explicit packages with stable boundaries.

## Why

This gives one source of truth for contracts and tooling while preserving independent builds, deployments, security boundaries and release schedules.

## Consequences

- Cross-application changes can be reviewed atomically.
- Shared packages require deliberate public APIs.
- A failure or deployment in one app does not force deployment of the others.
- The admin panel and API will not be scaffolded until their requirements are approved.
