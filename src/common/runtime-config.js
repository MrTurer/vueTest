// Для возможности конфигурации без пересборки проекта в index.html подключен скрипт /js/runtime-config.js,
// который выполняется перед скриптом приложения, и в котором можно определить объект window.runtimeConfig.

const configOverrides = window.runtimeConfig || {};

const config = {
  apiBaseUrl: process.env.VUE_APP_API_BASE_URL,
  apiAuthUrl: process.env.VUE_APP_OIDC_AUTHORITY,
  oidc: {
    authority: process.env.VUE_APP_OIDC_AUTHORITY,
    client_id: "ved-public",
    redirect_uri: process.env.VUE_APP_OIDC_REDIRECT_URI,
    response_type: "code",
    scope: "openid profile offline_access test api",
    post_logout_redirect_uri: process.env.VUE_APP_OIDC_POST_LOGOUT_REDIRECT_URI,
    // clockSkew: 0,
    // accessTokenExpiringNotificationTime: 30,
    automaticSilentRenew: true
  }
};

export default Object.assign(config, configOverrides)