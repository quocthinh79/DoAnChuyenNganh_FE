export const messError = (error: any) =>
  error?.["response"]?.["data"]?.["mess"];
