# Just Be Development Guide  

## API Specifications

In order to connect to both Backend and AI API, you will need the API keys necessary for development.

The repository has an existing `.env.example` which represents the structure necessary for the dotenv file.

1. You should copy the existing `.env.example` and rename it to `.env`
2. Add the API Keys - we do not want to publish these keys so please contact Andrea (andreahu@stanford.edu) for the necessary keys.



## Creating a Pull Request (PR)  

1. Navigate to the **Just Be** repository and make sure your `main` branch is up-to-date.

```sh
$ cd path/to/just-be
$ git checkout main
$ git pull origin main
```

2. Create a new branch off of `main` for your feature.
```sh 
$ git checkout -b feat/[name-of-your-feature]
```

3. Make your changes and test them locally (see [Environment setup](https://github.com/StanfordCS194/win25-Team13/wiki/Environment-Setup) for instructions)

4. Push your changes to the remote repository.

5. Open a pull request! When you navigate to the `win25-Team13` repository, you should see a notification highlighting your recent pushes with a button to create a new PR. 

6. Provide a descriptive title and summary of changes. Include screenshots or a short demo video if applicable. Link the related issue (if any). Label your PR appropriately and request reviews (at least from 1 developer for small changes; at least 2 developers for a new feature).

7. Wait for your PR to be reviewed! If your reviewer requests changes, address their comments by following steps 3 and 4 above. Make sure to reply to and/or resolve each of the reviewer's comments.

8. Once your PR is approved, click the green arrow on the "Merge pull request" button. Make sure you have received the necessary approvals and resolved any merge conflicts ahead of time.

9. Congrats 🎉 You just merged a PR into **Just Be**!