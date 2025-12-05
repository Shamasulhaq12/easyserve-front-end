import { privateAPi } from ".";


export const orderApi = privateAPi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query({
      query: (params) => ({
        url: "/restaurants/orders/",
        method: "GET",
        params,
      }),
      providesTags: ["getOrders"],
    }),


    getOrder: build.query({
      query: (id) => ({
        url: "/restaurants/orders/",
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "getOrder", id }],
    }),


    addOrder: build.mutation({
      query: (body) => ({
        url: "/restaurants/orders/checkout-order/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["getOrders"],
    }),


    updateOrder: build.mutation({
      query: body => ({
        url: `/dashboard/orders/${body?.orderNumber}/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['GetOrders', 'getOrder'],
    }),


    // NEW API — Load order status page
    getOrderStatus: build.query({
      query: () => ({
        url: "/dashboard/orders/status/",
        method: "GET",
      }),
      providesTags: ["OrderStatus"],
    }),

    // NEW ✔ Patch status
    patchOrderStatus: build.mutation({
      query: ({ orderId, status }) => ({
        url: `/dashboard/orders/${orderId}/status/`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["OrderStatus"],
    }),


  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
  useAddOrderMutation,
  useUpdateOrderMutation,
  useGetOrderStatusQuery,
  usePatchOrderStatusMutation,
} = orderApi;
