---
sidebar_position: 1
id: introduction
---
# Introduction

> Deutsche Bahn consent management platform browser SDK

The goal of this project is to offer Deutsche Bahn websites access to a consent management platform (CMP), by delivering a UI and a custom [SDK](https://github.com/Bahn-X/cmp-sdk).
Using a CMP, ensures that websites use the same standardized way of managing consent, which is aligned with Konzerndatenschutz (privacy officer) according to legal requirements.
The current CMP in use is [Usercentrics](https://usercentrics.com/de/website-consent-management/).

## How it works

The CMP and SDK will be embedded into a website via a tag manager (Tealium), which makes the integration of Tealium mandatory.

Ideally, where external data processing services (DPS) are integrated with script tags (see Case 1 below), the CMP extension in the tag manager can handle most of the cases.
For others, e.g. custom implementations, there might be the need to interact with the CMP directly via this SDK (see Case 2).

### Case 1: Integration of DPS via script tags

A website integrates a DPS via script tags (`<script>...</script>`).

Loading of scripts can be fully managed by Tealium using the Usercentrics extension.
The script tags need to be added to Tealium and mapped to a DPS (created in Usercentrics).
Tealium will then automatically add or remove the script from the website based on the current consent status.

### Case 2: Integration of DPS without using script tags

A website integrates a DPS via a manual or customized solution, e.g. using an `npm` library.

Developers need to use the CMP SDK and query the consent for the given DPS before exposing (user)data.
For example when using an analytics library, before firing events it should be checked if there is valid consent.

## Prerequisites

### Gather services you need consent for

Find the DPS consent is needed for in the CMP, e.g. your currently used analytics solution. 
The CMP usually offers the most common DPS out of the box, but if you use a custom DPS, it can be added to the CMP as well.
These services will then appear in the consent layer -- so users can manage their privacy settings (opt-in) -- and are ready to be managed by the SDK/tag manager (loading scripts, listening to consent events, etc.).

### Tealium tag manager

[Tealium](https://tealium.com/products/tealium-iq-tag-management-system/) is used as tag manager to ship scripts (i.e. "tags") to a website.
By doing this, we can deliver the consent layer, as well as offer access to the underlying CMP (via this SDK) with only one additional script tag.

You'll need the correct account and profile information before you start integrating Tealium and the CMP.
