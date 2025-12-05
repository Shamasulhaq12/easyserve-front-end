(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/slices/authSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-param-reassign */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "onAuthorized",
    ()=>onAuthorized,
    "onLoggedIn",
    ()=>onLoggedIn,
    "onLoggedOut",
    ()=>onLoggedOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = ()=>({
        isAuthenticated: false,
        user: null,
        token: "object" !== 'undefined' && localStorage.getItem('token')
    });
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'auth',
    initialState: initialState(),
    reducers: {
        onAuthorized: (state, param)=>{
            let { payload } = param;
            state.isAuthenticated = true;
            state.user = payload;
        },
        onLoggedIn: (state, param)=>{
            let { payload } = param;
            state.token = payload.access;
            state.isAuthenticated = true;
            state.user = {
                user_type: payload.user_type
            };
            if (payload.access) {
                localStorage.setItem('token', payload.access);
            }
        },
        onLoggedOut: (state)=>{
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        }
    }
});
const __TURBOPACK__default__export__ = authSlice.reducer;
const { onAuthorized, onLoggedIn, onLoggedOut } = authSlice.actions;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/slices/cartSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addItem",
    ()=>addItem,
    "clearCart",
    ()=>clearCart,
    "decreaseQty",
    ()=>decreaseQty,
    "default",
    ()=>__TURBOPACK__default__export__,
    "increaseQty",
    ()=>increaseQty,
    "removeItem",
    ()=>removeItem,
    "toggleCart",
    ()=>toggleCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    isOpen: false,
    items: []
};
const cartSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "cart",
    initialState,
    reducers: {
        toggleCart: (state)=>{
            state.isOpen = !state.isOpen;
        },
        addItem: (state, action)=>{
            const existing = state.items.find((i)=>i.id === action.payload.id);
            if (existing) {
                existing.qty += action.payload.qty;
            } else {
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action)=>{
            state.items = state.items.filter((i)=>i.id !== action.payload);
        },
        increaseQty: (state, action)=>{
            const item = state.items.find((i)=>i.id === action.payload);
            if (item) item.qty += 1;
        },
        decreaseQty: (state, action)=>{
            const item = state.items.find((i)=>i.id === action.payload);
            if (item) {
                if (item.qty > 1) {
                    item.qty -= 1;
                } else {
                    // auto-remove if qty becomes 0
                    state.items = state.items.filter((i)=>i.id !== action.payload);
                }
            }
        },
        clearCart: (state)=>{
            state.items = [];
        }
    }
});
const { toggleCart, addItem, removeItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
const __TURBOPACK__default__export__ = cartSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utilities/apiConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Use this format instead - without any special characters
// const API_URL = 'https://server-test.booklyz.com/api';
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const API_URL = 'http://127.0.0.1:8000/api';
const __TURBOPACK__default__export__ = API_URL;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/private/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "privateAPi",
    ()=>privateAPi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utilities/apiConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
;
const privateAPi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'privateAPi',
    tagTypes: [
        'GetAuthorizedUser'
    ],
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        prepareHeaders: (headers)=>{
            const token = localStorage.getItem('token');
            if (token) headers.set('Authorization', "Bearer ".concat(token));
            return headers;
        }
    }),
    endpoints: ()=>({})
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/public/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "publicApi",
    ()=>publicApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utilities/apiConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
;
const publicApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'publicApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }),
    tagTypes: [
        "Restaurant",
        "getOrders",
        "Menu"
    ],
    endpoints: ()=>({})
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serviceMiddlewares",
    ()=>serviceMiddlewares,
    "serviceReducers",
    ()=>serviceReducers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$private$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/private/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$public$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/public/index.js [app-client] (ecmascript)");
;
;
const serviceReducers = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$public$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$public$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicApi"].reducer,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$private$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateAPi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$private$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateAPi"].reducer
};
const serviceMiddlewares = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$public$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicApi"].middleware,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$private$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateAPi"].middleware
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/authSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/cartSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/index.js [app-client] (ecmascript)");
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        cart: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$cartSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceReducers"]
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceMiddlewares"])
});
const __TURBOPACK__default__export__ = store;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/StateProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
function StateProvider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/StateProvider.jsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = StateProvider;
const __TURBOPACK__default__export__ = StateProvider;
var _c;
__turbopack_context__.k.register(_c, "StateProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c3dab26a._.js.map