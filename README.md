# validate-pr-review-action

[MIT](LICENSE)

This is a PoC to apply [validate-pr-review-action](https://github.com/suzuki-shunsuke/validate-pr-review-action) to GitHub Organization's entire repositories by Required Workflows.

## Set up

1. [Create a repository to manage GitHub Action and reusable workflows in your GitHub Organization](https://github.com/new?template_name=validate-pr-review-action&template_owner=szksh-lab)
1. [Set up Securefix Action](https://github.com/csm-actions/securefix-action)

If you don't want to use Securefix Action, you can use [commit-action](https://github.com/suzuki-shunsuke/commit-action), but we strongly recommend Securefix Action in terms of security.

3. Fix workflows and actions
4. [Sharing actions and workflows with your organization](https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-organization)
5. [Configure Organization Rulesets](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization)

### 3. Fix workflows and actions

Fix the action name:

https://github.com/szksh-lab/validate-pr-review-action/blob/ba745b157a7ad09b7370318bfb52557edb76c64b/.github/workflows/add-check-approval.yaml#L13

https://github.com/szksh-lab/validate-pr-review-action/blob/ba745b157a7ad09b7370318bfb52557edb76c64b/add-check-approval/workflow.yaml#L18

Copy add-checksum-approval/workflow.yaml to .github/workflows/check-approval.yaml

Fix the variable name and secret name of Securefix Action:

https://github.com/szksh-lab/validate-pr-review-action/blob/1aaefbf3e55b0a589a26fd54e9d966b6055c8253/.github/workflows/add-check-approval.yaml#L16-L17

Fix the Securefix Action Server repository:

https://github.com/szksh-lab/validate-pr-review-action/blob/1aaefbf3e55b0a589a26fd54e9d966b6055c8253/.github/workflows/add-check-approval.yaml#L18

JavaScript to configure validate-pr-review-action:

https://github.com/szksh-lab/validate-pr-review-action/blob/1aaefbf3e55b0a589a26fd54e9d966b6055c8253/.github/workflows/workflow_call_check-approval.yaml#L12-L67

:bulb: The maintainability of this JavaScript is not so good, so it's good to build JavaScript Action using TypeScript.

(Optional) GitHub Actions Runner:

If you want to use Self-hosted Runner, please fix `runs-on`.

https://github.com/szksh-lab/validate-pr-review-action/blob/1aaefbf3e55b0a589a26fd54e9d966b6055c8253/.github/workflows/workflow_call_check-approval.yaml#L6
