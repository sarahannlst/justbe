## Backend
**Supabase**
* Serves as the backend database and authentication provider.
* Provides real-time data synchronization and secure access management.

**Together AI API**
* Used for extracting user single-log and summarizing journal entries.
* Processes natural language input without external assumptions or diagnoses.

## Frontend
**React Native with Expo**
* Enables cross-platform development for iOS and Android.
* Provides a fast refresh environment for streamlined development.

## Infrastructure Visualization
```
                 ┌───────────────────────────────────────────┐
                 │       JustBe Mobile App (Expo)           │
                 │                                          │
                 │            Available on iOS & Android    │
                 │                                          │
                 └───────────────┬──────────────────────────┘
                                 │
                                 │ User authentication & data retrieval
                                 ▼
                 ┌───────────────────────────────────────────┐
                 │                Supabase                   │
                 │ Handles auth, real-time syncing, and DB   │
                 └───────────────────────────────────────────┘
                                 │
                                 │ API requests
                                 ▼
                 ┌───────────────────────────────────────────┐
                 │       Together AI API                     │
                 │ Summarizes user input for insights        │
                 └──────────────────────────────────────────┘
```
## Supabase Table Schema
The detailed entries table saves every entry made. The entry_text field contains the original entry, while the other fields are populated by LLM extracted data. 

![image](https://github.com/user-attachments/assets/7210ed67-d409-4c2f-a658-5dbdacdf75a6)

The Count Data table had one row for each user and tracks how many times different conditions were seen for health plot visualizations. 

![image](https://github.com/user-attachments/assets/42abc8a8-061e-4aef-9908-ccb32ef3a93d)

For example, the data saved in "symptoms" might look like:
{
  "nausea": 2,
  "fatigue": 16,
  "eye pain": 4,
  "headache": 1,
  "migraine": 12,
  "brain fog": 8,
  "nosebleed": 1,
  "sore throat": 3,
  "sinus pressure": 11,
  "nasal stuffiness": 15
}

Both tables use the following auth policies:

![image](https://github.com/user-attachments/assets/2963221d-007f-44c1-b6f3-491b90499136)

## LLM Prompt Engineering
We use the following prompt for extraction of key health details from user entries.
```
model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [
          {
            role: "system",
            content: `You are a medical symptom extraction assistant. 
              
              Your task is to extract structured medical information from a user-provided journal entry and return it **strictly as a JSON object** with the following fields:

              {
                "symptoms": string, // Comma-separated list of symptoms (e.g., "headache, nausea"). Set to null if no symptoms found.
                "duration": string, // One of: "<1min", "few minutes", "<30 minutes", "1 hour", "few hours", "a day", "few days", "a week", ">a week", or null if not mentioned.
                "sensation": string, // Comma-separated list describing the sensations (e.g., "sharp, throbbing"). Set to null if not specified.
                "causes": string, // Short description of suspected causes if mentioned, otherwise null.
                "what-happened": string, // Brief summary of the situation leading to symptoms if available, otherwise null.
                "concerns": string, // User's explicit concerns (e.g., "I'm worried it's my heart") if mentioned, otherwise null.
                "when-does-it-hurt": string // One of: "constant", "occasional", "once", "movement", "other triggers", or null if not mentioned.
              }

              ### Rules
              - Fill every field based only on the journal entry.
              - If the journal entry does not mention a field, set it to null.
              - Return **only the JSON object**, with no commentary, explanations, disclaimers, or formatting.

              ### Example Journal Entry
              "My right knee hurts whenever I climb stairs."

              ### Example JSON Output
              {
                  "symptoms": "knee pain",
                  "duration": null,
                  "sensation": null,
                  "causes": null,
                  "what-happened": "right knee pain when climbing stairs",
                  "concerns": null,
                  "when-does-it-hurt": "movement"
              }

              Remember: Output only valid JSON, no extra text.`,
          },
          {
            role: "user",
            content: `Journal Entry: ${journalText}`,
          },
        ],
        temperature: 0,        
      });
```
