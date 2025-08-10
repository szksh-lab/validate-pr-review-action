# validate-pr-review-action

[MIT LICENSE](LICENSE)

This is a PoC to apply [validate-pr-review-action](https://github.com/suzuki-shunsuke/validate-pr-review-action) to GitHub Organization's entire repositories by Required Workflows.

## Set up

1. [Create a repository to manage GitHub Action and reusable workflows in your GitHub Organization](https://github.com/new?template_name=validate-pr-review-action&template_owner=szksh-lab)
1. [Set up Securefix Action](https://github.com/csm-actions/securefix-action)
1. Fix workflows and actions

https://github.com/szksh-lab/validate-pr-review-action/blob/1aaefbf3e55b0a589a26fd54e9d966b6055c8253/.github/workflows/add-check-approval.yaml#L13

https://github.com/szksh-lab/validate-pr-review-action/blob/1aaefbf3e55b0a589a26fd54e9d966b6055c8253/.github/workflows/add-check-approval.yaml#L16-L17

https://github.com/szksh-lab/validate-pr-review-action/blob/1aaefbf3e55b0a589a26fd54e9d966b6055c8253/.github/workflows/add-check-approval.yaml#L18

JavaScipt to configure validate-pr-review-action:

https://github.com/szksh-lab/validate-pr-review-action/blob/1aaefbf3e55b0a589a26fd54e9d966b6055c8253/.github/workflows/workflow_call_check-approval.yaml#L12-L67

(Optional) GitHub Actions Runner:

If you want to use Self-hosted Runner, please fix `runs-on`.

https://github.com/szksh-lab/validate-pr-review-action/blob/1aaefbf3e55b0a589a26fd54e9d966b6055c8253/.github/workflows/workflow_call_check-approval.yaml#L6
