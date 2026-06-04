declare module "@supabase/supabase-js" {
  export function createClient(url: string, key: string): any
}

declare module "@vercel/kv" {
  export const kv: {
    set(key: string, value: any): Promise<void>
    sadd(key: string, value: string): Promise<void>
  }
}

declare module "resend" {
  export class Resend {
    constructor(apiKey: string)
    contacts: {
      create(data: { email: string; firstName: string; audienceId: string }): Promise<any>
    }
  }
}
