"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "@t3-oss/env-nextjs":
/*!*************************************!*\
  !*** external "@t3-oss/env-nextjs" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@t3-oss/env-nextjs");;

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/signup.ts":
/*!**************************************!*\
  !*** ./src/pages/api/auth/signup.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/server/db */ \"(api)/./src/server/db.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_db__WEBPACK_IMPORTED_MODULE_0__]);\n_server_db__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst SECRET = process.env.TOKEN_SECRET;\nasync function index(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(400).json({\n            success: false,\n            message: \"This route does not exist\"\n        });\n    }\n    try {\n        const { username , email , password  } = req.body;\n        console.log(req.body);\n        if (!username || !email || !password) {\n            return res.status(400).json({\n                success: false,\n                message: \"Fields are mandatory\"\n            });\n        }\n        const userToFind = await _server_db__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findFirst({\n            where: {\n                email\n            }\n        });\n        if (userToFind) {\n            return res.status(400).json({\n                success: false,\n                message: \"User already exists\"\n            });\n        }\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_1__.hash(password, 10);\n        const response = await fetch(`https://ui-avatars.com/api/?name=${username}`);\n        const profilePicture = await response.json();\n        const createdUser = await _server_db__WEBPACK_IMPORTED_MODULE_0__.prisma.user.create({\n            data: {\n                email: email,\n                password: hashedPassword,\n                username: username,\n                avatar: profilePicture\n            },\n            select: {\n                userId: true,\n                username: true,\n                email: true,\n                avatar: true\n            }\n        });\n        const payload = {\n            email: createdUser.email,\n            username: createdUser.username,\n            userId: createdUser.userId,\n            avatar: createdUser.avatar\n        };\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign(payload, SECRET);\n        res.status(200).json({\n            success: true,\n            message: `Welcome aboard ${createdUser.username}`,\n            data: {\n                token,\n                ...payload\n            }\n        });\n    } catch (error) {\n        console.log(error);\n        return res.status(500).json({\n            success: false,\n            message: \"Internal Server Error\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvc2lnbnVwLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxQztBQUNKO0FBQ0c7QUFXcEMsTUFBTUcsU0FBU0MsUUFBUUMsSUFBSUM7QUFFWixlQUFlQyxNQUM1QkMsR0FBZ0IsRUFDaEJDLEdBQWlDO0lBRWpDLElBQUlELElBQUlFLFdBQVcsUUFBUTtRQUN6QixPQUFPRCxJQUFJRSxPQUFPLEtBQUtDLEtBQUs7WUFDMUJDLFNBQVM7WUFDVEMsU0FBUztRQUNYO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdULElBQUlVO1FBRTFDQyxRQUFRQyxJQUFJWixJQUFJVTtRQUVoQixJQUFJLENBQUNILFlBQVksQ0FBQ0MsU0FBUyxDQUFDQyxVQUFVO1lBQ3BDLE9BQU9SLElBQUlFLE9BQU8sS0FBS0MsS0FBSztnQkFDMUJDLFNBQVM7Z0JBQ1RDLFNBQVM7WUFDWDtRQUNGO1FBRUEsTUFBTU8sYUFBYSxNQUFNckIsOENBQU1BLENBQUNzQixLQUFLQyxVQUFVO1lBQzdDQyxPQUFPO2dCQUNMUjtZQUNGO1FBQ0Y7UUFFQSxJQUFJSyxZQUFZO1lBQ2QsT0FBT1osSUFBSUUsT0FBTyxLQUFLQyxLQUFLO2dCQUMxQkMsU0FBUztnQkFDVEMsU0FBUztZQUNYO1FBQ0Y7UUFFQSxNQUFNVyxpQkFBaUIsTUFBTXhCLHdDQUFXeUIsQ0FBQ1QsVUFBVTtRQUVuRCxNQUFNVSxXQUFXLE1BQU1DLE1BQ3JCLENBQUMsaUNBQWlDLEVBQUViLFNBQVMsQ0FBQztRQUdoRCxNQUFNYyxpQkFBaUIsTUFBTUYsU0FBU2Y7UUFFdEMsTUFBTWtCLGNBQWMsTUFBTTlCLDhDQUFNQSxDQUFDc0IsS0FBS1MsT0FBTztZQUMzQ0MsTUFBTTtnQkFDSmhCLE9BQU9BO2dCQUNQQyxVQUFVUTtnQkFDVlYsVUFBVUE7Z0JBQ1ZrQixRQUFRSjtZQUNWO1lBQ0FLLFFBQVE7Z0JBQ05DLFFBQVE7Z0JBQ1JwQixVQUFVO2dCQUNWQyxPQUFPO2dCQUNQaUIsUUFBUTtZQUNWO1FBQ0Y7UUFFQSxNQUFNRyxVQUFVO1lBQ2RwQixPQUFPYyxZQUFZZDtZQUNuQkQsVUFBVWUsWUFBWWY7WUFDdEJvQixRQUFRTCxZQUFZSztZQUNwQkYsUUFBUUgsWUFBWUc7UUFDdEI7UUFFQSxNQUFNSSxRQUFRbkMsOENBQVFvQyxDQUFDRixTQUFTakM7UUFFaENNLElBQUlFLE9BQU8sS0FBS0MsS0FBSztZQUNuQkMsU0FBUztZQUNUQyxTQUFTLENBQUMsZUFBZSxFQUFFZ0IsWUFBWWYsU0FBUyxDQUFDO1lBQ2pEaUIsTUFBTTtnQkFDSks7Z0JBQ0EsR0FBR0QsT0FBTztZQUNaO1FBQ0Y7SUFDRixFQUFFLE9BQU9HLE9BQU87UUFDZHBCLFFBQVFDLElBQUltQjtRQUNaLE9BQU85QixJQUFJRSxPQUFPLEtBQUtDLEtBQUs7WUFDMUJDLFNBQVM7WUFDVEMsU0FBUztRQUNYO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVuc2UtdHJhY2tlci8uL3NyYy9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHM/NWY1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIE5leHRBcGlSZXF1ZXN0LCB0eXBlIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9zZXJ2ZXIvZGInO1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IHR5cGUgQXBpUmVzcG9uc2UgfSBmcm9tICdAL3V0aWxzJztcblxuaW50ZXJmYWNlIFJlcXVlc3RCb2R5IGV4dGVuZHMgTmV4dEFwaVJlcXVlc3Qge1xuICBib2R5OiB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IFNFQ1JFVCA9IHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVCBhcyBzdHJpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluZGV4KFxuICByZXE6IFJlcXVlc3RCb2R5LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxBcGlSZXNwb25zZT4sXG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdUaGlzIHJvdXRlIGRvZXMgbm90IGV4aXN0JyxcbiAgICB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcblxuICAgIGlmICghdXNlcm5hbWUgfHwgIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICdGaWVsZHMgYXJlIG1hbmRhdG9yeScsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyVG9GaW5kID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICh1c2VyVG9GaW5kKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgYWxyZWFkeSBleGlzdHMnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8/bmFtZT0ke3VzZXJuYW1lfWAsXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2ZpbGVQaWN0dXJlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgY3JlYXRlZFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBhdmF0YXI6IHByb2ZpbGVQaWN0dXJlLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICB1c2VySWQ6IHRydWUsXG4gICAgICAgIHVzZXJuYW1lOiB0cnVlLFxuICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgYXZhdGFyOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBlbWFpbDogY3JlYXRlZFVzZXIuZW1haWwsXG4gICAgICB1c2VybmFtZTogY3JlYXRlZFVzZXIudXNlcm5hbWUsXG4gICAgICB1c2VySWQ6IGNyZWF0ZWRVc2VyLnVzZXJJZCxcbiAgICAgIGF2YXRhcjogY3JlYXRlZFVzZXIuYXZhdGFyLFxuICAgIH07XG5cbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHBheWxvYWQsIFNFQ1JFVCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogYFdlbGNvbWUgYWJvYXJkICR7Y3JlYXRlZFVzZXIudXNlcm5hbWV9YCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImJjcnlwdCIsImp3dCIsIlNFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTl9TRUNSRVQiLCJpbmRleCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwidXNlclRvRmluZCIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9maWxlUGljdHVyZSIsImNyZWF0ZWRVc2VyIiwiY3JlYXRlIiwiZGF0YSIsImF2YXRhciIsInNlbGVjdCIsInVzZXJJZCIsInBheWxvYWQiLCJ0b2tlbiIsInNpZ24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/signup.ts\n");

/***/ }),

/***/ "(api)/./src/server/db.ts":
/*!**************************!*\
  !*** ./src/server/db.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/env.mjs */ \"(api)/./src/env.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n_env_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: _env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV === \"development\" ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : [\n        \"error\"\n    ]\n});\nif (_env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") globalForPrisma.prisma = prisma;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDZDtBQUVoQyxNQUFNRSxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsVUFDaEIsSUFBSUosd0RBQVlBLENBQUM7SUFDZkssS0FDRUoseUNBQUdBLENBQUNLLGFBQWEsZ0JBQWdCO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FBRztRQUFDO0tBQVE7QUFDM0UsR0FBRztBQUVMLElBQUlMLHlDQUFHQSxDQUFDSyxhQUFhLGNBQWNKLGdCQUFnQkUsU0FBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbnNlLXRyYWNrZXIvLi9zcmMvc2VydmVyL2RiLnRzP2FhNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnQC9lbnYubWpzJztcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6XG4gICAgICBlbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBbJ3F1ZXJ5JywgJ2Vycm9yJywgJ3dhcm4nXSA6IFsnZXJyb3InXSxcbiAgfSk7XG5cbmlmIChlbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJlbnYiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwibG9nIiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/server/db.ts\n");

/***/ }),

/***/ "(api)/./src/env.mjs":
/*!*********************!*\
  !*** ./src/env.mjs ***!
  \*********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-nextjs */ \"@t3-oss/env-nextjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__]);\n([_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n    /**\n   * Specify your server-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars.\n   */ server: {\n        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url(),\n        NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([\n            \"development\",\n            \"test\",\n            \"production\"\n        ])\n    },\n    /**\n   * Specify your client-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars. To expose them to the client, prefix them with\n   * `NEXT_PUBLIC_`.\n   */ client: {\n    },\n    /**\n   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.\n   * middlewares) or client-side so we need to destruct manually.\n   */ runtimeEnv: {\n        DATABASE_URL: process.env.DATABASE_URL,\n        NODE_ENV: \"development\"\n    },\n    /**\n   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.\n   * This is especially useful for Docker builds.\n   */ skipValidation: !!process.env.SKIP_ENV_VALIDATION\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFDdkI7QUFFakIsTUFBTUUsTUFBTUYsNkRBQVNBLENBQUM7SUFDM0I7OztHQUdDLEdBQ0RHLFFBQVE7UUFDTkMsY0FBY0gsa0NBQUNBLENBQUNJLFNBQVNDO1FBQ3pCQyxVQUFVTixrQ0FBQ0EsQ0FBQ08sS0FBSztZQUFDO1lBQWU7WUFBUTtTQUFhO0lBQ3hEO0lBRUE7Ozs7R0FJQyxHQUNEQyxRQUFRO0lBRVI7SUFFQTs7O0dBR0MsR0FDREMsWUFBWTtRQUNWTixjQUFjTyxRQUFRVCxJQUFJRTtRQUMxQkcsVUE1Qko7SUE4QkU7SUFDQTs7O0dBR0MsR0FDREssZ0JBQWdCLENBQUMsQ0FBQ0QsUUFBUVQsSUFBSVc7QUFDaEMsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVuc2UtdHJhY2tlci8uL3NyYy9lbnYubWpzP2MzYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRW52IH0gZnJvbSAnQHQzLW9zcy9lbnYtbmV4dGpzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG5leHBvcnQgY29uc3QgZW52ID0gY3JlYXRlRW52KHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgeW91ciBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHBcbiAgICogaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICAgKi9cbiAgc2VydmVyOiB7XG4gICAgREFUQUJBU0VfVVJMOiB6LnN0cmluZygpLnVybCgpLFxuICAgIE5PREVfRU5WOiB6LmVudW0oWydkZXZlbG9wbWVudCcsICd0ZXN0JywgJ3Byb2R1Y3Rpb24nXSksXG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgeW91ciBjbGllbnQtc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHBcbiAgICogaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLiBUbyBleHBvc2UgdGhlbSB0byB0aGUgY2xpZW50LCBwcmVmaXggdGhlbSB3aXRoXG4gICAqIGBORVhUX1BVQkxJQ19gLlxuICAgKi9cbiAgY2xpZW50OiB7XG4gICAgLy8gTkVYVF9QVUJMSUNfQ0xJRU5UVkFSOiB6LnN0cmluZygpLm1pbigxKSxcbiAgfSxcblxuICAvKipcbiAgICogWW91IGNhbid0IGRlc3RydWN0IGBwcm9jZXNzLmVudmAgYXMgYSByZWd1bGFyIG9iamVjdCBpbiB0aGUgTmV4dC5qcyBlZGdlIHJ1bnRpbWVzIChlLmcuXG4gICAqIG1pZGRsZXdhcmVzKSBvciBjbGllbnQtc2lkZSBzbyB3ZSBuZWVkIHRvIGRlc3RydWN0IG1hbnVhbGx5LlxuICAgKi9cbiAgcnVudGltZUVudjoge1xuICAgIERBVEFCQVNFX1VSTDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICAgIE5PREVfRU5WOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgICAvLyBORVhUX1BVQkxJQ19DTElFTlRWQVI6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVFZBUixcbiAgfSxcbiAgLyoqXG4gICAqIFJ1biBgYnVpbGRgIG9yIGBkZXZgIHdpdGggYFNLSVBfRU5WX1ZBTElEQVRJT05gIHRvIHNraXAgZW52IHZhbGlkYXRpb24uXG4gICAqIFRoaXMgaXMgZXNwZWNpYWxseSB1c2VmdWwgZm9yIERvY2tlciBidWlsZHMuXG4gICAqL1xuICBza2lwVmFsaWRhdGlvbjogISFwcm9jZXNzLmVudi5TS0lQX0VOVl9WQUxJREFUSU9OLFxufSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlRW52IiwieiIsImVudiIsInNlcnZlciIsIkRBVEFCQVNFX1VSTCIsInN0cmluZyIsInVybCIsIk5PREVfRU5WIiwiZW51bSIsImNsaWVudCIsInJ1bnRpbWVFbnYiLCJwcm9jZXNzIiwic2tpcFZhbGlkYXRpb24iLCJTS0lQX0VOVl9WQUxJREFUSU9OIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/env.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/signup.ts"));
module.exports = __webpack_exports__;

})();