var LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

// obtain cookieconsent plugin
var cc = initCookieConsent();

// run plugin with config object
cc.run({
  current_lang: "pt",
  autoclear_cookies: true, // default: false
  cookie_name: "cc_cookie_demo2", // default: 'cc_cookie'
  cookie_expiration: 365, // default: 182
  page_scripts: true, // default: false
  force_consent: true, // default: false

  // auto_language: null,                     // default: null; could also be 'browser' or 'document'
  // autorun: true,                           // default: true
  // delay: 0,                                // default: 0
  // hide_from_bots: false,                   // default: false
  // remove_cookie_tables: false              // default: false
  // cookie_domain: location.hostname,        // default: current domain
  // cookie_path: '/',                        // default: root
  // cookie_same_site: 'Lax',
  // use_rfc_cookie: false,                   // default: false
  // revision: 0,                             // default: 0

  gui_options: {
    consent_modal: {
      layout: "cloud", // box,cloud,bar
      position: "bottom center", // bottom,middle,top + left,right,center
      transition: "slide", // zoom,slide
    },
    settings_modal: {
      layout: "bar", // box,bar
      position: "left", // right,left (available only if bar layout selected)
      transition: "slide", // zoom,slide
    },
  },

  onFirstAction: function () {
    console.log("onFirstAction fired");
  },

  onAccept: function (cookie) {
    console.log("onAccept fired!");
  },

  onChange: function (cookie, changed_preferences) {
    console.log("onChange fired!");

    // If analytics category is disabled => disable google analytics
    if (!cc.allowedCategory("analytics")) {
      typeof gtag === "function" &&
        gtag("consent", "update", {
          analytics_storage: "denied",
        });
    }
  },

  languages: {
    en: {
      consent_modal: {
        title: "Hello traveller, it's cookie time!",
        description:
          'Our website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="#privacy-policy" class="cc-link">Privacy policy</a>',
        primary_btn: {
          text: "Accept all",
          role: "accept_all", //'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Preferences",
          role: "settings", //'settings' or 'accept_necessary'
        },
        revision_message:
          "<br><br> Dear user, terms and conditions have changed since the last time you visisted!",
      },
      settings_modal: {
        title: "Cookie settings",
        save_settings_btn: "Save current selection",
        accept_all_btn: "Accept all",
        reject_all_btn: "Reject all",
        close_btn_label: "Close",
        cookie_table_headers: [
          { col1: "Name" },
          { col2: "Domain" },
          { col3: "Expiration" },
        ],
        blocks: [
          {
            title: "Cookie usage",
            description:
              LOREM_IPSUM + ' <a href="#" class="cc-link">Privacy Policy</a>.',
          },
          {
            title: "Strictly necessary cookies",
            description:
              LOREM_IPSUM +
              LOREM_IPSUM +
              "<br><br>" +
              LOREM_IPSUM +
              LOREM_IPSUM,
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true, //cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },
          {
            title: "Analytics & Performance cookies",
            description: LOREM_IPSUM,
            toggle: {
              value: "analytics",
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              {
                col1: "^_ga",
                col2: "yourdomain.com",
                col3: "description ...",
                is_regex: true,
              },
              {
                col1: "_gid",
                col2: "yourdomain.com",
                col3: "description ...",
              },
              {
                col1: "_my_cookie",
                col2: "yourdomain.com",
                col3: "test cookie with custom path ...",
                path: "/demo", // needed for autoclear cookies
              },
            ],
          },
          {
            title: "Targeting & Advertising cookies",
            description:
              "If this category is deselected, <b>the page will reload when preferences are saved</b>... <br><br>(demo example with reload option enabled, for scripts like microsoft clarity which will re-set cookies and send beacons even after the cookies have been cleared by the cookieconsent's autoclear function)",
            toggle: {
              value: "targeting",
              enabled: false,
              readonly: false,
              reload: "on_disable", // New option in v2.4, check readme.md
            },
            cookie_table: [
              {
                col1: "^_cl", // New option in v2.4: regex (microsoft clarity cookies)
                col2: "yourdomain.com",
                col3: "These cookies are set by microsoft clarity",
                // path: '/',               // New option in v2.4
                is_regex: true, // New option in v2.4
              },
            ],
          },
          {
            title: "More information",
            description:
              LOREM_IPSUM +
              ' <a class="cc-link" href="https://orestbida.com/contact/">Contact me</a>.',
          },
        ],
      },
    },

    pt: {
      consent_modal: {
        title: "Nós Utilizamos Cookies!",
        description:
          'Nós e os nossos parceiros utilizamos cookies neste site para melhorar a funcionalidade, personalizar a experiência de navegação, analisar o tráfego e para efeitos de marketing e publicidade personalizada. Consulte a nossa <a href="/privacidade.html">Política de Privacidade</a> para mais informações. ',
        primary_btn: {
          text: "Aceitar Todos",
          role: "accept_all", //'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Preferências",
          role: "settings", //'settings' or 'accept_necessary'
        },
        revision_message:
          "<br><br> Prezado usuário, houve uma mudança dos termos e condições do nosso site desde sua ultima visita",
      },
      settings_modal: {
        title: "Configurações de Cookies",
        save_settings_btn: "Salvar Alterações",
        accept_all_btn: "Aceitar Todos",
        reject_all_btn: "Recusar Todos",
        close_btn_label: "Fechar",
        cookie_table_headers: [
          { col1: "Nome" },
          { col2: "Domínio" },
          { col3: "Expira" },
        ],
        blocks: [
          {
            title: "Uso de Cookies",
            description:
              'Utilizamos cookies para melhorar a sua experiência no website. Alguns cookies são necessários para o funcionamento do site. Outros são opcionais: os cookies de desempenho revelam-nos como usa o nosso site e os seus recursos; os cookies funcionais retêm as suas preferências e os cookies publicitários que nos permitem partilhar conteúdo relevante. <a href="/privacidade.html">Política de Privacidade</a>.',
          },
          {
            title: "Cookies Necessários",
            description:
              "Os cookies necessários são essenciais para o funcionamento do site, sem eles o site não funcionaria corretamente.",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true, //cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },
          {
            title: "Cookies de Análise e Desempenho",
            description:
              "Os cookies de estatísticas, ou análises, traduzem as interações dos visitantes em relatórios detalhados de comportamento, de maneira anônima.",
            toggle: {
              value: "analytics",
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              {
                col1: "cpsession",
                col2: "resendeneiva.com",
                col3: "ao final da sessão atual",
              },
              {
                col1: "cc_cookie_demo2",
                col2: "resendeneiva.com",
                col3: "em 24 horas",
              },
            ],
          },
          {
            title: "Cookies de Segmentação e Publicidade",
            description:
              "Se esta categoria for desmarcada, a página será recarregada quando as preferências forem salvas.",
            toggle: {
              value: "targeting",
              enabled: false,
              readonly: false,
              reload: "on_disable", // New option in v2.4, check readme.md
            },
            cookie_table: [
              {
                col1: "_gcl_au",
                col2: "resendeneiva.com.br",
                col3: "em 60 dias ",
                // path: '/',               // New option in v2.4
                is_regex: true, // New option in v2.4
              },
            ],
          },
          {
            title: "Outra Informações",
            description:
              'Para maiores informações, <a href="/index.html#contato">Entre em contato conosco</a>.',
          },
        ],
      },
    },
  },
});
