export {}

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initDataUnsafe: {
          user?: {
            id: number
            first_name?: string
            last_name?: string
            username?: string
            language_code?: string
          }
        }
        themeParams: {
          bg_color?: string
        }
        ready: () => void
        expand: () => void
        showPopup: (params: any) => void
      }
    }
  }
}
