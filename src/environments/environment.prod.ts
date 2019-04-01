export const environment = {
  production: true,
  URLCatalog: "http://ab13b1006538611e9ba830a1db711ca4-631194424.us-east-2.elb.amazonaws.com:3010",
  URLLogin: "http://a509c9b1d537311e9a81b0666116d3a5-342058073.us-east-2.elb.amazonaws.com:18080",
  URLSecurity: "http://aaa01c7ec542511e9a81b0666116d3a5-63920683.us-east-2.elb.amazonaws.com:3000",
  URLCard: "http://a4997aa3e537811e9a81b0666116d3a5-931031808.us-east-2.elb.amazonaws.com:18080",
  URLOrder: "http://acabea643537511e9a81b0666116d3a5-432135908.us-east-2.elb.amazonaws.com:18080",
  URLPayment: "http://adb958412537911e9ba830a1db711ca4-1645037395.us-east-2.elb.amazonaws.com:18080",
  endPointLogin: "/api/users/login/",
  endPointCatalog: "/api/products/catalog/",
  endPointDetailProduc: "/api/products/product/",
  endPointReserveProduct: "/api/products/catalog/",
  endPointGenerateToken: "/services/security/getJwtToken/",
  endPointVerifyToken: "/services/security/verifyJwtToken/",
  endPointUpdateCart: "/gestioncarrito/updatecart/",
  endPointGetCart: "/gestioncarrito/getcart/",
  endPointGetPayment: "/api/payment/add",
  endPointGetOrder: "/api/orden/add"
};
