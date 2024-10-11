declare global {
  module NodeJS {
    interface ProcessEnv {
      DATABASE_URL?: string;
    }
  }
}

export {};
