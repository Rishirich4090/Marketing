import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Marketing Co. - Elevate Your Brand');
  protected currentSection = signal('home');
  protected mobileMenuOpen = signal(false);

  private scrollListener?: () => void;

  ngOnInit() {
    // Add smooth scrolling for anchor links
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });

    // Add scroll listener for active navigation
    this.scrollListener = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);

    // Set initial active section
    this.handleScroll();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private handleScroll() {
    const sections = ['home', 'about', 'services', 'work', 'testimonials', 'contact'];
    const scrollPosition = window.scrollY + 100; // Offset for header height

    let activeSection = 'home';

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          activeSection = sectionId;
          break;
        }
      }
    }

    this.currentSection.set(activeSection);
  }

  protected isActiveSection(section: string): boolean {
    return this.currentSection() === section;
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
