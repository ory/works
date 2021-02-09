<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [Ory Kratos](#ory-kratos)
  - [Ory Kratos Python Frontend](#ory-kratos-python-frontend)
  - [Ory Kratos reverse proxy (Nginx) example.](#ory-kratos-reverse-proxy-nginx-example)
  - [Ory Kratos hydra-integration branch](#ory-kratos-hydra-integration-branch)
- [Ory Hydra](#ory-hydra)
  - [PoC for OAuth2/OpenID Connect provider using ORY Hydra.](#poc-for-oauth2openid-connect-provider-using-ory-hydra)
- [Ory Oathkeeper](#ory-oathkeeper)
  - [Ory Oathkeeper Istio best practices/reference configuration](#ory-oathkeeper-istio-best-practicesreference-configuration)
    - [Old Projects](#old-projects)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

This repository shows examples of practical solutions using Ory projects and other OSS

The following repositories are mostly produced by the community and not maintained by the Ory team.

They can and will contain errors, missing documentation and may not work as intended.

These are meant as **examples** and **reference implementations**, not to be used in production!

## Ory Kratos

### Ory Kratos Python Frontend

**Repository**:  
https://github.com/k9ert/ory-tinker/  
**Description**:  
**WIP** A basic UI for ory kratos selfservice-flows using Python.

### Ory Kratos reverse proxy (Nginx) example.

**Discussion**:  
https://github.com/ory/kratos/discussions/1049  
**Description**:  
A detailed discussion around setting Ory Kratos up with a Nginx reverse proxy.

### Ory Kratos hydra-integration branch

**Branch**:  
https://github.com/ory/kratos-selfservice-ui-node/tree/hydra-integration-2021  
**Description**:  
A branch integrating Ory Hydra into Ory Kratos.

Recently updated in this PR: https://github.com/ory/kratos-selfservice-ui-node/pull/108

## Ory Hydra

### PoC for OAuth2/OpenID Connect provider using ORY Hydra.

**Repository**:  
https://git.dittberner.info/jan/hydra_oidc_poc  
**Description**:  
Implementation of a small pair of OIDC applications (a resource server and a login/consent server) using Hydra.

### Ory Hydra/ Ory Oathkeeper Zero Trust Reference "Hello World App"

**Repository**:  
https://github.com/JasonCubic/oathkeeper_hydra_reverse_proxy  
**Description**:  
**WIP** A reverse proxy reference using Ory Oathkeeper/Hydra and OIDC

## Ory Oathkeeper

### Ory Oathkeeper Istio best practices/reference configuration

**Issue**:  
https://github.com/ory/oathkeeper/issues/624  
**Description**:  
An issue collecting some best practices around Istio/Oathkeeper and reference configuration.

### Ory Oathkeeper and Auth0

**Blogpost**  
https://blog.commit.dev/articles/open-source-sundays-building-a-user-management-solution-using-ory-oathkeeper-and-auth0  
**Description**  
A tutorial for a user management solution using ORY Oathkeeper and Auth0

## Related Projects

**Repository**  
https://github.com/i-core/werther  
**Description**  
An Identity Provider for ORY Hydra over LDAP

## Old Projects

Approach with caution, these repositories are very old and just here for archival purposes!

---

_Here be dragons_

---
