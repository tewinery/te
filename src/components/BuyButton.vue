<template>
  <div class="columns is-centered">
    <div class="column">
      <div id='product-component-f227cf53a44' style="display: inline-block; margin-top: -20px;"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BuyButton',

    mounted() {
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

          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: [1605335515254],
              node: document.getElementById('product-component-f227cf53a44'),
              moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
              options: {
                "product": {
                  "buttonDestination": "checkout",
          "variantId": "all",
          "width": "240px",
          "contents": {
            "img": false,
            "imgWithCarousel": false,
            "title": false,
            "variantTitle": false,
            "price": false,
            "description": false,
            "buttonWithQuantity": false,
            "quantity": false
          },
          "text": {
            "button": "Buy our wines"
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px"
              }
            },
            "button": {
              "border": "1px solid #51545D",
              "font-size": "12px",
              "background-color": "transparent",
              "color": "#51545D",
              "font-family": "Lato, Brown, Helvetica Neue, Helvetica, Arial, sans-serif",
              "padding-top": "26px",
              "padding-bottom": "26px",
              "padding-left": "36px",
              "padding-right": "36px",
              "letter-spacing": "0.2em",
              "text-transform": "uppercase",
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
            }
          }
        },
        "cart": {
          "contents": {
            "button": true
          },
          "styles": {
            "button": {
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
                "margin-left": "-20px"
              }
            }
          }
        }
      }
            });
          });
        }
    },
  }
</script>
