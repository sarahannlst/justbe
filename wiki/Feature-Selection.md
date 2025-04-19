## Some discussions we had:

### For backend:
* What type of database do we want to use?
* What will it be used for?
  * We plan on using Supabase to support user creation and handle saving the logged journal entries for user—we will modify the way we save the entries as we go.

### For AI/LLM:
* What type of API do we want to use? [Consider token cost/request time]
* What will it be used for?
  * We plan on using Together AI [Mistral](https://www.together.ai/models/mistral-7b-instruct-v0-3), as it supports the infrastructure to make simple requests to extract data/text. We plan to use it to generate the entries summary and extract information about a user's logged symptoms.

### For frontend:
* Do we want to use React Native or Swift?
* What pages will we add/the flow of the app?
  * We prototyped a flow on [Figma](https://www.figma.com/design/z90RPBSSnqRvOK7aeHSVGz/cs194w-prototype?node-id=0-1&t=GJtb5VpZLJlGSSB1-1). We decided to use React Native as the group members already had experience with it and some members did not have a Mac to work on XCode for Swift.