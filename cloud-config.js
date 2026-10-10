/* Letter Desk - auto-connect config.
   Put this file in the SAME folder as index.html (it is already loaded by
   <script src="cloud-config.js"> at the top of index.html).

   On any new device/browser, opening the site URL will:
     1. read this file,
     2. connect to Appwrite with the workspace password below,
     3. download + decrypt the team's users,
     4. show the normal Email + Password sign-in screen
   (no workspace password prompt, no device link).

   Fill in the 4 Appwrite values + key. Copy them from the browser that is
   already connected:  Settings > Cloud storage > Configure.
*/
window.LD_CLOUD = {
  provider: "appwrite",
  workspace: "",          // same "Workspace username" as the connected browser (leave "" if none)
  poll: "30",             // auto-refresh seconds
  key: "PUT-WORKSPACE-PASSWORD-HERE",   // the cloud "Workspace password"
  appwrite: {
    endpoint: "https://cloud.appwrite.io/v1",
    project: "PUT-PROJECT-ID",
    db: "PUT-DATABASE-ID",
    col: "PUT-COLLECTION-ID"
  }
};
