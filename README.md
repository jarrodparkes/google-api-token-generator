# Google API Token Generator

## Setup

```bash
cp settings.example.json settings.json
```

1. ^ Create `settings.json` and then edit the file to include the scopes you need.
2. Include your own `service-account.json` file which you should be able to download when you create a key for a Google Service Account.
3. Run `index.js` to print out an access token.

```bash
node index.js .
ya29.c.Kp0B8gcdPDc72ThzeW_c37giD2nT3Cc5k6ZsauYyaT9s8Rn8POO6T_vhbuNgSpR3xWcuj1sRisZ-RGeqqX7XTIV3FMnAg-luMaWrDFjasIG5_CJatVWjWLtsPMuUFX2rDJRk65rFEXnLeVdKRXV07OuMruPTVbD1YTrYIF9REAdp0ecIVyqEmb_PVr0QFlzj_jfqM-62LkV5HfHUwg9LTg...........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

# just copy the part of the token before the dots....
```

## Use Token

Now you can use the token with Google API's. For example,

```
POST https://firebase.googleapis.com/v1beta1/availableProjects
Authorization: Bearer [token]
```