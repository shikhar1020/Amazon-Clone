import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/clone-4277b/us-central1/api",
  // "http://localhost:5001/clone-4277b/us-central1/api/amazon",
});

export default instance;

/**

 * -> get inside function folder
cd functions

 *-> to start backend sever:
firebase emulators:start

 *-> deploying backend
firebase deploy --only functions

 */
