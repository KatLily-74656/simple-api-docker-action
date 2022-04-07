# simple-api-docker-action

Try to create an api action from a Dockerfile, where the input of the user is sent to the API-Docker-Container and output is returned after.

## Inputs

## `post-body`

**Required** Escaped JSON to send to the api. Default `'{\"name\":\"test\"}'`.

## Outputs

## `post-result`

The result of the post-request to the API-Container.

## Example usage

jobs:
  api_request_job:
    runs-on: ubuntu-latest
    name: A job to make a post request to a simple api
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: actions/checkout@v3
      - name: Simple API Action Step
        uses: ./ # Uses an action in the root directory
        id: api
        with:
          post-body: '{\"name\":\"Anthony\"}'
      # Use the output from the `hello` step
      - name: Get the output
        run: echo "The result is ${{ steps.api.outputs.post-result }}"
