const LOCATORS = {
  EXAMPLE_PAGE: {
    EXAMPLE: ".example",
  },

  TestCase_PAGE: {
    TestCase: '.nav > li > a[href="/test_cases"]',

 TestCases_PAGE: {
   TestCases:'.nav > li > a[href="/test_cases"]',
  },
  TestCases_Text: {
    TextTitle: ".text-center>b"
  },
  HOME_PAGE: {
    LOGIN_BTN: 'a[href="/login"]',
    HEADER: "#header",
    PRODUCTS_BTN: '[href="/products"]',
  },
  LOGIN_PAGE: {
    SIGNUP_NAME: "signup-name",
    SIGNUP_EMAIL: "signup-email",
    SIGNUP_BTN: "signup-button",
    LOGIN_EMAIL: "login-email",
    LOGIN_PASSWORD: "login-password",
    LOGIN_BTN: "login-button",
    LOGIN_ERROR_MESSAGE: '[style="color: red;"]',
    LOGIN_ACCOUNT_TEXT: ".login-form > h2",
    NEW_USER_TEXT: ".signup-form > h2",
    LOGGED_AS_TEXT: "li:nth-child(10) > a",
  },
  SIGNUP_PAGE: {
    TITLE: "title",
    GENDER_MR: "#id_gender1",
    GENDER_MRS: "#id_gender2",
    NAME: "name",
    PASSWORD: "password",
    DAYS: "days",
    MONTHS: "months",
    YEARS: "years",
    NEWSLETTER: "#newsletter",
    PARTNERS: "#optin",
    FIRST_NAME: "first_name",
    LAST_NAME: "last_name",
    COMPANY: "company",
    ADDRESS1: "address",
    ADDRESS2: "address2",
    COUNTRY: "country",
    STATE: "state",
    CITY: "city",
    ZIPCODE: "zipcode",
    MOBILE_NUMBER: "mobile_number",
    CREATE_ACCOUNT_BTN: "create-account",
    ENTER_ACCOUNT_TEXT: ".login-form > h2  b",
    ACCOUNT_CREATED: "account-created",
    CONTINUE_BTN: "continue-button",
    LOGGED_AS_TEXT: "li:nth-child(10) > a",
  },
  DELETE_PAGE: {
    DELETE_ACCOUNT_BTN: "li:nth-child(5) > a",
    ACCOUNT_DELETED_TEXT: "account-deleted",
    CONTINUE_BTN: "continue-button",
  },
 
  PRODUCT_PAGE: {
    PRODUCT_BTN: "header#header li:nth-child(2) > a",
    ALL_PRODUCT: ".title.text-center",
    VIEW_PRODUCT_BTN: "a[href='/product_details/1']",
    REVIEW_TEXT: "div.col-sm-12 > ul > li > a",
    NAME_BOX: "#name",
    EMAIL_BOX: "#email",
    TEXT_AREA: "textarea#review",
    SUBMIT_BTN: "#button-review",
    VERIFYING: "div#review-section div > div",
    SEARCH_BOX: "#search_product",
    ALL_PRODUCTS_TEXT: "h2.title",
    SEARCH_ITEM: "#submit_search",
    SEARCHED_PRODUCTS_TEXT: "h2.title.text-center",
  },
  
  CART_PAGE: {
    CART_BTN: "header#header li:nth-child(3) > a",
    SUBSCRITION_TEXT: "footer#footer h2",
    EMAIL_BOX: "#susbscribe_email",
    SUBSCRITION_BTN: "#subscribe",
    VERIFY_TEXT: "#success-subscribe",
  },
  REMOVE_PRODUCT_PAGE: {
    ADD_TO_CART_BTN: "div:nth-child(11) > div > div.single-products > div.product-overlay > div > a",
    CONTINUE_SHOPPING: ".modal-footer",
    CART_BTN: "header#header li:nth-child(3) > a",
    X_BUTTON: ".cart_quantity_delete",
    },

  PAYMENT_PAGE: {
    ADD_TO_CART_BTN: "div:nth-child(11) > div > div.single-products > div.product-overlay > div > a",
    CONTINUE_SHOPPING: ".modal-footer",
    CART_BTN: "header#header li:nth-child(3) > a",
    PROCEED_TO_CHECKOUT_BTN: "section#do_action div > a",
    DESCRIPTION_FORM: ".form-control",
    PLACE_ORDER_BTN: "section#cart_items div:nth-child(7) > a",
    NAME_ON_CARD: "name-on-card",
    CARD_NUMBER: "card-number",
    CVC_NUMBER: "cvc",
    EXPIRATION_MONTH: "expiry-month",
    EXPIRATION_YEAR: "expiry-year",
    PAY_AND_CONFIRM_ORDER_BTN: "pay-button",
  },
  ADD_TO_CART: {
    PRODUCTS: '[href="/products"]',
    PRODUCT_1: '[data-product-id="1"]',
    PRODUCT_2: '[data-product-id="2"]',
    COUNTINUE_SHOPPING: '.btn.btn-success.close-modal.btn-block',
    WIEW_CART: '[class="text-center"] a',
    PRODUCT_1_PRICE: '#product-1 .cart_price',
    PRODUCT_2_PRICE: '#product-2 .cart_price',
    PRODUCT_1_QUANTITY: '#product-1 .disabled',
    PRODUCT_2_QUANTITY: '#product-2 .disabled',
    PRODUCT_1_TOTAL: '#product-1 .cart_total_price',
    PRODUCT_2_TOTAL: '#product-2 .cart_total_price',
    RECOMENDED_ITEMS: '.recommended_items',
    ADD_RECOMENDED: '.recommended_items .item.active .add-to-cart',
    WIEW_RECOMMENDCART: '#cartModal u',
    CART_PRODUCT: '#product-4 h4 > a',
  },
  Brands: {
    productsButton: '[href="/products"]',
    brandsSidebar: '.brands_products',
    brandPoloLink: '[href="/brand_products/Polo"]',
    brandProducts: '.brand-products',
    VerifyBrandPolo: '[href="/product_details/1"]',
    brandHMLink: '[href="/brand_products/H&M"]',
    VerifyBrandHM: '[href="/product_details/6"]',
  },
    
  PRODUCT_QUANTITY: {
    VIEW_PRODUCT: '[href="/product_details/1"]',
    ADD_TO_CART_BUTTON: '[type=button]',
    VIEW_CART_BUTTON: '[href="/view_cart"]>u',
    QUANTITY_DETAIL: '#product-1 button'
  }
};

export default LOCATORS;
