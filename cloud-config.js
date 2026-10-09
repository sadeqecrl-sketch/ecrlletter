/* Optional cloud sync settings (edit, then redeploy). Leave provider "" for browser-only storage.
   Client IDs are public identifiers, not secrets. NEVER put passwords or client secrets here.
   Users can also set these in Settings > Cloud & data (saved per browser). */
window.LD_CLOUD = {
  provider: "",            // "" | "gdrive" | "onedrive" | "dropbox" | "appwrite"
  workspace: "",           // optional shared workspace name (a-z 0-9 _ -)
  poll: "30",              // seconds between sync checks: "0" (off) | "10" | "30" | "60"
  gdrive:   { clientId: "" },   // Google OAuth Web client ID
  onedrive: { clientId: "" },   // Microsoft Entra app (client) ID
  dropbox:  { clientId: "" },   // Dropbox app key
  appwrite: { endpoint: "https://cloud.appwrite.io/v1", project: "", db: "", col: "" }
};
