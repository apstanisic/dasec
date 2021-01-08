'use strict';

var require$$0 = require('joi');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

var tslib_es6 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	__extends: __extends,
	get __assign () { return __assign; },
	__rest: __rest,
	__decorate: __decorate,
	__param: __param,
	__metadata: __metadata,
	__awaiter: __awaiter,
	__generator: __generator,
	__createBinding: __createBinding,
	__exportStar: __exportStar,
	__values: __values,
	__read: __read,
	__spread: __spread,
	__spreadArrays: __spreadArrays,
	__await: __await,
	__asyncGenerator: __asyncGenerator,
	__asyncDelegator: __asyncDelegator,
	__asyncValues: __asyncValues,
	__makeTemplateObject: __makeTemplateObject,
	__importStar: __importStar,
	__importDefault: __importDefault,
	__classPrivateFieldGet: __classPrivateFieldGet,
	__classPrivateFieldSet: __classPrivateFieldSet
});

var data_service = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
/**
 * Higher level class for fetching data
 * This are mostly wrappers around Directus ItemsService methods
 * that have better return values, support generics...
 */
class DataService {
    constructor(table, params) {
        var _a;
        this.ctx = params.ctx;
        this.req = params.req;
        // It can't accept acc on Record?
        const accountability = (_a = params.req.accountability) !== null && _a !== void 0 ? _a : null;
        this.items = new this.ctx.services.ItemsService(table, { accountability });
        this.auth = new this.ctx.services.AuthenticationService({ accountability });
        this.exceptions = this.ctx.exceptions;
    }
    //   constructor(public readonly items: ItemsService, private readonly ctx: ExtensionContext) {}
    //   constructor(...params: ConstructorParameters<typeof ItemsService>) {
    //     super(...params);
    //   }
    getConParams() {
        return { req: this.req, ctx: this.ctx };
    }
    /**
     * Find many items
     * This always returns array, and supports generics
     * @param query Directus query object
     */
    async find(query = {}) {
        const res = await this.items.readByQuery(Object.assign(Object.assign({}, query), { single: false }));
        if (!Array.isArray(res))
            throw new Error('Internal Error');
        return res;
    }
    /**
     * Find one item
     * Returns either that object or null, and supports generics
     * @param queryOrId Directus query object or primary key
     */
    async findOne(queryOrId) {
        if (typeof queryOrId === 'string' || typeof queryOrId === 'number') {
            return (await this.items.readByKey(queryOrId));
        }
        const res = await this.items.readByQuery(Object.assign(Object.assign({}, queryOrId), { single: true }));
        if (Array.isArray(res))
            throw new Error('Internal Error');
        return res;
    }
    async findByIds(ids) {
        const values = await this.items.readByKey(ids);
        if (!values)
            throw new this.exceptions.ForbiddenException();
        return values;
    }
    async findOneOrFail(queryOrId) {
        const res = await this.findOne(queryOrId);
        if (!res)
            throw new this.exceptions.RouteNotFoundException('');
        return res;
    }
    async updateById(id, data) {
        var _a;
        // TypeScript is complaining if I don't do this
        if (Array.isArray(id)) {
            const updatedKeys = await this.items.update(data, id);
            const updatedValues = ((_a = (await this.items.readByKey(updatedKeys))) !== null && _a !== void 0 ? _a : []);
            return updatedValues;
        }
        else {
            const updatedKey = await this.items.update(data, id);
            const updatedValues = (await this.items.readByKey(updatedKey));
            return updatedValues;
        }
    }
    /**
     * Update every object that fullfills query filter
     * @param query Directus query
     * @param data New data
     * @returns Array with updated values
     */
    async updateWhere(query, data) {
        var _a;
        const updatedKeys = await this.items.updateByQuery(query, data);
        const updatedValues = ((_a = (await this.items.readByKey(updatedKeys))) !== null && _a !== void 0 ? _a : []);
        return updatedValues;
    }
    async createItems(data) {
        const ids = await this.items.create(data);
        const saved = await this.findByIds(ids);
        return saved;
    }
    async createItem(data) {
        const saved = await this.createItems([data]);
        return saved[0];
    }
    /**
     * Validate data
     * @param body Data to be validated
     * @param validator Joi schema instance to be used for validation
     */
    validatePayload(body, validator) {
        const validParams = validator.validate(body, {
            stripUnknown: true,
        });
        if (validParams.error) {
            throw new this.ctx.exceptions.InvalidPayloadException('Invalid params.');
        }
        return validParams.value;
    }
    /**
     * Check if provided user id is equal logged in user id
     * @param userId User id
     * Do I need to do this or is this built in in ItemsService ?
     */
    get userId() {
        var _a;
        if (!((_a = this.items.accountability) === null || _a === void 0 ? void 0 : _a.user)) {
            throw new this.ctx.exceptions.ForbiddenException();
        }
        return this.items.accountability.user;
    }
}
exports.DataService = DataService;

});

var tslib_1 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

var cartItem_dto = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCartValidator = void 0;

const joi_1 = tslib_1.__importDefault(require$$0__default['default']);
exports.addToCartValidator = joi_1.default.object({
    product_item_id: joi_1.default.string().required().uuid(),
    quantity: joi_1.default.number().required().integer().min(1),
});

});

var cart_service = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;

const joi_1 = tslib_1.__importDefault(require$$0__default['default']);


class CartService extends data_service.DataService {
    constructor(req, ctx) {
        super('ds_cart_items', { req, ctx });
    }
    /**
     * Get all products in cart
     * @todo This only returns cart item without product, I'm not sure if join works
     */
    async getCartItems() {
        // I think this will join with products, but I'm not sure if it'll work
        // First of all there is no relation set up in Directus, only in DB
        const items = await this.find({
            filter: { user_id: this.userId },
            fields: ['*', 'product_item_id.*'],
        });
        return items;
    }
    /**
     * Change quantity of product in cart
     * @param body Request body
     */
    async replaceQuantity(body) {
        var _a;
        const userId = this.userId;
        const params = this.validatePayload(body, cartItem_dto.addToCartValidator);
        const { product_item_id, quantity } = params;
        const updatedValues = await this.updateWhere({ filter: { user_id: userId, product_item_id } }, { quantity });
        return (_a = updatedValues[0]) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * Add item to cart, or update quantity if exist
     * If product is already in the cart, combine quantities
     * @param body - Request body
     */
    async addProductToCart(body) {
        const userId = this.userId;
        const params = this.validatePayload(body, cartItem_dto.addToCartValidator);
        const { product_item_id, quantity } = params;
        const productInCart = await this.findOne({
            filter: {
                user_id: userId,
                product_item_id,
            },
        });
        let createdItem;
        if (!productInCart) {
            createdItem = await this.createItem({
                product_item_id,
                quantity,
                user_id: userId,
            });
        }
        else {
            const newQuantity = productInCart.quantity + quantity;
            createdItem = await this.updateById(productInCart.id, {
                quantity: newQuantity,
            });
        }
        return createdItem;
    }
    /**
     * Remove product from cart
     * @param cartItemId Cart item id to delete
     */
    async removeFromCart(cartItemId) {
        const userId = this.userId;
        const validId = joi_1.default.string().required().uuid().validate(cartItemId);
        const cartItem = {
            user_id: userId,
            id: validId.value,
        };
        const deletedIds = await this.items.deleteByQuery({
            filter: cartItem,
        });
        if (!deletedIds[0]) {
            throw new this.ctx.exceptions.ForbiddenException('There is no this item in cart.');
        }
        return deletedIds[0];
    }
}
exports.CartService = CartService;

});

var cart_controller = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartController = void 0;

function cartController(router, ctx) {
    /**
     * Removes some boilerplace
     * @param req Express request
     */
    const service = (req) => new cart_service.CartService(req, ctx);
    /**
     * Get all products from a cart
     */
    router.get('/cart', async (req, res) => {
        const items = await service(req).getCartItems();
        res.json(items);
    });
    /**
     * Add product to cart
     */
    router.post('/cart', async (req, res) => {
        const cartItem = await service(req).addProductToCart(req.body);
        return res.json(cartItem);
    });
    /**
     * Change quantity
     */
    router.patch('/cart/:id', async (req, res) => {
        const primaryKeys = await service(req).replaceQuantity(req.body);
        return res.json({ data: primaryKeys });
    });
    /**
     * Remove product from cart
     */
    router.delete('/cart/:id', async (req, res) => {
        const id = await service(req).removeFromCart(req.params.id);
        res.json({ id });
    });
}
exports.cartController = cartController;

});

var orderStatus_interface = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusValues = void 0;
var OrderStatusValues;
(function (OrderStatusValues) {
    OrderStatusValues["pending"] = "pending";
    OrderStatusValues["processing"] = "processing";
    OrderStatusValues["failed"] = "failed";
    OrderStatusValues["cancelled"] = "cancelled";
    OrderStatusValues["completed"] = "completed";
    OrderStatusValues["shipped"] = "shipped";
    OrderStatusValues["sent"] = "sent";
})(OrderStatusValues = exports.OrderStatusValues || (exports.OrderStatusValues = {}));

});

var newOrder_dto = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressValidator = void 0;

const joi_1 = tslib_1.__importDefault(require$$0__default['default']);
exports.addressValidator = joi_1.default.object({
    order_address: joi_1.default.string().required().max(200),
    order_city: joi_1.default.string().required().max(200),
    order_postal_code: joi_1.default.string().required().max(200),
    order_country: joi_1.default.string().required().max(200),
    shipping_address: joi_1.default.string().required().max(200),
    shipping_postal_code: joi_1.default.string().required().max(200),
    shipping_city: joi_1.default.string().required().max(200),
    shipping_country: joi_1.default.string().required().max(200),
    user_comment: joi_1.default.string().max(1000),
});

});

var orders_service = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;



class OrdersService extends data_service.DataService {
    constructor(req, ctx) {
        super('ds_orders', { req, ctx });
        this.orderStatusRepo = new data_service.DataService('ds_order_status', this.getConParams());
        this.orderItemsRepo = new data_service.DataService('ds_order_items', this.getConParams());
        this.cartItemsRepo = new data_service.DataService('ds_cart_items', this.getConParams());
    }
    /**
     * Create order from all items in cart
     * Address data should be sent in body, order does not have concept
     * of address table, it just have address data. That way if user
     * changes address, same address will be used for this order.
     * @todo make shipping price configurable
     * @param body Request body
     */
    async createOrderFromCart(body) {
        const userId = this.userId;
        // User should pass address, address in db are there only as a helper
        const params = this.validatePayload(body, newOrder_dto.addressValidator);
        const status = await this.orderStatusRepo.findOneOrFail({
            filter: { name: 'pending' },
        });
        // @todo Add shipping prices
        const order = Object.assign(Object.assign({}, params), { ordered_at: new Date(), status_id: status.id, shipping_price: 0 });
        // const orderId = await this.items.create(order);
        const savedOrder = await this.createItem(order);
        const cartItems = await this.cartItemsRepo.find({
            filter: { user_id: userId },
            fields: ['*', 'product_item_id.*'],
        });
        const orderItems = cartItems.map((cartItem) => {
            var _a;
            if (typeof cartItem.product_item_id === 'string')
                throw new Error();
            const product = cartItem.product_item_id;
            const singlePrice = (_a = product.discount_price) !== null && _a !== void 0 ? _a : product.regular_price;
            const orderItem = {
                discount: 0,
                quantity: cartItem.quantity,
                single_price: singlePrice,
                total_price: cartItem.quantity * singlePrice,
                product_item_id: product.id,
                order_id: savedOrder.id,
            };
            return orderItem;
        });
        const savedOrderItems = await this.orderItemsRepo.createItems(orderItems);
        savedOrder.items = savedOrderItems;
        return savedOrder;
        // order.this.repository.update({items_price: savedOrderItems.reduce(($1, $2) => $1 + $2});
    }
    /**
     * Attempt to cancel order if possible
     * @param orderId
     */
    async cancelOrder(orderId) {
        const order = await this.findOneOrFail(orderId);
        const allOrderStatus = await this.orderStatusRepo.find();
        const pending = allOrderStatus.find((os) => os.name === orderStatus_interface.OrderStatusValues.pending);
        const canceled = allOrderStatus.find((os) => os.name === orderStatus_interface.OrderStatusValues.cancelled);
        if (!pending || !canceled)
            throw new this.exceptions.ForbiddenException();
        if (order.status_id !== pending.id) {
            throw new this.ctx.exceptions.ForbiddenException("It's to late to cancel order.");
        }
        const updatedOrder = await this.updateById(order.id, { status_id: canceled.id });
        return updatedOrder;
    }
}
exports.OrdersService = OrdersService;

});

var orders_controller = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersController = void 0;

function ordersController(router, ctx) {
    /**
     * Removes some boilerplace
     * @param req Express request
     */
    const service = (req) => new orders_service.OrdersService(req, ctx);
    /**
     * Get all orders
     */
    router.get('/orders', async (req, res) => {
        const allOrders = await service(req).find({});
        return res.json({ data: allOrders });
    });
    /**
     * Create order with data from cart
     * Address data should be in the body
     */
    router.post('/orders', async (req, res) => {
        const items = await service(req).createOrderFromCart(req.body);
        res.json(items);
    });
    /**
     * Try to cancel order if possible
     */
    router.delete('/orders/:id', async (req, res) => {
        const canceledOrder = await service(req).cancelOrder(req.params.id);
        res.json(canceledOrder);
    });
}
exports.ordersController = ordersController;

});

var endpoints = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


function registerEndpoint(router, context) {
    router.get('/', (req, res) => res.send('Hello, World!'));
    cart_controller.cartController(router, context);
    orders_controller.ordersController(router, context);
}
exports.default = registerEndpoint;

});

var index = /*@__PURE__*/getDefaultExportFromCjs(endpoints);

module.exports = index;
