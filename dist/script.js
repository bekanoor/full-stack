/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/albumCreator.ts":
/*!*****************************!*\
  !*** ./src/albumCreator.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_getAlbums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getAlbums */ "./src/modules/getAlbums.ts");
/* harmony import */ var _modules_createAlbum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createAlbum */ "./src/modules/createAlbum.ts");
/* harmony import */ var _modules_photoHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/photoHandler */ "./src/modules/photoHandler.ts");



var AlbumCreator = /** @class */ (function () {
    function AlbumCreator(wrapper) {
        this.wrapper = wrapper;
    }
    AlbumCreator.prototype.create = function () {
        var _this = this;
        (0,_modules_getAlbums__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (res) {
            (0,_modules_createAlbum__WEBPACK_IMPORTED_MODULE_1__["default"])(res, _this.wrapper, _modules_photoHandler__WEBPACK_IMPORTED_MODULE_2__["default"]);
            localStorage.setItem('albums', JSON.stringify(res));
        });
    };
    return AlbumCreator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlbumCreator);


/***/ }),

/***/ "./src/modules/createAlbum.ts":
/*!************************************!*\
  !*** ./src/modules/createAlbum.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAlbum)
/* harmony export */ });
function createAlbum(albums, wrapper, handler) {
    var container = document.createElement('ul');
    container.classList.add('album');
    albums.map(function (album) {
        var item = document.createElement('li');
        item.classList.add('album__item');
        var albumPreview = document.createElement('div');
        albumPreview.classList.add('album__preview');
        albumPreview.textContent = album.id;
        albumPreview.setAttribute('id', album.id);
        var albumTitle = document.createElement('div');
        albumTitle.classList.add('_bold');
        albumTitle.classList.add('album__title');
        albumTitle.textContent = album.title;
        var userName = document.createElement('div');
        userName.classList.add('album__title');
        userName.textContent = album.user.name;
        var email = document.createElement('div');
        email.classList.add('album__title');
        email.textContent = album.user.email;
        item.append(albumPreview);
        item.append(albumTitle);
        item.append(userName);
        item.append(email);
        container.append(item);
        albumPreview.addEventListener('click', handler);
    });
    wrapper.append(container);
}


/***/ }),

/***/ "./src/modules/createPhotos.ts":
/*!*************************************!*\
  !*** ./src/modules/createPhotos.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPhotos)
/* harmony export */ });
/* harmony import */ var _createAlbum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAlbum */ "./src/modules/createAlbum.ts");
/* harmony import */ var _photoHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photoHandler */ "./src/modules/photoHandler.ts");


function createPhotos(photos, wrapper, id) {
    var albumId = parseInt(id);
    var container = document.createElement('ul');
    container.classList.add('album');
    container.classList.add('photos');
    var backBtn = document.createElement('button');
    backBtn.textContent = 'back to albums';
    backBtn.classList.add('primary-button');
    photos.map(function (photo) {
        if (photo.albumId === albumId) {
            var item = document.createElement('li');
            item.classList.add('album__photo-item');
            var imageContainer = document.createElement('div');
            imageContainer.classList.add('album__image-container');
            var image = document.createElement('img');
            image.classList.add('album__image');
            image.setAttribute('src', photo.url);
            image.setAttribute('alt', 'photo');
            var title = document.createElement('p');
            title.classList.add('album__title');
            title.textContent = photo.title;
            container.append(item);
            item.append(imageContainer);
            imageContainer.append(image);
            item.append(title);
        }
    });
    wrapper.append(backBtn);
    wrapper.append(container);
    backBtn.addEventListener('click', function () {
        wrapper.textContent = '';
        var albums = JSON.parse(localStorage.getItem('albums'));
        (0,_createAlbum__WEBPACK_IMPORTED_MODULE_0__["default"])(albums, wrapper, _photoHandler__WEBPACK_IMPORTED_MODULE_1__["default"]);
    });
}


/***/ }),

/***/ "./src/modules/getAlbums.ts":
/*!**********************************!*\
  !*** ./src/modules/getAlbums.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCollection)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};
function getCollection() {
    return __awaiter(this, void 0, void 0, function () {
        var usersURL, albumsURL, getUsers, users_1, getAlbums, albums, collection, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    usersURL = 'http://jsonplaceholder.typicode.com/users';
                    albumsURL = 'http://jsonplaceholder.typicode.com/albums';
                    return [4 /*yield*/, fetch(usersURL)];
                case 1:
                    getUsers = _a.sent();
                    return [4 /*yield*/, getUsers.json()];
                case 2:
                    users_1 = _a.sent();
                    return [4 /*yield*/, fetch(albumsURL)];
                case 3:
                    getAlbums = _a.sent();
                    return [4 /*yield*/, getAlbums.json()];
                case 4:
                    albums = _a.sent();
                    collection = albums.map(function (album) {
                        return (__assign(__assign({}, album), { user: users_1.find(function (_a) {
                                var id = _a.id;
                                return id === album.userId;
                            }) }));
                    });
                    return [2 /*return*/, collection];
                case 5:
                    error_1 = _a.sent();
                    throw new Error(error_1);
                case 6: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/modules/getPhotos.ts":
/*!**********************************!*\
  !*** ./src/modules/getPhotos.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPhotos)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};
function getPhotos() {
    return __awaiter(this, void 0, void 0, function () {
        var photosURL, receivePhotos, photos, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    photosURL = 'http://jsonplaceholder.typicode.com/photos';
                    return [4 /*yield*/, fetch(photosURL)];
                case 1:
                    receivePhotos = _a.sent();
                    return [4 /*yield*/, receivePhotos.json()];
                case 2:
                    photos = _a.sent();
                    return [2 /*return*/, photos];
                case 3:
                    error_1 = _a.sent();
                    throw new Error(error_1);
                case 4: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/modules/photoHandler.ts":
/*!*************************************!*\
  !*** ./src/modules/photoHandler.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ photoHandler)
/* harmony export */ });
/* harmony import */ var _createPhotos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPhotos */ "./src/modules/createPhotos.ts");
/* harmony import */ var _getPhotos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPhotos */ "./src/modules/getPhotos.ts");


function photoHandler(e) {
    var list = document.querySelector('.album-wrapper');
    list.textContent = '';
    (0,_getPhotos__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function (res) { return (0,_createPhotos__WEBPACK_IMPORTED_MODULE_0__["default"])(res, list, e.target.id); });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _albumCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albumCreator */ "./src/albumCreator.ts");

var list = document.querySelector('.album-wrapper');
var album = new _albumCreator__WEBPACK_IMPORTED_MODULE_0__["default"](list);
album.create();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBSSxDQUFDLGFBQUcsSUFBSSxnRUFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7Ozs7Ozs7VUNURDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDO0FBRTFDLElBQU0sSUFBSSxHQUFlLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUVsRSxJQUFNLEtBQUssR0FBRyxJQUFJLHFEQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFckMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtYW5kLWRvbS8uL3NyYy9hbGJ1bUNyZWF0b3IudHMiLCJ3ZWJwYWNrOi8vanMtYW5kLWRvbS8uL3NyYy9tb2R1bGVzL2NyZWF0ZUFsYnVtLnRzIiwid2VicGFjazovL2pzLWFuZC1kb20vLi9zcmMvbW9kdWxlcy9jcmVhdGVQaG90b3MudHMiLCJ3ZWJwYWNrOi8vanMtYW5kLWRvbS8uL3NyYy9tb2R1bGVzL2dldEFsYnVtcy50cyIsIndlYnBhY2s6Ly9qcy1hbmQtZG9tLy4vc3JjL21vZHVsZXMvZ2V0UGhvdG9zLnRzIiwid2VicGFjazovL2pzLWFuZC1kb20vLi9zcmMvbW9kdWxlcy9waG90b0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vanMtYW5kLWRvbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy1hbmQtZG9tL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy1hbmQtZG9tL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtYW5kLWRvbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLWFuZC1kb20vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEFsYnVtcyBmcm9tICcuL21vZHVsZXMvZ2V0QWxidW1zJztcclxuaW1wb3J0IGNyZWF0ZUFsYnVtIGZyb20gJy4vbW9kdWxlcy9jcmVhdGVBbGJ1bSc7XHJcbmltcG9ydCBwaG90b0hhbmRsZXIgZnJvbSAnLi9tb2R1bGVzL3Bob3RvSGFuZGxlcic7XHJcblxyXG5jbGFzcyBBbGJ1bUNyZWF0b3Ige1xyXG4gIHByaXZhdGUgd3JhcHBlcjtcclxuXHJcbiAgY29uc3RydWN0b3Iod3JhcHBlcjpIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIGdldEFsYnVtcygpLnRoZW4ocmVzID0+IHtcclxuICAgICAgY3JlYXRlQWxidW0ocmVzLCB0aGlzLndyYXBwZXIsIHBob3RvSGFuZGxlcik7XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxidW1zJywgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsYnVtQ3JlYXRvcjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWxidW0oYWxidW1zOkFycmF5PG9iamVjdD4sIHdyYXBwZXI6SFRNTEVsZW1lbnQsIGhhbmRsZXI6YW55KTp2b2lkIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbGJ1bScpO1xyXG5cclxuICBhbGJ1bXMubWFwKGFsYnVtID0+IHtcclxuICAgIGNvbnN0IGl0ZW06SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhbGJ1bV9faXRlbScpO1xyXG5cclxuICAgIGNvbnN0IGFsYnVtUHJldmlldzpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWxidW1QcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2FsYnVtX19wcmV2aWV3Jyk7XHJcbiAgICBhbGJ1bVByZXZpZXcudGV4dENvbnRlbnQgPSBhbGJ1bS5pZDtcclxuICAgIGFsYnVtUHJldmlldy5zZXRBdHRyaWJ1dGUoJ2lkJywgYWxidW0uaWQpO1xyXG5cclxuICAgIGNvbnN0IGFsYnVtVGl0bGU6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFsYnVtVGl0bGUuY2xhc3NMaXN0LmFkZCgnX2JvbGQnKTtcclxuICAgIGFsYnVtVGl0bGUuY2xhc3NMaXN0LmFkZCgnYWxidW1fX3RpdGxlJyk7XHJcbiAgICBhbGJ1bVRpdGxlLnRleHRDb250ZW50ID0gYWxidW0udGl0bGU7XHJcblxyXG4gICAgY29uc3QgdXNlck5hbWU6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHVzZXJOYW1lLmNsYXNzTGlzdC5hZGQoJ2FsYnVtX190aXRsZScpO1xyXG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSBhbGJ1bS51c2VyLm5hbWU7XHJcblxyXG4gICAgY29uc3QgZW1haWw6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2FsYnVtX190aXRsZScpO1xyXG4gICAgZW1haWwudGV4dENvbnRlbnQgPSBhbGJ1bS51c2VyLmVtYWlsO1xyXG5cclxuICAgIGl0ZW0uYXBwZW5kKGFsYnVtUHJldmlldyk7XHJcbiAgICBpdGVtLmFwcGVuZChhbGJ1bVRpdGxlKTtcclxuICAgIGl0ZW0uYXBwZW5kKHVzZXJOYW1lKTtcclxuICAgIGl0ZW0uYXBwZW5kKGVtYWlsKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoaXRlbSk7XHJcblxyXG4gICAgYWxidW1QcmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XHJcbiAgfSk7XHJcblxyXG4gIHdyYXBwZXIuYXBwZW5kKGNvbnRhaW5lcik7XHJcbn1cclxuIiwiaW1wb3J0IGNyZWF0ZUFsYnVtIGZyb20gXCIuL2NyZWF0ZUFsYnVtXCI7XHJcbmltcG9ydCBwaG90b0hhbmRsZXIgZnJvbSBcIi4vcGhvdG9IYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQaG90b3MgKHBob3RvczpBcnJheTxvYmplY3Q+LCB3cmFwcGVyOkhUTUxFbGVtZW50LCBpZDpzdHJpbmcpOnZvaWQge1xyXG4gIGNvbnN0IGFsYnVtSWQ6bnVtYmVyID0gcGFyc2VJbnQoaWQpO1xyXG5cclxuICBjb25zdCBjb250YWluZXI6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbGJ1bScpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwaG90b3MnKTtcclxuXHJcbiAgY29uc3QgYmFja0J0bjpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJhY2tCdG4udGV4dENvbnRlbnQgPSAnYmFjayB0byBhbGJ1bXMnO1xyXG4gIGJhY2tCdG4uY2xhc3NMaXN0LmFkZCgncHJpbWFyeS1idXR0b24nKTtcclxuXHJcbiAgcGhvdG9zLm1hcChwaG90byA9PiB7XHJcbiAgICBpZiAocGhvdG8uYWxidW1JZCA9PT0gYWxidW1JZCkge1xyXG4gICAgICBjb25zdCBpdGVtOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhbGJ1bV9fcGhvdG8taXRlbScpO1xyXG5cclxuICAgICAgY29uc3QgaW1hZ2VDb250YWluZXI6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWxidW1fX2ltYWdlLWNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgY29uc3QgaW1hZ2U6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnYWxidW1fX2ltYWdlJyk7XHJcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcGhvdG8udXJsKTtcclxuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAncGhvdG8nKTtcclxuXHJcbiAgICAgIGNvbnN0IHRpdGxlOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdhbGJ1bV9fdGl0bGUnKTtcclxuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwaG90by50aXRsZTtcclxuXHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoaXRlbSk7XHJcbiAgICAgIGl0ZW0uYXBwZW5kKGltYWdlQ29udGFpbmVyKTtcclxuICAgICAgaW1hZ2VDb250YWluZXIuYXBwZW5kKGltYWdlKTtcclxuICAgICAgaXRlbS5hcHBlbmQodGl0bGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB3cmFwcGVyLmFwcGVuZChiYWNrQnRuKTtcclxuICB3cmFwcGVyLmFwcGVuZChjb250YWluZXIpO1xyXG5cclxuICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgd3JhcHBlci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGFsYnVtczpBcnJheTxvYmplY3Q+ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxidW1zJykpO1xyXG5cclxuICAgIGNyZWF0ZUFsYnVtKGFsYnVtcywgd3JhcHBlciwgcGhvdG9IYW5kbGVyKTtcclxuICB9KTtcclxufVxyXG4iLCJpbnRlcmZhY2UgQWxidW0ge1xyXG4gIFtrZXk6IHN0cmluZ106c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDb2xsZWN0aW9uKCk6UHJvbWlzZTxhbnk+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlcnNVUkw6c3RyaW5nID0gJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJztcclxuICAgIGNvbnN0IGFsYnVtc1VSTDpzdHJpbmcgPSAnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vYWxidW1zJztcclxuXHJcbiAgICBjb25zdCBnZXRVc2VycyA9IGF3YWl0IGZldGNoKHVzZXJzVVJMKTtcclxuICAgIGNvbnN0IHVzZXJzOiBBbGJ1bVtdID0gYXdhaXQgZ2V0VXNlcnMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IGdldEFsYnVtcyA9IGF3YWl0IGZldGNoKGFsYnVtc1VSTCk7XHJcbiAgICBjb25zdCBhbGJ1bXM6IEFsYnVtW10gPSBhd2FpdCBnZXRBbGJ1bXMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IGNvbGxlY3Rpb246QXJyYXk8b2JqZWN0PiA9IGFsYnVtcy5tYXAoKGFsYnVtKSA9PlxyXG4gICAgICAoey4uLmFsYnVtLCB1c2VyOiB1c2Vycy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBhbGJ1bS51c2VySWQpIH0pKTtcclxuXHJcbiAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICB9XHJcbn1cclxuIiwiaW50ZXJmYWNlIEFsYnVtIHtcclxuICBba2V5OiBzdHJpbmddOnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0UGhvdG9zKCk6UHJvbWlzZTxhbnk+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGhvdG9zVVJMOnN0cmluZyA9ICdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9waG90b3MnO1xyXG5cclxuICAgIGNvbnN0IHJlY2VpdmVQaG90b3MgPSBhd2FpdCBmZXRjaChwaG90b3NVUkwpO1xyXG4gICAgY29uc3QgcGhvdG9zOiBBbGJ1bSA9IGF3YWl0IHJlY2VpdmVQaG90b3MuanNvbigpO1xyXG5cclxuICAgIHJldHVybiBwaG90b3M7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBjcmVhdGVQaG90b3MgZnJvbSBcIi4vY3JlYXRlUGhvdG9zXCI7XHJcbmltcG9ydCBnZXRQaG90b3MgZnJvbSBcIi4vZ2V0UGhvdG9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwaG90b0hhbmRsZXIoZTpFdmVudCk6dm9pZCB7XHJcbiAgY29uc3QgbGlzdDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGJ1bS13cmFwcGVyJyk7XHJcblxyXG4gIGxpc3QudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgZ2V0UGhvdG9zKCkudGhlbihyZXMgPT4gY3JlYXRlUGhvdG9zKHJlcywgbGlzdCwgZS50YXJnZXQuaWQpKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBbGJ1bUNyZWF0b3IgZnJvbSAnLi9hbGJ1bUNyZWF0b3InO1xyXG5cclxuY29uc3QgbGlzdDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGJ1bS13cmFwcGVyJyk7XHJcblxyXG5jb25zdCBhbGJ1bSA9IG5ldyBBbGJ1bUNyZWF0b3IobGlzdCk7XHJcblxyXG5hbGJ1bS5jcmVhdGUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9