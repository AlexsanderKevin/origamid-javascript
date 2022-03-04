/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n    const accordionList = document.querySelectorAll('.js-accordion dt');\n    const activeClass = 'ativo';\n\n    function activeAccordion() {\n        this.classList.toggle(activeClass);\n        this.nextElementSibling.classList.toggle(activeClass);\n    }\n\n    if (accordionList.length) {\n        accordionList[0].classList.add(activeClass);\n        accordionList[0].nextElementSibling.classList.add(activeClass);\n\n        accordionList.forEach((item) => item.addEventListener('click', activeAccordion));\n    }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n    function animaNumeros() {\n        const numeros = document.querySelectorAll('[data-numero]');\n\n        numeros.forEach((numero) => {\n            const total = +numero.innerText;\n            const incremento = Math.floor(total / 100);\n            let start = 0;\n\n            const timer = setInterval(() => {\n                start += incremento;\n                numero.innerText = start;\n\n                if (start >= total) {\n                    numero.innerText = total;\n                    clearInterval(timer);\n                }\n            }, 25 * Math.random());\n        });\n    }\n\n    let observer;\n\n    function handleMutation(mutation) {\n        if (mutation[0].target.classList.contains('ativo')) {\n            observer.disconnect();\n            animaNumeros();\n        }\n    }\n\n    const observerTarget = document.querySelector('.numeros');\n    observer = new MutationObserver(handleMutation);\n    observer.observe(observerTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initDropdownMenu() {\n    const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n\n    function handleClick(event) {\n        event.preventDefault();\n        this.classList.add('active');\n\n        (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\n            this.classList.remove('active');\n        });\n    }\n\n    dropdownMenus.forEach((menu) => {\n        ['touchstart', 'click'].forEach((userEvent) => {\n            menu.addEventListener(userEvent, handleClick);\n        });\n        // nota: para atribuir uma mesma função a varios eventos é possível\n        // atribuir tais eventos a um vetor e, para cada evento listado,\n        // aplicar o método.\n    });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction initFetchAnimais() {\n    function createAnimal(animal) {\n        const div = document.createElement('div');\n        div.classList.add('numero-animal');\n\n        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\n\n        return div;\n    }\n\n    async function fetchAnimais(url) {\n        try {\n            const animaisResponse = await fetch(url);\n            const animaisJSON = await animaisResponse.json();\n            const numerosGrid = document.querySelector('.numeros-grid');\n\n            animaisJSON.forEach((animal) => {\n                const divAnimal = createAnimal(animal);\n                numerosGrid.appendChild(divAnimal);\n            });\n            (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        } catch (erro) {\n            console.log(Error(erro));\n        }\n    }\n\n    fetchAnimais('./animaisapi.json');\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n    console.log('bitcoin');\n\n    fetch('https://blockchain.info/ticker')\n    .then((res) => res.json())\n    .then((bitcoin) => {\n        const btcPreco = document.querySelector('.btc-preco');\n        btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);\n    }).catch((erro) => console.log(Error(erro)));\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n    const funcionamento = document.querySelector('[data-semana]');\n    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n    // nota: passar o construtor 'Number' para o método .map() converte os\n    // dados da string alvo para number.\n    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n\n    const dataAgora = new Date();\n    const diaAgora = dataAgora.getDay();\n    const horarioAgora = dataAgora.getHours();\n\n    const semanaAberto = diasSemana.includes(diaAgora);\n    const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n    if (semanaAberto && horarioAberto) {\n        funcionamento.classList.add('aberto');\n    } else {\n        funcionamento.classList.remove('aberto');\n    }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initMenuMobile() {\n    const menuButton = document.querySelector('[data-menu=\"button\"]');\n    const menuList = document.querySelector('[data-menu=\"lista\"]');\n    const eventos = ['click', 'touchstart'];\n\n    function openMenu() {\n        menuList.classList.add('active');\n        menuButton.classList.add('active');\n\n        (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n            menuList.classList.remove('active');\n            menuButton.classList.remove('active');\n        });\n    }\n\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n    const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n    const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n    const containerModal = document.querySelector('[data-modal=\"container\"]');\n\n    function toggleModal(event) {\n        event.preventDefault();\n        containerModal.classList.toggle('ativo');\n    }\n\n    function cliqueForaModal(event) {\n        if (event.target === this);\n        // nota: nesse caso o 'this' faz referencia ao alvo da função que,\n        // por acaso, será o container do modal\n        toggleModal(event);\n    }\n    if (botaoAbrir && botaoFechar && containerModal) {\n        botaoAbrir.addEventListener('click', toggleModal);\n        botaoFechar.addEventListener('click', toggleModal);\n        containerModal.addEventListener('click', cliqueForaModal);\n    }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n    const html = document.documentElement;\n    const outside = 'data-outside';\n    // nota: essa propriedade será utilizada para que seja possível saber se o\n    // elemento já possui o event listener\n\n    function handleOutsideClick(event) {\n        if (!element.contains(event.target)) {\n            element.removeAttribute(outside);\n            // nota: esse atributo deve ser removido para que o event listener\n            // possa ser adicionado de novo depois\n            events.forEach(() => {\n                html.removeEventListener('click', handleOutsideClick);\n            });\n\n            callback();\n            // nota: isso remove o eventListener ao fechar o menu\n        }\n    }\n\n    if (!element.hasAttribute(outside)) {\n        events.forEach((userEvent) => {\n            setTimeout(() => {\n                html.addEventListener(userEvent, handleOutsideClick);\n            });\n            // nota: o 'setTimeout()' é assíncrono, ou seja, entra para a call\n            // stack só depois do evento loop, sendo assim, este método será\n            // executado depois.\n        });\n        element.setAttribute(outside, '');\n    }\n    // nota: isso verifica se o elemento ja tem o event listener para não\n    // adicionar mais de um\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n    const sections = document.querySelectorAll('[data-anime=\"scroll\"');\n\n    function animaScroll() {\n        sections.forEach((section) => {\n            const sectionTop = section.getBoundingClientRect().top;\n            const windowMetade = window.innerHeight * 0.6;\n\n            if (sectionTop <= windowMetade) {\n                section.classList.add('ativo');\n            } else if (section.classList.contains('ativo')) {\n                section.classList.remove('ativo');\n            }\n        });\n    }\n\n    if (sections.length) {\n        animaScroll();\n        window.addEventListener('scroll', animaScroll);\n    }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n    const linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n\n    function scrollToSection(event) {\n        event.preventDefault();\n\n        const href = event.currentTarget.getAttribute('href');\n        const section = document.querySelector(href);\n\n        section.scrollIntoView({\n            // this puts the target element into user's view\n            behavior: 'smooth',\n            // this sets how the transition will behave\n            block: 'start',\n            // this sets where exactly the view will stop from target component\n        });\n    }\n\n    linksInternos.forEach((link) => {\n        link.addEventListener('click', scrollToSection);\n    });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n    const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n    const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n\n    function activeTab(index) {\n        tabContent.forEach((section) => {\n            section.classList.remove('ativo');\n        });\n        const direcao = tabContent[index].dataset.anime;\n        tabContent[index].classList.add('ativo', direcao);\n    }\n\n    if (tabMenu.length && tabContent.length) {\n        tabContent[0].classList.add('ativo');\n\n        tabMenu.forEach((itemMenu, index) => {\n            itemMenu.addEventListener('click', () => activeTab(index));\n        });\n    }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n    const onMouseMove = {\n        handleEvent(event) {\n            this.tooltipBox.style.top = `${event.pageY + 20}px`;\n            // nota: os '20' adicionados servem para distanciar um pouco o tooltip\n            // do mouse, evitando que o mouse passe por cima dele, gerando\n            // comportamentos estranhos\n\n            this.tooltipBox.style.left = `${event.pageX + 20}px`;\n            // nota: o valor passado para uma propriedade CSS deve ser uma string\n            // contendo valor e unidade de medida, como a propriedade 'event.\n            // pageX' é um valor inteiro, deve-se concatenar a ele a unidade de\n            // medida, transformando-o numa string reconhecivel\n        },\n    };\n\n    const onMouseLeave = {\n        handleEvent() {\n            this.tooltipBox.remove();\n\n            this.element.removeEventListener('mouseleave', onMouseLeave);\n            // nota: aqui o evento é deletado, Deus sabe lá o porquê\n\n            this.element.removeEventListener('mousemove', onMouseMove);\n        },\n    };\n    // nota: é possível utilizar um objeto como callback de uma função de evento\n    // desde que tal objeto tenha o método 'handleEvent()' dizendo o que deve\n    // acontecer conforme chamado\n\n    function criarTooltipBox(element) {\n        const tooltipBox = document.createElement('div');\n        const text = element.getAttribute('aria-label');\n        tooltipBox.classList.add('tooltip');\n        tooltipBox.innerText = text;\n        document.body.appendChild(tooltipBox);\n\n        return tooltipBox;\n    }\n\n    function onMouseOver() {\n        const tooltipBox = criarTooltipBox(this);\n\n        onMouseLeave.tooltipBox = tooltipBox;\n        // nota: aqui é definido o 'tooltipBox' criado como valor para a\n        // propriedade 'tooltipBox' do objeto 'onMouseLeave'\n\n        onMouseLeave.element = this;\n\n        this.addEventListener('mouseleave', onMouseLeave);\n        // nota: aqui é passado um objeto como callback ao invés de um método\n\n        onMouseMove.tooltipBox = tooltipBox;\n\n        this.addEventListener('mousemove', onMouseMove);\n    }\n\n    const tooltips = document.querySelectorAll('[data-tooltip]');\n    tooltips.forEach((item) => {\n        item.addEventListener('mouseover', onMouseOver);\n    });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n// nota: tudo está sendo indexado neste arquivo\n\n\n\n\n\n\n\n\n\n\n\n\n// nota: as funções abaixo carregam de forma ASSINCRONA, ou seja, não esperam\n// que a de cima carregue para carregarem, porém os importes serão executados\n// em ordem SINCRONA\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;