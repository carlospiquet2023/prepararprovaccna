/**
 * mobile-menu.js
 * Gerenciamento do Menu Hambúrguer para Mobile
 * Desenvolvido por: Carlos Antonio de Oliveira Piquet
 */

class MobileMenu {
    constructor() {
        this.btnHamburger = document.getElementById('btnHamburger');
        this.sidebar = document.getElementById('sidebar');
        this.overlay = document.getElementById('sidebarOverlay');
        this.menuItems = document.querySelectorAll('.menu-item');
        
        this.init();
    }

    init() {
        // Event Listeners
        if (this.btnHamburger) {
            this.btnHamburger.addEventListener('click', () => this.toggleMenu());
        }

        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.closeMenu());
        }

        // Fecha menu ao clicar em item (apenas no mobile)
        this.menuItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    this.closeMenu();
                }
            });
        });

        // Fecha menu ao pressionar ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen()) {
                this.closeMenu();
            }
        });

        // Ajusta menu ao redimensionar janela
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        if (this.isMenuOpen()) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.sidebar?.classList.add('mobile-open');
        this.overlay?.classList.add('active');
        this.btnHamburger?.classList.add('active');
        
        // Previne scroll do body
        document.body.style.overflow = 'hidden';
        
        // Acessibilidade
        this.sidebar?.setAttribute('aria-hidden', 'false');
    }

    closeMenu() {
        this.sidebar?.classList.remove('mobile-open');
        this.overlay?.classList.remove('active');
        this.btnHamburger?.classList.remove('active');
        
        // Restaura scroll do body
        document.body.style.overflow = '';
        
        // Acessibilidade
        this.sidebar?.setAttribute('aria-hidden', 'true');
    }

    isMenuOpen() {
        return this.sidebar?.classList.contains('mobile-open');
    }
}

// Inicializa o menu mobile quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    window.mobileMenu = new MobileMenu();
});
