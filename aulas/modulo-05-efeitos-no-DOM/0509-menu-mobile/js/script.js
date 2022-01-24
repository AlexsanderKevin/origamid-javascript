//nota: tudo está sendo indexado neste arquivo
import initScrollSuave from './modules/scroll-suave.js'
import initAnimacaoScroll from './modules/scroll-animacao.js'
import initAccordion from './modules/accordion.js'
import initTabNav from './modules/tabnav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'

// nota: as funções abaixo carregam de forma ASSINCRONA, ou seja, não esperam que a de cima carregue para carregarem, porém os importes serão executados em ordem SINCRONA
initScrollSuave()
initAnimacaoScroll()
initAccordion()
initTabNav()
initModal()
initTooltip()
initDropdownMenu()
initMenuMobile()