<template>
  <div>
    <modal v-if="modalIsVisible" @close="closeModal">
      <div slot="body">
        <div id="collection-component-c870a54ecce"></div>
        <LoadingSpinner v-if="!shopifyReady" />
      </div>
    </modal>
    <div class="columns is-centered">
      <div class="column">
        <button @click.prevent="showModal" class="button is-large">Buy our wines</button>
      </div>
    </div>
  </div>
</template>

<script>
  import LoadingSpinner from '@/components/LoadingSpinner';
  import Modal from '@/components/Modal';

  export default {
    name: 'BuyButton',

    components: { LoadingSpinner, Modal },

    data() {
      return {
        modalIsVisible: false,
        shopifyReady: false,
      }
    },

    methods: {
      closeModal() {
        this.modalIsVisible = false;
      },

      showModal() {
        this.shopifyReady = false;
        this.modalIsVisible = true;
        const that = this;

        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }

        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }

        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'tewinery.myshopify.com',
            apiKey: 'd1890071c45d1f337d391850a5eb5685',
            appId: '6',
          });

          ShopifyBuy.UI.onReady(client).then((ui) => {
            that.shopifyReady = true;

            ui.createComponent('collection', {
              id: 69009801334,
              node: document.getElementById('collection-component-c870a54ecce'),
              moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
              options: {
                "product": {
                  "variantId": "all",
                  "contents": {
                    "imgWithCarousel": false,
                    "variantTitle": false,
                    "description": false,
                    "buttonWithQuantity": false,
                    "quantity": false
                  },
                  "styles": {
                    "button": {
                      "font-size": "12px",
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "padding-top": "15px",
                      "padding-bottom": "15px",
                      "padding-left": "30px",
                      "padding-right": "30px",
                      "letter-spacing": "0.2em",
                      "text-transform": "uppercase",
                      "background-color": "#51545D",
                      "color": "#ffffff",
                      ":hover": {
                        "background-color": "#4b4e56",
                        "color": "#fff",
                      },
                      "border-radius": "4px",
                      ":focus": {
                        "background-color": "#4b4e56"
                      },
                      "font-weight": "normal"
                    },
                    "variantTitle": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "font-weight": "normal"
                    },
                    "title": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "font-weight": "normal"
                    },
                    "description": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "font-weight": "normal"
                    },
                    "price": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "font-weight": "normal"
                    },
                    "compareAt": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "font-weight": "normal"
                    },

                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "calc(33.33333% - 30px)",
                        "margin-left": "30px",
                        "margin-bottom": "50px"
                      }
                    },
                    "variantTitle": {
                      "font-weight": "bold"
                    },
                    "title": {
                      "font-family": "PT Serif, serif",
                      "font-weight": "normal",
                      "font-size": "20px"
                    },
                    "description": {
                      "font-weight": "bold"
                    },
                    "price": {
                      "font-size": "20px",
                      "font-weight": "bold"
                    },
                    "compareAt": {
                      "font-size": "17px",
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "bold"
                    }
                  },
                  "googleFonts": [
                    "PT Serif"
                  ]
                },
                "cart": {
                  "contents": {
                    "button": true
                  },
                  "styles": {

                    "button": {
                      "font-size": "12px",
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "padding-top": "15px",
                      "padding-bottom": "15px",
                      "padding-left": "30px",
                      "padding-right": "30px",
                      "letter-spacing": "0.2em",
                      "text-transform": "uppercase",
                      "background-color": "#51545D",
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      ":hover": {
                        "background-color": "#4b4e56"
                      },
                      "border-radius": "4px",
                      ":focus": {
                        "background-color": "#4b4e56"
                      },
                      "font-weight": "normal"
                    },
                    "footer": {
                      "background-color": "#ffffff"
                    }
                  }
                },
                "modalProduct": {
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "variantTitle": false,
                    "buttonWithQuantity": true,
                    "button": false,
                    "quantity": false
                  },
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                      }
                    },
                    "button": {
                      "background-color": "#51545D",
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "padding-left": "20px",
                      "padding-right": "20px",
                      ":hover": {
                        "background-color": "#4b4e56"
                      },
                      "border-radius": "4px",
                      ":focus": {
                        "background-color": "#4b4e56"
                      },
                      "font-weight": "normal"
                    },
                    "variantTitle": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "font-weight": "normal"
                    },
                    "title": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "font-weight": "normal"
                    },
                    "description": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "font-weight": "normal"
                    },
                    "price": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "font-weight": "normal"
                    },
                    "compareAt": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "font-weight": "normal"
                    }
                  }
                },
                "toggle": {
                  "styles": {
                    "toggle": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                      "background-color": "#51545D",
                      ":hover": {
                        "background-color": "#4b4e56"
                      },
                      ":focus": {
                        "background-color": "#4b4e56"
                      },
                      "font-weight": "normal"
                    },
                    "count": {
                      "color": "#ffffff",
                      ":hover": {
                        "color": "#ffffff"
                      }
                    },
                    "iconPath": {
                      "fill": "#ffffff"
                    }
                  }
                },
                "option": {
                  "styles": {
                    "label": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                    },
                    "select": {
                      "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
                    }
                  }
                },
                "productSet": {
                  "styles": {
                    "products": {
                      "@media (min-width: 601px)": {
                        "margin-left": "-30px"
                      }
                    }
                  }
                },
              }
            })
          })
        }
      },
    },
  }
</script>
