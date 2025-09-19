
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export const USER_ROLES = {
  STUDENT: "student",
  LECTURER: "lecturer",
  PRL: "prl",
  PL: "pl",
};

export const MESSAGES = {
  LOGIN_SUCCESS: "Login successful.",
  LOGIN_FAILED: "Invalid credentials, please try again.",
  LOGOUT_SUCCESS: "You have been logged out.",
  REPORT_SUBMIT_SUCCESS: "Report submitted successfully.",
  REPORT_SUBMIT_ERROR: "Failed to submit report. Try again.",
};

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
};
