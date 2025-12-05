(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/websocket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectOrderSocket",
    ()=>connectOrderSocket
]);
function connectOrderSocket(token, onMessage) {
    const wsProtocol = window.location.protocol === "https:" ? "wss" : "ws";
    const wsUrl = "".concat(wsProtocol, "://").concat(window.location.host, "/ws/orders/?token=").concat(token);
    const socket = new WebSocket(wsUrl);
    socket.onmessage = (event)=>{
        const data = JSON.parse(event.data);
        onMessage(data);
    };
    return socket;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/orders/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrdersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/websocket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$private$2f$orders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/private/orders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-client] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function OrdersPage() {
    _s();
    const { data: initialOrders, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$private$2f$orders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetOrderStatusQuery"])();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrdersPage.useEffect": ()=>{
            if (initialOrders) {
                setOrders(initialOrders.results);
            }
        }
    }["OrdersPage.useEffect"], [
        initialOrders
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrdersPage.useEffect": ()=>{
            const token = localStorage.getItem("token");
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectOrderSocket"])(token, {
                "OrdersPage.useEffect.socket": (payload)=>{
                    if (payload.order) {
                        setOrders({
                            "OrdersPage.useEffect.socket": (prev)=>{
                                const exists = prev.find({
                                    "OrdersPage.useEffect.socket.exists": (x)=>x.id === payload.order.id
                                }["OrdersPage.useEffect.socket.exists"]);
                                return exists ? prev.map({
                                    "OrdersPage.useEffect.socket": (x)=>x.id === payload.order.id ? payload.order : x
                                }["OrdersPage.useEffect.socket"]) : [
                                    payload.order,
                                    ...prev
                                ];
                            }
                        }["OrdersPage.useEffect.socket"]);
                    }
                }
            }["OrdersPage.useEffect.socket"]);
            return ({
                "OrdersPage.useEffect": ()=>socket.close()
            })["OrdersPage.useEffect"];
        }
    }["OrdersPage.useEffect"], []);
    const apiPatchStatus = async (orderId, status, token)=>{
        const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch("/api/dashboard/orders/".concat(orderId, "/status/"), {
            status
        }, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return resp.data;
    };
    // const [orders, setOrders] = useState([
    //   { id: 1, table: 3, customer: "Ali Khan", items: ["Pasta", "Garlic Bread", "1 Pepsi"], status: "To Prepare", time: "10 mins ago" },
    //   { id: 2, table: 1, customer: "Fatima", items: ["Biryani", "2 Lemonades"], status: "Preparing", time: "25 mins ago" },
    //   { id: 3, table: 5, customer: "Hamza", items: ["Zinger Burger", "Fries", "Cola"], status: "Prepared", time: "5 mins ago" },
    //   { id: 4, table: 2, customer: "Zainab", items: ["Pizza", "Garlic Bread"], status: "Served", time: "30 mins ago" },
    // ]);
    const statuses = [
        "To Prepare",
        "Preparing",
        "Prepared",
        "Served"
    ];
    const moveOrder = async (id, direction)=>{
        setOrders((prev)=>prev.map((order)=>{
                if (order.id !== id) return order;
                const idx = statuses.indexOf(order.status);
                const newIndex = direction === "next" ? Math.min(idx + 1, statuses.length - 1) : Math.max(idx - 1, 0);
                return {
                    ...order,
                    status: statuses[newIndex]
                }; // optimistic
            }));
        try {
            const order = orders.find((o)=>o.id === id);
            const currentIndex = statuses.indexOf(order.status);
            const newIndex = direction === "next" ? Math.min(currentIndex + 1, statuses.length - 1) : Math.max(currentIndex - 1, 0);
            const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("token") : "TURBOPACK unreachable";
            await apiPatchStatus(id, statuses[newIndex], token);
        } catch (err) {
            console.error(err);
        }
    };
    const getStatusColor = (status)=>{
        switch(status){
            case "To Prepare":
                return "bg-yellow-50 border-yellow-200";
            case "Preparing":
                return "bg-blue-50 border-blue-200";
            case "Prepared":
                return "bg-green-50 border-green-200";
            case "Served":
                return "bg-gray-50 border-gray-200";
            default:
                return "bg-white border-gray-200";
        }
    };
    const getHeaderColor = (status)=>{
        switch(status){
            case "To Prepare":
                return "bg-yellow-100 text-yellow-800 border-yellow-300";
            case "Preparing":
                return "bg-blue-100 text-blue-800 border-blue-300";
            case "Prepared":
                return "bg-green-100 text-green-800 border-green-300";
            case "Served":
                return "bg-gray-100 text-gray-800 border-gray-300";
            default:
                return "bg-gray-50";
        }
    };
    const getStatusIcon = (status)=>{
        switch(status){
            case "To Prepare":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"], {
                    className: "w-5 h-5 text-yellow-600"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/orders/page.jsx",
                    lineNumber: 127,
                    columnNumber: 16
                }, this);
            case "Preparing":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                    className: "w-5 h-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/orders/page.jsx",
                    lineNumber: 129,
                    columnNumber: 16
                }, this);
            case "Prepared":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "w-5 h-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/orders/page.jsx",
                    lineNumber: 131,
                    columnNumber: 16
                }, this);
            case "Served":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "w-5 h-5 text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/orders/page.jsx",
                    lineNumber: 133,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 p-5 rounded-2xl shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-yellow-800",
                        children: "🍽️ Orders Status"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/orders/page.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500",
                        children: new Date().toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/orders/page.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6",
                children: statuses.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "rounded-2xl shadow-sm border ".concat(getStatusColor(status), " flex flex-col min-h-[500px]"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 flex items-center justify-between rounded-t-2xl border-b font-semibold ".concat(getHeaderColor(status)),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            getStatusIcon(status),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/orders/page.jsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/orders/page.jsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium bg-white px-2 py-1 rounded-md shadow-sm",
                                        children: orders.filter((o)=>o.status === status).length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/orders/page.jsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/orders/page.jsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-3 space-y-4",
                                children: [
                                    orders.filter((o)=>o.status === status).map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            className: "bg-white border border-gray-100 rounded-xl shadow-sm p-4 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-800",
                                                    children: [
                                                        "Table #",
                                                        order.table
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/orders/page.jsx",
                                                    lineNumber: 181,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mt-1 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-4 h-4 mr-1 text-yellow-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/orders/page.jsx",
                                                            lineNumber: 185,
                                                            columnNumber: 23
                                                        }, this),
                                                        order.customer
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/orders/page.jsx",
                                                    lineNumber: 184,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc ml-5 text-gray-600 mt-2 text-sm",
                                                    children: order.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: item
                                                        }, i, false, {
                                                            fileName: "[project]/src/app/admin/orders/page.jsx",
                                                            lineNumber: 191,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/orders/page.jsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mt-4 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center text-gray-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-4 h-4 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/orders/page.jsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 25
                                                                }, this),
                                                                order.time
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/orders/page.jsx",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs px-2 py-1 rounded-md ".concat(order.status === "Served" ? "bg-gray-100 text-gray-600" : "bg-yellow-50 text-yellow-700"),
                                                            children: order.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/orders/page.jsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/orders/page.jsx",
                                                    lineNumber: 195,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end gap-2 mt-3",
                                                    children: [
                                                        order.status !== "To Prepare" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>moveOrder(order.id, "prev"),
                                                            className: "text-xs px-3 py-1 rounded-md border text-gray-600 hover:bg-gray-100 transition",
                                                            children: "⬅ Back"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/orders/page.jsx",
                                                            lineNumber: 214,
                                                            columnNumber: 25
                                                        }, this),
                                                        order.status !== "Served" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>moveOrder(order.id, "next"),
                                                            className: "text-xs px-3 py-1 rounded-md bg-yellow-600 text-white hover:bg-yellow-700 transition",
                                                            children: "Move ➜"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/orders/page.jsx",
                                                            lineNumber: 222,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/orders/page.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, order.id, true, {
                                            fileName: "[project]/src/app/admin/orders/page.jsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this)),
                                    orders.filter((o)=>o.status === status).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-sm text-gray-400 py-10 italic",
                                        children: "No orders in this stage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/orders/page.jsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/orders/page.jsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, status, true, {
                        fileName: "[project]/src/app/admin/orders/page.jsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.jsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/orders/page.jsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(OrdersPage, "RitLyKwOPBSnMcJH5I1f7wf8Ylc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$private$2f$orders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetOrderStatusQuery"]
    ];
});
_c = OrdersPage;
var _c;
__turbopack_context__.k.register(_c, "OrdersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ad5a2abf._.js.map